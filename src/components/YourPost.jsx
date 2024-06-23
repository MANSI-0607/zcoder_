import React from "react";
import { Container } from "@mui/material";
import like from "../assets/like.svg"; // Adjust path as per your file structure
import view from "../assets/view.svg"; // Adjust path as per your file structure
import { NavLink } from "react-router-dom";
import "../screen/MyStack.css";

const YourPost = ({ item, currentUsername, navlinkstyle, onDelete }) => {
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

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      try {
        const response = await fetch(`http://localhost:8000/updateQuestion/${item._id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        onDelete(item._id);
        alert("Question deleted successfully");
      } catch (error) {
        console.error("Error deleting question:", error);
        alert("Failed to delete the question. Please try again.");
      }
    }
  };

  return (
    <div className="yourpost">
      <Container>
        <span className="postdatetime">{formatDate(item.timeOfCreation)}</span>
        <NavLink to={`/${currentUsername}/viewQuestion/${item._id}`} style={navlinkstyle}>
          <div className="yr_ques">{item.question}</div>
        </NavLink>
        <div className="bottomyrpost">
          <div>
            <p className={accessColorClass}>{item.access}</p>
          </div>

          <div className="socialreach">
            <span>
              <img src={view} alt="view" /> 56
            </span>
            <span>
              <img src={like} alt="like" /> 65
            </span>
          </div>

          <div className="editdelete">
            <NavLink to={`/${currentUsername}/viewQuestion/${item._id}`} style={navlinkstyle}>
              <button className="edityrpost">EDIT</button>
            </NavLink>
            <button className="deleteyrpost" onClick={handleDelete}>DELETE</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default YourPost;
