const Batch = require('../models/Batch');

exports.addBatches = async (req, res) => {
  try {
    const data = req.body;

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
    res.status(200).json({message:"Batches data added successfully"});


  } catch (error) {
    res.status(500).json({message:"error in adding batches data"});

  }
};




exports.getAllBatches= async (req, res) => {
   const {college_code} = req.params;
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








