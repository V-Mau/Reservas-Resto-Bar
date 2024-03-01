"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userRegister = exports.getUserById = exports.getAllUsers = void 0;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res
        .status(200)
        .send('Obtener el listado de todos los usuarios.');
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res
        .status(200)
        .send(' Obtener el detalle de un usuario específico.');
});
exports.getUserById = getUserById;
const userRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res
        .status(200)
        .send(`Registro de un nuevo usuario`);
});
exports.userRegister = userRegister;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res
        .status(200)
        .send('Login del usuario a la aplicación.');
});
exports.userLogin = userLogin;
