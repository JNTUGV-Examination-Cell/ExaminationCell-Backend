const express = require("express");
const districtController = require("../controllers/districtsController");
const router = express.Router();



router.post('/addDistricts',districtController.addDistricts);


module.exports = router;