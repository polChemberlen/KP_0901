import SpeciesRepository from "../repositories/SpeciesRepository.js";
import ApiError from "../errors/ApiError.js";

class SpeciesService {
    async getAllSpecies() {
        return await SpeciesRepository.findAll();
    }

    async getSpeciesById(id) {
        const species = await SpeciesRepository.findById(id);
        if (!species) {
            throw ApiError.notFound('Вид не найден');
        }
        return species;
    }

    async createSpecies(speciesData) {
        const { name } = speciesData;
        if (!name) {
            throw ApiError.badRequest('Заполнены не все поля');
        }

        const existingSpecies = await SpeciesRepository.findByName(name);

        if (existingSpecies) {
            throw ApiError.conflict('Вид с таким наименованием уже существует');
        }

        const newSpecies = await SpeciesRepository.create(speciesData);
        return newSpecies;
    }

    async updateSpecies(id, updateData) {
        const species = await SpeciesRepository.findById(id);

        if (!species) {
            throw ApiError.notFound('Вид не найден');
        }

        await SpeciesRepository.update(id, updateData);
        return SpeciesRepository.findById(id);
    }

    async deleteSpecies(id) {
        const species = await SpeciesRepository.findById(id);

        if (!species) {
            throw ApiError.notFound('Вид не найден');
        }

        return SpeciesRepository.delete(id);
    }
}

export default new SpeciesService();