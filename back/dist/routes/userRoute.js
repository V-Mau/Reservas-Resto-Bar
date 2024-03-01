"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userRoute = (0, express_1.Router)();
userRoute.get('/', userController_1.getAllUsers);
userRoute.get('/:id', userController_1.getUserById);
userRoute.post('/register', userController_1.userRegister);
userRoute.post('/login', userController_1.userLogin);
exports.default = userRoute;
