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
//api/examination/fetchAllExams
// Description: To fetch All Examination happening in all colleges
router.get('/fetchAllExams',examinationController.fetchAllExams);








 




module.exports = router; 