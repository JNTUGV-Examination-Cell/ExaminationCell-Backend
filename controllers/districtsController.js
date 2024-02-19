const Districts = require('../models/Districts');
const path = require('path');

const jsonFilePath = path.join(__dirname, '../data/districts_data.json');

exports.addDistricts = async (req, res) => {
  try {
    const data = req.body;

    for (const item of data) {
      await Districts.create({
        district_id: item.district_id,
        district_name: item.district_name,
        district_slug: item.district_slug,
      });
    }

    res.status(200).json({message:"Districts data added successfully"});
    // console.log("Districts data added successfully");


  } catch (error) {
    res.status(500).json({ message: "Error in adding Districts data" });

  }
};


exports.fetchDistricts = async(req,res) =>{

  try{
      const districts = await Districts.findAll();

      if(districts.length ===0){
          console.log("No districts found");
      }

      res.status(200).json(districts);
      
  }catch(error){
      res.status(500).json({message:"Error in fetching districts data"});
  }


}