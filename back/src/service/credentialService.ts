 // * paso 10-1 = CredentialService.
import { credentialModel } from "../config/repository";
import { createCredentialDto, validateCredentialDto } from "../Dto/ICredentialDto";
import Credential from "../entities/Credential";
  

export const credentialService = async (createCredentialDto: createCredentialDto): Promise <Credential> => {
    const newCredential: Credential = credentialModel.create(createCredentialDto);
    console.log("Nueva credencial creada en el servicio:", newCredential);
    
    await credentialModel.save(newCredential);
    console.log('Credencial guardada:', newCredential);
    return newCredential;
};


export const validateCredential = async (validateCredentialDto: validateCredentialDto): Promise <Credential> => {

    const {username, password} = validateCredentialDto;
    const foundCredential: Credential | null = await credentialModel.findOneBy({username});
    if(!foundCredential) throw new Error("Usuario no encontrado");
    if( password !== foundCredential.password) throw new Error("Password Incorrecto");
    return foundCredential;
};