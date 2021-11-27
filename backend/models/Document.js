const mongoose = require("mongoose");

const documentSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    min: 3,
    max: 60,
    unique: true,
  },
  userId: {
    type: String,
    require: true,
    min: 3,
    max: 100,
    unique: true,
  },
  content: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Document", documentSchema);
