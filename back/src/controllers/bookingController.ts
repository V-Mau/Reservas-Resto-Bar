
import { Request, Response } from "express";
import { cancelBookingService, getAllBookingService, getBookingByIdService,  scheduleBookingService } from "../service/bookingService";
import Booking from "../entities/Booking";




export const getAllBooking = async (req:Request,res:Response) => {
    
    try {
        const bookings : Booking[] = await getAllBookingService();
        res.status(200).json(bookings); 
    }catch (error:any) {
        res.status(500).json({message: error.message});
    }
    
    
   
};

export const getBookingById = async (req:Request,res:Response) => {
    const {id} = req.params;
    console.log('Solicitud recibida en /bookings/:id. ID de reserva:', id);
    
    try {
        const bookingId: number = Number(id);
        const lookingBooking: Booking | null = await getBookingByIdService(bookingId);
        if(!lookingBooking){ return res.status(404).json({message: "Reserva no encontrada"});}
       
        res.status(200).json(lookingBooking);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
        
     } 
};

export const scheduleBooking = async (req: Request,res:Response) => {
    try {
        const { date, time, user_id, status, description} = req.body;
        console.log('Solicitud recibida en /bookings. Datos de la reserva:', date, time, user_id, status, description);
        const newBooking : Booking = await scheduleBookingService({
            date, time, user_id, status, description,
            
        });

            res.status(201).json(newBooking);
            
        }catch (error:any) {
            res.status(400).json({message: error.message});
        }
};



export const cancelBooking = async (req:Request,res:Response) => {
    const {id} = req.params;
    try{
       await cancelBookingService(Number(id));
       res.status(200).json({message: "Reserva cancelada"});
    }catch (error:any){
       res.status(404).json({message: error.message});
    }

 }





