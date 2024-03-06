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
exports.cancelBooking = exports.scheduleBooking = exports.getBookingDetails = exports.getAllBooking = void 0;
const bookingService_1 = require("../service/bookingService");
const getAllBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield (0, bookingService_1.getAllBookingService)();
        res.status(200).json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllBooking = getAllBooking;
const getBookingDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const lookingBooking = yield (0, bookingService_1.getBookingDetailsService)(Number(id));
        if (!lookingBooking) {
            res.status(404).json({ message: "Reserva no realizada" });
            return;
        }
        res.status(200).json(lookingBooking);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getBookingDetails = getBookingDetails;
const scheduleBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, user_id, status, description } = req.body;
        const newBooking = yield (0, bookingService_1.scheduleBookingService)({
            date, time, user_id, status, description,
        });
        res.status(200).json(newBooking);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.scheduleBooking = scheduleBooking;
const cancelBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking_id = Number(req.params.id);
        const result = yield (0, bookingService_1.cancelBookingService)(booking_id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.cancelBooking = cancelBooking;
