const express = require("express");

const router = express.Router();
router.get("/login", (req, res, next) => {
  res.json({
    message: "hello man its working don't worry",
  });
});
module.exports = router;
