const EditProfile = require("../model/EditProfile");

async function handleEditProfile(req, res) {
 // Extract username from URL parameters
  const profileData = req.body;
  const { userName } = profileData.userName; 
  console.log(profileData);
  try {
    const profile = await EditProfile.findOneAndUpdate(
      { userName },
      { $set: profileData },
      { new: true, upsert: true } // Create new if doesn't exist
    );
    
    res.status(200).json({ msg: "Profile updated successfully", profile });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", error });
  }
}

module.exports = {
  handleEditProfile,
};