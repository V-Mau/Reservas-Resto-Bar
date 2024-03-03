import { Request, Response } from 'express';
import { IUserDto } from '../dto/IUserDto';
import { ICredential } from '../interface/ICredential';
import { IUser } from '../interface/IUser';
import { credentialService } from './credentialService';

const users: IUser[] = [
    { id: 1, name: 'pedro', email: 'pepe@mail.com', birthdate: '20-07-1990', nDni: '292345678', credentials_id: 101 },
    { id: 2, name: 'juan', email: 'juan@mail.com', birthdate: '20-11-1985', nDni: '33345678', credentials_id: 102 },
    { id: 3, name: 'luis', email: 'luis@mail.com', birthdate: '20-01-2000', nDni: '22345678', credentials_id: 103 },
    { id: 4, name: 'maria', email: 'maria@mail.com', birthdate: '24-12-2010', nDni: '52345678', credentials_id: 104 },
];

let user_id: number = 1; 

export const getAllUsersService = async (): Promise<IUser[]> => {
    return users;
};
// *--------------------------------------------------------------------
export const getUserByIdService = async (id: number): Promise<IUser | null> => {

    const lookingUser: IUser | undefined = users.find((user) => user.id === id);
    if (!lookingUser) {
        return null;
    }
    return lookingUser;
};
// *--------------------------------------------------------------------

export const userRegisterService = async (createUserDto: IUserDto): Promise<IUser> => {
    const newCredential: ICredential = await credentialService({
        username: createUserDto.username,
        password: createUserDto.password,
    });

    const newUser: IUser = {
        id: ++user_id,
        name: createUserDto.name,
        email: createUserDto.email,
        birthdate: createUserDto.birthdate,
        nDni: createUserDto.nDni,
        credentials_id: newCredential.id,
    };

    users.push(newUser);
    return newUser;
};
// *--------------------------------------------------------------------

export const userLoginService = async (req: Request, res: Response) => {
    
    
        const { username, password } = req.body;
        if(!username || !password){
            return res 
        .status(400)
        .json({message: 'Faltan datos para el inicio de sesion'});
        
        }
        const validatedCredential = await credentialService({ username, password});

        const lookingUser = users.find((user) => user.credentials_id === validatedCredential.id);

        if(lookingUser) {
            return res
            .status(200)
            .json(lookingUser);
        }

        return res.status(500).json({message: 'Datos incorrectos'});  

    
     

};
