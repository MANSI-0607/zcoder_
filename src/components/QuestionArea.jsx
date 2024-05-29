import React from "react";
import Editor from "@monaco-editor/react";
import CodeEditor from "../CodeEditor";

const QuestionArea = () => {
  return (
    <div className="QuestionArea">
      <div className="QuestionArea-left">
        <label className="input-label">
          Write your Question
          <textarea placeholder="Write your question here" />
        </label>
        <label className="input-label">
          Write your Notes
          <textarea placeholder="Write your notes here" />
        </label>
      </div>
      <div className="QuestionArea-right">
        <Editor
          height="100%"
          width="90%"
          theme="vs-dark"
          language="cpp"
          options={{ automaticLayout: true }}
        />
      </div>
    </div>
  );
};

export default QuestionArea;
