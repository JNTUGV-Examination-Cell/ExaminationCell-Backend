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

//adding regulation course
//METHOD: post
//api:  /api/course/addRegulationCourses
router.post('/addRegulationCourses',courseController.addRegulationcourses)

//adding regulation course set
//METHOD: post
//api:  /api/course/addRegulationCoursesset
router.post('/addRegulationCoursesset',courseController.addRegulationcoursesset)

module.exports = router;
