const express = require("express");
const {
  login,
  signup,
  refresh,
  logout,
} = require("../controllers/authControllers");
const router = express.Router();
const {
  validateSignup,
  validateLogin,
} = require("../validators/authValidators");
router.post("/login", validateLogin, login);
router.post("/signup", validateSignup, signup);
router.get("/refresh", refresh);
router.get("/logout", logout);
module.exports = router;
