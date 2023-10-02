const express = require('express');
const cors = require('cors');
const sequelize = require("./config/connection");
const multer = require('multer'); // Import multer
const app = express();
const http = require("http");
const server = http.createServer(app);
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
const createTablesIfNotExists = require('./config/tables');

const port = 9000;
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


const setupDatabase = async () => {
    await createTablesIfNotExists();
  };

  sequelize
  .authenticate()
  .then(async () => {
    console.log("Connected to the database!");

    setupDatabase()
      .then(() => {
        console.log("Database setup complete.");

        // Start the server
        server.listen(port, () => {
          console.log(`Server running on port ${port}`);
        });
      })
      .catch((error) => {
        console.error("Error setting up the database:", error);
      });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });