import 'dotenv/config';
import * as models from '../models/index.js';

await models.Role.findOrCreate({ where: { name: 'ADMIN' } });
await models.Role.findOrCreate({ where: { name: 'USER' } });

await models.Species.findOrCreate({ where: { name: 'Собака' } });

await models.Status.findOrCreate({ where: { name: 'Новая' } });
await models.Status.findOrCreate({ where: { name: 'Завершена' } });

await models.Clinic.findOrCreate({
    where: {
        name: 'Центр льготной стерелизации',
        address: 'Свободина 9'
    }
});

await models.Service.findOrCreate({
    where: {
        name: '1',
        description: '1',
        price: '1.11',
        image: '1',
        isActive: true
    }
})