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





//METHOD: post
//api:  /api/examination/addExam_students
// Description: Adding examination students list data

router.post('/addExam_students',examination_students_listController.addExam_students);

//METHOD: get
//api/examination/fetchStudentData
// Description: To fetch examination data based on college_code
router.get('/fetchdisqualifiedStudentData/:exam_code/:college_code',examination_students_listController.fetchdisqualifiedStudentData);
 




module.exports = router; 