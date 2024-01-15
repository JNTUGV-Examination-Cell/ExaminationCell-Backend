const Batch = require('../models/Batch');
const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, '../data/batches_data.json');

exports.addBatches = async (req, res) => {
  try {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
    const data = JSON.parse(jsonData);

    for (const item of data) {
      await Batch.create({

        batch_college_code: item.batch_college_code,
        study_type: item.study_type,
        regulation: item.regulation,
        starting_year: item.starting_year,
        ending_year: item.ending_year,
        regulation_course_title:item.regulation_course_title,
        course:item.course,
        
        
      });
    }

    console.log('Batches data added successfully');


  } catch (error) {
    console.error(error);

  }
};




exports.getAllBatches= async (req, res) => {
   const {college_code} = req.params;
   console.log(college_code);
   try{
    const Batches = await Batch.findAll({where:{batch_college_code:college_code}});

    res.status(200).json(Batches);

   }catch(error){
    console.log(error);
    res.status(500).json({message:"Error in getting the list of baches in the college"});

   }

};

exports.getCompleteBatches = async (req, res) => {
  try {
    const Batches = await Batch.findAll(); // Retrieve all records from the Batch model

    res.status(200).json(Batches); // Respond with the JSON data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in getting the list of batches" });
  }
};








