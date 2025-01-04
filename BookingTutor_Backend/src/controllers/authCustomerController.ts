import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { error } from "console";
import { validationResult } from "express-validator";
import { Request, Response } from "express";
import { Customer } from "../models/customerModel";

const customerRegister = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { username, fullName, phoneNumber, email, password, typeCustomer } =
      req.body;

    const existingCustomer = await Customer.findOne({ phoneNumber });
    if (existingCustomer) {
      res.status(400).json({
        message: "Số điện thoại tồn tại",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = new Customer({
      username,
      fullName,
      phoneNumber,
      email,
      typeCustomer,
      password: hashedPassword,
    });
    await newCustomer.save();

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

const customerLogin = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    const customer = await Customer.findOne({ username });
    if (!customer) {
      res.status(400).json({
        message: "UserName không đúng",
      });
      return;
    }
    const isPasswordValid = await bcrypt.compare(password, customer.password);
    if (!isPasswordValid) {
      res.status(400).json({
        message: "Password không đúng",
      });
      return;
    }
    const token = jwt.sign({ id: customer.id }, process.env.JWT_SECRET!, {
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

export { customerRegister, customerLogin };
