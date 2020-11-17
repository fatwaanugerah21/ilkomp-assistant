import React, { useEffect, useState } from "react";
import "./schedules.min.css";
import { StringLimiter } from "../../tools/stringLimiter";
import AddSchedule from "./AddSchedule/AddSchedule";
import { OtherMenuItem } from "../../tools/OtherMenu";

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
   const [showModal, setShowModal] = useState(false);

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

   const secondDisplay = (schedule) => {
      return (
         <div className="info-container">
            <span className="title">{StringLimiter(schedule.name, 18)}</span>
            <li>
               <p className="ask-info">Dosen</p>
               <span>{schedule.lecturer}</span>
            </li>
            <li>
               <p className="ask-info">Ketua</p>
               <span>{schedule.chief}</span>
            </li>
            <li>
               <p className="ask-info">Jadwal</p>
               <span>{schedule.time}</span>
            </li>
            <li>
               <p className="ask-info">Ruangan</p>
               <span>{schedule.room}</span>
            </li>
         </div>
      );
   };

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
               {secondDisplay(schedule)}
            </div>
         </div>
      );
   });

   return (
      <div className="schedules-page container page">
         <AddSchedule show={showModal} onClick={() => setShowModal(false)} />
         <h1 className="main-title">Jadwal Matakuliah Ilkomp Semester 3</h1>
         <div className="schedules">{schedules}</div>
         <OtherMenuItem
            onClick={() => setShowModal(true)}
            text="Tambah Jadwal Mata Kuliah"
         />
      </div>
   );
};

export default Schedules;
