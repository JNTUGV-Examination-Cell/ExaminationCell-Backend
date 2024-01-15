const Exam_students_list = require("../models/Exam_student_list");
const fs = require('fs');
const path = require('path');
const Student =require("../models/Student");
const Examination=require("../models/Examination")
const { Op } = require('sequelize');

const jsonFilePath = path.join(__dirname, '../data/exam_students_list_data.json');


//POST API to Add examinations data
exports.addExam_students = async (req,res) => {
    try{
      const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
      const data = JSON.parse(jsonData);

      for (const item of data) {
        await Exam_students_list.create({
         exam_code: item.exam_code,
         student_id: item.student_id,
          id: item.id,
         qualified_status: item.qualified_status,
        });
      }

      console.log('Examination_students data added successfully');
      

    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Error in adding the Examinations_students data"});
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
