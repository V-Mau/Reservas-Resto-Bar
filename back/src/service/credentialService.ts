// * paso 10-1 = CredentialService.

import { ICredentialDto } from "../dto/ICredentialDto";
import { ICredential } from "../interface/ICredential";




const credentials: ICredential[] = [
    { id: 1, username: 'pedro', password: '123'},
    { id: 2, username: 'juan', password: '123'},
    { id: 3, username: 'luis', password: '123'},
    { id: 4, username: 'maria', password: '123'},
    { id: 5, username: 'jose', password: '123'},
    { id: 6, username: 'pepe', password: '123'},
]; 
let id_credential: number = 1;

export const credentialService = async (createCredentialDto: ICredentialDto): Promise <ICredential> => {
    const newCredential: ICredential = {
        id: id_credential++,
        username: createCredentialDto.username,
        password: createCredentialDto.password
    };
    credentials.push(newCredential);
    return newCredential;
};

export const validateCredential = async (validateCredentialDto: ICredentialDto): Promise<ICredential> => {
    const { username, password } = validateCredentialDto;

    const lookingCredential = credentials.find(credential => credential.username === username);

    if (!lookingCredential) throw Error ('Usuario no encontrado.');

    if (lookingCredential.password !== password) throw Error ('Contraseña incorrecta.');
    
    return lookingCredential
    

   
};