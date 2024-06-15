// Home.js

import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { CurrentUserContext } from "../App";
import "./Home.css";

const Home = () => {
  const { currentUsername } = useContext(CurrentUserContext);
  const [clickedRating, setClickedRating] = useState("");
  const [recentQuestions, setRecentQuestions] = useState([]);
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    institute: "",
    gender: "",
    about: "",
    linkedin: "",
    github: "",
    languages: [],
    selectedSkills: [],
    profilePicture: "",
    codeforcesId: "",
    leetcodeId: "",
    codechefId: "",
    geeksforgeeksId: "",
    codeforcesRating: "",
    leetcodeRating: "",
    codechefRating: "",
    geeksforgeeksRating: "",
  });

  const navlinkstyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "none",
      color: isActive ? "red" : "black",
    };
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8000/home/${currentUsername}`);
        console.log("Current Username:", currentUsername); // debug
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProfileData({
          ...profileData,
          firstName: data.firstName,
          lastName: data.lastName,
          institute: data.institute,
          gender: data.gender,
          about: data.about,
          linkedin: data.linkedin,
          github: data.github,
          languages: data.languages,
          selectedSkills: data.selectedSkills,
          profilePicture: data.profilePicture,
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

  useEffect(() => {
    const fetchRecentQuestions = async () => {
      try {
        const response = await fetch(`http://localhost:8000/getRecentQuestion`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecentQuestions(data);
      } catch (error) {
        console.error("Error fetching recent questions:", error);
      }
    };

    fetchRecentQuestions();
  }, []);

  const handleImageClick = (e) => {
    document.querySelectorAll(".cpimages img").forEach((img) => {
      img.classList.remove("scaled");
    });
    e.target.classList.add("scaled");
    setClickedRating(e.target.getAttribute("value"));
  };

  const getRating = () => {
    switch (clickedRating) {
      case "Codeforces":
        return profileData.codeforcesRating;
      case "Leetcode":
        return profileData.leetcodeRating;
      case "Codechef":
        return profileData.codechefRating;
      default:
        return "-";
    }
  };

  const getProfileUrl = () => {
    switch (clickedRating) {
      case "Codeforces":
        return `https://codeforces.com/profile/${profileData.codeforcesId}`;
      case "Leetcode":
        return `https://leetcode.com/${profileData.leetcodeId}`;
      case "Codechef":
        return `https://www.codechef.com/users/${profileData.codechefId}`;
      default:
        return `https://auth.geeksforgeeks.org/user/${profileData.geeksforgeeksId}/profile`;
    }
  };

  const UserLanguages = profileData.languages;
  const UserSkills = profileData.selectedSkills;

  return (
    <div>
      <div className="home_display">
        <div className="HomeLeft">
          <div className="HomeLeft_card">
            <div className="profile_section">
              <img src={profileData.profilePicture||"/profile.jpg"} alt="Profile Picture" />
              <h4>
                {profileData.firstName} {profileData.lastName}
              </h4>
              <h5>{profileData.institute}</h5>
              <p>{profileData.about}</p>
              <NavLink to={`/${currentUsername}/edit-profile`} activeClassName="active">
                <Button variant="contained" color="success">
                  Edit Profile
                </Button>
              </NavLink>
            </div>
            <div className="community_stats">
              <h3>Community Stats</h3>
              <h4>
                <VisibilityIcon /> Views: 98
              </h4>
              <h4>
                <CheckBoxIcon /> Solutions: 66
              </h4>
              <h4>
                <ThumbUpIcon /> Likes: 5.6K
              </h4>
              <h4>
                <ThumbUpIcon /> Friends: 249
              </h4>
            </div>

            <div className="social_media">
              <div className="linkedin">
                <img src="/LinkedIn.png" alt="LinkedIn Logo" />
                <a
                  className="linktocp"
                  href={`https://www.linkedin.com/in/${profileData.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="github">
                <img src="/github.png" alt="GitHub Logo" />
                <a
                  className="linktocp"
                  href={`https://github.com/${profileData.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="HomeRight">
          <div className="layer1">
            <div className="codingPlatforms">
              <div className="cpimages">
                <img
                  value="Codeforces"
                  src="/codeforces.jpg"
                  onClick={handleImageClick}
                  alt="Codeforces Logo"
                />
                <img
                  value="Leetcode"
                  src="/leetcode.png"
                  onClick={handleImageClick}
                  alt="Leetcode Logo"
                />
                <img
                  value="Codechef"
                  src="/codechef.jpg"
                  onClick={handleImageClick}
                  alt="Codechef Logo"
                />
                <img
                  value="GeeksForGeeks"
                  src="/gfg.png"
                  onClick={handleImageClick}
                  alt="GeeksForGeeks Logo"
                />
              </div>
              <h3>
                {clickedRating} Rating: {getRating()}
                <br />
                <a
                  className="linktocp"
                  href={getProfileUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to visit my {clickedRating} profile
                </a>
              </h3>
            </div>
            <div className="techStack">
              <h3>
                Languages:
                {UserLanguages.map((language, index) => (
                  <button key={index} className="language_compo">
                    {language}
                  </button>
                ))}
              </h3>
              <h3>
                Skills:
                {UserSkills.map((skills, index) => (
                  <button key={index} className="language_compo">
                    {skills}
                  </button>
                ))}
              </h3>
            </div>
          </div>
          <div className="recentQuestion">
            <h2>Recent Questions</h2>
            <div className="questions">
              {recentQuestions.map((question, index) => (
                <div key={index} className="questionList">
                  <NavLink to={`/${currentUsername}/viewQuestion/${question._id}`} style={navlinkstyle}>
                    <h3>
                      {question.question.length > 65
                        ? `${question.question.substring(0, 65)}...`
                        : question.question}
                    </h3>
                  </NavLink>
                  <h4>{new Date(question.timeOfCreation).toLocaleString()}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
