const methodOverride = require("method-override");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const documentRoutes = require("./routes/document");
const userRoutes = require("./routes/users");

dotenv.config();

let gfs;

mongoose.connect(
  process.env.MONGO_URL,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  () => {
    gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection("uploads");
    console.log("Connected to database");
  }
);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(morgan("common"));

app.use("/api/auth", authRoutes);
app.use("/api/docs", documentRoutes);
app.use("/api/users", userRoutes);

app.get("/api/image/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: err,
      });
    }

    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});

app.listen(PORT, () => {
  console.log("App running on http://localhost:5000/");
});
