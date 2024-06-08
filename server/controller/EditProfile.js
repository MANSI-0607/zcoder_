const EditProfile = require("../model/EditProfile");

async function handleEditProfile(req, res) {
<<<<<<< HEAD
 // const { userName } = req.params; // Extract username from URL parameters
  //console.log(userName);
  const profileData = req.body; 
  const userName=profileData.userName;
  try {
    // Check if profile exists
    const existingProfile = await EditProfile.findOne({ userName });
    console.log(existingProfile);
    if (existingProfile) {
      // Update existing profile
      const updatedProfile = await EditProfile.findOneAndUpdate(
        { userName },
        { $set: profileData },
        { new: true }
      );
      res.status(200).json({ msg: "Profile updated successfully", profile: updatedProfile });
    } else {
      // Create new profile
      const newProfile = new EditProfile({ userName, ...profileData });
      await newProfile.save();
      res.status(200).json({ msg: "Profile created successfully", profile: newProfile });
    }
=======
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
>>>>>>> 944bb4dc30687d5b75d037356580867b7afd7a15
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", error });
  }
}

module.exports = {
  handleEditProfile,
<<<<<<< HEAD
};
=======
};
>>>>>>> 944bb4dc30687d5b75d037356580867b7afd7a15
