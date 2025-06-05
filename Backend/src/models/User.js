const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
  profileImg: String,
  linkedin: String,
  twitter: String,
});

module.exports = mongoose.model("user", UserModel);
