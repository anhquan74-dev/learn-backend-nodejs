const mongoose = require("mongoose");

// create schema
const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model("Kitten", kittySchema);

module.exports = Kitten;
