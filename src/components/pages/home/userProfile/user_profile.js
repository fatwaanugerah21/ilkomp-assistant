import React from 'react';
import userProfile from '../../../../images/alAlam.jpg';
import { Link } from 'react-router-dom';
import './user-profile.css'

const UserProfile = () => {
   return (
      <div className="user-profil">
         <section className="profil-avatar">
            <img src={userProfile} alt="" />
         </section>
         <section className="profil-text">
            <p className="profil-name">Fatwa anugerah nasir</p>
            <p className="profil-email"><Link to="/">fatwaanugerah21@gmail.com</Link></p>
         </section>
      </div>
   )
}
export default UserProfile