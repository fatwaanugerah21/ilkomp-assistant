import React from 'react';
import './phone_number.css'
import { Link } from 'react-router-dom'

const PhoneNumberMenu = () => {

   return (
      <div className="phone-number-menu-in">
         <Link to="phone-number">
            <div className="mask">
               <h1 className="menu-name">Phone Number</h1>
            </div>
         </Link>
      </div>
   )
}
export default PhoneNumberMenu