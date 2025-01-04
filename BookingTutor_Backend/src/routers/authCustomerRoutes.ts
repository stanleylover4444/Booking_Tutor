import express from "express";
import {
  customerLogin,
  customerRegister,
} from "../controllers/authCustomerController";
import {
  customerLoginValidator,
  customerRegisterValidator,
} from "../validators/authCustomerValidator";

const authCustomerRoutes = express.Router();

/**
 * @swagger
 * /auth/customerRegister:
 *   post:
 *     summary: Register a new customer
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
authCustomerRoutes.post(
  "/customerRegister",
  customerRegisterValidator,
  customerRegister
);

/**
 * @swagger
 * /auth/customerLogin:
 *   post:
 *     summary: Login a customer
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
authCustomerRoutes.post(
  "/customerLogin",
  customerLoginValidator,
  customerLogin
);

export default authCustomerRoutes;
