import express from "express";
import upload from "../middleware/uploadMiddleware";
import {
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/userController";

const userRoutes = express.Router();


userRoutes.get("/", getUsers);
userRoutes.put("/:userId", upload.single("avatar"), updateUser);
userRoutes.delete("/:userId", deleteUser);

export default userRoutes;
