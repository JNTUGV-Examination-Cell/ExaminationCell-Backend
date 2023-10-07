const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const College = require('./College');
const Batch = require('./Batch')
const Regulation_course_set = require('./Regulation_Courses_Set')


const Examination = sequelize.define('examinations', {
    id:{
        type : DataTypes.INTEGER,
        autoIncrement: true,
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
        type : DataTypes.STRING,
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
    exam_code:{
        type : DataTypes.STRING,
        primaryKey: true

    }


},{

    tableName: 'examinations',    
    timestamps: false  
});
module.exports = Examination;