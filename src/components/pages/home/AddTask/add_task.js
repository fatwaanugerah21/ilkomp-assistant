import React from "react";
import "./add_task.min.css";
import { Link } from "react-router-dom";

const AddTask = () => {
   return (
      <div className="add-task-menu">
         <Link to="add-task">
            <div className="mask">
               <h1 className="menu-name">Tambah Tugas</h1>
            </div>
         </Link>
      </div>
   );
};
export default AddTask;
