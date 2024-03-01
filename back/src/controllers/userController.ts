// * Paso 6 = Controlador ( userController)
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
    res
    .status(200)
    // .json({ message: 'GET /user'})
    .send('Obtener el listado de todos los usuarios.')
};

export const getUserById = async (req: Request, res: Response) => {
    res
    .status(200)
    // .json({ message: 'GET /user'})
    .send(' Obtener el detalle de un usuario específico.')
};

export const userRegister = async (req: Request, res: Response) => {
    res
    .status(200)
    // .json({ message: 'POST /users/register'})
    .send(`Registro de un nuevo usuario`);
    
    
};

export const userLogin = async (req: Request, res: Response) => {

    res
    .status(200)
    // .json({ message: 'POST /users/login'})
    .send('Login del usuario a la aplicación.')
}; 
