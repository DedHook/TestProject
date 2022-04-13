const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  creaate_date: {
    type: Date,
    default: Date.now,
  },
  login_date: {
    type: Date,
    default: Date.now,
  },
  statu: {
    type: String,
    default: "Active",
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;