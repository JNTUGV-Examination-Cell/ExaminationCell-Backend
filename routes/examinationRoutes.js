const express = require("express");
const examinationController = require("../controllers/examinationController");
const exam_notificationController = require("../controllers/exam_notificationController");
const exam_notificationController = require("../controllers/exam_notificationController.js");
const router = express.Router();

//METHOD: post
//api:  /api/examination/addExams
// Description: Adding examination data

router.post("/addExams", examinationController.addExams);

//METHOD: get
//api/examination/fetchExamData
// Description: To fetch examination data based on college_code
router.get("/fetchExamData/:college_code", examinationController.fetchExamData);

//METHOD: get
//api/examination/fetchAllExams
// Description: To fetch All Examination happening in all colleges
router.get("/fetchAllExams", examinationController.fetchAllExams);

//METHOD: post
//api/examination/addexam_notification
// Description: To add examinationnotifications
router.post(
  "/addexam_notification",
  exam_notificationController.addexam_notification
);

//METHOD: post
//api/examination/addexam_notification
// Description: To add examinationnotifications
router.post(
  "/addexam_notification",
  exam_notificationController.addexam_notification
);

//METHOD: get
//api/examination/fetchAllExam_notifications
// Description: To fetch All Examination notifications
router.get(
  "/fetchAllExam_notifications",
  exam_notificationController.fetchAllExam_notifications
);

//METHOD: get
//api/examination/fetchAllExam_notifications
// Description: To fetch All Examination notifications
router.get(
  "/fetchAllExam_notifications",
  exam_notificationController.fetchAllExam_notifications
);

router.get("/fetchCourses", exam_notificationController.fetchCourses);
router.get("/fetchBranches", exam_notificationController.fetchBranches);
router.get("/fetchCollegecode", exam_notificationController.fetchCollegecode);

router.delete(
  "/deletenotification",
  exam_notificationController.deletenotification
);

module.exports = router;
