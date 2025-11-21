import express from "express";
import ServiceController from "../controllers/ServiceController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";

const router = new express.Router();

router.post('/', authMiddleware, checkRoleMiddleware('ADMIN'), ServiceController.createOneService);

router.delete('/:id', authMiddleware, checkRoleMiddleware('ADMIN'), ServiceController.deleteOneService);

router.get('/', ServiceController.getServices);
router.get('/:id', ServiceController.getOneService);

export default router;