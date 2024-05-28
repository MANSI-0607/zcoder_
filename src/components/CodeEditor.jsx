import React, { useState } from 'react';
import CodeEditor from '../CodeEditor';

const files = {
  'script.js': {
    name: 'script.js',
    language: 'javascript',
    value: '// type your JavaScript code...',
  },
  'style.css': {
    name: 'style.css',
    language: 'css',
    value: '/* type your CSS code... */',
  },
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: '<!-- type your HTML code... -->',
  },
};

const QuestionArea = () => {
  const [fileName, setFileName] = useState('script.js');
  const file = files[fileName];

  const handleEditorChange = (newValue) => {
    console.log('Editor content changed:', newValue);
    // Optionally update state or perform other actions
  };

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
        <div className="file-buttons">
          <button disabled={fileName === 'script.js'} onClick={() => setFileName('script.js')}>
            script.js
          </button>
          <button disabled={fileName === 'style.css'} onClick={() => setFileName('style.css')}>
            style.css
          </button>
          <button disabled={fileName === 'index.html'} onClick={() => setFileName('index.html')}>
            index.html
          </button>
        </div>
        <CodeEditor
          path={file.name}
          language={file.language}
          value={file.value}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default QuestionArea;
