import 'dotenv/config';
import * as models from '../models/index.js';

// Роли
await models.Role.findOrCreate({ where: { name: 'ADMIN' } });
await models.Role.findOrCreate({ where: { name: 'USER' } });

// Виды животных (Species)
const [dogSpecies] = await models.Species.findOrCreate({ 
  where: { name: 'Собака' } 
});

const [catSpecies] = await models.Species.findOrCreate({ 
  where: { name: 'Кошка' } 
});

// Типы животных (AnimalType)
await models.AnimalType.findOrCreate({
  where: { name: 'Кот', speciesId: catSpecies.id }
});

await models.AnimalType.findOrCreate({
  where: { name: 'Кошка', speciesId: catSpecies.id }
});

await models.AnimalType.findOrCreate({
  where: { name: 'Кобель', speciesId: dogSpecies.id }
});

await models.AnimalType.findOrCreate({
  where: { name: 'Сука', speciesId: dogSpecies.id }
});

// Породы (Breed)
// Для кошек
await models.Breed.findOrCreate({
  where: { name: 'Беспородная', speciesId: catSpecies.id }
});
await models.Breed.findOrCreate({
  where: { name: 'Британская', speciesId: catSpecies.id }
});
await models.Breed.findOrCreate({
  where: { name: 'Шотландская', speciesId: catSpecies.id }
});
await models.Breed.findOrCreate({
  where: { name: 'Мейн-кун', speciesId: catSpecies.id }
});
await models.Breed.findOrCreate({
  where: { name: 'Сиамская', speciesId: catSpecies.id }
});
await models.Breed.findOrCreate({
  where: { name: 'Персидская', speciesId: catSpecies.id }
});

// Для собак
await models.Breed.findOrCreate({
  where: { name: 'Беспородная', speciesId: dogSpecies.id }
});
await models.Breed.findOrCreate({
  where: { name: 'Лабрадор', speciesId: dogSpecies.id }
});
await models.Breed.findOrCreate({
  where: { name: 'Немецкая овчарка', speciesId: dogSpecies.id }
});
await models.Breed.findOrCreate({
  where: { name: 'Хаски', speciesId: dogSpecies.id }
});
await models.Breed.findOrCreate({
  where: { name: 'Йоркширский терьер', speciesId: dogSpecies.id }
});
await models.Breed.findOrCreate({
  where: { name: 'Чихуахуа', speciesId: dogSpecies.id }
});

// Статусы
await models.Status.findOrCreate({ where: { name: 'Новая' } });
await models.Status.findOrCreate({ where: { name: 'Завершена' } });
await models.Status.findOrCreate({ where: { name: 'В процессе' } });
await models.Status.findOrCreate({ where: { name: 'Отменена' } });

// Клиника
await models.Clinic.findOrCreate({
  where: {
    name: 'Центр льготной стерилизации',
    address: 'Свободина 7'
  }
});

console.log('✅ Seed успешно выполнен!');
