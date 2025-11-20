import ApiError from '../errors/ApiError.js';
import AnimalTypeRepository from '../repositories/AnimalTypeRepository.js';

class AnimalTypeService {
    async getAllAnimalTypes() {
        return await AnimalTypeRepository.findAll();
    }

    async getAnimalTypeById(id) {
        const animalType = await AnimalTypeRepository.findById(id);
        if (!animalType) {
            throw ApiError.notFound('Тип животного не найден');
        }
        return animalType;
    }

    async createAnimalType(animalTypeData) {
        const { name } = animalTypeData;
        if (!name) {
            throw ApiError.badRequest('Заполнены не все поля');
        }

        const existingAnimalType = await AnimalTypeRepository.findByName(name);

        if (existingAnimalType) {
            throw ApiError.conflict('Тип животного с таким наименованием уже существует');
        }

        const newAnimalType = await AnimalTypeRepository.create(animalTypeData);
        return newAnimalType;
    }
        

    async updateAnimalType(id, updateData) {
        const { name } = updateData;
        if (!name) {
            throw ApiError.badRequest('Заполнены не все поля');
        }


        const animalType = await AnimalTypeRepository.findById(id);

        if (!animalType) {
            throw ApiError.notFound('Тип животного не найден');
        }

        const existingAnimalType = await AnimalTypeRepository.findByName(name);

        if (existingAnimalType && existingAnimalType.id !== animalType.id) {
            throw ApiError.conflict('Тип животного с таким наименованием уже существует');
        }

        await AnimalTypeRepository.update(id, updateData);
        return AnimalTypeRepository.findById(id);
    }

    async deleteAnimalType(id) {
        const animalType = await AnimalTypeRepository.findById(id);

        if (!animalType) {
            throw ApiError.notFound('Тип животного не найден');
        }

        return AnimalTypeRepository.delete(id);
    }
}

export default new AnimalTypeService();