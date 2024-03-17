"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingModel = exports.credentialModel = exports.userModel = void 0;
const Booking_1 = __importDefault(require("../entities/Booking"));
const Credential_1 = __importDefault(require("../entities/Credential"));
const User_1 = __importDefault(require("../entities/User"));
const data_source_1 = require("./data-source");
exports.userModel = data_source_1.AppDataSource.getRepository(User_1.default);
exports.credentialModel = data_source_1.AppDataSource.getRepository(Credential_1.default);
exports.bookingModel = data_source_1.AppDataSource.getRepository(Booking_1.default);
