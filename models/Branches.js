const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Course = require('./Courses');

const Branch = sequelize.define('branches',{

    branch_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    course:{
        type:DataTypes.STRING,
        references:{
            model:Course,
            key:'course'
        },
        allowNull:false
    },
    branch:{
        type:DataTypes.STRING,
        allowNull:false
    },
    branch_full_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    branch_specialization:{
        type:DataTypes.STRING,
        allowNull:true
    },
    branch_code:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    },
    
},{
    tableName:'branches',
    timestamps:false
});
module.exports = Branch;