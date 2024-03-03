// * Paso 8 = que paso 6 (bookingController)
import { Request, Response } from "express";
import { IBooking } from "../interface/IBooking";
import { cancelBookingService, getAllBookingService, getBookingDetailsService, scheduleBookingService } from "../service/bookingService";



export const getAllBooking = async (req:Request,res:Response) => {
    
    try {
        const booking : IBooking[] = await getAllBookingService();
        res.status(200).json(booking); 
    }catch (error:any) {
        res.status(500).json({message: error.message});
    }
    
    
   
};
// *-----------------------------------------------------------------
export const getBookingDetails = async (req:Request,res:Response) => {
    const {id} = req.params;
    try {
        const lookingBooking = await getBookingDetailsService(Number(id));
        if (!lookingBooking) {
            res.status(400).json({ message: "Reserva no realizada" });
            return;
        }
        res.status(200).json(lookingBooking);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
        
    }
};
// *-----------------------------------------------------------------
export const scheduleBooking = async (req: Request,res:Response) => {
    try {
        const { date, time, user_id, status, description} = req.body;
        const newBooking : IBooking = await scheduleBookingService({
            date, time, user_id, status, description,
            id: 0
        });

            res.status(200).json(newBooking);
            
        }catch (error:any) {
            res.status(400).json({message: error.message});
        }
};

// *-----------------------------------------------------------------

export const cancelBooking = async (req:Request,res:Response) => {
   try {
    const booking_id: number = Number(req.params.id);
    const result = await cancelBookingService(booking_id);
    res.status(200).json(result);
   } catch (error:any) {
    res.status(404).json({message: error.message})
   }
};

