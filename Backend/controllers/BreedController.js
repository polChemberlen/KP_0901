import BreedService from "../services/BreedService.js";

class BreedController {
    async getBreeds(req, res, next) {
        try {
            const breeds = await BreedService.getAllBreeds();
            res.status(200).json(breeds);
        } catch (e) {
            next(e);
        }
    }

    async getOneBreed(req, res, next) {
        try {
            const breed = await BreedService.getBreedById(req.params.id);
            res.status(200).json(breed);
        } catch (e) {
            next(e);
        }
    }

    async createOneBreed(req, res, next) {
        try {
            const newBreed = await BreedService.createBreed(req.body);
            res.status(201).json(newBreed);
        } catch (e) {
            next(e);
        }
    }

    async updateOneBreed(req, res, next) {
        try {
            const updateBreed = await BreedService.updateBreed(req.params.id, req.body);
            res.status(200).json(updateBreed);
        } catch (e) {
            next(e);
        }
    }

    async deleteOneBreed(req, res, next) {
        try {
            await BreedService.deleteBreed(req.params.id);
            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }

}

export default new BreedController();
