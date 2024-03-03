"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelBookingService = exports.scheduleBookingService = exports.getBookingDetailsService = exports.getAllBookingService = void 0;
const booking = [
    { id: 1, date: '10-01-2022', time: '10:00', user_id: 1, status: 'active', description: 'Reserva guardada' },
    { id: 2, date: '10-01-2022', time: '11:00', user_id: 1, status: 'active', description: 'Reserva guardada' },
    { id: 3, date: '10-01-2022', time: '12:00', user_id: 1, status: 'cancelled', description: 'Reserva cancelada' },
    { id: 4, date: '10-01-2022', time: '13:00', user_id: 1, status: 'active', description: 'booking description' },
    { id: 5, date: '10-01-2022', time: '14:00', user_id: 1, status: 'cancelled', description: 'Reserva cancelada' },
    { id: 6, date: '10-01-2022', time: '15:00', user_id: 1, status: 'active', description: 'Reserva guardada' }
];
const getAllBookingService = () => __awaiter(void 0, void 0, void 0, function* () {
    return booking;
});
exports.getAllBookingService = getAllBookingService;
const getBookingDetailsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const lookingBooking = booking.find(booking => booking.id === id);
    if (!lookingBooking) {
        return null;
    }
    return lookingBooking;
});
exports.getBookingDetailsService = getBookingDetailsService;
const scheduleBookingService = (createBooking) => __awaiter(void 0, void 0, void 0, function* () {
    const newBooking = {
        id: booking.length + 1,
        date: createBooking.date,
        time: createBooking.time,
        user_id: createBooking.user_id,
        status: 'active' || 'cancelled',
        description: createBooking.description
    };
    booking.push(newBooking);
    return newBooking;
});
exports.scheduleBookingService = scheduleBookingService;
const cancelBookingService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cancelBooking = booking.find(booking => booking.id === id);
    if (cancelBooking) {
        cancelBooking.status = 'cancelled';
        return cancelBooking;
    }
    else {
        throw Error('Reserva no encontrada');
    }
});
exports.cancelBookingService = cancelBookingService;
