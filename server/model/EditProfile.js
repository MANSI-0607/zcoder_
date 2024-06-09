const mongoose = require("mongoose");

const EditProfileSchema = new mongoose.Schema({
  userName: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'SignUp',
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  institute: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  linkedin: String,
  github: String,
  languages: [String],
  selectedSkills: [String],
  profilePicture: String,
  codeforcesId: String,
  leetcodeId: String,
  codechefId: String,
  geeksforgeeksId: String,
  codeforcesRating: String,
  leetcodeRating: String,
  codechefRating: String,
  geeksforgeeksRating: String,
});

const EditProfile = mongoose.model("EditProfile", EditProfileSchema);
module.exports = EditProfile;
