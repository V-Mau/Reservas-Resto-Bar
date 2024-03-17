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
exports.userLoginService = exports.createUserService = exports.getUserByIdService = exports.getAllUsersService = void 0;
const credentialService_1 = require("./credentialService");
const repository_1 = require("../config/repository");
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield repository_1.userModel.find({
        relations: { bookings: true },
    });
    return allUsers;
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield repository_1.userModel.findOne({
        where: { id },
        relations: ['bookings']
    });
    if (!foundUser) {
        throw new Error('Usuario no encontrado');
    }
    return foundUser;
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = repository_1.userModel.create(createUserDto);
    const newCredential = yield (0, credentialService_1.credentialService)({
        username: createUserDto.username,
        password: createUserDto.password
    });
    yield repository_1.userModel.save(newUser);
    newUser.credential = newCredential;
    yield repository_1.userModel.save(newUser);
    return newUser;
});
exports.createUserService = createUserService;
const userLoginService = (credentiaId) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield repository_1.userModel.findOneBy({
        credential: { id: credentiaId }
    });
    return foundUser;
});
exports.userLoginService = userLoginService;
