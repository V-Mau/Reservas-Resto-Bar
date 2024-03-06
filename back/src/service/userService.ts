import { credentialService } from './credentialService';
import { usersModel } from '../config/repository';
import Credential from '../entities/Credential';
import User from '../entities/User';
import { createUserDto } from '../Dto/IUserDto';


export const getAllUsersService = async (): Promise<User[]> => {
    const allUsers: User[] = await usersModel.find({
        relations: { bookings: true },
    })
    return allUsers;

};

export const getUserByIdService = async (id: number): Promise<User> => {
    const lookingUser: User | null = await usersModel.findOne({
        where:{id}, relations: { bookings: true }
    })
    if(!lookingUser) throw Error('Usuario no encontrado');
    return lookingUser;
};



export const userRegisterService = async (createUserDto: createUserDto  ): Promise<User> => {

    const newUser: User = usersModel.create(createUserDto);
    const newCredential: Credential = await credentialService({
        username: createUserDto.username,
        password: createUserDto.password
    });
    await usersModel.save(newUser);
    newUser.credentials = newCredential;
    await usersModel.save(newUser);
    return newUser;


}


export const userLoginService = async (credentialsId: number): Promise< User | null> => {
    
    const foundUser: User | null = await usersModel.findOneBy({
        credentials: { id : credentialsId }
    });
    return foundUser;
    
};
