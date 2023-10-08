const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Examination = require('./Examination');
const Students = require('./Student');



const Exam_students_list = sequelize.define('exam_students_list', {
    id:{
        type:DataTypes.INTEGER,
        autoincrement:true,
        primaryKey:true
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
        references:{
            model:Students,
            key:'student_id'
        },
        allowNull: false

    },
    qualified_status:{
        type:DataTypes.STRING,
        allowNull: false
    }

    

    },{

        tableName: 'Exam_students_list',    
        timestamps: false  
    }


);
module.exports = Exam_students_list;
