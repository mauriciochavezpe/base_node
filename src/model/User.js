const {  DataTypes } = require('sequelize');
const {  sequelize  } = require('../db/db.conection');
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
         autoIncrement: true
    },
    Nombres: {
        type: DataTypes.STRING
        // allowNull: false
    },
    Apellidos: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    descripcion: {
        type: DataTypes.STRING
    },
    Fecha_Nacimiento: {
        type:DataTypes.DATE
    }
}, {
    timestamps: false,
    createdAt: false
});

module.exports = User;