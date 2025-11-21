import ApiError from '../errors/ApiError.js';
import ServiceRepository from '../repositories/ServiceRepository.js';

class ServiceService {
    async getAllServices() {
        return await ServiceRepository.findAll();
    }

    async getServiceById(id) {
        const service = await ServiceRepository.findById(id);
        if (!service) {
            throw ApiError.notFound('Услуга не найдена');
        }
        return service;
    }

   async createService(serviceData) {
        const { name, price, image } = serviceData;

        if (!name || !price || !image) {
            throw ApiError.badRequest('Заполнены не все поля');
        }

        const existingService = await ServiceRepository.findByName(name);
        if (existingService) {
            throw ApiError.conflict('Услуга с таким наименованием уже существует');
        }

        const newService = await ServiceRepository.create(serviceData);
        return newService;
    }  

    
    async deleteService(id) {
        const service = await ServiceRepository.findById(id);

        if (!service) {
            throw ApiError.notFound('Услуга не найдена');
        }

        return ServiceRepository.delete(id);
    }
}

export default new ServiceService();