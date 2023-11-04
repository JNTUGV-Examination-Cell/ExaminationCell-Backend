const express = require("express");
const examinationController = require("../controllers/examinationController");
const router = express.Router();

//METHOD: post
//api:  /api/examination/addExams
// Description: Adding examination data

router.post('/addExams',examinationController.addExams);



//METHOD: get
//api/examination/fetchExamData
// Description: To fetch examination data based on college_code
router.get('/fetchExamData/:college_code',examinationController.fetchExamData);

module.exports = router;