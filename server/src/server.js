import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/AuthRoutes.js';



const app = express();
dotenv.config()
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
connectDB()

app.use('/api/auth', authRoutes);




app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})