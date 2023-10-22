const express = require("express");
const districtController = require("../controllers/districtsController");
const router = express.Router();

//METHOD: post
//api:  /api/district/addDistricts
// Description: Adding districts

router.post('/addDistricts',districtController.addDistricts);


module.exports = router;