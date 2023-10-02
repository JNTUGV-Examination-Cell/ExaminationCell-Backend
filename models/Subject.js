const { DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');
const Regulation_Course_Set  = require('./Regulation_Course_Set');
const Regulation_Course  = require('./Regulation_Courses');
const Branch  = require('./Branches');
const Course = require('./Courses')

const Subject = sequelize.define('subjects',{
    sub_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    regulation_course_set:{
        type:DataTypes.STRING,
        references:{
            model: Regulation_Course_Set,
            key:'regulation_course_set'
        },
        allowNull:false,
    },
    regulation_course_title:{
        type:DataTypes.STRING,
        references:{
            model: Regulation_Course,
            key:'regulation_course_title'
        },
        allowNull:false,
    },
    branch:{
        type:DataTypes.STRING,
        references:{
            model: Branch,
            key: 'branch'
        },
        allowNull:false,
    },
    subject_code:{
        type:DataTypes.STRING,
        allowNull:false
    },
    subject_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    course:{
        type:DataTypes.STRING,
        references:{
            model: Course,
            key: 'course'
        },
        allowNull:false
    },
    external_pass_mark:{
        type:DataTypes.INTEGER,
        allowNull:false
    }, 
    total_pass_mark:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    total_external_mark:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    subject_total_mark:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    credits:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    subject_type:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    subject_status:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

},{
    tableName:'sublects',
    timestamps:false
});

module.exports = Subject;