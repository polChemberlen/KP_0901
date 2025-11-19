import express from "express";
import BreedController from "../controllers/BreedController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";

const router = new express.Router();

router.post('/', authMiddleware, checkRoleMiddleware('ADMIN'), BreedController.createOneBreed);

router.put('/:id', authMiddleware, checkRoleMiddleware('ADMIN'), BreedController.updateOneBreed);
router.delete('/:id', authMiddleware, checkRoleMiddleware('ADMIN'), BreedController.deleteOneBreed);

router.get('/', BreedController.getBreeds);
router.get('/:id', BreedController.getOneBreed);

export default router;