const { body } = require("express-validator");

const validateSignup = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be a valid email"),
  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 8 })
    .matches(/^(?=.*[a-z])/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/^(?=.*[A-Z])/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/^(?=.*[0-9])/)
    .withMessage("Password must contain at least one number"),
];
const validateLogin = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be a valid email"),
  body("password").trim().notEmpty().withMessage("Password is required"),
];
module.exports = { validateSignup, validateLogin };
