const mongoose = require("mongoose");

const UploadedQuestionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  access: {
    type: String,
    enum: ["public", "private"], 
    required: true,
  },
  timeOfCreation: {
    type: Date,
    default: Date.now,
  },
});

const UploadedQuestion = mongoose.model("UploadedQuestion", UploadedQuestionSchema);
module.exports = UploadedQuestion;
