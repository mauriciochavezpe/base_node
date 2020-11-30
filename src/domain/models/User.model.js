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
    // fecha: {
    //     type: DataTypes.DATE,
    //     defaultValue: sequelize.NOW
    //     // This way, the current date/time will be used to populate this column (at the moment of insertion)
    // }
}, {
    timestamps: false
})

User.Task = User.hasMany(Task);
Task.User = Task.belongsTo(User);
module.exports = User;