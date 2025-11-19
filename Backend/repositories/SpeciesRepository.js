import sequelize from "../configs/db.js";
import * as models from "../models/index.js"

class SpeciesRepository {
    async findAll() {
        return models.Species.findAll({ order: [['id', 'ASC']] });
    }

    async findById(id) {
        return models.Species.findByPk(id);
    }

    async findByName(name) {
        return models.Species.findOne({ where: { name } });
    }

    async create(speciesData) {
        return models.Species.create(speciesData);
    }

    async update(id, updatedData) {

        return await models.Species.update(updatedData, { where: { id } });
    }

    async delete(id) {
        return models.Species.destroy({ where: { id } });
    }
}

export default new SpeciesRepository();

