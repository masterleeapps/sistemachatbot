"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../../errors/AppError"));
const FlowBuilder_1 = require("../../models/FlowBuilder");
const DeleteFlowBuilderService = async (id) => {
    const flow = await FlowBuilder_1.FlowBuilderModel.findOne({
        where: { id: id }
    });
    if (!flow) {
        throw new AppError_1.default("ERR_NO_TICKET_FOUND", 404);
    }
    await flow.destroy();
    return flow;
};
exports.default = DeleteFlowBuilderService;