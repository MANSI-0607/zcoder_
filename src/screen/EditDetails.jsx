import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import "./EditDetails.css";
import { CurrentUserContext } from "../App";
import { useNavigate } from "react-router-dom";

const EditDetails = () => {
  const { currentUsername } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [editUser, setEditUser] = useState({
    firstName: "",
    lastName: "",
    institute: "",
    gender: "",
    about: "",
    linkedin: "",
    github: "",
    languages: [],
    selectedSkills: [],
    codeforcesId: "",
    leetcodeId: "",
    codechefId: "",
    geeksforgeeksId: "",
    codeforcesRating: "",
    leetcodeRating: "",
    codechefRating: "",
    geeksforgeeksRating: "",
  });

  const languageOptions = [
    { value: "C++", label: "C++" },
    { value: "C", label: "C" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "Kotlin", label: "Kotlin" },
    // Add more options for other coding languages
  ];

  const techSkillsOptions = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "NODE JS", label: "NODE JS" },
    { value: "React", label: "React" },
    { value: "ANGULAR", label: "ANGULAR" },
    { value: "FLUTTER", label: "FLUTTER" },
    // Add more skills as needed
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8000/home/${currentUsername}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEditUser({
          firstName: data.firstName,
          lastName: data.lastName,
          institute: data.institute,
          gender: data.gender,
          about: data.about,
          linkedin: data.linkedin,
          github: data.github,
          languages: data.languages.map(lang => ({ value: lang, label: lang })),
          selectedSkills: data.selectedSkills.map(skill => ({ value: skill, label: skill })),
          codeforcesId: data.codeforcesId,
          leetcodeId: data.leetcodeId,
          codechefId: data.codechefId,
          geeksforgeeksId: data.geeksforgeeksId,
          codeforcesRating: data.codeforcesRating,
          leetcodeRating: data.leetcodeRating,
          codechefRating: data.codechefRating,
          geeksforgeeksRating: data.geeksforgeeksRating,
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [currentUsername]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSkillChange = (selectedOptions) => {
    setEditUser((prevState) => ({
      ...prevState,
      selectedSkills: selectedOptions,
    }));
  };

  const handleLanguageChange = (selectedOptions) => {
    setEditUser((prevState) => ({
      ...prevState,
      languages: selectedOptions,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const languages = editUser.languages.map(lang => lang.value);
    const selectedSkills = editUser.selectedSkills.map(skill => skill.value);

    const profileData = {
      currentUsername,
      ...editUser,
      languages,
      selectedSkills,
    };

    try {
      const response = await fetch(`http://localhost:8000/${currentUsername}/edit-profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Profile updated:", data);
      alert("Profile updated successfully!");
      navigate(`/${currentUsername}/home`);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={editUser.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={editUser.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Institute Name:
          <input
            type="text"
            name="institute"
            value={editUser.institute}
            onChange={handleChange}
          />
        </label>
        <label>
          Gender:
          <select name="gender" value={editUser.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          About (*Max Character limit: 200):
          <textarea
            name="about"
            value={editUser.about}
            onChange={handleChange}
          />
        </label>
        <label>
          LinkedIn ID:
          <input
            type="text"
            name="linkedin"
            value={editUser.linkedin}
            onChange={handleChange}
          />
        </label>
        <label>
          GitHub ID:
          <input
            type="text"
            name="github"
            value={editUser.github}
            onChange={handleChange}
          />
        </label>
        <label>
          Languages:
          <Select
            isMulti
            value={editUser.languages}
            onChange={handleLanguageChange}
            options={languageOptions}
          />
        </label>
        <label>
          Skills:
          <Select
            isMulti
            value={editUser.selectedSkills}
            onChange={handleSkillChange}
            options={techSkillsOptions}
          />
        </label>
        <h3>Coding Platforms</h3>
        <div className="codingsites">
          <div className="ids">
            <label>
              Codeforces ID:
              <input
                type="text"
                name="codeforcesId"
                value={editUser.codeforcesId}
                onChange={handleChange}
              />
            </label>
            <label>
              Codechef ID:
              <input
                type="text"
                name="codechefId"
                value={editUser.codechefId}
                onChange={handleChange}
              />
            </label>
            <label>
              LeetCode ID:
              <input
                type="text"
                name="leetcodeId"
                value={editUser.leetcodeId}
                onChange={handleChange}
              />
            </label>
            <label>
              GeeksforGeeks ID:
              <input
                type="text"
                name="geeksforgeeksId"
                value={editUser.geeksforgeeksId}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="ratings">
            <label>
              Codeforces Rating:
              <input
                type="text"
                name="codeforcesRating"
                value={editUser.codeforcesRating}
                onChange={handleChange}
              />
            </label>
            <label>
              Codechef Rating:
              <input
                type="text"
                name="codechefRating"
                value={editUser.codechefRating}
                onChange={handleChange}
              />
            </label>
            <label>
              LeetCode Rating:
              <input
                type="text"
                name="leetcodeRating"
                value={editUser.leetcodeRating}
                onChange={handleChange}
              />
            </label>
            <label>
              GeeksforGeeks Rating:
              <input
                type="text"
                name="geeksforgeeksRating"
                value={editUser.geeksforgeeksRating}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default EditDetails;
