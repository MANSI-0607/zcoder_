import React from "react";

const HomeRight = () => {
  return (
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
  );
};

export default HomeRight;
