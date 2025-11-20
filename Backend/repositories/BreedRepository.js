import * as models from "../models/index.js"

class BreedRepository {
    async findAll() {
        return models.Breed.findAll({ order: [['id', 'ASC']] });
    }

    async findById(id) {
        return models.Breed.findByPk(id);
    }

    async findByName(name) {
        return models.Breed.findOne({ where: { name } });
    }

    async create(breedData) {
        return models.Breed.create(breedData);
    }

    async update(id, updatedData) {

        return await models.Breed.update(updatedData, { where: { id } });
    }

    async delete(id) {
        return models.Breed.destroy({ where: { id } });
    }
}

export default new BreedRepository();

