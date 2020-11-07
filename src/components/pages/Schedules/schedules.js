import React, { useEffect, useState } from "react";
// import { Carousel } from "../../carousel/carousel";
import "./schedules.min.css";

const Schedules = () => {
   const [device, setDevice] = useState("");
   useEffect(() => {
      setDevice(window.innerWidth >= 720 ? "laptop" : "phone");
      const event = window.addEventListener("resize", () => {
         setDevice(window.innerWidth >= 720 ? "laptop" : "phone");
         return window.removeEventListener("resize", event);
      });
   }, [device]);

   const [bottomIsOpen, setBottomIsOpen] = useState(false);

   const showBack = (e) => {
      if (device === "phone") {
         if (e.classList.length === 1) {
            e.classList.add("show-back");
            setBottomIsOpen(true);
         } else {
            e.classList.remove("show-back");
            setBottomIsOpen(false);
         }
      }
      console.log(e.classList);
   };

   const schedulesList = [
      {
         id: 1,
         name: "Teori Peluang",
         time: "Selasa, 10:00 WITA",
         lecturer: "Bu Hilal",
         chief: "Takdim",
         book: "Statistic basic",
         room: "Google Meet",
         picture:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      },
      {
         id: 2,
         name: "Desain dan Algoritma",
         time: "Selasa, 07:30 WITA",
         lecturer: "Kak Sadno",
         chief: "Takdim",
         book: "Learn Desain James Birmingham",
         room: "Zoom Meetings",
         picture:
            "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg",
      },
   ];

   const schedules = schedulesList.map((schedule) => {
      return (
         <div
            id={schedule.id}
            onClick={() => showBack(document.getElementById(schedule.id))}
            className={device}
         >
            <div className="front-card flip-card-content">
               <img
                  src={schedule.picture}
                  alt={schedule.name}
                  className="schedule-image"
               />
               <div className="card-text">
                  <li>
                     <span className="card-title">{schedule.name}</span>
                  </li>
                  <li>
                     <p>{schedule.time}</p>
                  </li>
                  <li>
                     <p>{schedule.room}</p>
                  </li>
                  <li>
                     {bottomIsOpen ? (
                        <span className="arrow">&#94;</span>
                     ) : (
                        <span className="arrow">&#8964;</span>
                     )}
                  </li>
               </div>
            </div>
            <div className="back-card flip-card-content">
               <div className="back-card-container">
                  <h1 className="card-title">{schedule.name}</h1>
                  <li>
                     <span>Dosen</span> <span>: {schedule.lecturer}</span>
                  </li>
                  <li>
                     Ketua Kelas <span>: {schedule.chief}</span>
                  </li>
                  <li>
                     Waktu <span>: {schedule.time}</span>
                  </li>
                  <li>
                     Ruangan <span>: {schedule.room}</span>
                  </li>
                  <li>
                     Buku <span>: {schedule.book}</span>
                  </li>
               </div>
            </div>
         </div>
      );
   });

   return (
      <div className="schedules-page container page">
         <h1 className="main-title">Jadwal Matakuliah Ilkomp Semester 3</h1>
         <div className="schedules">{schedules}</div>
      </div>
   );
};

export default Schedules;
