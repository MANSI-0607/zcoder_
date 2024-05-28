import React from "react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const QuestionUploadArea = () => {
  return (
    <div className="QuestionUploadArea">
      <Button variant="contained" color="success">Upload</Button>
      <Button variant="contained" color="error">Cancel</Button>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Public" />
      <FormControlLabel control={<Checkbox />} label="Private" />
    </div>
  );
};

export default QuestionUploadArea;
