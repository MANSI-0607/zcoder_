import React, { useEffect, useState } from "react";
import CalendarCompo from "./CalendarCompo";
import { Hourglass } from "react-loader-spinner"; // Import as named import


const Calendar = () => {
  const [upcomingContests, setUpcomingContests] = useState([]);
  const [pastContests, setPastContests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch("https://codeforces.com/api/contest.list");
        const data = await response.json();
        if (data.status === "OK") {
          const contests = data.result;
          const upcoming = contests
            .filter((contest) => contest.phase === "BEFORE")
            .slice(0, 5)
            .reverse();
          const past = contests
            .filter((contest) => contest.phase === "FINISHED")
            .slice(0, 5);

          setUpcomingContests(upcoming);
          setPastContests(past);
        } else {
          console.error("Error fetching contests:", data.comment);
        }
      } catch (error) {
        console.error("Error fetching contests:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };
    fetchContests();
  }, []);

  return (
    <div className="Calendar">
      <div className="upcomingContest">
        <h1>Upcoming Contests</h1>
        {loading ? (
          <div className="loader-container">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={['#306cce', '#72a1ed']}
            />
          </div>
        ) : (
          upcomingContests.map((contest) => (
            <CalendarCompo
              key={contest.id}
              background={"rgb(176, 217, 115)"}
              contest={contest}
            />
          ))
        )}
      </div>
      <div className="pastContest">
        <h1>Past Contests</h1>
        {loading ? (
          <div className="loader-container">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={['#306cce', '#72a1ed']}
            />
          </div>
        ) : (
          pastContests.map((contest) => (
            <CalendarCompo
              key={contest.id}
              background={"rgb(172, 172, 172)"}
              contest={contest}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Calendar;
