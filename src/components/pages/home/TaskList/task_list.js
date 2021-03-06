import React from "react";
import { Link } from "react-router-dom";
import "./task_list.min.css";

const TaskList = () => {
   return (
      <div className="task-list-menu">
         <Link to="/task-list">
            <div className="mask">
               <Link to="/task-list">
                  <h1 className="menu-name">Daftar Tugas</h1>
               </Link>
            </div>
         </Link>
      </div>
   );
};
export default TaskList;
