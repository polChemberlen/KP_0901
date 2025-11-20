import express from "express";
import AnimalTypeController from "../controllers/AnimalTypeController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";

const router = new express.Router();

router.post('/', authMiddleware, checkRoleMiddleware('ADMIN'), AnimalTypeController.createOneAnimalType);

router.put('/:id', authMiddleware, checkRoleMiddleware('ADMIN'), AnimalTypeController.updateOneAnimalType);
router.delete('/:id', authMiddleware, checkRoleMiddleware('ADMIN'), AnimalTypeController.deleteOneAnimalType);

router.get('/', AnimalTypeController.getAnimalTypes);
router.get('/:id', AnimalTypeController.getOneAnimalType);

export default router;