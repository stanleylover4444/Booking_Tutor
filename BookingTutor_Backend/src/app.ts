import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db";
import userRoutes from "./routers/userRoutes";
import path from "path";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";
import customerRoutes from "./routers/customerRoutes";
import authUserRoutes from "./routers/authUserRoutes";
import authCustomerRoutes from "./routers/authCustomerRoutes";

dotenv.config();

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/authUser", authUserRoutes);
app.use("/authCustomer", authCustomerRoutes);

app.use("/users", userRoutes);
app.use("/customers", customerRoutes);

//ConnectDB
connectDB("AppChat");

export default app;
