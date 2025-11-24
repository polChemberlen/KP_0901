import sequelize from "../configs/db.js";
import * as models from "../models/index.js";

class UserRepository {
  async findAll() {
    return models.User.findAll({ order: [['id', 'ASC']] });
  }

  async findById(id) {
    return models.User.findByPk(id);
  }

  async create(userData) {
    return models.User.create(userData);
  }

  async findByEmail(email) {
    return models.User.findOne({ where: { email } });
  }

  async update(id, updatedData) {
    return models.User.update(updatedData, { where: { id } });
  }

  async delete(id) {
    return models.User.destroy({ where: { id } });
  }
}

export default new UserRepository();
