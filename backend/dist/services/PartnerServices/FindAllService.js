"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Partner_1 = __importDefault(require("../../models/Partner"));
const FindAllService = async () => {
    const records = await Partner_1.default.findAll({
        order: [["name", "ASC"]]
    });
    return records;
};
exports.default = FindAllService;
