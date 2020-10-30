import React from 'react';
import { NavLink } from 'react-router-dom';
import './navrow.css'
import BurgerMenu from './burger-icon.svg'
import CancelIcon from './CloseIcon.svg'

const Navrow = () => {

   const openMenu = () => {
      const navigation = document.getElementById('navigation-list')
      navigation.classList.add('active')
   }

   const closeSideMenu = () => {
      const navigation = document.getElementById('navigation-list');
      navigation.classList.remove('active');
   }

   return (
      <div className='second-background-color'>
         <nav className="nav-wrapper">
            <NavLink to="/"><img className="ilkomp-assistant-logo" src='/images/Ilkomp Assistant.svg' alt="ilkomp-logo" height='80' /></NavLink>
            <img onClick={openMenu} src={BurgerMenu} alt="mantul" id="burger-icon" className="burger-menu" />
            <ul id="navigation-list" className="nav-row hide-on-mobile">
               <img className="close-side-nav" onClick={closeSideMenu} src={CancelIcon} alt="cancel-icon" height="40" />
               <NavLink to="/learn"><li className="nav-item nav-item1" onClick={closeSideMenu}>Learn</li></NavLink>
               <NavLink to="/project"><li className="nav-item nav-item2" onClick={closeSideMenu}>Proyek</li></NavLink>
               <NavLink to="/contact-us"><li className="nav-item nav-item3" onClick={closeSideMenu}>Contact Us</li></NavLink>
            </ul>
         </nav>
      </div>
   )
}
export default Navrow