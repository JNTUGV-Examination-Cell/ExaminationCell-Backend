const College = require('../models/College');

exports.addColleges = async (req, res) => {
  try {
    const data = req.body;

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

    // console.log('Colleges data added successfully');
    res.status(200).json({message:"Colleges data added successfully"});

  } catch (error) {
    res.status(500).json({message:"Error in adding colleges data"});
    
  }
};

exports.fetchColleges = async(req,res) =>{

  try{
    // console.log(student_batch_id);
      const colleges = await College.findAll();

      if(colleges.length ===0){
          console.log("No colleges found for provided ");
      }

      res.status(200).json(colleges);
      
  }catch(error){
      res.status(500).json({message:"Error in fetching colleges data"});
  }
}
