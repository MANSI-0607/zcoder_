import React from "react";
import Button from "@mui/material/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
const HomeLeft = () => {
  return (
    <div className="HomeLeft">
      <div className="HomeLeft_card">
        <div className="profile_section">
          <img src="profile.jpg" alt="" />
          <h4>Pabitra Kumar</h4>
          <h5>Indian Institue of Technology Guwahati</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            facilis voluptas voluptatum quam quia? Maiores ut enim ea illo optio
            quasi illum doloribus sunt dolor eveniet doloribus dicta Aspernatur
            quia earum possimus laborum est! nam quibusdam, eius accusamus,
            eaque incidunt deseruntm Libero!
          </p>
          <Button variant="contained" color="success">
            Edit Profile
          </Button>
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
            <h4>linkedin.com</h4>
          </div>
          <div className="github">
            <img src="github.png" alt="" />
            <h4>github.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
