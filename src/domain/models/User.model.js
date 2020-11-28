const { sequelize, DataTypes } = require('../../config/conection');
const Task = require('./Task.model');
const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 20
        }
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 20
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.Task = User.hasMany(Task);
Task.User = Task.belongsTo(User);
module.exports = User;