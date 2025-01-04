import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel";
import { error } from "console";
import { validationResult } from "express-validator";
import { Request, Response } from "express";

const userRegister = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { username, fullName, phoneNumber, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        message: " Người dùng tồn tại",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      fullName,
      phoneNumber,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({
      message: "Đăng ký thành công",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

const userLogin = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({
        message: "UserName không đúng",
      });
      return;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({
        message: "Password không đúng",
      });
      return;
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Đăng nhập thành công",
      token,
    });
  } catch {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

export { userRegister, userLogin };
