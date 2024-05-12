const mongoose = require('mongoose');
let plm = require("passport-local-mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Medicine');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  image: String
});

userSchema.plugin(plm);
const User = mongoose.model("User", userSchema);

module.exports = User;