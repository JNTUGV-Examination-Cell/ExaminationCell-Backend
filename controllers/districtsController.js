const Districts = require('../models/Districts');
const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, '../data/districts_data.json');

exports.addDistricts = async (req, res) => {
  try {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
    const data = JSON.parse(jsonData);

    for (const item of data) {
      await Districts.create({
        district_id: item.district_id,
        district_name: item.district_name,
        district_slug: item.district_slug,
      });
    }

    res.status(200).json({ message: "Districts data added successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in adding Districts data" });
  }
};