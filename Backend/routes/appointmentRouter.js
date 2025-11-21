import express from "express";
import AppointmentController from "../controllers/AppointmentController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";

const router = new express.Router();

router.post('/', authMiddleware, checkRoleMiddleware('ADMIN'), AppointmentController.createOneAppointment);

router.put('/:id', authMiddleware, checkRoleMiddleware('ADMIN'), AppointmentController.updateOneAppointment);
router.delete('/:id', authMiddleware, checkRoleMiddleware('ADMIN'), AppointmentController.deleteOneAppointment);

router.get('/', AppointmentController.getAppointments);
router.get('/:id', AppointmentController.getOneAppointment);

export default router;