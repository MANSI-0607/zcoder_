import React from "react";
import like from '../assets/like.svg'
import view from '../assets/view.svg'
import comment from '../assets/comment.svg'
const Submissions = () => {
  return (
    <div className="Submissions">
      <div className="owner">
        <p>By:Pabitra</p>
        <p>30.05.2024 02:05</p>
      </div>
      <div className="submitted_question">Find Root of the Binary Tree Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quos harum reprehenderit animi, tempora quas obcaecati et facere architecto sunt, nihil doloribus necessitatibus sapiente cum veniam maiores ea ut repellendus temporibus recusandae placeat? Expedita, quasi similique. Nulla hic minus laboriosam aliquam, quas perferendis provident facere!</div>
      <div className="submitted_stats">
        <span> <img src={view} alt="view" />23</span>
        <span><img src={like} alt="like" /> 12</span>
        <span><img src={comment} alt="like" /> 12</span>
      </div>
    </div>
  );
};

export default Submissions;
