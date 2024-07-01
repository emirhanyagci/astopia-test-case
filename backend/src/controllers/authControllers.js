const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
// @desc login
// @route POST /auth/login
// @access Public
exports.login = asyncHandler(async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ message: "Invalid user data received" });
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email }).exec();
  if (!user) {
    return res.status(401).json({
      message: "User not found with received data",
    });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({
      message: "User not found with received data",
    });
  }
  const accessToken = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
  const refreshToken = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  return res.json({ accessToken });
});
// @desc signup
// @route POST /auth/signup
// @access Public
exports.signup = asyncHandler(async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ message: "Invalid user data received" });
  }
  const { email, password } = req.body;
  //check is email exist
  const duplicateUser = await User.findOne({ email }).exec();
  if (duplicateUser) {
    return res.status(409).json({
      message: "User already exist with this email",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({ email, password: hashedPassword });
  if (user) {
    return res.json({
      message: "User succesfully created",
    });
  } else {
    return res.status(400).json({
      message: "Invalid user data received",
    });
  }
});
// @desc refresh for re auth
// @route GET /auth/refresh
// @access public
exports.refresh = asyncHandler((req, res, next) => {
  const cookies = req.cookies;
  if (!cookies) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const refreshToken = cookies.jwt;
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });
      const user = await User.findOne({
        username: decoded.username,
      }).exec();
      if (!user) return res.status(401).json({ message: "Unauthorized" });
      const accessToken = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      return res.json({ accessToken });
    })
  );
});
// @desc clear cookie
// @route GET /auth/logout
// @access public
exports.logout = asyncHandler((req, res, next) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  return res.json({ message: "Cookie cleared" });
});
