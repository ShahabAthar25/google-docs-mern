const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const documentRoutes = require("./routes/document");
const userRoutes = require("./routes/users");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to database");
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("common"));

app.use("/api/auth", authRoutes);
app.use("/api/docs", documentRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log("App running on http://localhost:5000/");
});
