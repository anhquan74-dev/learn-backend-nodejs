const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  city: String,
});
const User = mongoose.model("User", userSchema);

module.exports = User;
