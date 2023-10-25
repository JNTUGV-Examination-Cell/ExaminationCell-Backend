const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Regulation_Courses = require('./Regulation_Course');

const Regulation_Course_Set = sequelize.define('regulation_course_sets',{
    regulation_courses_set_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    regulation_courses_title:{
        type:DataTypes.STRING,
        references:{
            model: Regulation_Courses,
            key:'regulation_courses_title'
        },
        allowNull:false
    },
    regulation_course_set:{
        type:DataTypes.STRING,
        allowNull:false
    },
    regualtion_course_set_type:{
        type:DataTypes.STRING, 
        allowNull:false
    },
    sets:{
        type:DataTypes.INTEGER, 
        allowNull:false
    },
    laterals_allowed:{
        type:DataTypes.STRING,
        allowNull:false
    }

},{
    tableName: 'regulation_course_sets',
    timestamps:false
});

module.exports = Regulation_Course_Set;