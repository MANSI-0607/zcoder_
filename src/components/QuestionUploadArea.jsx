import React from "react";
import Button from "@mui/material/Button";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
// import { FormControl } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const QuestionUploadArea = () => {
  return (
    <div className="QuestionUploadArea">
      <Button variant="contained" color="success">Upload</Button>
      <Button variant="contained" color="error">Cancel</Button>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Public" />
      <FormControlLabel control={<Checkbox />} label="Private" />


      {/* <FormControl>
      
      <RadioGroup 
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="private" control={<Radio />} className="radio-button" label="Private" />
        <FormControlLabel value="public" control={<Radio />} className="radio-button" label="Public" />
        
      </RadioGroup>
    </FormControl> */}
    </div>
  );
};

export default QuestionUploadArea;
