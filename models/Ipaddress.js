const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const College = require('./College');

const Ipaddress = sequelize.define('ipaddress',{

    id:{
        type:DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull:false
    },

    college_code:{
        type:DataTypes.STRING,
        references:{
            model : College,
            key:'college_code'
        },
        allowNull:false
    },
    ipAddress:{
        type:DataTypes.STRING,
        allowNull:false
    }
},

{
      tableName: 'Ipaddress',    
      timestamps: false    
})

module.exports = Ipaddress;