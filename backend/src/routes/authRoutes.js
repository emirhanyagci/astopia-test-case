const express = require("express");
const { login, signup, refresh } = require("../controllers/authControllers");
const router = express.Router();
router.post("/login", login);
router.post("/signup", signup);
router.post("/refresh", refresh);
module.exports = router;
