const express = require("express");
const notificationController = require("../controllers/notificationController");
const router = express.Router();

//METHOD: post
//api:  /api/notification/addNotifications
// Description: Adding notifications

router.post('/addNotifications',notificationController.addNotifications);




module.exports = router;