import express from "express";
import { userRegister, userLogin } from "../controllers/authUserController";
import {
  userLoginValidator,
  userRegisterValidator,
} from "../validators/authUserValidator";

const authUserRoutes = express.Router();

/**
 * @swagger
 * /auth/userRegister:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               fullName:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *               - password
 *               - phoneNumber
 *               - fullName
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Validation error
 */
authUserRoutes.post("/userRegister", userRegisterValidator, userRegister);

/**
 * @swagger
 * /auth/userLogin:
 *   post:
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Invalid credentials
 */
authUserRoutes.post("/userLogin", userLoginValidator, userLogin);

export default authUserRoutes;
