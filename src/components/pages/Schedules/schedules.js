import React from "react";

const Schedules = (props) => {
  const schedulesList = [
    {
      id: 1,
      name: "Teori Peluang",
      time: "Selasa, 10:00",
      lecturer: "Bu Hilal",
      chief: "Takdim",
      room: "Google Meet",
    },
    {
      id: 2,
      name: "Desain dan Algoritma",
      time: "Selasa, 07:30",
      lecturer: "Kak Sadno",
      chief: "Takdim",
      room: "Zoom Meetings",
    },
  ];

  return (
    <div className="shedules-page">
      {schedulesList.map((data) => {
        console.log(data);
        return (
          <div className="container schedule">
            <div className="schedule-name">{data.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Schedules;
