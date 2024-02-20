const {DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

const Course = sequelize.define('courses',{
    course_id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,

    },
    course:{
        type:DataTypes.STRING,
        primaryKey:true,
    },
    course_full_name:{
        type:DataTypes.STRING,
        allowNull: false

    },
    semester:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    course_code:{
        type:DataTypes.STRING,
        allowNull: false

    },
    course_type:{
        type:DataTypes.STRING,
        allowNull: false

    },
    entrance_exam:{
        type:DataTypes.STRING,
        allowNull: false
    }

},{
    tableName:'courses',
    timestamps:false
});

module.exports = Course;
