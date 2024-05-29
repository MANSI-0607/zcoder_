import React from "react";


const CalendarCompo = (props) => {
  const style = {
    "--hover-bg-color": props.background
  };

  return (
    <div className="CalendarCompo" style={style}>
      <h3>Div</h3>
      <h3>Platform</h3>
      <h3>Date</h3>
      <h3>Time</h3>
    </div>
  );
};

export default CalendarCompo;
