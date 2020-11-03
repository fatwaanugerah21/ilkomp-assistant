import React from "react";
import "./schedules.min.css";

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

  const pageContent = schedulesList.map((data) => {
    console.log(data);
    return (
      <div className="schedule-item card" key={data.id}>
        <li className="schedule-name">{data.name}</li>
        <li className="schedule-time">{data.time}</li>
      </div>
    );
  });

  return <div className="schedules-page container">{pageContent}</div>;
};

export default Schedules;
