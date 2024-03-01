"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexRoute = (0, express_1.Router)();
const userRoute_1 = __importDefault(require("./userRoute"));
const bookingRoute_1 = __importDefault(require("./bookingRoute"));
indexRoute.use('/users', userRoute_1.default);
indexRoute.use('/booking', bookingRoute_1.default);
exports.default = indexRoute;
