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
const credentials = [
    { id: 1, username: 'pedro', password: '123' },
    { id: 2, username: 'juan', password: '123' },
    { id: 3, username: 'luis', password: '123' },
    { id: 4, username: 'maria', password: '123' },
    { id: 5, username: 'jose', password: '123' },
    { id: 6, username: 'pepe', password: '123' },
];
let id_credential = 1;
const credentialService = (createCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = {
        id: id_credential++,
        username: createCredentialDto.username,
        password: createCredentialDto.password
    };
    credentials.push(newCredential);
    return newCredential;
});
exports.credentialService = credentialService;
const validateCredential = (validateCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = validateCredentialDto;
    const lookingCredential = credentials.find(credential => credential.username === username);
    if (!lookingCredential)
        throw Error('Usuario no encontrado.');
    if (lookingCredential.password !== password)
        throw Error('Contraseña incorrecta.');
    return lookingCredential;
});
exports.validateCredential = validateCredential;
