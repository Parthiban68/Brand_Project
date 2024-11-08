const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  resetPasswordToken: { type: String, require: true, default: null },
  resetPasswordDate: { type: String, require: true, default: null },
  isActive: { type: Boolean, require: true, default: false },
  activationCode: { type: String, require: true },
});

const userModel = mongoose.model("users", UserSchema);

module.exports = userModel;
