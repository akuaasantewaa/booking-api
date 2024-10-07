
import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors'
import { bookingRouter } from './routes/all-routes.js';


// connect to database
await mongoose.connect(process.env.MONGO_URI);

// await mongoose.connect(process.env.MONGO_URL)

// create an express app
const app = express();


// define 
// app.get('/booking', function (req, res, next) {
//    console.log(req.headers)
//    res.json('You visited the booking endpoint'); 
// });

// // define routes
// app.get('/goodbye', function(req, res, next) {
//     console.log(req.query)
//     res.json('Same to you');
// });
const port = 7080

app.use(cors())
app.use(express.json())
app.use(bookingRouter)


// listen for incoming requests
app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
});

// import express from 'express';
// const app = express();
// const PORT 7070
// app.listen(PORT,() => console.log(`Server is listening on ${PORT}`))