<<<<<<< HEAD
import React, { useState } from 'react';
import Select from 'react-select';
import './EditDetails.css';
import { useParams, useNavigate } from "react-router-dom";

const EditDetails = () => {
  const { userName } = useParams();
  const navigate = useNavigate();
  const [editUser, setEditUser] = useState({
    firstName: '',
    lastName: '',
    institute: '',
    gender: '',
    about: '',
    linkedin: '',
    github: '',
    languages: [],
    selectedSkills: [],
    profilePicture: '',
    codeforcesId: '',
    leetcodeId: '',
    codechefId: '',
    geeksforgeeksId: '',
    codeforcesRating: '',
    leetcodeRating: '',
    codechefRating: '',
    geeksforgeeksRating: ''
  });

  const languageOptions = [
    { value: 'C++', label: 'C++' },
    { value: 'C', label: 'C' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'Kotlin', label: 'Kotlin' },
    // Add more options for other coding languages
  ];

  const techSkillsOptions = [
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'NODE JS', label: 'NODE JS' },
    { value: 'React', label: 'React' },
    { value: 'ANGULAR', label: 'ANGULAR' },
    { value: 'FLUTTER', label: 'FLUTTER' },
    // Add more skills as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSkillChange = (selectedOptions) => {
    setEditUser((prevState) => ({
      ...prevState,
      selectedSkills: selectedOptions
    }));
  };

  const handleLanguageChange = (selectedOptions) => {
    setEditUser((prevState) => ({
      ...prevState,
      languages: selectedOptions
    }));
  };

  const handleProfilePictureChange = (e) => {
    setEditUser((prevState) => ({
      ...prevState,
      profilePicture: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    //const userId = 'user-id-from-context-or-state'; // Replace with actual user ID
  
    const profileData = {
      userName,
      firstName: editUser.firstName,
      lastName: editUser.lastName,
      institute: editUser.institute,
      gender: editUser.gender,
      about: editUser.about,
      linkedin: editUser.linkedin,
      github: editUser.github,
      languages: editUser.languages,
      selectedSkills: editUser.selectedSkills,
      profilePicture: editUser.profilePicture,
      codeforcesId: editUser.codeforcesId,
      leetcodeId: editUser.leetcodeId,
      codechefId: editUser.codechefId,
      geeksforgeeksId: editUser.geeksforgeeksId,
      codeforcesRating: editUser.codeforcesRating,
      leetcodeRating: editUser.leetcodeRating,
      codechefRating: editUser.codechefRating,
      geeksforgeeksRating: editUser.geeksforgeeksRating
    };
  
    fetch(`http://localhost:8000/${userName}/edit-profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profileData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Profile updated:", data);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

=======
import React, { useContext, useState } from "react";
import Select from "react-select";
import "./EditDetails.css";
import { CurrentUserContext } from "../App";

const EditDetails = () => {
  const { currentUsername } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institute, setInstituteName] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [languages, setLanguages] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [profilePicture, setProfilePicture] = useState("");
  const [codeforcesId, setCodeforcesId] = useState("");
  const [leetcodeId, setLeetcodeId] = useState("");
  const [codechefId, setCodechefId] = useState("");
  const [geeksforgeeksId, setGeeksforgeeksId] = useState("");
  const [codeforcesRating, setCodeforcesRating] = useState("");
  const [leetcodeRating, setLeetcodeRating] = useState("");
  const [codechefRating, setCodechefRating] = useState("");
  const [geeksforgeeksRating, setGeeksforgeeksRating] = useState("");

  const languageOptions = [
    { value: "C++", label: "C++" },
    { value: "C", label: "C" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "Kotlin", label: "Kotlin" },
  ];

  const techSkillsOptions = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "NODE JS", label: "NODE JS" },
    { value: "React", label: "React" },
    { value: "ANGULAR", label: "ANGULAR" },
    { value: "FLUTTER", label: "FLUTTER" },
  ];

  const handleSkillChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
  };

  const handleLanguageChange = (selectedOptions) => {
    setLanguages(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to the server)
  };

>>>>>>> 944bb4dc30687d5b75d037356580867b7afd7a15
  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
<<<<<<< HEAD
        <label>
          First Name:
          <input type="text" name="firstName" value={editUser.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={editUser.lastName} onChange={handleChange} />
        </label>
        <label>
          Profile Picture:
          <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
        </label>
        <label>
          Institute Name:
          <input type="text" name="institute" value={editUser.institute} onChange={handleChange} />
        </label>
        <label>
          Gender:
          <select name="gender" value={editUser.gender} onChange={handleChange}>
            <option value="">Select</option>
=======
        <label>
          Username: {currentUsername}
        </label>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Institute:
          <input
            type="text"
            value={institute}
            onChange={(e) => setInstituteName(e.target.value)}
          />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
>>>>>>> 944bb4dc30687d5b75d037356580867b7afd7a15
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
<<<<<<< HEAD
          About (*Max Character limit: 200):
          <textarea name="about" value={editUser.about} onChange={handleChange} />
        </label>
        <label>
          LinkedIn ID:
          <input type="text" name="linkedin" value={editUser.linkedin} onChange={handleChange} />
        </label>
        <label>
          GitHub ID:
          <input type="text" name="github" value={editUser.github} onChange={handleChange} />
        </label>
        <label>
          Languages:
=======
          About:
          <textarea value={about} onChange={(e) => setAbout(e.target.value)} />
        </label>
        <label>
          LinkedIn:
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </label>
        <label>
          GitHub:
          <input
            type="text"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </label>
        <label>
          Programming Languages:
>>>>>>> 944bb4dc30687d5b75d037356580867b7afd7a15
          <Select
            options={languageOptions}
            isMulti
            value={editUser.languages}
            onChange={handleLanguageChange}
          />
        </label>
        <label>
          Technical Skills:
          <Select
<<<<<<< HEAD
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
              <input type="text" name="codeforcesId" value={editUser.codeforcesId} onChange={handleChange} />
            </label>
            <label>
              Codechef ID:
              <input type="text" name="codechefId" value={editUser.codechefId} onChange={handleChange} />
            </label>
            <label>
              LeetCode ID:
              <input type="text" name="leetcodeId" value={editUser.leetcodeId} onChange={handleChange} />
            </label>
            <label>
              GeeksforGeeks ID:
              <input type="text" name="geeksforgeeksId" value={editUser.geeksforgeeksId} onChange={handleChange} />
            </label>
          </div>
          <div className="ratings">
            <label>
              Codeforces Rating:
              <input type="text" name="codeforcesRating" value={editUser.codeforcesRating} onChange={handleChange} />
            </label>
            <label>
              Codechef Rating:
              <input type="text" name="codechefRating" value={editUser.codechefRating} onChange={handleChange} />
            </label>
            <label>
              LeetCode Rating:
              <input type="text" name="leetcodeRating" value={editUser.leetcodeRating} onChange={handleChange} />
            </label>
            <label>
              GeeksforGeeks Rating:
              <input type="text" name="geeksforgeeksRating" value={editUser.geeksforgeeksRating} onChange={handleChange} />
            </label>
          </div>
        </div>
        <button type="submit">Save</button>
=======
            options={techSkillsOptions}
            isMulti
            value={selectedSkills}
            onChange={handleSkillChange}
          />
        </label>
        <label>
          Profile Picture:
          <input
            type="file"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </label>
        <label>
          Codeforces ID:
          <input
            type="text"
            value={codeforcesId}
            onChange={(e) => setCodeforcesId(e.target.value)}
          />
        </label>
        <label>
          LeetCode ID:
          <input
            type="text"
            value={leetcodeId}
            onChange={(e) => setLeetcodeId(e.target.value)}
          />
        </label>
        <label>
          CodeChef ID:
          <input
            type="text"
            value={codechefId}
            onChange={(e) => setCodechefId(e.target.value)}
          />
        </label>
        <label>
          GeeksforGeeks ID:
          <input
            type="text"
            value={geeksforgeeksId}
            onChange={(e) => setGeeksforgeeksId(e.target.value)}
          />
        </label>
        <label>
          Codeforces Rating:
          <input
            type="text"
            value={codeforcesRating}
            onChange={(e) => setCodeforcesRating(e.target.value)}
          />
        </label>
        <label>
          LeetCode Rating:
          <input
            type="text"
            value={leetcodeRating}
            onChange={(e) => setLeetcodeRating(e.target.value)}
          />
        </label>
        <label>
          CodeChef Rating:
          <input
            type="text"
            value={codechefRating}
            onChange={(e) => setCodechefRating(e.target.value)}
          />
        </label>
        <label>
          GeeksforGeeks Rating:
          <input
            type="text"
            value={geeksforgeeksRating}
            onChange={(e) => setGeeksforgeeksRating(e.target.value)}
          />
        </label>
        <button type="submit">Save Changes</button>
>>>>>>> 944bb4dc30687d5b75d037356580867b7afd7a15
      </form>
    </div>
  );
};

export default EditDetails;
