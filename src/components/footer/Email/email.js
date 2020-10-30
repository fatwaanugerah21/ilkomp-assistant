import React from 'react';
import './email.css'
const Email = () => {

   const handleSubmit = (e) => {
      e.preventDefault();
   }

   return (
      <div className="footer-email">
         <span className="title">Get Notification</span>
         <form onSubmit={handleSubmit}>
            <input type="email-input" placeholder="Enter your email" />
            <button className="email-submit-button" onClick={handleSubmit}>Submit</button>
         </form>
      </div>
   )
}
export default Email