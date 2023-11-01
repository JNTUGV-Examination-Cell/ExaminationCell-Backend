const Ipaddress = require('../models/Ipaddress');
const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, '../data/ipaddress.json');

exports.addipaddress = async (req, res) => {
  try {

    
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
    const data = JSON.parse(jsonData);

    for (const item of data) {
      await Ipaddress.create({
    
        college_code: item.college_code,
        ipAddress : item.ipAddress
      });
    }

    res.status(200).json({ message: "Ip addresses added successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in adding Ip addresses data" });
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
    console.log('IP address updated successfully' );
  } catch (error) {
    console.error(error);
    console.log ('Error in updating the IP address');
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
