const Exam_students_list = require("../models/Exam_student_list");
const fs = require('fs');
const path = require('path');


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




