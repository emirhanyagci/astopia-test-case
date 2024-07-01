const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(require("./config/corsOptions")));
app.use("/auth", authRoutes);
app.all("*", (req, res) => {
  res.status(404).json({
    message: "404 Not Found",
  });
});
app.use(require("./middlewares/errorHandler"));
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log("server listening at", PORT);
  });
});
