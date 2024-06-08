//const jwt = require('jsonwebtoken');
const SignUp = require("../model/SignUp");
//const JWT_SECRET = process.env.JWT_SECRET;
async function handleSignUp(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.name ||
    !body.email ||
    !body.userName ||  // Ensure userName is included
    !body.password ||
    !body.confirmPassword
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  
  if (body.password !== body.confirmPassword) {
    return res.status(400).json({ msg: "Passwords should match" });
  }

  try {
    const result = await SignUp.create({
      name: body.name,
      email: body.email,
      userName: body.userName,  // Ensure userName is saved
      password: body.password,
      timeOfCreation: body.timeOfCreation,
    });
    //const token = jwt.sign({ userId: result._id, email: result.email }, JWT_SECRET);
    return res.status(201).json({ msg: "Success" });
  } catch (error) {
    if (error.code === 11000) {  // Handle unique constraint errors
      return res.status(400).json({ msg: "Email or Username already exists" });
    }
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
}

module.exports = {
  handleSignUp,
};
