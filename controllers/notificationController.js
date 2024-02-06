const Notifications= require('../models/Notification');


exports.addNotifications = async (req, res) => {
  try {
    const data = req.body;


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
    res.status(200).json({ message: "Notifications data added successfully" });

     

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in adding the notification data" });

    
  }
};