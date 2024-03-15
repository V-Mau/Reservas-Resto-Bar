import { credentialService } from './credentialService';
import { userModel } from '../config/repository';
import Credential from '../entities/Credential';
import User from '../entities/User';
import { createUserDto } from '../Dto/IUserDto';




export const getAllUsersService = async (): Promise<User[]> => {
    const allUsers: User[] = await userModel.find({
        relations: { bookings: true },
    })
    return allUsers;

};

export const getUserByIdService = async (id: number): Promise<User | null> => {
    const foundUser: User | null = await userModel.findOne({
        where: { id },
        relations: ['bookings']
    });
    if (!foundUser) {
        throw new Error('Usuario no encontrado');
    }
    return foundUser;


};




export const createUserService = async (createUserDto: createUserDto  ): Promise<User> => {
    const newUser: User = userModel.create(createUserDto);
    // console.log("Nuevo usuario creado en el servicio:", newUser);
    
    const newCredential: Credential = await credentialService({
        username: createUserDto.username,
        password: createUserDto.password
    });
    

    
    await userModel.save(newUser);
    newUser.credential = newCredential;
    await userModel.save(newUser);
    
    return newUser;


}

export const userLoginService = async (credentiaId: number): Promise<User | null> => {
    const foundUser: User | null = await userModel.findOneBy({
        credential: { id: credentiaId }
});
    return foundUser;
}