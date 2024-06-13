import React, { useContext, useEffect, useState } from "react";
import "./MyStack.css";
import YourPost from "../components/YourPost";
import Library from "../components/Library";
import { CurrentUserContext } from "../App";

const MyStack = () => {
  const { currentUsername } = useContext(CurrentUserContext);
  const [myStack, setMyStack] = useState([]);

  useEffect(() => {
    const fetchStack = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/${currentUsername}/mystack` // Removed colon before currentUsername
        );
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
  }, [currentUsername]); // Added currentUsername to dependency array

  return (
    <div className="mystack">
      <Library />
      <div className="mystackpost">
        {/* Map myStack items to YourPost component */}
        {myStack.map((item, index) => (
          <YourPost key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyStack;
