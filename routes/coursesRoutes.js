const express = require("express");
const courseController = require("../controllers/courseController");
const router = express.Router();


//adding course
//METHOD: post
//api:  /api/course/addCourse
router.post('/addCourse',courseController.addCourse);

//adding regulation
//METHOD: post
//api:  /api/course/addRegulation
router.post('/addRegulation',courseController.addRegulation)


//METHOD: get
//api:  /api/branch/getCompleteRegulations
//Fetches the regulations table records completely
router.get('/getCompleteRegulations',courseController.getCompleteRegulations);


//adding regulation course
//METHOD: post
//api:  /api/course/addRegulationCourses
router.post('/addRegulationCourses',courseController.addRegulationcourses)

//adding regulation course set
//METHOD: post
//api:  /api/course/addRegulationCoursesset
router.post('/addRegulationCoursesset',courseController.addRegulationcoursesset)

//adding subject
//METHOD: post
//api:  /api/course/addSubject
router.post('/addSubject',courseController.addSubject)


module.exports = router;
