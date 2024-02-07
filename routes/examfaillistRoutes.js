const express = require("express");
// const branchController = require("../controllers/branchController");
const examfaillistController=require("../controllers/ExamfaillistController")
const router = express.Router();


//METHOD: post
//api:  /api/examfail/addfailstudents
// Description: Add all the examfail list
router.post('/addfailstudents',examfaillistController.addfailstudents);

//METHOD :get
//api : /api/examfail/fetchfaildStudents
//Fetches the exam fail list table records completely
router.get("/fetchfaildStudents/:subject_code",examfaillistController.fetchfaildStudents);


module.exports = router;
