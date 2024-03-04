const { DataTypes } = require('sequelize');
const examination = require('../models/Examination');
const exam_students_list = require('../models/Exam_student_list');
const college = require('../models/College');
const sequelize = require('../config/connection');

const CollegeExamRegistration = sequelize.define('CollegeExamRegistration', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    exam_code:{
        type:DataTypes.STRING,
        allowNull: false
    },
    college_code:{
        type:DataTypes.STRING,
        references:{
            model:college,
            key:'college_code'
        },
        allowNull: false

    },
    total_students:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    amount:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    payment_date:{
        type:DataTypes.STRING,
        allowNull:false
    },
    payment_status:{
        type:DataTypes.ENUM('Accepted','Rejected','Pending'),
        allowNull: false
    }

    },{

        tableName: 'CollegeExamRegistration',    
        timestamps: false  
    }


);
module.exports = CollegeExamRegistration;