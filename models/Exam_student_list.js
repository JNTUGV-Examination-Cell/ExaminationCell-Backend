const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Examination = require('./Examination');
const Student = require('../models/Student');
const College = require('../models/College');


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
        references:{
            model: Examination,
            key: 'exam_code'
        },
        allowNull: false 
    },
    student_id:{
        type:DataTypes.INTEGER,
        // references: {
        //     model:Student,
        //     key: 'student_id'
        // },
        allowNull: false
    }, 
    qualified_status:{
        type:DataTypes.ENUM('qualified','detained','condonated'),
        allowNull: false
    }

    },{

        tableName: 'exam_students_list',    
        timestamps: false  
    }


);
module.exports = Exam_students_list;