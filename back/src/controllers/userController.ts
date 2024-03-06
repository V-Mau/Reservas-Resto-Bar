import { Request, Response } from "express";
import { getAllUsersService, getUserByIdService,  userLoginService,  userRegisterService } from "../service/userService";
import User from "../entities/User";
import { validateCredential } from "../service/credentialService";


export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getAllUsersService();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
// *--------------------------------------------------------------------

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const lookingUser: User = await getUserByIdService(Number(id));
        if (!lookingUser) {
            res.status(404).json({ message: "Usuario incorrecto" });
            return;
        }
        res.status(200).json(lookingUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
// *-------------------------------------------------------------------

export const userRegister = async (req: Request, res: Response) => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const newUser: User = await userRegisterService({
            name, email, birthdate, nDni, username, password
        });
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
// *-------------------------------------------------------------------

export const userLogin = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    
    try {
        const credential = await validateCredential({ username, password });
        const user = await userLoginService(credential.id);
        res
        .status(200)
        .json({message: "Login exitoso", user});
        
    } catch (error: any) {
        res
        .status(400)
        .json({message: error.message});
    }

    
};