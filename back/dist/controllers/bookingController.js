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
const getAllBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res
        .status(200)
        .send('Obtener todo el listado de los turnos de todos los usuarios.');
});
exports.getAllBooking = getAllBooking;
const getBookingDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res
        .status(200)
        .send('Obtener el detalle de un turno específico.');
});
exports.getBookingDetails = getBookingDetails;
const scheduleBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res
        .status(200)
        .send('Agendar un nuevo turno');
});
exports.scheduleBooking = scheduleBooking;
const cancelBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res
        .status(200)
        .send('Cambiar el estatus de una reserva a "cancelled"');
});
exports.cancelBooking = cancelBooking;
