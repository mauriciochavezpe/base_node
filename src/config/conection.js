const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()

const node_env=process.env;

const sequelize = new Sequelize(node_env.DB, node_env.USER, node_env.PASSWORD, {
    host: node_env.host,
    dialect: 'postgres',
    logging: false
}
);


sequelize
    .sync({ force: false })
    .then(function () {
        console.log('Connection has been established successfully.');
    }, function (err) {
        console.log('Unable to connect to the database:', err.message);
    });

module.exports = { sequelize, DataTypes };
