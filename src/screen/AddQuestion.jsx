import React, { useState, useContext } from "react";
import Editor from "@monaco-editor/react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./AddQuestion.css";
import { CurrentUserContext } from "../App";
const AddQuestion = () => {
  const { currentUsername } = useContext(CurrentUserContext);
  const [uploadedQuestion, setUploadedQuestion] = useState({
    username: currentUsername,
    question: "",
    notes: "",
    code: "",
    access: "public", // Set the initial state to "public"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUploadedQuestion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpload = async () => {
    if (!uploadedQuestion.access) {
      alert("Please select at least one option for access (Public/Private)");
      return;
    }

    // Proceed with uploading the question
    console.log(uploadedQuestion);

    try {
      const response = await fetch(
        `http://localhost:8000/${uploadedQuestion.username}/uploadQuestion`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadedQuestion),
        }
      );

      if (response.ok) {
        alert("Question Uploaded!");
        //navigate("/explore");
      } else {
        const data = await response.json();
        alert(data.msg);
      }
    } catch (error) {
      console.error("Error during Uploading Question:", error);
      alert("Upload failed. Please try again later.");
    }

    // Reset the form fields after upload
    setUploadedQuestion({
      username: currentUsername,
      question: "",
      notes: "",
      code: "",
      access: "public",
    });
  };

  const handleAccessChange = (event) => {
    // Update the access state based on the selected value
    setUploadedQuestion((prevState) => ({
      ...prevState,
      access: event.target.value,
    }));
  };

  return (
    <div className="AddQuestion" id="addquestion">
      <div className="QuestionArea">
        <div className="QuestionArea-left">
          <label className="input-label">
            Write your Question:
            <textarea
            className="inputLiveCode"
              name="question"
              value={uploadedQuestion.question}
              onChange={handleChange}
              placeholder="Write your question here"
            />
          </label>
          <label className="input-label">
            Write your Notes
            <textarea
              name="notes"
              value={uploadedQuestion.notes}
              onChange={handleChange}
              placeholder="Write your notes here"
            />
          </label>
        </div>
        <div className="QuestionArea-right">
          <Editor
            name="code"
            value={uploadedQuestion.code}
            onChange={(value) =>
              setUploadedQuestion((prevState) => ({
                ...prevState,
                code: value,
              }))
            }
            height="100%"
            width="90%"
            theme="vs-dark"
            language="cpp"
            options={{ automaticLayout: true }}
          />
        </div>
      </div>

      <div className="QuestionUploadArea">
        <Button variant="contained" color="success" onClick={handleUpload}>
          Upload
        </Button>
        <Button variant="contained" color="error">
          Cancel
        </Button>
        <FormControl component="fieldset">
          <FormLabel component="legend">Access</FormLabel>
          <RadioGroup
            aria-label="access"
            name="access"
            value={uploadedQuestion.access}
            onChange={handleAccessChange}
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

export default AddQuestion;
