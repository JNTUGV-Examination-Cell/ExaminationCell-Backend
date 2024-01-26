const express = require("express");
const examinationController = require("../controllers/examinationController");
const examination_students_listController = require("../controllers/examination_students_listController");
const router = express.Router();

//METHOD: post
//api:  /api/examination/addExam_students
// Description: Adding examination students list data

router.post('/addExam_students',examination_students_listController.addExam_students);



//METHOD: get
//api/examination/fetchQualifiedStudents
// Description: To fetch qualified students data based on exam_code
router.get('/fetchQualifiedStudents/:exam_code',examination_students_listController.fetchQualifiedStudents);

//METHOD: get
//api/examination/fetchStudentData
// Description: To fetch examination data based on college_code
router.get('/fetchdisqualifiedStudentData/:exam_code/:college_code',examination_students_listController.fetchdisqualifiedStudentData);