import path from 'path';
import * as uuid from 'uuid';
import { fileURLToPath } from 'url';
import ApiError from '../errors/ApiError.js'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class FileService {
    async saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg'; 
            const filePath = path.resolve(__dirname, '..', 'static', fileName);

            await file.mv(filePath);
            
            return fileName;
        } catch (e) {
            console.error(e);
            throw ApiError.internal('Ошибка при записи файла');
        }
    }
}

export default new FileService();
