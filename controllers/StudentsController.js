const Students = require('../models/Student');
const fs = require('fs');
const Batch = require('../models/Batch');
const College = require("../models/College");



exports.addStudent = async (req, res) => {
  try {
    const data = req.body;

    for (const item of data) {
      // Check if roll_no already exists
      const existingStudent = await Students.findOne({
        where: {
          roll_no: item.roll_no
        }
      });

      if (existingStudent) {
        // If roll_no already exists, skip this iteration or handle it as needed
        console.log(`Student with roll_no ${item.roll_no} already exists. Skipping.`);
        return res.status(409).json({
          message: "Student data is duplicates",
          issueStudent: `${item.roll_no}`,
          success: false,
        }); 
      }

      // If roll_no doesn't exist, create a new student entry
      await Students.create({
        student_college_code: item.student_college_code,
        student_batch_id: item.student_batch_id,
        roll_no: item.roll_no,
        student_name: item.student_name,
        student_image: item.student_image,
        branch_id: item.branch_id,
        mobile: item.mobile,
        email: item.email
      });
    };

    res.status(200).json({
      success: true,
      message: "Successfully admission done",
    });    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in adding the Examinations data" });
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

//GET API to fetch data from students table based on student_college_code
exports.fetchStudentsDataCollegeCode = async(req,res) =>{

  const student_college_code = req.params.college_code;

  try{
    console.log(student_batch_id);
      const student = await Students.findAll({where:{student_college_code:student_college_code}});

      if(student.length ===0){
          console.log("No Students found for provided  given college code");
      }

      res.status(200).json(student);
      
  }catch(error){
      res.status(500).json({message:"Error in fetching Students data"});
  }


}