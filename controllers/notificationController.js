const Notifications= require('../models/Notification');
const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, '../data/notifications_data.json');

exports.addNotifications = async (req, res) => {
  try {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
    const data = JSON.parse(jsonData);

    for (const item of data) {
      await Notifications.create({
       
        notification_title:item.notification_title,
      });
    }

    res.status(200).json({ message: "Notifications data added successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in adding Notifications data" });
  }
};