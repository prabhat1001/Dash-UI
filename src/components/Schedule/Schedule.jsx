import React from "react";
import "./Schedule.css";

import seeAll from "../../assets/see-all-icon.svg";

const Schedule = () => {
  return (
    <div className="schedule-cont">
      <div className="schedule-heading">Today's schedule</div>
      <div className="schedule-next-cont">
        <p>See All</p>
        <img src={seeAll} className="arrow-next" />
      </div>
      <div className="schedule-card-cont">
        <div className="schedule-card-1">
          <h4 className="meeting-title">
            Meeting with suppliers from Kuta Bali
          </h4>
          <p className="time">14:00 - 15:00</p>
          <p className="add">at Sunset Road, Kuta, Bali</p>
        </div>
        <div className="schedule-card-2">
          <h4 className="meeting-title">Check operation at Giga Factory 1</h4>
          <p className="time">18:00 - 20:00</p>
          <p className="add">at Central Jakarta</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
