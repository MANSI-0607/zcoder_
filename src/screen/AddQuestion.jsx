import React from "react";
import QuestionArea from "../components/QuestionArea";
import QuestionUploadArea from "../components/QuestionUploadArea";
import "./AddQuestion.css"
const AddQuestion = () => {
  return (
    <div className="AddQuestion" id="addquestion">
      <QuestionArea />
      <QuestionUploadArea />
    </div>
  );
};

export default AddQuestion;
