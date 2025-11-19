import ApiError from '../errors/ApiError.js';
import BreedRepository from '../repositories/BreedRepository.js';

class BreedService {
    async getAllBreeds() {
        return await BreedRepository.findAll();
    }

    async getBreedById(id) {
        const breed = await BreedRepository.findById(id);
        if (!breed) {
            throw ApiError.notFound('Порода не найден');
        }
        return breed;
    }

    async createBreed(breedData) {
        const { name } = breedData;
        if (!name) {
            throw ApiError.badRequest('Заполнены не все поля');
        }

        const existingBreed = await BreedRepository.findByName(name);

        if (existingBreed) {
            throw ApiError.conflict('Порода с таким наименованием уже существует');
        }

        const newBreed = await BreedRepository.create(breedData);
        return newBreed;
    }

    async updateBreed(id, updateData) {
        const breed = await BreedRepository.findById(id);

        if (!breed) {
            throw ApiError.notFound('Порода не найден');
        }

        await BreedRepository.update(id, updateData);
        return BreedRepository.findById(id);
    }

    async deleteBreed(id) {
        const breed = await BreedRepository.findById(id);

        if (!breed) {
            throw ApiError.notFound('Порода не найден');
        }

        return BreedRepository.delete(id);
    }
}

export default new BreedService();