import PetRepository from "../repositories/PetRepository.js";
import ApiError from "../errors/ApiError.js";

class PetService {
    getAllPets() {
        return PetRepository.findAll();
    }

    async getPetById(id) {
        const pet = await PetRepository.findById(id);
        if (!pet) {
            throw ApiError.notFound('Животное не найдено');
        }
        return pet;
    }

    async createPet(petData) {
        const { name, age, weight } = petData;
        if (!name || !age || !weight) {
            throw ApiError.badRequest('Заполнены не все поля');
        }

        const newPet = await PetRepository.create(petData);
        return newPet;
    }

    async updatePet(id, updateData) {
        const pet = await PetRepository.findById(id);

        if (!pet) {
            throw ApiError.notFound('Животное не найдено')
        }

        await PetRepository.update(id, updateData);
        return PetRepository.findById(id);
    }

    async deletePet(id) {
        const pet = await PetRepository.findById(id);

        if (!pet) {
            throw ApiError.notFound('Животное не найдено');
        }

        return PetRepository.delete(id);
    }
}

export default new PetService();