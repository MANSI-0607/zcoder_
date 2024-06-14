const EditProfile = require("../model/EditProfile");
const currentUser = require("../currentUser.json");

async function handleGetProfile(req, res) {
  try {
    const username = req.params.userName || currentUser.username; // Ensure this matches the structure of currentUser.json
    console.log(`Fetching profile for username: ${username}`); // Debugging line

    const profileInfo = await EditProfile.findOne({ userName: username });

    if (!profileInfo) {
      console.log("Profile not found"); // Debugging line
      return res.status(404).json({ message: "Profile not found" });
    }

    console.log("Profile fetched successfully:", profileInfo); // Debugging line
    return res.status(200).json(profileInfo);
  } catch (error) {
    console.error("Error fetching profile:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  handleGetProfile,
};
