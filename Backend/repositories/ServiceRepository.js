import * as models from "../models/index.js"

class ServiceRepository {
    async findAll() {
        return models.Service.findAll({ order: [['id', 'ASC']] });
    }

    async findById(id) {
        return models.Service.findByPk(id);
    }

    async findByName(name) {
        return models.Service.findOne({ where: { name } });
    }

    async create(serviceData) {
        return models.Service.create(serviceData);
    }

    async delete(id) {
        return models.Service.destroy({ where: { id } });
    }
}

export default new ServiceRepository();

