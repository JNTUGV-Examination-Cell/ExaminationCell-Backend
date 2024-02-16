const express = require("express");
const examinationController = require("../controllers/examinationController");
const examination_students_listController = require("../controllers/examination_students_listController");
const router = express.Router();

//METHOD: post
//api:  /api/examstudents/addExam_students
// Description: Adding examination students list data
router.post('/addExam_students',examination_students_listController.addExam_students);


//METHOD: put
//api:  /api/examstudents/addfailstudents
// Description: Adding examination fail students list data
router.put('/addfailstudents',examination_students_listController.addfailstudents);

//METHOD: get
//api/examstudents/fetchfaildStudents
// Description: To fetch examination fail students data based on subject_code
router.get('/fetchfaildStudents/:subject_code',examination_students_listController.fetchfaildStudents);
 
//METHOD: get
//api/examstudents/fetchdisqualifiedStudentData/
// Description: To fetch examination data based on college_code
router.get('/fetchdisqualifiedStudentData/:exam_code/:college_code',examination_students_listController.fetchdisqualifiedStudentData);
 

//METHOD: get
//api/examstudents/fetchexamregisteredStudentData
// Description: To fetch registered students data of a particular exam
router.get('/fetchexamregisteredStudentData/:exam_code',examination_students_listController.fetchexamregisteredStudentData);
 
//METHOD: get
//api/examstudents/fetchexamunregisteredStudentData
// Description: To fetch unregistered students data of a particular exam
router.get('/fetchexamunregisteredStudentData/:exam_code',examination_students_listController.fetchexamunregisteredStudentData);

//METHOD: get
//api/examstudents/fetchQualifiedStudents
// Description: To fetch qualified students data based on exam_code
router.get('/fetchQualifiedStudents/:exam_code',examination_students_listController.fetchQualifiedStudents);


//Method: post
// api/examstudents/addCollegeExamRegistration
// Description : Registering the college for the specific exam
router.post('/addCollegeExamRegistration',examination_students_listController.addCollegeExamRegistration);


module.exports = router;  
