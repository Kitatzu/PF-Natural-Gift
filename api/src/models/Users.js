const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  document: {
    type: String,
    requerid: true,
    unique: true,
  },
  activeUser: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
