// bookingService.ts

import { createBookingDto } from "../Dto/IBookingDto";
import { bookingModel, userModel } from "../config/repository";
import Booking from "../entities/Booking";
import User from "../entities/User";


export const getAllBookingService = async (): Promise<Booking[]> => {
    const allBookings: Booking[] = await bookingModel.find();
    return allBookings;
};

export const getBookingByIdService = async (appId: number): Promise<Booking | null> => {
    const lookingBooking: Booking | null = await bookingModel.findOneBy({
        id: appId
        
    });
    if (!lookingBooking) throw Error('Reserva no encontrada');
    return lookingBooking;
};

export const scheduleBookingService = async (createBookingDto: createBookingDto): Promise<Booking> => {
    console.log("Datos recibidos en el servicio:", createBookingDto);
    const newBooking: Booking = bookingModel.create(createBookingDto);
    await bookingModel.save(newBooking);
   const user: User | null = await userModel.findOneBy({
        id: createBookingDto.user_id

        
   });
   if(!user) throw Error('Usuario no encontrado');
   newBooking.user = user;

   await bookingModel.save(newBooking);
   return newBooking;
};



export const cancelBookingService = async (appId: number): Promise<void> => {
    const cancelBooking: Booking | null = await bookingModel.findOneBy({
        id: appId,
    });
    if(!cancelBooking) throw Error('Reserva no encontrada');
    cancelBooking.status = 'cancelled';
    await bookingModel.save(cancelBooking);
}
