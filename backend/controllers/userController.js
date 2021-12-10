const bcrypt = require("bcrypt");

const User = require("../models/User");

const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const updateProfile = async (req, res) => {
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user._id, {
      $set: req.body,
    });
    res.send({ message: "User has been updated" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);
    res.send({ message: "User has been deleted" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const uploadPhoto = async (req, res) => {
  console.log(req.user._id);

  try {
    const updatedUser = await User.findByIdAndUpdate(req.user._id, {
      profilePic: req.body.url,
    });
    res.send(updatedUser);
  } catch (err) {
    res.send({ message: err });
  }
};

module.exports = {
  getCurrentUser,
  updateProfile,
  deleteUser,
  uploadPhoto,
};
