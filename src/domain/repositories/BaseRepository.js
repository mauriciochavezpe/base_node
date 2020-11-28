
class BaseRepository {
    constructor(entity) {
        this._entity = entity;
    }
    async getAll(info = {}) {
        var data = (info == null || info == undefined) ? {} : info;
        return await this._entity.findAll(data);
    }
    async create(trama) {
        return await this._entity.create(trama);
    }
    async update(trama, id) {
        try {
            return await this._entity.update(trama, { where: { id } })
        } catch (error) {
            return "Error " + error.message;
        }
    }
    async destroy(xid) {
        return await this._entity.destroy({ where: { id } })
    }
    async getById() {

    }
    async getByOneColumn() {

    }
}
module.exports = BaseRepository;