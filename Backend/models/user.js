import sequelize from "../configs/db.js";
import { DataTypes } from "sequelize";

const Role = sequelize.define('Role',
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

const User = sequelize.define('User',
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

        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        role: {
            type: DataTypes.STRING,
            defaultValue: "USER",
            allowNull: false,
            references: {
                model: Role,
                key: 'name'
            }
        }
    }
);

User.belongsTo(Role, {
    foreignKey: 'role'
});

Role.hasMany(User, {
    foreignKey: 'role'
});

export {
    User,
    Role
}
