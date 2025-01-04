import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routers/authRoutes";
import userRoutes from "./routers/userRoutes";
import path from "path";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";


dotenv.config();

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

//ConnectDB
connectDB("AppChat");

export default app;
