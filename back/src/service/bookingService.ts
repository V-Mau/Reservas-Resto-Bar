// bookingService.ts

import { createBookingDto } from "../Dto/IBookingDto";
import { bookingModel, usersModel } from "../config/repository";
import Booking from "../entities/Booking";
import Credential from "../entities/Credential";
import { credentialService } from "./credentialService";

export const getAllBookingService = async (): Promise<Booking[]> => {
    const allBookings: Booking[] = await bookingModel.find({
        relations: { user: true },
    });
    return allBookings;
};

export const getBookingDetailsService = async (id: number): Promise<Booking | null> => {
    const lookingBooking: Booking | null = await bookingModel.findOne({
        where: { id },
        relations: { user: true },
    });
    if (!lookingBooking) throw Error('Reserva no encontrada');
    return lookingBooking;
};

export const scheduleBookingService = async (createBookingDto: createBookingDto): Promise<Booking> => {
    const user_id: number = createBookingDto.user_id;

    const bookingExists = await bookingModel.findOneBy({ user: { id: user_id } } );
    if (!bookingExists) throw Error('Usuario no encontrado.');

    const newBooking: Booking = bookingModel.create(createBookingDto);

    await bookingModel.save(newBooking);

    return newBooking;
};


export const cancelBookingService = async (id: number): Promise<Booking | undefined> => {
    const cancelBooking: Booking | null = await bookingModel.findOne({
        where: { id },
        relations: { user: true },
    });

    if (cancelBooking) {
        cancelBooking.status = 'cancelled';
        await bookingModel.save(cancelBooking);
        return cancelBooking;
    } else {
        throw Error('Reserva no encontrada');
    }
};
