const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const College = require('./College');
const Batch = require('./Batch');
const Regulation_course_set = require('./Regulation_Courses_Set');


const Examinations = sequelize.define('examinations', {
    id:{
        type : DataTypes.INTEGER,
        autoIncrement: true,
    },
    exam_code:{
        type : DataTypes.STRING,
        primaryKey: true

    },
    college_code:{
        type : DataTypes.STRING,
        references:{
            model: College,
            key: 'college_code'
        },
        allowNull: false
    },
    batch_id:{
        type : DataTypes.INTEGER,
        references:{
            model: Batch,
            key: 'batch_id'
        },
        allowNull: false

    },
    regulation_course_set:{
        type : DataTypes.STRING,
        references:{
            model: Regulation_course_set,
            key: 'regulation_course_set'
        },
        allowNull: false


    },
},{

    tableName: 'examinations',    
    timestamps: false  
});
module.exports = Examinations;