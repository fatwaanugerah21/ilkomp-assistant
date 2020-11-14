import React from "react";
import OwnModal from "../../../modal/ownModal";

const AddSchedule = ({ show, onClick }) => {
   const inputForm = (
      <form onSubmit={() => {}}>
         <div className="name-input">
            <label htmlFor="name">Name</label>
            <input type="text" className="name" />
         </div>
         <div className="name-input">
            <label htmlFor="name">Name</label>
            <input type="text" className="name" />
         </div>
         <div className="name-input">
            <label htmlFor="name">Name</label>
            <input type="text" className="name" />
         </div>
         <div className="name-input">
            <label htmlFor="name">Name</label>
            <input type="text" className="name" />
         </div>
         <div className="name-input">
            <label htmlFor="name">Name</label>
            <input type="text" className="name" />
         </div>
      </form>
   );

   return (
      <OwnModal show={show} onClick={onClick}>
         <div className="add-schedule">
            <div className="schedule-name">{inputForm}</div>
         </div>
      </OwnModal>
   );
};
export default AddSchedule;
