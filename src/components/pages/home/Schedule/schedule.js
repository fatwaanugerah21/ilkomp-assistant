import React from 'react';
import './schedule.css'
import { Link } from 'react-router-dom';
const Schedule = () => {
   return (
      <div className="schedule-menu">
         <Link to="schedule">
            <div className="mask">
               <h1>Jadwal Matakuliah</h1>
            </div>
         </Link>
      </div>
   )
}
export default Schedule