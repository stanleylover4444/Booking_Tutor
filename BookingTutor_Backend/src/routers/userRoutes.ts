import express from "express";
import upload from "../middleware/uploadMiddleware";
import {
  getUsers,
  updateUser,
} from "../controllers/userController";

const userRoutes = express.Router();

userRoutes.get("/", getUsers);
userRoutes.put("/:userId", upload.single("avatar"), updateUser);

export default userRoutes;
