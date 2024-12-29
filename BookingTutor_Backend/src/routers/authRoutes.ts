import express from "express";
import {login, register } from "../controllers/authController";
import { loginValidator, registerValidator } from "../validators/authValidator";

const authRoutes = express.Router();

authRoutes.post("/register", registerValidator, register);
authRoutes.post("/login", loginValidator, login);

export default authRoutes;
