const Students = require('../models/Student');
const fs = require('fs');
const path = require('path');
const Batch = require('../models/Batch');

const jsonFilePath = path.join(__dirname, '../data/Students_data.json');

exports.addStudent = async (req, res) => {
  try {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
    const data = JSON.parse(jsonData);

    for (const item of data) {
      await Students.create({
      student_id: item.student_id,
      student_college_code: item.student_college_code,
      student_batch_id: item.student_batch_id,
      roll_no: item.roll_no,
      student_name: item.student_name,
      student_image: item.student_image,
      branch_id: item.branch_id,
      mobile: item.mobile,
      email: item.email
      });
    }

    console.log("Students data added successfully");
    

  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Error in adding the Examinations data"});

  }
};

//GET API to fetch data from students table based on student_batch_id

exports.fetchStudentsData = async(req,res) =>{

    const student_batch_id = req.params.student_batch_id;

    try{
      console.log(student_batch_id);
        const student = await Students.findAll({where:{student_batch_id:student_batch_id}});

        if(student.length ===0){
            console.log("No Students found for provided  cstudent_batch_id");
        }

        res.status(200).json(student);
        
    }catch(error){
        res.status(500).json({message:"Error in fetching Students data"});
    }


}