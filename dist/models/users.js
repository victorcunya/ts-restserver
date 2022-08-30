"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const sequelize_1 = require("sequelize");
class users extends sequelize_1.Model {
    static initModel(sequelize) {
        return users.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
                unique: "users_email_key"
            },
            state: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'users',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "users_email_key",
                    unique: true,
                    fields: [
                        { name: "email" },
                    ]
                },
                {
                    name: "users_pkey",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
    }
}
exports.users = users;
//# sourceMappingURL=users.js.map