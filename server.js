import express from 'express';
import carRoutes from './routes/carRoute.js';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
connectDB();
const port = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(cors());


// Routes
app.use('/api/cars', carRoutes);


app.use(bodyParser.json());
app.use(cors());
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});