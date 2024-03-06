"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookingRoute = (0, express_1.Router)();
const bookingController_1 = require("../controllers/bookingController");
bookingRoute.get("/", bookingController_1.getAllBooking);
bookingRoute.get("/:idBkg", bookingController_1.getBookingDetails);
bookingRoute.post("/schedule", bookingController_1.scheduleBooking);
bookingRoute.put("/cancel/:idBkg", bookingController_1.cancelBooking);
exports.default = bookingRoute;