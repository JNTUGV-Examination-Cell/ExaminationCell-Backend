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

exports.updatecolleges=async(req,res) =>{
  const item=req.body;
  try{
    const collegefound=await College.findByPk(item.college_code);
    if(!collegefound){
      return res.status(404).json({message:"college not found"});
    }
    await collegefound.update({id:item.id,college_name:item.college_name,district:item.district,college_type:item.college_type,address:item.address,pincode:item.pincode,college_status:item.college_status});
    return res.status(200).json({message:"college data updated successfully"});
  
  }
  catch(error){
    res.status(500).json({message:"error in updating colleges data"});
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
