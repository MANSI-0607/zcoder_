const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // timeOfCreation: {
  //   type: Date,
  //   default: Date.now,
  // },
});

const SignUp = mongoose.model("SignUp", SignUpSchema);
module.exports = SignUp;
