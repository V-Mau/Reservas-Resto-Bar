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
const repository_1 = require("../config/repository");
const getAllBookingService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allBookings = yield repository_1.bookingModel.find({
        relations: { user: true },
    });
    return allBookings;
});
exports.getAllBookingService = getAllBookingService;
const getBookingDetailsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const lookingBooking = yield repository_1.bookingModel.findOne({
        where: { id },
        relations: { user: true },
    });
    if (!lookingBooking)
        throw Error('Reserva no encontrada');
    return lookingBooking;
});
exports.getBookingDetailsService = getBookingDetailsService;
const scheduleBookingService = (createBookingDto) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = createBookingDto.user_id;
    const bookingExists = yield repository_1.bookingModel.findOneBy({ user: { id: user_id } });
    if (!bookingExists)
        throw Error('Usuario no encontrado.');
    const newBooking = repository_1.bookingModel.create(createBookingDto);
    yield repository_1.bookingModel.save(newBooking);
    return newBooking;
});
exports.scheduleBookingService = scheduleBookingService;
const cancelBookingService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cancelBooking = yield repository_1.bookingModel.findOne({
        where: { id },
        relations: { user: true },
    });
    if (cancelBooking) {
        cancelBooking.status = 'cancelled';
        yield repository_1.bookingModel.save(cancelBooking);
        return cancelBooking;
    }
    else {
        throw Error('Reserva no encontrada');
    }
});
exports.cancelBookingService = cancelBookingService;
