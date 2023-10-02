const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Regulation = sequelize.define('regulations', {

    regulation_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
    },
    regulation:{
        type:DataTypes.STRING,
        primaryKey:true,
    },
    regulation_start_year:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

},{
    tableName:'regulations',
    timestamps:false
});

module.exports = Regulation;