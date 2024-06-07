const SignUp = require("../model/SignUp"); // Import the SignUp model

async function handleLogin(req, res) {
  const body = req.body;
  if (!body || !body.userName || !body.password) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    // Find a user in the SignUp collection with the provided userName
    const user = await SignUp.findOne({ userName: body.userName });

    // If no user found, return an error
    if (!user) {
      return res.status(401).json({ msg: "Invalid userName or password" });
    }

    // Check if the provided password matches the stored hashed password
    const passwordMatch = user.password === body.password; // Assuming password is stored in plaintext, otherwise, you need to hash and compare

    if (!passwordMatch) {
      return res.status(401).json({ msg: "Invalid userName or password" });
    }

    // If userName and password match, you can proceed with your login logic
    // For example, you might generate a token and send it back as a response
    // You can also handle other login-related tasks here

    // Example response
    return res
      .status(200)
      .json({
        msg: "Login successful",
        userName: `${body.userName}`,
        password: `${body.password}`,
      });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
}

module.exports = {
  handleLogin,
};
