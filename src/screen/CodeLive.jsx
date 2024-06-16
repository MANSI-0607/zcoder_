import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import "./Codelive.css"; // Import the CSS file for styling

const CodeRunner = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/run-cpp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, input }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setOutput(errorData.error);
      } else {
        const data = await response.json();
        setOutput(data.output);
      }
    } catch (error) {
      setOutput("An error occurred: " + error.message);
    }
  };

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="code-runner-container">
      <div className="left">
        <div className="input-container">
          <label htmlFor="input">Input:</label>
          <textarea
            id="input"
            value={input}
            onChange={handleInputChange}
            rows={4}
            cols={50}
          />
          <button className="run-button" onClick={handleSubmit}>
            Run Code
          </button>
        </div>
        <div className="output-container">
          <h3>Output:</h3>
          <pre>{output}</pre>
        </div>
      </div>
      <div className="right">
        {" "}
        <div className="editor-container">
          <Editor
            name="code-editor"
            value={code}
            onChange={handleCodeChange}
            height="100%"
            width="100%"
            theme="vs-dark"
            language="cpp"
            options={{ automaticLayout: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeRunner;
