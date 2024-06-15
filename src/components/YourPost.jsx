import React from "react";
import { Container } from "@mui/material";
import like from "../assets/like.svg"; // Adjust path as per your file structure
import view from "../assets/view.svg"; // Adjust path as per your file structure
import "../screen/MyStack.css";
const YourPost = ({ item }) => {
  const accessColorClass = item.access === "public" ? "public" : "private";
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <div className="yourpost">
      <Container>
        <span className="postdatetime">{formatDate(item.timeOfCreation)}</span>
        <div className="yr_ques">{item.question}</div>
        <div className="bottomyrpost">
          <div>
            <p className={accessColorClass}>{item.access}</p>
          </div>

          <div className="socialreach">
            <span>
              {" "}
              <img src={view} alt="view" /> 56
            </span>
            <span>
              <img src={like} alt="like" /> 65
            </span>
          </div>

          <div className="editdelete">
            <button className="edityrpost">EDIT</button>
            <button className="deleteyrpost">DELETE</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default YourPost;
