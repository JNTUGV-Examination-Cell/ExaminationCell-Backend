const Exam_students_list = require("../models/Exam_student_list");
const Student =require("../models/Student");
const Examination=require("../models/Examination")
const { Op } = require('sequelize');



// //POST API to Add examinations data
exports.addExam_students = async (req, res) => {
    try {
        const data = req.body;

        for (const item of data) {
            // Check if required fields are present
            if (!item.exam_code || !item.student_id || item.qualified_status === undefined) {
                return res.status(400).json({ message: "Invalid data format. Missing required fields." });
            }

            // Check if a record with the same values already exists
            const existingRecord = await Exam_students_list.findOne({
                where: {
                    exam_code: item.exam_code,
                    student_id: item.student_id,
                    qualified_status: item.qualified_status,
                },
            });

            // If a matching record doesn't exist, insert the data
            if (!existingRecord) {
                await Exam_students_list.create({
                    exam_code: item.exam_code,
                    student_id: item.student_id,
                    qualified_status: item.qualified_status,
                });
            }
            else{
                console.log(`Record already exists for ${item.exam_code}, ${item.student_id}, ${item.qualified_status}`);

                res.status(400).json({ message: "data already exists" });
                return
            }
        }

        res.status(200).json({ message: "Students added successfully" });
    } catch (error) {
        console.error("Error in adding Exam_students data:", error);
        res.status(500).json({ message: "Error in adding the Exam_students data", error: error.message });
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
