"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookingRoute = (0, express_1.Router)();
const bookingController_1 = require("../controllers/bookingController");
bookingRoute.use("/:id", (req, res, next) => {
    console.log('Middleware de depuración para rutas de booking');
    next();
});
bookingRoute.get("/", bookingController_1.getAllBooking);
bookingRoute.get("/:id", bookingController_1.getBookingById);
bookingRoute.post("/schedule", bookingController_1.scheduleBooking);
bookingRoute.put("/cancel/:id", bookingController_1.cancelBooking);
exports.default = bookingRoute;
