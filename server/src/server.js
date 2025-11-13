import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/AuthRoutes.js';
import classRoutes from './routes/ClassRoutes.js';
import videoRoutes from './routes/VideoRoutes.js';
import { dailyAttendanceJob } from './cron/attendanceCron.js';
import http from 'http';
import {Server} from 'socket.io'
import dashboardRoutes from './routes/DashboardRoutes.js'
import adminRoutes from './routes/AdminRoutes.js';
const app = express();
const server =  http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["https://8f43434c4b0b.ngrok-free.app", "http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});
dotenv.config()
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
connectDB()
app.use((req, res, next) => {
  req.io = io;
  next(); // Agle step par jaane ke liye 'next()' call karna zaroori hai
});
app.use('/api/auth', authRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/dashboard", dashboardRoutes)
app.use("/api/admin", adminRoutes)

dailyAttendanceJob();



server.listen(process.env.PORT || 5000, () => {
  console.log(`listen port ${process.env.PORT}`);
})