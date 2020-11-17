import React from "react";
import "./dropdown.min.css";

export const Dropdown = (props) => {
   var options = document.getElementById(props.id);

   const toggleOptionsVisibility = () => {
      options.classList.toggle("show-options");
   };

   return (
      <div className={props.className + " dropdown-container"}>
         <div className="custom-dropdown">
            <div
               className="showed-value"
               onClick={() => toggleOptionsVisibility()}
            >
               <div className="values">
                  <div className="value" type="text" value="Senin">
                     {props.value}
                  </div>
               </div>
            </div>
            <div className="options" id={props.id}>
               <div
                  className="option-item"
                  onClick={() => toggleOptionsVisibility()}
               >
                  {props.children}
               </div>
            </div>
         </div>
      </div>
   );
};
