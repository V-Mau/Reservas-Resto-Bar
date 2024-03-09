// * Paso 7 = q paso 5 (bookingRoute)
import {Router} from "express";
const bookingRoute =Router();

import {
  getAllBooking,
  scheduleBooking,
  cancelBooking,
  getBookingById,
} from "../controllers/bookingController";


bookingRoute.get("/", getAllBooking);
bookingRoute.get("/:idBkg", getBookingById);
bookingRoute.post("/schedule", scheduleBooking);
bookingRoute.put("/cancel/:idBkg", cancelBooking);

export default bookingRoute;
