const Sequelize = require('sequelize');
const sequelize = new Sequelize('expressjs', 'postgres', 'system', {
    host: 'localhost',
    dialect: 'postgres', 
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000
    },
    logging: false
});
sequelize
.authenticate()
.then(function(err) {
 console.log('Connection has been established successfully.');
}, function (err) {
 console.log('Unable to connect to the database:', err);
});
module.exports = {sequelize};