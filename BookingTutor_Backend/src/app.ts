import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routers/authRoutes";
import userRoutes from "./routers/userRoutes";
import path from "path";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

//ConnectDB
connectDB("AppChat");

export default app;
