const { registerValidation, loginValidation } = require("../utils/validation");
const Document = require("../models/Document");

// Registering a user
const getUserDocs = async (req, res) => {
  try {
    const docs = await Document.find({ userId: req.params.id });
    res.send(docs);
  } catch (err) {
    res.status(500).send({ messgae: err });
  }
};

module.exports = {
  getUserDocs,
};
