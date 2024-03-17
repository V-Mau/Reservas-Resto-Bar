"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../entities/User"));
const Credential_1 = __importDefault(require("../entities/Credential"));
const Booking_1 = __importDefault(require("../entities/Booking"));
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST || "localhost",
    port: Number(envs_1.DB_PORT) || 5432,
    username: envs_1.DB_USER,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    synchronize: true,
    logging: ["error"],
    entities: [User_1.default, Credential_1.default, Booking_1.default],
    subscribers: [],
    migrations: [],
});
