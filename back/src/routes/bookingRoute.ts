// * Paso 7 = q paso 5 (bookingRoute)
import {Router} from "express";
const bookingRoute =Router();

import {
  getAllBooking,
  scheduleBooking,
  cancelBooking,
  getBookingById,
} from "../controllers/bookingController";

bookingRoute.use("/:id", (req, res, next) => {
 
  next();
});

bookingRoute.get("/", getAllBooking);
bookingRoute.get("/:id", getBookingById);
bookingRoute.post("/schedule", scheduleBooking);
bookingRoute.put("/cancel/:id", cancelBooking);

export default bookingRoute;
