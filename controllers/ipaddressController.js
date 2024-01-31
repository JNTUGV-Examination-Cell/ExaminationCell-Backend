const Ipaddress = require('../models/Ipaddress');
const fs = require('fs');

exports.addipaddress = async (req, res) => {
  try {
    const data = req.body;

    for (const item of data) {
      await Ipaddress.create({
    
        college_code: item.college_code,
        ipAddress : item.ipAddress
      });
    }
    res.status(200).json({ message: "IP address added successfully" });    
  

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in dding the IP address" });

   
  }
};


//POST API CODE
// POST endpoint to update an IP address by ID

exports.updateipaddress  =  async (req, res) => {
  const data = req.body; // Get the IP address ID from the route parameter
  
 console.log(data)
  try {
    

    const result= await Ipaddress.update({ ipAddress:data.newIpAddress}, {where: {id:data.ipId}} );
    console.log(result)
    // Respond with a success message
    res.status(200).json({ message: "IP address updated successfully" });    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in updating the IP address" });

  }
};



//GET API CODE
exports.verifyIpaddress =  async (req, res) => {
  const ip = req.params.ip;

  try {
    // Use Sequelize to find IP addresses that match the provided IP addressp
    const existingIp = await Ipaddress.findOne({
      where: {
        ipAddress: ip,
      },
    });

    if (existingIp) {
      // If an IP address is found in the database, respond with a message indicating its presence
    console.log('IP address exists in the database' );
    } else {
      // If no matching IP address is found, respond with a message indicating its absence
      console.log('IP address not found in the database' );
    }
  } catch (error) {
    console.error(error);
    console.log ('Error in verifying the IP address' );
  }
};
