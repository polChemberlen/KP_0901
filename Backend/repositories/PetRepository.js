import sequelize from "../configs/db.js";
import * as models from "../models/index.js";

class PetRepository {
    async findAll() {
        return models.Pet.findAll({ order: [['id', 'ASC']] });
    }

    async findById(id) {
        return models.Pet.findByPk(id);
    }

    async create(petData) {
        return models.Pet.create(petData);
    }

    async update(id, updatedData) {
        return models.Pet.update(updatedData, { where: { id } });
    }

    async delete(id) {
        return models.Pet.destroy({ where: { id } });
    }
}

export default new PetRepository();