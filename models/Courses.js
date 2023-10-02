const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

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
    course_code:{
        type:DataTypes.STRING,
        allowNull: false

    },
    course_type:{
        type:DataTypes.STRING,
        allowNull: false

    },
    entrance_exam:{
        type:DataTypes.VARCHAR,
        allowNull: false
    }

},{
    tableName:'courses',
    timestamps:false
});

module.exports = Course;
