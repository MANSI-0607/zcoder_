import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { CurrentUserContext } from "../App";
import "./Home.css";

const Home = () => {
  const { currentUsername } = useContext(CurrentUserContext);
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

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8000/home`);
        const data = await response.json();
        const fetchedData = {
          currentUsername,
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
        };
        setProfileData(fetchedData);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [currentUsername]); // Fetch profile when currentUsername changes

  return (
    <div>
      {/* <Header/> */}
      <div className="home_display">
        <div className="HomeLeft">
          <div className="HomeLeft_card">
            <div className="profile_section">
              <img src="profile.jpg" alt="" />
              <h4>
                {profileData.firstName} {profileData.lastName}
              </h4>
              <h5>{profileData.institute}</h5>
              <p>
                {profileData.about}
              </p>
              <NavLink
                to={`/${currentUsername}/edit-profile`}
                activeClassName="active"
              >
                <Button variant="contained" color="success">
                  Edit Profile
                </Button>
              </NavLink>
            </div>
            <div className="community_stats">
              <h3>Community Stats</h3>
              <h4>
                {" "}
                <VisibilityIcon /> Views: 98
              </h4>
              <h4>
                {" "}
                <CheckBoxIcon />
                Solutions: 66
              </h4>
              <h4>
                <ThumbUpIcon />
                Likes: 5.6K
              </h4>
              <h4>
                <PersonAddIcon />
                Friends: 249
              </h4>
            </div>

            <div className="social_media">
              <div className="linkedin">
                <img src="LinkedIn.png" alt="" />
                <h4>{profileData.linkedin}</h4>
              </div>
              <div className="github">
                <img src="github.png" alt="" />
                <h4>{profileData.github}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="HomeRight">
          <div className="layer1">
            <div className="codingPlatforms">
              <div className="cpimages">
                <img src="codeforces.jpg" alt="" />
                <img src="leetcode.png" alt="" />
                <img src="codechef.jpg" alt="" />
              </div>
              <h3>Rating:1200</h3>
            </div>
            <div className="techStack">
              <h3>
                Languages:
                <button className="language_compo">React</button>
                <button className="language_compo">React</button>
                <button className="AddMore">+</button>
              </h3>
              <h3>
                Skills:
                <button className="language_compo">React</button>
                <button className="language_compo">React</button>
                <button className="language_compo">React</button>
                <button className="AddMore">+</button>
              </h3>
            </div>
          </div>
          <div className="recentQuestion">
            <h2>Recent Questions</h2>
            <div className="questions">
              <div className="questionList">
                <h3>Find Root </h3>
                <h4>40 minutes ago</h4>
              </div>
              <div className="questionList">
                <h3>Find Root </h3>
                <h4>40 minutes ago</h4>
              </div>
              <div className="questionList">
                <h3>Find Root </h3>
                <h4>40 minutes ago</h4>
              </div>
              <div className="questionList">
                <h3>Find Root </h3>
                <h4>40 minutes ago</h4>
              </div>
              <div className="questionList">
                <h3>Find Root </h3>
                <h4>40 minutes ago</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
