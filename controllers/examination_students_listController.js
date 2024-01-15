const Exam_students_list = require("../models/Exam_student_list");
const Student =require("../models/Student");
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
  }


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






