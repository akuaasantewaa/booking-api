import { booking} from "../models/booking-models.js"


// const greeting = () => {
// return('helloWorld was added');
//}

export const getAllBooking = (req, res) => {
    res.status(200).json('These are all bookings')
}

export const getOneBooking = (req, res) => {
    res.status(200).json('Availability')
}

export const postBooking = async (req,res,next) => {
 try {
       const newBooking = new booking(req.body)
       const bookings = await newBooking.save()
   
       res.status(201).json(bookings);
 } catch (error) {
    next(error)
 }
}


export const updateBooking = (req, res) => {
    res.status(200).json('TwoBooking update');
}

export const deleteBooking = (req, res) => {
    res.status(200).json('TwoBooking deleted');
}