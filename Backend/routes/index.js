import express, { Router } from "express";
import userRouter from "./userRouter.js";
import speciesRouter from "./speciesRouter.js";
import animalTypeRouter from "./animalTypeRouter.js";
import breedRouter from "./breedRouter.js";
import petRouter from "./petRouter.js";
import serviceRouter from "./serviceRouter.js";
import appointmentRouter from "./appointmentRouter.js";

const router = new express.Router();

router.use('/users', userRouter);
router.use('/species', speciesRouter);
router.use('/types', animalTypeRouter);
router.use('/breeds', breedRouter);
router.use('/pets', petRouter);
router.use('/services', serviceRouter);
router.use('/appointment', appointmentRouter);

export default router;