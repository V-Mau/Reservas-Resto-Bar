import { Request, Response } from "express";
import { getAllUsersService, getUserByIdService, userLoginService, userRegisterService } from "../service/userService";
import { IUser } from "../interface/IUser";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: IUser[] = await getAllUsersService();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
// *--------------------------------------------------------------------

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const lookingUser = await getUserByIdService(Number(id));
        if (!lookingUser) {
            res.status(404).json({ message: "Usuario incorrecto" });
            return;
        }
        res.status(200).json(lookingUser);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
// *-------------------------------------------------------------------

export const userRegister = async (req: Request, res: Response) => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const newUser: IUser = await userRegisterService({
            name, email, birthdate, nDni, username, password
        });
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
// *-------------------------------------------------------------------

export const userLogin = async (req: Request, res: Response) => {
    await userLoginService(req, res);
};
