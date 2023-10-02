const express = require('express');
const cors = require('cors');
const multer = require('multer'); // Import multer
const app = express();
const Attendence = require('./models/Attendence');
const Batch = require('./models/Batch');
const College = require('./models/Batch');
const Otp = require('./models/Otp');
const Staff = require('./models/Staff');
const Student = require('./models/Student');
const User = require('./models/User');
const collegeRoutes = require('./routes/collegeRoutes');
const staffRoutes = require('./routes/staffRoutes');
const batchRoutes = require('./routes/batchRoutes');
const studentRoutes = require('./routes/studentRoutes');
const userRoutes= require('./routes/userRoutes');


// Enable CORS
app.use(cors());

// middleware
app.use(express.static("upload"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const upload = multer();
app.use(upload.any()); 


//routes
app.use('/api/college',collegeRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/user', userRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/batch', batchRoutes);


//database synchronization
College.sync().then(() => {
    console.log("College Model synced");
});
Staff.sync().then(() => {
    console.log("Staff Model synced");
});
Batch.sync().then(() => {
    console.log("Batch Model synced");
});
User.sync().then(() => {
    console.log("User Model synced");
});
Otp.sync().then(() => {
    console.log("Otp Model synced");
});
Attendence.sync().then(() => {
    console.log("Attendence Model synced");
  });
Student.sync().then(() => {
    console.log("Student Model synced");
});


const port = process.env.PORT || 9000;

// Start server
app.listen(port, function () {
    console.log('Server is running on port 9000');
});