import ServiceService from "../services/ServiceService.js";
import FileService from "../services/FileService.js";

class ServiceController {
    async getServices(req, res, next) {
        try {
            const services = await ServiceService.getAllServices();
            res.status(200).json(services);
        } catch (e) {
            next(e);
        }
    }

    async getOneService(req, res, next) {
        try {
            const service = await ServiceService.getServiceById(req.params.id);
            res.status(200).json(service);
        } catch (e) {
            next(e);
        }
    }

    async createOneService(req, res, next) {
        try {
            if (!req.files || !req.files.image) {
                 return next(ApiError.badRequest('Изображение не загружено'));
            }

            const { image } = req.files;

            const fileName = await FileService.saveFile(image);

            const serviceData = { 
                ...req.body, 
                image: fileName 
            };

            const newService = await ServiceService.createService(serviceData);

            return res.status(201).json(newService);
        } catch (e) {
            next(e);
        }
    }

    async deleteOneService(req, res, next) {
        try {
            await ServiceService.deleteService(req.params.id);
            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }

}

export default new ServiceController();


