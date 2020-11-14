import "./email.min.css";
import React from "react";

const Email = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <div className="footer-email">
         <span className="title">Keep connected</span>
         <form onSubmit={handleSubmit}>
            <input type="email-input" placeholder="Enter your email" />
            <button className="email-submit-button" onClick={handleSubmit}>
               Submit
            </button>
         </form>
      </div>
   );
};
export default Email;
