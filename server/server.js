import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();

import authRoutes from './routers/authRouters.js';
import studyPlanRoutes from './routers/studyPlanRoutes.js'; 


import { connectDB } from './config/db.js';
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', studyPlanRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});