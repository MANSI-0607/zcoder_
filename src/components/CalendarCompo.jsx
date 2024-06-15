import React from "react";

const CalendarCompo = (props) => {
  const style = {
    backgroundColor: props.background
  };

  const { contest } = props;
  const startDate = new Date(contest.startTimeSeconds * 1000);

  const handleClick = () => {
    window.location.href = "https://codeforces.com/contests";
  };

  return (
    <div className="CalendarCompo" style={style} onClick={handleClick}>
      <p className="contest-name">{contest.name}</p>
      <p className="contest-date">{startDate.toLocaleDateString()}</p>
      <p className="contest-time">{startDate.toLocaleTimeString()}</p>
    </div>
  );
};

export default CalendarCompo;
