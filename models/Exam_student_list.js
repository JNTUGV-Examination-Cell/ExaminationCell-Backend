const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Examination = require('./Examination');
const Student = require('../models/Student');
const College = require('../models/College');
const Subject= require('../models/Subject');


const Exam_students_list = sequelize.define('exam_students_list', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    college_code:{
        type:DataTypes.STRING,
        references:{
            model:College,
            key:'college_code'
        },
        allowNull: false
    },
    exam_code:{
        type:DataTypes.STRING,
        allowNull: false 
    },
    subject_code:{
        type:DataTypes.STRING,
        referencces:{
          model:Subject,
          key:'subject_code'
        },
        allowNull:true
      },
    roll_no:{
        type: DataTypes.STRING,
        references:{
            model:Student,
            key:'roll_no'
        },
        allowNull:false

    },
    qualified_status:{
        type:DataTypes.ENUM('qualified','detained','condonated'),
        allowNull: false
    }, 
    post_exam_status:{
        type:DataTypes.ENUM('pass','fail'),
        allowNull:true
    },
    examfail_reason:{
        type:DataTypes.ENUM('malpractice','absent'),
        allowNull:true
    }, 
    date_time:{
        type:DataTypes.DATE,
        primaryKey:true, 
        allowNull:true,
        defaultValue: DataTypes.NOW 
      },
 
    },{

        tableName: 'exam_students_list',    
        timestamps: false  
    }


);
module.exports = Exam_students_list;