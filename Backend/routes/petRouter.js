import express from "express";
import PetController from "../controllers/PetController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";

const router = new express.Router();

router.post('/', authMiddleware, checkRoleMiddleware('ADMIN'), PetController.createOnePet);

router.put('/:id', authMiddleware, checkRoleMiddleware('ADMIN'), PetController.updateOnePet);
router.delete('/:id', authMiddleware, checkRoleMiddleware('ADMIN'), PetController.deleteOnePet);

router.get('/', PetController.getPets);
router.get('/:id', PetController.getOnePet);

export default router;