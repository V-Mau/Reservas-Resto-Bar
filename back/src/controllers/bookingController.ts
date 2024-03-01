// * Paso 8 = que paso 6 (bookingController)
import { Request, Response } from "express";

export const getAllBooking = async (req:Request,res:Response) => {
    res
    .status(200)
    .send('Obtener todo el listado de los turnos de todos los usuarios.')
};
export const getBookingDetails = async (req:Request,res:Response) => {
    res
    .status(200)
    .send('Obtener el detalle de un turno específico.')
};
export const scheduleBooking = async (req: Request,res:Response) => {
    res
    .status(200)
    .send('Agendar un nuevo turno');
};
export const cancelBooking = async (req:Request,res:Response) => {
    res
    .status(200)
    .send('Cambiar el estatus de una reserva a "cancelled"')
};