import React, { useState } from "react";
import "./dropdown.min.css";

export const Dropdown = (props) => {
   var optionsDiv = document.getElementById(props.id);

   const toggleOptionsVisibility = () => {
      optionsDiv.classList.toggle("show-options");
   };

   const [value, setValue] = useState(props.value);
   const optionsList = props.children.map((option) => option.key);
   const [showedOptions, setShowedOptions] = useState(optionsList);

   const searchOptions = (e) => {
      setValue(e.target.value);
      optionsDiv.classList.add("show-options");
      setShowedOptions(
         optionsList.filter((option) => {
            return option.toLowerCase().includes(e.target.value.toLowerCase());
         })
      );
   };

   const optionsListDiv = showedOptions.map((option) => {
      return (
         <div className="option" key={option} onClick={() => setValue(option)}>
            {option}
         </div>
      );
   });

   return (
      <div className={props.className + " dropdown-container"}>
         <div className="custom-dropdown">
            <div
               className="showed-value"
               onClick={() => toggleOptionsVisibility()}
            >
               <div className="values">
                  <input
                     className="value"
                     type="text"
                     value={value}
                     onChange={searchOptions}
                  />
               </div>
            </div>
            <div className="options" id={props.id}>
               <div
                  className="option-item"
                  onClick={() => toggleOptionsVisibility()}
               >
                  {optionsListDiv}
               </div>
            </div>
         </div>
      </div>
   );
};
