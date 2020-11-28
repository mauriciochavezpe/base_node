
// const _User = require('../models/User.model');
const BaseRepository = require('./BaseRepository');
 class User extends BaseRepository{
    constructor(model) {
        super(model)
        this._base = model;
    }
    async getAll() {
        console.log(this._base.Task);
        return await this._base.findAll({ include: [this._base.Task] });
    }
}

module.exports = User;