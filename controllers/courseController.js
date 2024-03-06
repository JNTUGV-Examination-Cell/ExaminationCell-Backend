const course = require("../models/Courses");
const regulation = require("../models/Regulation")
const regulation_courses = require("../models/Regulation_Course")
const regulation_course_set = require("../models/Regulation_Courses_Set");
/*const Subject = require("../models/Subject");*/
const subjects = require("../models/Subject");

require('dotenv').config({ path: 'cred.env' });


exports.addCourse = async (req, res) => {
  try {
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
  catch (error) {
    res.status(500).json({ message: "Error in adding courses data" });
  }
};

exports.getCompleteCourses = async (req, res) => {
  try {
    const Courses = await course.findAll(); // Retrieve all records from the Branches model

    res.status(200).json(Courses); // Respond with the JSON data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in getting the Courses" });
  }
};

//
//
exports.addRegulation = async (req, res) => {
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

//To fetech the total regulation data from the data base
exports.getCompleteRegulations = async (req, res) => {
  try{
      const regulations = await regulation.findAll();
      res.status(200).json(regulations);
  }
  catch(error){
      console.error(error);
      res.status(500).json({message: "Error in getting the list of regulations"})
  }
}

//
//
exports.addRegulationcourses = async (req, res) => {
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
exports.addRegulationcoursesset = async (req, res) => {
  try {
    const data = req.body;


    for (const item of data) {
      if (!item.regulation_courses_title || !item.regulation_course_set || !item.regualtion_course_set_type || !item.sets || !item.laterals_allowed) {
        return res.status(400).json({ message: "Invalid data format. Missing required fields." });
      }
      const existingRecord = await regulation_course_set.findOne({
        where: {
          regulation_courses_title: item.regulation_courses_title,
          regulation_course_set: item.regulation_course_set,
          regualtion_course_set_type: item.regualtion_course_set_type,
          sets: item.sets,
          laterals_allowed: item.laterals_allowed
        },
      });
      if (!existingRecord) {
        await regulation_course_set.create({
          regulation_courses_title: item.regulation_courses_title,
          regulation_course_set: item.regulation_course_set,
          regualtion_course_set_type: item.regualtion_course_set_type,
          sets: item.sets,
          laterals_allowed: item.laterals_allowed
        });
      }
      else{
        const errormessage = `Record already exists for ${item.regulation_courses_title}, ${item.regulation_course_set},${item.regualtion_course_set_type}, ${item.sets}, ${item.laterals_allowed}`;
        // const errormessage=`Record already exists for ${item.exam_code}, ${item.student_id}, ${item.qualified_status} `;
        res.status(400).json({ message: errormessage });
        return  
    }

    }

    res.status(200).json({ message: "Regulation_courses_set data added successfull" });
    // console.log('Regulation_courses_set data added successfull');


  } catch (error) {
    console.error(error);

  }
};


//
//

exports.addSubject = async (req, res) => {
  try {
    const data = req.body;
    for (const item of data) {
      // Check if required fields are present
      if (
        !item.regulation_courses_set_id ||
        !item.regulation_course_title ||
        !item.branch_id ||
        !item.subject_code ||
        !item.subject_name ||
        !item.course ||
        !item.external_pass_mark ||
        !item.total_pass_mark ||
        !item.total_external_mark ||
        !item.subject_total_mark ||
        !item.credits ||
        !item.subject_type || !item.subject_status) {
        return res.status(400).json({ message: "Invalid data format. Missing required fields." });
      }
      const existingRecord = await subjects.findOne({
        where: {
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
        },
      });
      if (!existingRecord) {
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
      else {
        // const errormessage = 'Record already exists for';
        const errormessage = `Record already exists for ${item.regulation_courses_set_id}, ${item.regulation_course_title}, ${item.branch_id}, ${item.subject_code},  ${item.subject_name}, ${item.course}, ${item.external_pass_mark}, ${item.total_pass_mark}, ${item.subject_status}`;

        res.status(400).json({ message: errormessage });
        return
      }

    }
    res.status(200).json({ message: "Subject data added successfully" });

  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "error in adding subject data" });

  }
};



exports.fetchAllSubjects = async(req,res) =>{

  try{
      const subject = await subjects.findAll();

      if(subject.length ===0){
          console.log("No subjects found");
      }

      res.status(200).json(subject);
      
  }catch(error){
      res.status(500).json({message:"Error in fetching subjects data"});
  }
};




exports.updateSubject = async (req, res) => {
  try {
    console.log("Received updateSubject request");
    const { sub_id } = req.params;
    console.log("sub_id:", sub_id);
    const {
      regulation_courses_set_id,
      regulation_course_title,
      branch_id,
      subject_code,
      subject_name,
      course,
      external_pass_mark,
      total_pass_mark,
      total_external_mark,
      subject_total_mark,
      credits,
      subject_type,
      subject_status
    } = req.body;

    // Find the subject by sub_id
    const existingSubject = await subjects.findByPk(sub_id);

    if (!existingSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    // Update the subject fields
    existingSubject.regulation_courses_set_id = regulation_courses_set_id;
    existingSubject.regulation_course_title = regulation_course_title;
    existingSubject.branch_id = branch_id;
    existingSubject.subject_code = subject_code;
    existingSubject.subject_name = subject_name;
    existingSubject.course = course;
    existingSubject.external_pass_mark = external_pass_mark;
    existingSubject.total_pass_mark = total_pass_mark;
    existingSubject.total_external_mark = total_external_mark;
    existingSubject.subject_total_mark = subject_total_mark;
    existingSubject.credits = credits;
    existingSubject.subject_type = subject_type;
    existingSubject.subject_status = subject_status;

    // Save the updated subject
    await existingSubject.save();

    res.status(200).json({ message: "Subject updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating subject" });
  }
};


exports.fetchSubjectsByRegulationCoursesSetId = async (req, res) => {
  const { regulation_courses_set_id } = req.params;
  console.log("Received request with regulation courses set ID:", regulation_courses_set_id);

  try {
    const getsubjects = await subjects.findAll({
      attributes: ['subject_name', 'subject_code'],
      where: { regulation_courses_set_id: regulation_courses_set_id }
    });

    if (getsubjects.length === 0) {
      console.log("No subjects found for the provided regulation_courses_set_id");
      return res.status(404).json({ message: "No subjects found" });
    }

    res.status(200).json(getsubjects);
  } catch (error) {
    console.error("Error in fetching subjects:", error);
    res.status(500).json({ message: "Error in fetching subjects" });
  }
};