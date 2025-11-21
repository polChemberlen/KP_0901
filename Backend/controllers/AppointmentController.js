import AppointmentService from '../services/AppointmentService.js';

class AppointmentController {
    async getAppointments(req, res, next) {
        try {
            const appointments = await AppointmentService.getAllAppointments();
            res.status(200).json(appointments);
        } catch (e) {
            next(e);
        }
    }

    async getOneAppointment(req, res, next) {
        try {
            const appointment = await AppointmentService.getAppointmentById(req.params.id);
            res.status(200).json(appointment);
        } catch (e) {
            next(e);
        }
    }

    async createOneAppointment(req, res, next) {
        try {
            const newAppointment = await AppointmentService.createAppointment(req.body);
            res.status(201).json(newAppointment);
        } catch (e) {
            next(e);
        }
    }

    async updateOneAppointment(req, res, next) {
        try {
            const updatedAppointment = await AppointmentService.updateAppointment(req.params.id, req.body);
            res.status(200).json(updatedAppointment);
        } catch (e) {
            next(e);
        }
    }

    async deleteOneAppointment(req, res, next) {
        try {
            await AppointmentService.deleteAppointment(req.params.id);
            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }

}

export default new AppointmentController();
