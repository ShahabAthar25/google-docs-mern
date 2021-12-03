const { array } = require("@hapi/joi");
const mongoose = require("mongoose");

const documentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 3,
    max: 60,
  },
  userId: {
    type: String,
    require: true,
    min: 3,
    max: 100,
  },
  content: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Document", documentSchema);
