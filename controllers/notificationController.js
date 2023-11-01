const Notifications= require('../models/Notification');
const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, '../data/notifications_data.json');

exports.addNotifications = async (req, res) => {
  try {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
    const data = JSON.parse(jsonData);

    for (const item of data) {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        let formattedDate = yyyy + '-' + mm + '-' + dd;
      await Notifications.create({
        date: formattedDate,
        notification_title:item.notification_title
        
      });
    }
    console.log("Notifications data added successfully");
    

  } catch (error) {
    console.error(error);
    
  }
};