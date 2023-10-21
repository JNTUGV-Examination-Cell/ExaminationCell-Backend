const express = require("express");
const notificationController = require("../controllers/notificationController");
const router = express.Router();



router.post('/addNotifications',notificationController.addNotifications);


module.exports = router;