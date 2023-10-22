const course = require("../models/Courses");
const regulation=require("../models/Regulation")
const regulation_courses=require("../models/Regulation_Course")
const regulation_course_set=require("../models/Regulation_Courses_Set")
const subjects=require("../models/Subject")

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: 'cred.env' });

const jsonFilePath1 = path.join(__dirname, '../data/courses_data.json');
const jsonFilePath2 = path.join(__dirname, '../data/regulations_data.json');
const jsonFilePath3 = path.join(__dirname, '../data/regulationcourses_data.json');
const jsonFilePath4 = path.join(__dirname, '../data/regulationcoursesset_data.json');
const jsonFilePath5 = path.join(__dirname, '../data/subjects_data.json');



exports.addCourse = async(req,res) => {
    try{
      const jsonData = fs.readFileSync(jsonFilePath1, 'utf8');
      const data = JSON.parse(jsonData);

      for (const item of data) {
        await course.create({
          course: item.course,
          course_full_name: item.course_full_name,
          course_code: item.course_code,
          course_type: item.course_type,
          entrance_exam: item.entrance_exam,
        });
      }

      res.status(200).json({ message: "Course data added successfully" });

    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Error in adding the courrse"});
    }
};

 //
 //
exports.addRegulation=async(req,res)=>{
  try { 
    const jsonData = fs.readFileSync(jsonFilePath2, 'utf8');
    const data = JSON.parse(jsonData);

    for (const item of data) {
      await regulation.create({
        regulation: item.regulation,
        regulation_start_year: item.regulation_start_year,
      });
    }

    res.status(200).json({ message: "Regulations data added successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in adding Regulations data" });
  }
};



//
//
exports.addRegulationcourses=async(req,res)=>{
  try { 
    const jsonData = fs.readFileSync(jsonFilePath3, 'utf8');
    const data = JSON.parse(jsonData);

    for (const item of data) {
      await regulation_courses.create({
        regulation_courses_title: item.regulation_courses_title,
        course: item.course,
        regulation: item.regulation,
        duration: item.duration,
        studying_year: item.studying_year
      });
    }

    res.status(200).json({ message: "Regulation_courses data added successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in adding Regulation_courses data" });
  }
};



//
//
exports.addRegulationcoursesset=async(req,res)=>{
  try { 
    const jsonData = fs.readFileSync(jsonFilePath4, 'utf8');
    const data = JSON.parse(jsonData);

    for (const item of data) {
      await regulation_course_set.create({
        regulation_courses_title: item.regulation_courses_title,
        regulation_course_set: item.regulation_course_set,
        regualtion_course_set_type: item.regualtion_course_set_type,
        sets: item.sets,
        laterals_allowed: item.laterals_allowed
      });
    }

    res.status(200).json({ message: "Regulation_courses_set data added successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in adding Regulation_courses_set data" });
  }
}; 


//
//

exports.addSubject = async(req,res) => {
  try{
    const jsonData = fs.readFileSync(jsonFilePath5, 'utf8');
    const data = JSON.parse(jsonData);

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

  }
  catch(error){
      console.error(error);
      res.status(500).json({message:"Error in adding the Subject"});
  }
};
