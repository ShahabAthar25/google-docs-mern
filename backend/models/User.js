const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    min: 3,
    max: 60,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    min: 3,
    max: 100,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 8,
  },
  profilePic: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", userSchema);