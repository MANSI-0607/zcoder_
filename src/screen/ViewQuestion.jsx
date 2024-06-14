import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./ViewQuestion.css";
import { CurrentUserContext } from "../App";

const ViewQuestion = () => {
  const { currentUsername } = useContext(CurrentUserContext);
  const { questionId } = useParams();
  const navigate = useNavigate(); // Navigate hook to redirect
  const [questionData, setQuestionData] = useState({
    question: "",
    notes: "",
    code: "",
    access: "public",
  });

  useEffect(() => {
    const fetchQuestionDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/getRecentQuestion/${questionId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuestionData({
          question: data.question,
          notes: data.notes,
          code: data.code,
          access: data.access,
        });
      } catch (error) {
        console.error("Error fetching question details:", error);
      }
    };

    fetchQuestionDetails();
  }, [questionId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCodeChange = (newValue) => {
    setQuestionData((prevData) => ({
      ...prevData,
      code: newValue,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8000/updateQuestion/${questionId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(questionData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedData = await response.json();
      setQuestionData(updatedData);
      // Redirect or notify user after saving
      navigate(`/${currentUsername}/home`); // Change to your desired route after save
    } catch (error) {
      console.error("Error updating question details:", error);
    }
  };

  return (
    <div className="ViewQuestion" id="viewquestion">
      <div className="QuestionArea">
        <div className="QuestionArea-left">
          <label className="input-label">
            Question
            <textarea
              name="question"
              value={questionData.question}
              onChange={handleInputChange}
              placeholder="Write your question here"
            />
          </label>
          <label className="input-label">
            Your Notes
            <textarea
              name="notes"
              value={questionData.notes}
              onChange={handleInputChange}
              placeholder="Write your notes here"
            />
          </label>
        </div>
        <div className="QuestionArea-right">
          <Editor
            name="code"
            value={questionData.code}
            height="100%"
            width="90%"
            theme="vs-dark"
            language="cpp"
            onChange={handleCodeChange}
            options={{ automaticLayout: true }}
          />
        </div>
      </div>
      <div className="QuestionSaveArea">
        <Button variant="contained" color="success" onClick={handleSave}>
          Save
        </Button>
        <Button variant="contained" color="error" onClick={() =>  navigate(`/${currentUsername}/home`)}>
          Cancel
        </Button>
        <FormControl component="fieldset">
          <FormLabel component="legend" className="access">Access</FormLabel>
          <RadioGroup
            aria-label="access"
            name="access"
            value={questionData.access}
            onChange={handleInputChange}
          >
            <FormControlLabel
              value="public"
              control={<Radio />}
              label="Public"
            />
            <FormControlLabel
              value="private"
              control={<Radio />}
              label="Private"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default ViewQuestion;
