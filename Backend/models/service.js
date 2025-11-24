import sequelize from "../configs/db.js";
import { DataTypes } from "sequelize";
import { User } from "./user.js";
import { Pet } from "./pet.js";

const Service = sequelize.define('Service',
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
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }
);

const Status = sequelize.define('Status',
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
    }
);

const Clinic = sequelize.define('Clinic',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

const Appointment = sequelize.define('Appointment',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
        petId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Pet,
                key: 'id'
            }
        },
        appointmentDateTime: {
            type: DataTypes.DATE,
            allowNull: true
        },
        clinicId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Clinic,
                key: 'id'
            }
        },
        totalCost: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        statusId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            references: {
                model: Status,
                key: 'id'
            }
        }
    }
);

const AppointmentService = sequelize.define('AppointmentService',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        appointmentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Appointment,
                key: 'id'
            }
        },
        serviceId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Service,
                key: 'id'
            }
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }
);

Appointment.belongsTo(User, {
    foreignKey: 'userId'
});

User.hasMany(Appointment, {
    foreignKey: 'userId'
});

Appointment.belongsTo(Status, {
    foreignKey: 'statusId'
});

Status.hasMany(Appointment, {
    foreignKey: 'statusId'
});

Appointment.belongsTo(Pet, {
    foreignKey: 'petId'
});

Pet.hasMany(Appointment, {
    foreignKey: 'petId'
});

Appointment.belongsTo(Clinic, {
    foreignKey: 'clinicId'
});

Clinic.hasMany(Appointment, {
    foreignKey: 'clinicId'
});

Service.belongsToMany(Appointment, {
    through: AppointmentService
});
Appointment.belongsToMany(Service, {
    through: AppointmentService
});


export {
    Service,
    Status,
    Clinic,
    Appointment,
    AppointmentService
}