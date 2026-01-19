const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json()); // 🔴 REQUIRED

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/todos", require("./routes/todoroute"));

app.get("/", (req, res) => {
  res.send("Daily-es API is running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
