import express from "express";
import upload from "../middleware/uploadMiddleware";
import {
  getUsers,
  updateUser,
} from "../controllers/userController";

const customerRoutes = express.Router();
customerRoutes.get("/", getUsers);
customerRoutes.put("/:customerId", upload.single("avatar"), updateUser);
export default customerRoutes;
