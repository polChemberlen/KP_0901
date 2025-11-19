import express from "express";
import SpeciesController from "../controllers/SpeciesController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";

const router = new express.Router();

router.post('/', authMiddleware, checkRoleMiddleware('ADMIN'), SpeciesController.createOneSpecies);

router.put('/:id', authMiddleware, checkRoleMiddleware('ADMIN'), SpeciesController.updateOneSpecies);
router.delete('/:id', authMiddleware, checkRoleMiddleware('ADMIN'), SpeciesController.deleteOneSpecies);

router.get('/', SpeciesController.getSpecies);
router.get('/:id', SpeciesController.getOneSpecies);

export default router;