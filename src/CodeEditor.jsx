import Editor from "@monaco-editor/react";
function CodeEditor() {
  const code = "var message = 'Monaco Editor!' \nconsole.log(message);";
  return (
    <Editor
      height="100px"
      language="javascript"
      theme="vs-dark"
      value={code}
      options={{
        inlineSuggest: true,
        fontSize: "16px",
        formatOnType: true,
        autoClosingBrackets: true,
        minimap: { scale: 10 },
      }}
    />
  );
}
export default CodeEditor;
