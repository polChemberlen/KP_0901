import express from "express";
import UserController from "../controllers/UserController.js";
import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = new express.Router();

router.post('/registration', UserController.createOneUser);
router.post('/login', UserController.authorizationOneUser);

router.get('/auth', authMiddleware, UserController.check);
router.get('/', authMiddleware, checkRoleMiddleware('ADMIN'), UserController.getUsers); 


router.get('/:id', UserController.getOneUser);

router.put('/:id', authMiddleware, checkRoleMiddleware('ADMIN'), UserController.updateOneUser);
router.delete('/:id', authMiddleware, checkRoleMiddleware('ADMIN'), UserController.deleteOneUser);

export default router;
