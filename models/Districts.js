const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const District = sequelize.define('districts',{

    district_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    district_name:{
        type:DataTypes.STRING,
        allowNull: false

    },
    district_slug:{
        type:DataTypes.STRING,
        allowNull: false
    }

},{
tableName: 'districts',
timestamps:false
});

module.exports = District;