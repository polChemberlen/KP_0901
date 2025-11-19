import AnimalTypeService from "../services/AnimalTypeService.js";

class AnimalTypeController {
    async getAnimalTypes(req, res, next) {
        try {
            const animalTypes = await AnimalTypeService.getAllAnimalTypes();
            res.status(200).json(animalTypes);
        } catch (e) {
            next(e);
        }
    }

    async getOneAnimalType(req, res, next) {
        try {
            const animalType = await AnimalTypeService.getAnimalTypeById(req.params.id);
            res.status(200).json(animalType);
        } catch (e) {
            next(e);
        }
    }

    async createOneAnimalType(req, res, next) {
        try {
            const newAnimalType = await AnimalTypeService.createAnimalType(req.body);
            res.status(201).json(newAnimalType);
        } catch (e) {
            next(e);
        }
    }

    async updateOneAnimalType(req, res, next) {
        try {
            const updateAnimalType = await AnimalTypeService.updateAnimalType(req.params.id, req.body);
            res.status(200).json(updateAnimalType);
        } catch (e) {
            next(e);
        }
    }

    async deleteOneAnimalType(req, res, next) {
        try {
            await AnimalTypeService.deleteAnimalType(req.params.id);
            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }

}

export default new AnimalTypeController();
