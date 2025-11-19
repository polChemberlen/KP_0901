import * as models from "../models/index.js"

class AnimalTypeRepository {
    async findAll() {
        return models.AnimalType.findAll({ order: [['id', 'ASC']] });
    }

    async findById(id) {
        return models.AnimalType.findByPk(id);
    }

    async findByName(name) {
        return models.AnimalType.findOne({ where: { name } });
    }

    async create(animalTypeData) {
        return models.AnimalType.create(animalTypeData);
    }

    async update(id, updatedData) {

        return await models.AnimalType.update(updatedData, { where: { id } });
    }

    async delete(id) {
        return models.AnimalType.destroy({ where: { id } });
    }
}

export default new AnimalTypeRepository();

