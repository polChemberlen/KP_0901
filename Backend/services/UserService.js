import UserRepository from "../repositories/UserRepository.js";
import bcrypt from "bcrypt";
import ApiError from "../errors/ApiError.js";

class UserService {
    getAllUsers() {
        return UserRepository.findAll();
    }

    async getUserById(id) {
        const user = await UserRepository.findById(id);
        if (!user) {
            throw ApiError.notFound('Пользователь не найден');
        }
        return user;
    }

    async createUser(userData) {
        const { email, password, name, phone } = userData;
        if (!email || !password || !name || !phone) {
            throw ApiError.badRequest('Заполнены не все поля');
        }

        const existingUser = await UserRepository.findByEmail(email);
        if (existingUser) {
            throw ApiError.conflict('Пользователь с таким адресом электронной почты уже есть');
        }

        //посолим
        const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);
        const hashPassword = await bcrypt.hash(password, saltRounds);

        const userToCreate = {
            //оператор spread (...) распаковывает даннные userData в объект этот
            ...userData,
            password: hashPassword
        };

        const newUser = await UserRepository.create(userToCreate);
        return newUser;
    }

    async authorizationUser(userData) {
        const { email, password } = userData;
        const authUser = await UserRepository.findByEmail(email);

        if (!authUser) {
            throw ApiError.unAuthorized('Неверный адрес электронной почты или пароль');
        }

        const comparePassword = await bcrypt.compare(password, authUser.password);
        if (!comparePassword) {
            throw ApiError.unAuthorized('Неверный адрес электронной почты или пароль');
        }
        return authUser;
    }

    async updateUser(id, updateData) {
        const user = await UserRepository.findById(id);

        if (!user) {
            throw ApiError.notFound('Пользователь не найден')
        }

        //хэширование обновленного пароля
        if (updateData.password) {
            const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);
            updateData.password = await bcrypt.hash(updateData.password, saltRounds);
        }

        await UserRepository.update(id, updateData);
        return UserRepository.findById(id);
    }

    async deleteUser(id) {
        const user = await UserRepository.findById(id);

        if (!user) {
            throw ApiError.notFound('Пользователь не найден');
        }

        return UserRepository.delete(id);
    }
}

export default new UserService();