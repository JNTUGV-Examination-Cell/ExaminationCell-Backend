const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();



router.post('/addUsers',userController.addUsers);


module.exports = router;