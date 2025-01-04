import express from "express";
import upload from "../middleware/uploadMiddleware";
import {
  getUsers,
  updateUser,
} from "../controllers/userController";
import swaggerUi from "swagger-ui-express";

const customerRoutes = express.Router();

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get all users (customers)
 *     description: Retrieve a list of all users (customers).
 *     tags:
 *       - Customer
 *     responses:
 *       200:
 *         description: A list of customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                   fullName:
 *                     type: string
 *                   phoneNumber:
 *                     type: string
 *                   email:
 *                     type: string
 *                   avatar:
 *                     type: string
 *                   active:
 *                     type: boolean
 *       500:
 *         description: Server error
 */
customerRoutes.get("/", getUsers);

/**
 * @swagger
 * /customers/{customerId}:
 *   put:
 *     summary: Update user (customer) information
 *     description: Update a user's (customer's) profile, including their avatar.
 *     tags:
 *       - Customer
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         description: The ID of the customer to update
 *         schema:
 *           type: string
 *       - in: formData
 *         name: avatar
 *         type: file
 *         description: The avatar image to upload (optional)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               email:
 *                 type: string
 *             required:
 *               - fullName
 *               - phoneNumber
 *               - email
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
customerRoutes.put("/:customerId", upload.single("avatar"), updateUser);

export default customerRoutes;
