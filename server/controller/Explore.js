const UploadedQuestion = require("../model/UploadedQuestion");


async function handleExplore(req, res) {
  try {
    const allPublicQuestions = await UploadedQuestion.find({
      access: "public",
    }).sort({
      timeOfCreation: -1,
    });

    if (!Array.isArray(allPublicQuestions) || allPublicQuestions.length === 0) {
      console.log(`No questions found  `);
      return res.status(404).json({ message: "No questions found." });
    }

    console.log("Found questions:", allPublicQuestions);
    res.status(200).json(allPublicQuestions);
  } catch (error) {
    console.error("Error fetching  questions:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  handleExplore,
};
