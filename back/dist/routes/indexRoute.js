"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookingRoute_1 = __importDefault(require("./bookingRoute"));
const userRoute_1 = __importDefault(require("./userRoute"));
const indexRoute = (0, express_1.Router)();
indexRoute.use('/users', userRoute_1.default);
indexRoute.use('/bookings', bookingRoute_1.default);
exports.default = indexRoute;
