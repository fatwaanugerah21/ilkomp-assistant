import React from "react";
import FatwaPicture from "./alAlam.jpg";
import { Link } from "react-router-dom";
import "./user_profile.min.css";

const UserProfile = (props) => {
  return (
    <div className={props.className}>
      <section className="profil-avatar">
        <img src={FatwaPicture} alt="Fatwa" />
      </section>
      <section className="profil-text">
        <p className="profil-name">Fatwa anugerah nasir</p>
        <p className="profil-email">
          <Link to="/">fatwaanugerah21@gmail.com</Link>
        </p>
      </section>
    </div>
  );
};
export default UserProfile;
