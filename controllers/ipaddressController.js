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
  const ipId = req.params.id; // Get the IP address ID from the route parameter
  const { newIpAddress } = req.body; // Get the new IP address from the request body

  try {
    // Find the IP address by its ID
    const existingIp = await Ipaddress.findByPk(ipId);

    if (!existingIp) {
      // If the IP address with the given ID doesn't exist, respond with a 404 status
      return res.status(404).json({ message: 'IP address not found in the database' });
    }

    // Update the IP address value
    existingIp.ipAddress = newIpAddress;
    
    // Save the updated IP address in the database
    await existingIp.save();

    // Respond with a success message
    res.status(200).json({ message: 'IP address updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in updating the IP address' });
  }
};



//GET API CODE
exports.verifyIpaddress =  async (req, res) => {
  const ipAddressToVerify = req.params.ipAddress;

  try {
    // Use Sequelize to find IP addresses that match the provided IP address
    const existingIp = await Ipaddress.findOne({
      where: {
        ipAddress: ipAddressToVerify,
      },
    });

    if (existingIp) {
      // If an IP address is found in the database, respond with a message indicating its presence
      res.status(200).json({ message: 'IP address exists in the database' });
    } else {
      // If no matching IP address is found, respond with a message indicating its absence
      res.status(404).json({ message: 'IP address not found in the database' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in verifying the IP address' });
  }
};
