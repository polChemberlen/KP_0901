import PetRepository from "../repositories/PetRepository.js";
import ApiError from "../errors/ApiError.js";

class PetService {
  getAllPets() {
    return PetRepository.findAll();
  }

  async getPetsByUserId(userId) {
    if (!userId) {
      throw ApiError.badRequest('ID пользователя не указан');
    }
    return PetRepository.findByUserId(userId);
  }

  async getPetById(id) {
    const pet = await PetRepository.findById(id);
    if (!pet) {
      throw ApiError.notFound('Животное не найдено');
    }
    return pet;
  }

  async createPet(petData) {
    const { name, userId, animalTypeId } = petData;
    
    if (!name || !userId || !animalTypeId) {
      throw ApiError.badRequest('Заполнены не все обязательные поля');
    }

    const newPet = await PetRepository.create(petData);
    return newPet;
  }

  async updatePet(id, updateData) {
    const pet = await PetRepository.findById(id);
    if (!pet) {
      throw ApiError.notFound('Животное не найдено');
    }

    await PetRepository.update(id, updateData);
    return PetRepository.findById(id);
  }

  async deletePet(id, userId) {
    const pet = await PetRepository.findById(id);
    if (!pet) {
      throw ApiError.notFound('Животное не найдено');
    }

    if (userId && pet.userId !== userId) {
      throw ApiError.forbidden('Нет прав на удаление этого питомца');
    }

    return PetRepository.delete(id);
  }
}

export default new PetService();
