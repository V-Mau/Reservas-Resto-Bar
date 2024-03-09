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
exports.cancelBookingService = exports.scheduleBookingService = exports.getBookingByIdService = exports.getAllBookingService = void 0;
const repository_1 = require("../config/repository");
const getAllBookingService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allBookings = yield repository_1.bookingModel.find();
    return allBookings;
});
exports.getAllBookingService = getAllBookingService;
const getBookingByIdService = (appId) => __awaiter(void 0, void 0, void 0, function* () {
    const lookingBooking = yield repository_1.bookingModel.findOneBy({
        id: appId
    });
    if (!lookingBooking)
        throw Error('Reserva no encontrada');
    return lookingBooking;
});
exports.getBookingByIdService = getBookingByIdService;
const scheduleBookingService = (createBookingDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newBooking = repository_1.bookingModel.create(createBookingDto);
    yield repository_1.bookingModel.save(newBooking);
    const user = yield repository_1.usersModel.findOneBy({
        id: createBookingDto.user_id
    });
    if (!user)
        throw Error('Usuario no encontrado');
    newBooking.user = user;
    yield repository_1.bookingModel.save(newBooking);
    return newBooking;
});
exports.scheduleBookingService = scheduleBookingService;
const cancelBookingService = (appId) => __awaiter(void 0, void 0, void 0, function* () {
    const cancelBooking = yield repository_1.bookingModel.findOneBy({
        id: appId,
    });
    if (!cancelBooking)
        throw Error('Reserva no encontrada');
    cancelBooking.status = 'cancelled';
    yield repository_1.bookingModel.save(cancelBooking);
});
exports.cancelBookingService = cancelBookingService;
