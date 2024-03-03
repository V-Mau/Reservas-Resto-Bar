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
exports.userLoginService = exports.userRegisterService = exports.getUserByIdService = exports.getAllUsersService = void 0;
const credentialService_1 = require("./credentialService");
const users = [
    { id: 1, name: 'pedro', email: 'pepe@mail.com', birthdate: '20-07-1990', nDni: '292345678', credentials_id: 101 },
    { id: 2, name: 'juan', email: 'juan@mail.com', birthdate: '20-11-1985', nDni: '33345678', credentials_id: 102 },
    { id: 3, name: 'luis', email: 'luis@mail.com', birthdate: '20-01-2000', nDni: '22345678', credentials_id: 103 },
    { id: 4, name: 'maria', email: 'maria@mail.com', birthdate: '24-12-2010', nDni: '52345678', credentials_id: 104 },
];
let user_id = 1;
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return users;
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const lookingUser = users.find((user) => user.id === id);
    if (!lookingUser) {
        return null;
    }
    return lookingUser;
});
exports.getUserByIdService = getUserByIdService;
const userRegisterService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = yield (0, credentialService_1.credentialService)({
        username: createUserDto.username,
        password: createUserDto.password,
    });
    const newUser = {
        id: ++user_id,
        name: createUserDto.name,
        email: createUserDto.email,
        birthdate: createUserDto.birthdate,
        nDni: createUserDto.nDni,
        credentials_id: newCredential.id,
    };
    users.push(newUser);
    return newUser;
});
exports.userRegisterService = userRegisterService;
const userLoginService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .json({ message: 'Faltan datos para el inicio de sesion' });
    }
    const validatedCredential = yield (0, credentialService_1.credentialService)({ username, password });
    const lookingUser = users.find((user) => user.credentials_id === validatedCredential.id);
    if (lookingUser) {
        return res
            .status(200)
            .json(lookingUser);
    }
    return res.status(500).json({ message: 'Datos incorrectos' });
});
exports.userLoginService = userLoginService;
