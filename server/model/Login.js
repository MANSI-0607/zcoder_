const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Login = mongoose.model("Login", LoginSchema); // Change model name to "Login"
module.exports = Login;
