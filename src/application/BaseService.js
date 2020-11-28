const Model = require('../domain/repositories/');
class BaseService {
    constructor(repo) {
        this._baseService = Model[repo];
    }
    async getAll() {
        return await this._baseService.getAll();
    }
    async add(trama) {
        return await this._baseService.create(trama);
    }
    async update(trama, xid) {
        return this._baseService.update(trama, xid)
    }
    async delete(xid) {
        return await this._baseService.destroy(xid)
    }
    async argon(xid) {
        return await this._baseService.destroy(xid)
    }
}
module.exports = BaseService;