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

module.exports = router;


