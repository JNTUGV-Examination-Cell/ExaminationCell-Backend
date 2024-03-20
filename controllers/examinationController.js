const Exam = require("../models/Examination");
const Student =require("../models/Student");
const regulation_course_set = require('../models/Regulation_Courses_Set');
const Examination=require("../models/Examination");
const College = require('../models/College');


//POST API to Add examinations data
exports.addExams = async (req,res) => {
    try{
      const data = req.body;

      for (const item of data) {
        await Exam.create({
          exam_code: item.exam_code,
          college_code: item.college_code,
          batch_id: item.batch_id,
          regulation_courses_set_id: item.regulation_courses_set_id,
          type: item.type,
          month:item.month,
          year:item.year,
          date: item.date
        });
      }

      // console.log('Examinations data added successfully');
      res.status(200).json({message:"Examinations data added successfully"});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Error in adding the Examinations data"});
    }
};


//GET API to fetch data from examination table based on college_code

exports.fetchExamData = async (req, res) => {
  const college_code = req.params.college_code;

  try {
    const exams = await Exam.findAll({ where: { college_code: college_code } });

    if (exams.length === 0) {
      // console.log("No examinations found for provided college code");
      res.status(400).json({message:"No examinations found for provided college code"})
    }

    for (const exam of exams) {
      const regulation = await regulation_course_set.findOne({ where: { regulation_courses_set_id: exam.regulation_courses_set_id } });
      exam.dataValues.regulation_course = regulation.regulation_courses_title;
      exam.dataValues.regulation_course_set = regulation.regulation_course_set;
    }
    console.log(exams)
    res.status(200).json(exams);

  } catch (error) {
    res.status(500).json({ message: "Error in fetching examination data" });
  }
}

exports.fetchAllExams = async(req,res) => {
  try{

    const exams = await Exam.findAll();

    res.status(200).json({data: exams,status:"sucess"});
  }catch (error) {
    res.status(500).json({ message: "Error in fetching all exam data" });
  }
}


exports.fetchCollegeNameByExamCode = async (req, res) => {
  try {
    const { exam_code } = req.params;

    const examination = await Examination.findOne({
      where: { exam_code },
      attributes: ['college_code']
    });

    if (!examination) {
      return res.status(404).json({ message: "Examination not found" });
    }

    const college = await College.findOne({
      where: { college_code: examination.college_code },
      attributes: ['college_name']
    });

    if (!college) {
      return res.status(404).json({ message: "College not found" });
    }

    res.status(200).json({ college_name: college.college_name });
  } catch (error) {
    console.error("Error in fetching college name:", error);
    res.status(500).json({ message: "Error in fetching college name" });
  }
};

