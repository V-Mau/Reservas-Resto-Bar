import { cancelBooking, getAllBooking, getBookingDetails } from "../controllers/bookingController";
import { IBooking } from "../interface/IBooking";
import { IBookingDto } from "../dto/IBookingDto";


const booking: IBooking[] = [
    { id: 1, date: '10-01-2022', time: '10:00', user_id: 1, status: 'active', description: 'Reserva guardada' },
    { id: 2, date: '10-01-2022', time: '11:00', user_id: 1, status: 'active', description: 'Reserva guardada' },
    { id: 3, date: '10-01-2022', time: '12:00', user_id: 1, status: 'cancelled', description: 'Reserva cancelada' },
    { id: 4, date: '10-01-2022', time: '13:00', user_id: 1, status: 'active', description: 'booking description' },
    { id: 5, date: '10-01-2022', time: '14:00', user_id: 1, status: 'cancelled', description: 'Reserva cancelada' },
    { id: 6, date: '10-01-2022', time: '15:00', user_id: 1, status: 'active', description: 'Reserva guardada' }
];


export const getAllBookingService = async (): Promise<IBooking[]> => {
    return booking;
}

// *Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.

export const getBookingDetailsService = async (id: number): Promise<IBooking | null> => {
    const lookingBooking = booking.find(booking => booking.id === id);
    if (!lookingBooking) {
        return null;
    }
    return lookingBooking;
}

// *Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 

export const scheduleBookingService = async (createBooking: IBooking): Promise<IBooking> => {
    const newBooking: IBooking = {
        id: booking.length + 1,
        date: createBooking.date,
        time:createBooking.time,
        user_id: createBooking.user_id,
        status: 'active' || 'cancelled',
        description: createBooking.description


    };
    booking.push(newBooking);
    return newBooking;
    
}

// *Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.

export const cancelBookingService = async (id: number): Promise<IBooking | undefined> => {
    const cancelBooking: IBooking | undefined = booking.find(booking => booking.id === id);
    if (cancelBooking) {
        cancelBooking.status = 'cancelled';
        return cancelBooking;
    } else{
        throw Error('Reserva no encontrada');
    }
}