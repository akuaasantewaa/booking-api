import { Router } from "express";
import { deleteBooking, getAllBooking, getOneBooking,  postBooking, updateBooking,
      } from "../controllers/booking-controllers.js";
export const bookingRouter = Router()

bookingRouter.get('/bookings', getAllBooking)
bookingRouter.get('/bookings/:id', getOneBooking);

bookingRouter.post('/bookings', postBooking)

bookingRouter.patch('/bookings/:id',updateBooking );

bookingRouter.delete('/bookings/:id',deleteBooking );

