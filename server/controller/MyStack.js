const UploadedQuestion = require("../model/UploadedQuestion");
const currentUser = require("../currentUser.json");

async function handleMyStack(req, res) {
  try {
    const username = currentUser.username;
    console.log(`Looking for questions for user: ${username}`);

    // Find user questions, limit to 5, and sort by timeOfCreation in descending order (most recent first)
    const userQuestions = await UploadedQuestion.find({ username }).sort({
      timeOfCreation: -1,
    });

    if (!Array.isArray(userQuestions) || userQuestions.length === 0) {
      console.log(`No questions found for user: ${username}`);
      return res
        .status(404)
        .json({ message: "No questions found for this user." });
    }

    console.log("Found questions:", userQuestions);
    res.status(200).json(userQuestions);
  } catch (error) {
    console.error("Error fetching user questions:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
    handleMyStack,
};
