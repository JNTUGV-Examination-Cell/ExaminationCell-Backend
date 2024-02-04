const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Examination = require('./Examination');
const Students = require('./Student');
const College = require('./College');


const College_Exam_fee = sequelize.define('college_exam_fee', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
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
    college_code:{
        type:DataTypes.STRING,
        references:{
            model:College,
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

        tableName: 'college_exam_fee',    
        timestamps: false  
    }


);
module.exports = College_Exam_fee;
