const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Regulation = require('./Regulation');
const Course = require('./Courses');


const Regulation_Course = sequelize.define('regulation_courses', {
    regulation_courses_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    regulation_courses_title:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    course:{
        type:DataTypes.STRING,
        references:{
            model:Course,
            key:'course'
        },
        allowNull:false
    },
    regulation:{
        type:DataTypes.STRING,
        references:{
            model:Regulation,
            key:'regulation'
        },
        allowNull:false
    },
    studying_year:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    duration:{
        type:DataTypes.INTEGER,
        allowNull:false
    }


}, {
    tableName:'regulations_courses',
    timestamps:false
});

module.exports = Regulation_Course;