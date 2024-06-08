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

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
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
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
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
          <Select
            options={languageOptions}
            isMulti
            value={languages}
            onChange={handleLanguageChange}
          />
        </label>
        <label>
          Technical Skills:
          <Select
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
      </form>
    </div>
  );
};

export default EditDetails;
