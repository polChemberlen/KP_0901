import AppointmentRepository from "../repositories/AppointmentRepository.js";
import ApiError from "../errors/ApiError.js";

class AppointmentService {
    getAllAppointments() {
        return AppointmentRepository.findAll();
    }

    async getAppointmentById(id) {
        const appointment = await AppointmentRepository.findById(id);
        if (!appointment) {
            throw ApiError.notFound('Запись на прием не найдена');
        }
        return appointment;
    }

    async createAppointment(appointmentData) {
        // ИСПРАВЛЕННАЯ ВАЛИДАЦИЯ - проверяем поля из формы записи
        const { name, phone, animalTypeId } = appointmentData;
        
        if (!name || !phone || !animalTypeId) {
            throw ApiError.badRequest('Заполнены не все обязательные поля (имя, телефон, тип животного)');
        }

        const newAppointment = await AppointmentRepository.create(appointmentData);
        return newAppointment;
    }

    async updateAppointment(id, updateData) {
        const appointment = await AppointmentRepository.findById(id);

        if (!appointment) {
            throw ApiError.notFound('Запись на прием не найдена')
        }

        await AppointmentRepository.update(id, updateData);
        return AppointmentRepository.findById(id);
    }

    async deleteAppointment(id) {
        const appointment = await AppointmentRepository.findById(id);

        if (!appointment) {
            throw ApiError.notFound('Запись на прием не найдена');
        }

        return AppointmentRepository.delete(id);
    }
}

export default new AppointmentService();
