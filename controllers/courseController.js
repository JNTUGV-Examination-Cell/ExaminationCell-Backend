const course = require("../models/Courses");
const regulation=require("../models/Regulation")
const regulation_courses=require("../models/Regulation_Course")
const regulation_course_set=require("../models/Regulation_Courses_Set")
const subjects=require("../models/Subject")

require('dotenv').config({ path: 'cred.env' });


exports.addCourse = async(req,res) => {
    try{
      const data = req.body;

      for (const item of data) {
        await course.create({
          course: item.course,
          course_full_name: item.course_full_name,
          course_code: item.course_code,
          course_type: item.course_type,
          entrance_exam: item.entrance_exam,
        });
      }
      // console.log('Course data added successfully');
      res.status(200).json({ message: "Course data added successfully" });


    }
    catch(error){
      res.status(500).json({ message: "Error in adding courses data" });       
    }
};

 //
 //
exports.addRegulation=async(req,res)=>{
  try { 
    const data = req.body;

    for (const item of data) {
      await regulation.create({
        regulation: item.regulation,
        regulation_start_year: item.regulation_start_year,
      });
    }
    // console.log('Regulations data added successfully')
    res.status(200).json({ message: "Regulations data added successfully" });
    

  } catch (error) {
    console.error(error);
    
  }
};



//
//
exports.addRegulationcourses=async(req,res)=>{
  try { 
    const data = req.body;


    for (const item of data) {
      await regulation_courses.create({
        regulation_courses_title: item.regulation_courses_title,
        course: item.course,
        regulation: item.regulation,
        duration: item.duration,
        studying_year: item.studying_year
      });
    }

    // console.log('Regulation_courses data added successfully');
    res.status(200).json({ message: "Regulation_courses data added successfully" });


  } catch (error) {
    console.error(error);
  }
};



//
//
exports.addRegulationcoursesset=async(req,res)=>{
  try { 
    const data = req.body;


    for (const item of data) {
      await regulation_course_set.create({
        regulation_courses_title: item.regulation_courses_title,
        regulation_course_set: item.regulation_course_set,
        regualtion_course_set_type: item.regualtion_course_set_type,
        sets: item.sets,
        laterals_allowed: item.laterals_allowed
      });
    }

    res.status(200).json({ message: "Regulation_courses_set data added successfull" });
    // console.log('Regulation_courses_set data added successfull');
    

  } catch (error) {
    console.error(error);
 
  }
}; 


//
//

exports.addSubject = async(req,res) => {
  try{
    const data = req.body;


    for (const item of data) {
      await subjects.create({
        regulation_courses_set_id: item.regulation_courses_set_id,
        regulation_course_title: item.regulation_course_title,
        branch_id: item.branch_id,
        subject_code: item.subject_code,
        subject_name: item.subject_name,
        course: item.course,
        external_pass_mark: item.external_pass_mark,
        total_pass_mark: item.total_pass_mark,
        total_external_mark: item.total_external_mark,
        subject_total_mark: item.subject_total_mark,
        credits: item.credits,
        subject_type: item.subject_type,
        subject_status: item.subject_status
      });
    }
    res.status(200).json({ message: "Subject data added successfully" });

    // console.log('Subject data added successfully')
    

  }
  catch(error){
      console.error(error);
     
  }
};
