"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.addColumn("Contacts", "urlPicture", {
            type: sequelize_1.DataTypes.STRING,
            defaultValue: "",
            allowNull: true
        });
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn("Contacts", "urlPicture");
    }
};
