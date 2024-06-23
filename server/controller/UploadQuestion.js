const UploadedQuestion = require("../model/UploadedQuestion");


async function handleUploadQuestion(req, res) {
  const { question, notes, code, access } = req.body;
  const { username } = req.params;

  //   console.log("Username:", username); // Debugging line to check the value of username

  // Check for missing fields
  if (!username || !question || !notes || !code || !access) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  // Validate the access field
  if (!["public", "private"].includes(access)) {
    return res
      .status(400)
      .json({ msg: "Access must be either 'public' or 'private'" });
  }

  try {
    const result = await UploadedQuestion.create({
      username,
      question,
      notes,
      code, // Store formatted code
      access,
    });
    return res.status(201).json({ msg: "Success", id: result._id });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
}

module.exports = {
  handleUploadQuestion,
};
