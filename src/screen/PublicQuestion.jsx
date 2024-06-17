import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import "./PublicQuestion.css";
import CommentSection from "../components/CommentSection";

const PublicQuestion = () => {
  const { id } = useParams();
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    const fetchQuestionData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/getRecentQuestion/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuestionData(data);
      } catch (error) {
        console.error("Failed to fetch question data:", error);
      }
    };

    fetchQuestionData();
  }, [id]);

  if (!questionData) {
    return <div>Loading...</div>;
  }

  const handleCodeChange = (newCode) => {
    setQuestionData({ ...questionData, code: newCode });
  };

  return (
    <div className="public-question">
      <div className="ques-ans">
        <div className="ques">
          <h3>Question</h3>
          {questionData.question}
        </div>
        <div className="ans">
          <Editor
            value={questionData.code}
            height="100%"
            width="95%"
            theme="vs-dark"
            language="cpp"
            onChange={handleCodeChange}
            options={{ automaticLayout: true }}
          />
        </div>
      </div>
      <CommentSection />
    </div>
  );
};

export default PublicQuestion;
