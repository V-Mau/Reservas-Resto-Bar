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
const repository_1 = require("../config/repository");
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield repository_1.usersModel.find({
        relations: { bookings: true },
    });
    return allUsers;
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const lookingUser = yield repository_1.usersModel.findOne({
        where: { id }, relations: { bookings: true }
    });
    if (!lookingUser)
        throw Error('Usuario no encontrado');
    return lookingUser;
});
exports.getUserByIdService = getUserByIdService;
const userRegisterService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = repository_1.usersModel.create(createUserDto);
    const newCredential = yield (0, credentialService_1.credentialService)({
        username: createUserDto.username,
        password: createUserDto.password
    });
    yield repository_1.usersModel.save(newUser);
    newUser.credentials = newCredential;
    yield repository_1.usersModel.save(newUser);
    return newUser;
});
exports.userRegisterService = userRegisterService;
const userLoginService = (credentialsId) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield repository_1.usersModel.findOneBy({
        credentials: { id: credentialsId }
    });
    return foundUser;
});
exports.userLoginService = userLoginService;
