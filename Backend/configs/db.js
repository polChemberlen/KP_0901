import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        logging: false,
        port: process.env.DB_PORT
    });

    export const checkConnectDB = async () => {
        try {
            await sequelize.authenticate();
            console.log('БД успешно подключена');
        } catch (e) {
            console.log('БД не работает. Ошибка: ', e);
            throw new Error('Не удалось подключиться к БД')
        }
    }


export default sequelize;