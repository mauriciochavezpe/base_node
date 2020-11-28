// const u = require('../models/User.model');
const User = require('./User.repository');
const Task = require('./Task.repository');
module.exports = {
    User: new User(require('../models/User.model')),
    Task: new Task(require('../models/Task.model'))
}