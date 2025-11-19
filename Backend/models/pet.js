import sequelize from "../configs/db.js";
import { DataTypes } from "sequelize";
import { User } from "./user.js";

const Species = sequelize.define('Species',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        timestamps: false
    }
);

const AnimalType = sequelize.define('AnimalType',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        speciesId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Species,
                key: 'id'
            }
        }
    }
);

const Breed = sequelize.define('Breed',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        speciesId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Species,
                key: 'id'
            }
        }
    }
);

const Pet = sequelize.define('Pet',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
        animalTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: AnimalType,
                key: 'id'
            }
        },
        breedId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Breed,
                key: 'id'
            }
        }

    }
);

//вид животного
AnimalType.belongsTo(Species, {
    foreignKey: 'speciesId'
});

Species.hasMany(AnimalType, {
    foreignKey: 'speciesId'
});

//порода
Breed.belongsTo(Species, {
    foreignKey: 'speciesId'
});

Species.hasMany(Breed, {
    foreignKey: 'speciesId'
});

//животное
Pet.belongsTo(AnimalType, {
    foreignKey: 'animalTypeId'
});

AnimalType.hasMany(Pet, {
    foreignKey: 'animalTypeId'
});

Pet.belongsTo(Breed, {
    foreignKey: 'breedId'
});

Breed.hasMany(Pet, {
    foreignKey: 'breedId'
});

Pet.belongsTo(User, {
    foreignKey: 'userId'
});

User.hasMany(Pet, {
    foreignKey: 'userId'
});


export {
    Species,
    AnimalType,
    Breed,
    Pet
}

