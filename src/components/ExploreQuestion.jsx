import React, { useContext, useEffect, useState } from "react";
import Submissions from "./Submissions";
import { CurrentUserContext } from "../App";

const ExploreQuestion = () => {
  const { currentUsername } = useContext(CurrentUserContext);
  const [publicQuestions, setPublicQuestions] = useState([]);

  useEffect(() => {
    const fetchPublicQuestions = async () => {
      if (currentUsername) {
        try {
          const response = await fetch(
            `http://localhost:8000/${currentUsername}/explore`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data);
          setPublicQuestions(data);
        } catch (error) {
          console.error("Failed to fetch public questions:", error);
        }
      }
    };

    fetchPublicQuestions();
  }, [currentUsername]);

  return (
    <div className="ExploreQuestion">
      {publicQuestions.map((publicQuestion) => (
        <Submissions 
          key={publicQuestion._id} // Ensure a unique key prop for each item
          id={publicQuestion._id}
          question={publicQuestion.question} 
          username={publicQuestion.username} 
          timeOfCreation={publicQuestion.timeOfCreation} 
        />
      ))}
    </div>
  );
};

export default ExploreQuestion;
