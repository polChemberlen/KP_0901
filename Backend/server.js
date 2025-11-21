import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import path from 'path';
import { fileURLToPath } from 'url';

import sequelize, { checkConnectDB } from './configs/db.js';
import router from './routes/index.js';
import errorMiddleware from './middlewares/errorMiddleware.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.use(fileUpload({}));

app.use(express.static(path.resolve(__dirname, 'static')));

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