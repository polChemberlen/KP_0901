import ApiError from '../errors/ApiError.js'
import UserService from '../services/UserService.js';
import TokenService from '../services/tokenService.js';

class UserController {
    async getUsers(req, res, next) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (e) {
            next(e);
        }
    }

    async check(req, res, next) {
        try {
            const { id } = req.user;

            // Получаем полные данные пользователя (с ролью, без пароля)
            const user = await UserService.getUserById(id);

            if (!user) {
                return next(ApiError.notFound('Пользователь не найден'));
            }

            const token = TokenService.generateToken({
                id: user.id,
                email: user.email,
                role: user.role
            });

            return res.json({
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    role: user.role
                }
            });
        } catch (e) {
            next(ApiError.internal('Ошибка при проверке авторизации'));
        }
    }


    async getOneUser(req, res, next) {
        try {
            const user = await UserService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (e) {
            next(e);
        }
    }

    async createOneUser(req, res, next) {
        try {
            const newUser = await UserService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (e) {
            next(e);
        }
    }

    async authorizationOneUser(req, res, next) {
        try {
            const authUser = await UserService.authorizationUser(req.body);

            const payload = { id: authUser.id, login: authUser.login, name: authUser.name, role: authUser.role };
            const token = TokenService.generateToken(payload);

            res.json({ token });
        } catch (e) {
            next(e);
        }
    }

    async updateOneUser(req, res, next) {
        try {
            const updatedUser = await UserService.updateUser(req.params.id, req.body);
            res.status(200).json(updatedUser);
        } catch (e) {
            next(e);
        }
    }

    async deleteOneUser(req, res, next) {
        try {
            await UserService.deleteUser(req.params.id);
            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }

}

export default new UserController();
