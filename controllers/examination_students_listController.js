const Exam_students_list = require("../models/Exam_student_list");
const Student =require("../models/Student");
const Examination=require("../models/Examination")
const CollegeExamRegistration = require("../models/CollegeExamRegistration");
const { Op } = require('sequelize');



// //POST API to Add examinations data
exports.addExam_students = async (req, res) => {
    try {
        const data = req.body;

        for (const item of data) {
            // Check if required fields are present
            if (!item.exam_code || !item.student_id || !item.qualified_status || !item.college_code) {
                return res.status(400).json({ message: "Invalid data format. Missing required fields." });
            }

            // Check if a record with the same values already exists
            const existingRecord = await Exam_students_list.findOne({
                where: {
                    exam_code: item.exam_code,
                    student_id: item.student_id,
                    college_code: item.college_code,
                    qualified_status: item.qualified_status,
                },
            });

            // If a matching record doesn't exist, insert the data
            if (!existingRecord) {
                await Exam_students_list.create({
                    exam_code: item.exam_code,
                    college_code: item.college_code,
                    student_id: item.student_id,
                    qualified_status: item.qualified_status,
                });
            }
            else{
                // console.log(`Record already exists for ${item.exam_code}, ${item.student_id}, ${item.qualified_status}`);
                const errormessage=`Record already exists for ${item.exam_code}, ${item.student_id}, ${item.qualified_status} ,${item.college_code}`;
                res.status(400).json({ message: errormessage });
                return  
            }
        }

        res.status(200).json({ message: "Students added successfully to exam" });
    } catch (error) {
        console.error("Error in adding Exam_students data:", error);
        res.status(500).json({ message: "Error in adding the Exam_students data", error: error.message });
    }
};

exports.fetchQualifiedStudents = async (req, res) => {
    const exam_code = req.params.exam_code;
    try {
      const qualified_students = await Exam_students_list.findAll({where: { exam_code: exam_code, qualified_status: 'qualified' }
      });

      // Check if any qualified students were found
      if (qualified_students.length === 0) {
          console.log("No students found for the provided exam code");
          return res.status(404).json({ message: "No students found" });
      }
      const studentIds = qualified_students.map(Student => Student.student_id);

      const student_details= await Student.findAll({where:{student_id:studentIds}})

      res.status(200).json(student_details);

  } catch (error) {
      console.error("Error in fetching student data:", error);
      res.status(500).json({ message: "Error in fetching student data" });
  }
  };

//GET API to fetch student data from examination student list table based on exam code and college_code

exports.fetchdisqualifiedStudentData = async (req, res) => {
  const college_code = req.params.college_code;
  const exam_code = req.params.exam_code;

  try {
          const college_examinations = await Examination.findAll({ where: { college_code: college_code } });

      if (!college_examinations) {
          return res.status(404).json({ message: "examination not found in the college" });
      }
      const studentsdata = await Exam_students_list.findAll({where: {exam_code: exam_code,qualified_status: {
                  [Op.or]: ['detained', 'condonated']
              }
          },
          attributes: ['student_id'], // Include only the 'student_id' attribute in the result
      });

      if (studentsdata.length === 0) {
          console.log("No students found for the provided college and exam code");
          return res.status(404).json({ message: "No students found for the provided college and exam code" });
      }
      const studentIds = studentsdata.map(Student => Student.student_id);
      const student_details= await Student.findAll({where:{student_id:studentIds}})
      res.status(200).json(student_details);
  } catch (error) {
      console.error("Error in fetching student IDs:", error);
      res.status(500).json({ message: "Error in fetching student IDs" });
  }
};



//GET API to fetch registered student data from examination student list table based on exam code and college_code
exports.fetchexamregisteredStudentData = async (req, res) => {
    const exam_code = req.params.exam_code;
    const college_code=req.params.college_code;
    try {
        const studentIds = await Exam_students_list.findAll({
            where: { exam_code: exam_code },
            attributes: ['student_id']
        });
        const registeredStudentDetails = await Student.findAll({
            where: {student_college_code:college_code,
                student_id: {
                    [Op.in]: studentIds.map(student => student.student_id)
                }
            },
            attributes: ['student_id', 'roll_no', 'student_name', 'branch_id', 'mobile']
        });
        const response = {
            students: registeredStudentDetails.map(student => ({
                student_id: student.student_id,
                roll_no: student.roll_no,
                student_name: student.student_name,
                branch_id: student.branch_id,
                mobile: student.mobile,
                registration_status: 'registered' // Add registration status property
            })),
        };
        // response = {
        //     status: 'registered',
        //     registered: registeredStudentDetails,
        // };
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

  



//GET API to fetch unregistered student data from examination student list table based on exam code and college_code
exports.fetchexamunregisteredStudentData = async (req, res) => {
    const exam_code = req.params.exam_code;
    const college_code=req.params.college_code;
    try {
        const studentIds = await Exam_students_list.findAll({
            where: { exam_code: exam_code },
            attributes: ['student_id']
        });
            const unregisteredStudentDetails = await Student.findAll({
            where: {student_college_code:college_code,
                student_id: {
                    [Op.notIn]: studentIds.map(student => student.student_id)
                }
            },
            attributes: ['student_id', 'roll_no', 'student_name', 'branch_id', 'mobile']
        });
        const response = {
            students: unregisteredStudentDetails.map(student => ({
                student_id: student.student_id,
                roll_no: student.roll_no,
                student_name: student.student_name,
                branch_id: student.branch_id,
                mobile: student.mobile,
                registration_status: 'unregistered' // Add registration status property
            })),
        };
        // response = {
        //     status: 'unregistered',
        //     registered: unregisteredStudentDetails,
        // };        
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// Post API for aading the college Exam Registration status
exports.addCollegeExamRegistration = async(req,res)=>{
    const data = req.body;
    try{
        if(data.length==0){
            res.status(400).json({"message":"no data found"});
        }
        const collegeData = await CollegeExamRegistration.findAll({
            where:{
                exam_code: data.exam_code,
                college_code: data.college_code,
                payment_status: data.payment_status,
            }
        })
        if(collegeData.length==0){
            const  eligibleStudentsData = await Exam_students_list.findAll({
                where:{
                    college_code: data.college_code,
                    exam_code: data.exam_code,
                    qualified_status: "qualified"
                }
            
            })
            if (eligibleStudentsData.length == data.total_students){
                await CollegeExamRegistration.create({
                    exam_code: data.exam_code,
                    college_code: data.college_code,
                    total_students: data.total_students,
                    amount: data.amount,
                    payment_status: data.payment_status
                });

                res.status(200).json({"message":`The College Exam Regsitration status for ${data.college_code} with ${data.exam_code} has been added sucessfully`})

            }else{
                res.status(200).json({"message":`The number of Qualified Students(${eligibleStudentsData.length}) and number of Students applied(${data.total_students}) are not equal for ${data.college_code} and ${data.exam_code} `});
            }

        }else{
            res.status(200).json({"message":`The data with ${data.college_code} and ${data.exam_code} is already in database`})
        }

    }catch(err){
        res.status(500).json({ "message": `Error in making the registraion of ${data.college_code} for ${data.exam_code}` },{"error": err});
    }
}
  