import SpeciesService from "../services/SpeciesService.js";

class SpeciesController {
    async getSpecies(req, res, next) {
        try {
            const species = await SpeciesService.getAllSpecies();
            res.status(200).json(species);
        } catch (e) {
            next(e);
        }
    }

    async getOneSpecies(req, res, next) {
        try {
            const species = await SpeciesService.getSpeciesById(req.params.id);
            res.status(200).json(species);
        } catch (e) {
            next(e);
        }
    }

    async createOneSpecies(req, res, next) {
        try {
            const newSpecies = await SpeciesService.createSpecies(req.body);
            res.status(201).json(newSpecies);
        } catch (e) {
            next(e);
        }
    }

    async updateOneSpecies(req, res, next) {
        try {
            const updateSpecies = await SpeciesService.updateSpecies(req.params.id, req.body);
            res.status(200).json(updateSpecies);
        } catch (e) {
            next(e);
        }
    }

    async deleteOneSpecies(req, res, next) {
        try {
            await SpeciesService.deleteSpecies(req.params.id);
            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }

}

export default new SpeciesController();