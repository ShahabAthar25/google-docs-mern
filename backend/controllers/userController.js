const bcrypt = require("bcrypt");

const User = require("../models/User");
const Document = require("../models/Document");

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const updateProfile = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (req.user._id === user._id.toString()) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await user.updateOne({
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePic: req.body.profilePic,
        },
      });
      res.send({ message: "User has been updated" });
    } catch (err) {
      res.status(500).send({ message: err });
    }
  } else {
    return res.send({ message: "access denied" });
  }
};

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (req.user._id === user._id.toString()) {
    try {
      const deletedUser = await user.deleteOne();
      res.send({ message: "User has been deleted" });
    } catch (err) {
      res.status(500).send({ message: err });
    }
  } else {
    return res.send({ message: "access denied" });
  }
};

module.exports = {
  getProfile,
  updateProfile,
  deleteUser,
};
