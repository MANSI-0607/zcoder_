import React from "react";
import ExploreQuestion from "../components/ExploreQuestion";
import Calendar from "../components/Calendar";
import "./Explore.css";

const Explore = () => {
  return (
    <div className="Explore">
      <ExploreQuestion />
      <Calendar />
    </div>
  );
};

export default Explore;
