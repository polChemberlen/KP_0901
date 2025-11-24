import PetService from '../services/PetService.js';

class PetController {
  async getPets(req, res, next) {
    try {
      const pets = await PetService.getAllPets();
      res.status(200).json(pets);
    } catch (e) {
      next(e);
    }
  }

  async getUserPets(req, res, next) {
    try {
      const userId = req.user.id;
      const pets = await PetService.getPetsByUserId(userId);
      res.status(200).json(pets);
    } catch (e) {
      next(e);
    }
  }

  async getOnePet(req, res, next) {
    try {
      const pet = await PetService.getPetById(req.params.id);
      res.status(200).json(pet);
    } catch (e) {
      next(e);
    }
  }

  async createOnePet(req, res, next) {
    try {
      const userId = req.user.id;
      const newPet = await PetService.createPet({ ...req.body, userId });
      res.status(201).json(newPet);
    } catch (e) {
      next(e);
    }
  }

  async updateOnePet(req, res, next) {
    try {
      const updatedPet = await PetService.updatePet(req.params.id, req.body);
      res.status(200).json(updatedPet);
    } catch (e) {
      next(e);
    }
  }

  async deleteOnePet(req, res, next) {
    try {
      const userId = req.user.id;
      await PetService.deletePet(req.params.id, userId);
      res.status(204).send();
    } catch (e) {
      next(e);
    }
  }
}

export default new PetController();
