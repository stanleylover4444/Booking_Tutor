import { body } from "express-validator";

export const registerValidator = [
  body("username")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Username không được để trống"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Email không hợp lệ"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password phải có ít nhất 6 ký tự"),
];

export const loginValidator = [
  body("username")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Username không được để trống"),
  body("password")
    .isString()
    .notEmpty()
    .withMessage("Password không được để trống"),
];
