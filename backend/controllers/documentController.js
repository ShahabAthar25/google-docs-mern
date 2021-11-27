const { documentValidation } = require("../utils/validation");
const Document = require("../models/Document");

const getOneDocuments = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (req.user._id === document.userId) {
      res.send(document);
    } else {
      res.send(400).send({ message: "You are not the owner of this doc" });
    }
  } catch (err) {
    res.status(500).send({ messgae: err });
  }
};

// Getting user documents
const getUserDocuments = async (req, res) => {
  try {
    const document = await Document.find({ userId: req.params.id });
    if (req.user._id === document.userId) {
      res.send(document);
    } else {
      res.send(400).send({ message: "You are not the owner of this account" });
    }
  } catch (err) {
    res.status(500).send({ messgae: err });
  }
};

const createDocument = async (req, res) => {
  const { error } = documentValidation(req.body);
  if (error) return res.status(400).send({ message: error });

  const newDoc = new Document({
    name: req.body.name,
    username: req.user.username,
    userId: req.user._id,
  });

  try {
    const documents = await newDoc.save();
    res.send(documents);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const updateDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document)
      return res.status(404).send({ messgae: "Document does not exist" });

    if (document.userId === req.user._id) {
      const documents = await document.updateOne({
        $set: { name: req.body.name },
      });
      res.send({ message: "Document Updated" });
    } else {
      return res
        .status(403)
        .send({ message: "You can only update your documents" });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document)
      return res.status(404).send({ messgae: "Document does not exist" });

    if (document.userId === req.user._id) {
      const documents = await document.deleteOne();
      res.send({ message: "Document Deleted" });
    } else {
      return res
        .status(403)
        .send({ message: "You can only delete your documents" });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports = {
  getOneDocuments,
  getUserDocuments,
  createDocument,
  updateDocument,
  deleteDocument,
};
