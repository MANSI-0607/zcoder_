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
  async function handleDeleteQuestion(req, res) {
    try {
      const deletedQuestion = await UploadedQuestion.findByIdAndDelete(req.params.questionId);
      if (!deletedQuestion) {
        return res.status(404).json({ message: "Question not found" });
      }
      res.status(200).json({ message: "Question deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  
  module.exports = {
    handleUpdateQuestion,handleDeleteQuestion
  };
  