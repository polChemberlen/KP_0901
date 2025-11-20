import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import sequelize, { checkConnectDB } from './configs/db.js';
import router from './routes/index.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.use('/api', router);

app.use(errorMiddleware);

const start = async () => {
    try {
        await checkConnectDB();
        await sequelize.sync();

        app.listen(PORT, () => console.log('Сервер работает на порту ' + PORT));
    } catch (e) {
        console.error('Ошибка при запуске сервера:', e);
        process.exit(1);
    }
};

start();