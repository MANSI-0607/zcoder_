import React from "react";
import "./MyStack.css";
import YourPost from "../components/YourPost";
import Library from "../components/Library";
const MyStack = () => {
  return (
    <div className="mystack">
      <Library></Library>
      <div className="mystackpost">
        <YourPost></YourPost>
        <YourPost></YourPost>
        <YourPost></YourPost>
      </div>
    </div>
  );
};

export default MyStack;
