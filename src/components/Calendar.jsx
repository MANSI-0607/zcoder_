import React from "react";
import CalendarCompo from "./CalendarCompo";

const Calendar = () => {
  return (
    <div className="Calendar">
      <div className="upcomingContest">
        <h1>Upcoming Contest</h1>
        <CalendarCompo background={"rgb(176, 217, 115)"} />
        <CalendarCompo background={"rgb(176, 217, 115)"} />
        <CalendarCompo background={"rgb(176, 217, 115)"} />
        <CalendarCompo background={"rgb(176, 217, 115)"} />
      </div>
      <div className="pastContest">
        <h1>Past Contest</h1>
        <CalendarCompo background={"rgb(172, 172, 172)"} />
        <CalendarCompo background={"rgb(172, 172, 172)"} />
        <CalendarCompo background={"rgb(172, 172, 172)"} />
        <CalendarCompo background={"rgb(172, 172, 172)"} />
      </div>
    </div>
  );
};

export default Calendar;
