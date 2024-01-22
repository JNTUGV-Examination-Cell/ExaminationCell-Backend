const express = require("express");
const StudentsController = require("../controllers/StudentsController");
const router = express.Router();


//METHOD: post
//api:  /api/Students/addStudent
// Description: Adding Students data
router.post('/addStudent',StudentsController.addStudent);

//METHOD: get
//api/students/fetchStudentsData
// Description: To fetch examination data based on Students_batch_id
router.get('/fetchStudentsData/:student_batch_id',StudentsController.fetchStudentsData);


//METHOD: get
//api/students/fetchStudentsDataCollegeCode/:college_code
// Description: To fetch examination data based on college_code
router.get('/fetchStudentsDataCollegeCode/:college_code',StudentsController.fetchStudentsDataCollegeCode);


module.exports = router;


