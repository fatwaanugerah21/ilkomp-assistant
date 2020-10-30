import React from 'react';
import { Link } from 'react-router-dom';
import './task_list.css';

const TaskList = () => {
   return (
      <div className="task-list-menu">
         <div className="mask">
            <Link to="/task-list">
               <h1>Daftar Tugas</h1>
            </Link>
         </div>
      </div>
   )
}
export default TaskList