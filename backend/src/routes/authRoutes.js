const express = require("express");
const { login, signup, refresh } = require("../controllers/authControllers");
const router = express.Router();
const {
  validateSignup,
  validateLogin,
} = require("../validators/authValidators");
router.post("/login", validateLogin, login);
router.post("/signup", validateSignup, signup);
router.post("/refresh", refresh);
module.exports = router;
