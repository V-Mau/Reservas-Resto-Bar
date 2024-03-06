// * paso 10-1 = CredentialService.

import { credentialModel } from "../config/repository";
import { createCredentialDto } from "../Dto/ICredentialDto";
import Credential from "../entities/Credential";


export const credentialService = async (createCredentialDto: createCredentialDto): Promise <Credential> => {
    const newCredential: Credential = credentialModel.create(createCredentialDto);
    await credentialModel.save(newCredential);
    return newCredential;
};

export const validateCredential = async (validateCredentialDto: createCredentialDto): Promise<Credential> => {

    const { username, password } = validateCredentialDto;
    const credential: Credential | null = await credentialModel.findOneBy({username});

    if (!credential) throw Error ('Usuario no encontrado.');
    if (credential.password !== password) throw Error ('Contraseña incorrecta.');
    return credential
};