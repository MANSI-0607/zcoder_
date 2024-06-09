const EditProfile = require("../model/EditProfile");

async function handleEditProfile(req, res) {
 // const { userName } = req.params; // Extract username from URL parameters
  
  const profileData = req.body; 
  console.log(profileData);
  const userName=profileData.currentUsername;
  console.log(userName);
  //console.log(req.body);
  try {
    // Check if profile exists
    const existingProfile = await EditProfile.findOne({ userName });
   // console.log(existingProfile);
    if (existingProfile) {
      // Update existing profile
      const updatedProfile = await EditProfile.findOneAndUpdate(
        { userName },
        { $set: profileData },
        { new: true }
      );
      res
        .status(200)
        .json({ msg: "Profile updated successfully", profile: updatedProfile });
    } else {
      // Create new profile
      const newProfile = new EditProfile({ userName, ...profileData });
      await newProfile.save();
      res
        .status(200)
        .json({ msg: "Profile created successfully", profile: newProfile });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", error });
  }
}

module.exports = {
  handleEditProfile,
};
