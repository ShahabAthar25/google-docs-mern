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
    const updatedUser = await User.findOneAndUpdate(req.user._id, {
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
  try {
    const user = await User.findById(req.params.id);

    if (req.user._id !== user._id.toString())
      return res.send({ message: "You can only your profile picture" });

    const updatedUser = await user.updateOne({
      profilePic: req.file.filename,
    });
    res.send({ message: "Profile picture updated" });
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
