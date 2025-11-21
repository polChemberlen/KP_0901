import sequelize from "../configs/db.js";
import * as models from "../models/index.js";

class AppointmentRepository {
    async findAll() {
        return models.Appointment.findAll({ order: [['id', 'ASC']] });
    }

    async findById(id) {
        return models.Appointment.findByPk(id);
    }

    async create(appointmentData) {
        return models.Appointment.create(appointmentData);
    }

    async update(id, updatedData) {
        return models.Appointment.update(updatedData, { where: { id } });
    }

    async delete(id) {
        return models.Appointment.destroy({ where: { id } });
    }
}

export default new AppointmentRepository();