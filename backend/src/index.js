const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(cors(require("./config/corsOptions")));
app.use("/auth", authRoutes);
app.all("*", (req, res) => {
  res.status(404).json({
    message: "404 Not Found",
  });
});
app.use(require("./middlewares/errorHandler"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server listening at", PORT);
});
