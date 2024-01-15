const express = require("express");
const examinationController = require("../controllers/examinationController");
const examination_students_listController = require("../controllers/examination_students_listController");
const router = express.Router();

//METHOD: post
//api:  /api/examination/addExams
// Description: Adding examination data

router.post('/addExams',examinationController.addExams);


//METHOD: get
//api/examination/fetchExamData
// Description: To fetch examination data based on college_code
router.get('/fetchExamData/:college_code',examinationController.fetchExamData);

//METHOD: get
//api/examination/fetchQualifiedStudents
// Description: To fetch qualified students data based on exam_code
router.get('/fetchQualifiedStudents/:exam_code',examination_students_listController.fetchQualifiedStudents);


module.exports = router;