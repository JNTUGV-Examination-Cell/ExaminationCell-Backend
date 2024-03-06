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
//api:  /api/course/getCompleteRegulations
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


//METHOD: get
//api/course/fetchAllSubjects
// Description: To fetch subjects
router.get('/fetchAllSubjects',courseController.fetchAllSubjects);


//METHOD : PUT
//api/course/updateSubject
//Description : To update subjects

router.put('/updateSubject/:sub_id',courseController.updateSubject);

//Method :Get
//api/course/getCompleteCourses
//Description :To fetch Courses
router.get('/getCompleteCourses',courseController.getCompleteCourses);


//Method : get
//api/course/fetchSubjectsByRegulationCoursesSetId/:regulation_courses_set_id
//Description : Fetch subject_name and subject_code based on reg_course_set_id
router.get('/fetchSubjectsByRegulationCoursesSetId/:regulation_courses_set_id',courseController.fetchSubjectsByRegulationCoursesSetId);


module.exports = router;
