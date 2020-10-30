import React from 'react';
import Creator from './Creator/creator';
import Email from './Email/email';
import SocialMedia from './SocialMedia/social_media';
import './footer.css'

export const Footer = () => {
   return (
      <footer className="footer">
         <div className="icon-container">
            <li className="creator"><Creator /></li>
            <li className="social-media-info"><SocialMedia/></li>
            <li className="email"><Email /></li>
         </div>
      </footer>
   )
}
