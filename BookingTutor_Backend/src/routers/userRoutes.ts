import express from "express";
import upload from "../middleware/uploadMiddleware";
import {
  getUsers,
  updateUser,
} from "../controllers/userController";

const userRoutes = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Fetch a list of all users.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: List of users
 *       500:
 *         description: Server error
 */
userRoutes.get("/", getUsers);

/**
 * @swagger
 * /users/{userId}:
 *   put:
 *     summary: Update user information
 *     description: Update a user's profile, including their avatar.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: The ID of the user to update
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
 *         description: User updated successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
userRoutes.put("/:userId", upload.single("avatar"), updateUser);

export default userRoutes;
