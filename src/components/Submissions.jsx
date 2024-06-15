import React from "react";
import like from '../assets/like.svg';
import view from '../assets/view.svg';
import comment from '../assets/comment_.png';

const Submissions = (props) => {
  // Format the timeOfCreation to a more readable format
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString("en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="Submissions">
      <div className="owner">
        <p className="username">By: {props.username}</p>
        <p className="timeOfCreation">{formatDate(props.timeOfCreation)}</p>
      </div>
      <div className="submitted_question">{props.question}</div>
      <div className="submitted_stats">
        <span><img src={view} alt="view" className="icon" /> 23</span>
        <span><img src={like} alt="like" className="icon" /> 12</span>
        <span><img src={comment} alt="comment" className="icon" /> 12</span>
      </div>
    </div>
  );
};

export default Submissions;
