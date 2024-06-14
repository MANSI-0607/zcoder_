const UploadedQuestion = require("../model/UploadedQuestion");
async function handleUpdateQuestion(req, res) {
    try {
        const { question, notes, code, access } = req.body;
        const updatedQuestion = await UploadedQuestion.findByIdAndUpdate(
          req.params.questionId,
          { question, notes, code, access },
          { new: true }
        );
        if (!updatedQuestion) {
          return res.status(404).json({ message: "Question not found" });
        }
        res.status(200).json(updatedQuestion);
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
      }
  }
  
  module.exports = {
    handleUpdateQuestion,
  };
  