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
exports.validateCredential = exports.credentialService = void 0;
const repository_1 = require("../config/repository");
const credentialService = (createCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = repository_1.credentialModel.create(createCredentialDto);
    yield repository_1.credentialModel.save(newCredential);
    return newCredential;
});
exports.credentialService = credentialService;
const validateCredential = (validateCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = validateCredentialDto;
    const credential = yield repository_1.credentialModel.findOneBy({ username });
    if (!credential)
        throw Error('Usuario no encontrado.');
    if (credential.password !== password)
        throw Error('Contraseña incorrecta.');
    return credential;
});
exports.validateCredential = validateCredential;
