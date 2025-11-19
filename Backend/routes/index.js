import express, { Router } from "express";
import userRouter from "./userRouter.js";
import speciesRouter from "./speciesRouter.js";
import animalTypeRouter from "./animalTypeRouter.js";
import breedRouter from "./breedRouter.js";

const router = new express.Router();

router.use('/users', userRouter);
router.use('/species', speciesRouter);
router.use('/types', animalTypeRouter);
router.use('/breeds', breedRouter);


export default router;