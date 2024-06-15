import React, { useContext, useEffect, useState } from "react";
import "./MyStack.css";
import YourPost from "../components/YourPost";
import Library from "../components/Library";
import { CurrentUserContext } from "../App";
import { NavLink } from "react-router-dom";

const MyStack = () => {
  const { currentUsername } = useContext(CurrentUserContext);
  const [myStack, setMyStack] = useState([]);

  useEffect(() => {
    const fetchStack = async () => {
      try {
        const response = await fetch(`http://localhost:8000/${currentUsername}/mystack`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMyStack(data);
      } catch (error) {
        console.error("Error fetching recent questions:", error);
      }
    };

    fetchStack();
  }, [currentUsername]);

  const navlinkstyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <div className="mystack">
      <Library />
      <div className="mystackpost">
   
        {myStack.map((item, index) => (
          <div key={index} className="postItem">
            <NavLink to={`/${currentUsername}/viewQuestion/${item._id}`} style={navlinkstyle}>
              <YourPost item={item}  />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyStack;
