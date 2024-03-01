// * Paso 7 = q paso 5 (bookingRoute)
import {Router} from "express";
const bookingRoute =Router();

import {
  getAllBooking,
  getBookingDetails,
  scheduleBooking,
  cancelBooking,
} from "../controllers/bookingController";


bookingRoute.get("/", getAllBooking);
bookingRoute.get("/:idBkg", getBookingDetails);
bookingRoute.post("/schedule", scheduleBooking);
bookingRoute.put("/cancel/:idBkg", cancelBooking);

export default bookingRoute;
