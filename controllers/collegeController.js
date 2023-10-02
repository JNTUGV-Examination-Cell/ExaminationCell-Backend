const College = require('../models/College');
const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, '../data/colleges_data.json');

exports.addColleges = async (req, res) => {
  try {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
    const data = JSON.parse(jsonData);

    for (const item of data) {
      await College.create({
        college_name: item.college_name,
        college_code: item.college_code,
        district: item.district,
        college_type: item.college_type,
        address: item.address,
        pincode: item.pincode,
        college_status: item.college_status
      });
    }

    res.status(200).json({ message: "Colleges data added successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in adding Colleges data" });
  }
};
