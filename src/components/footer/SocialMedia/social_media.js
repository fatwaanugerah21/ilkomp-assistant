import React from 'react';
import './social_media.css';
import facebookLogo from './facebook.svg';
import instagramLogo from './instagram.svg'
import linkedinLogo from './linkedin.svg'
import twitterLogo from './twitter.svg'

const SocialMedia = () => {

   return (
      <div className="social-media-info">
         <span className="title">
            Social Media
         </span>
         <div className="icons-row">
            <a href = "https://www.facebook.com/fatwaanugerah21" rel="noopener noreferrer" target="_blank" ><img alt="facebook-social-media" src={facebookLogo} width="10" className="facebook-icon sosmed-icon"></img></a>
            <a href = "https://www.instagram.com/fatwaanugerah21" rel="noopener noreferrer" target="_blank" ><img src={instagramLogo} alt="instagram-social-media" className="instagram-icon sosmed-icon"></img></a>
            <a href = "https://twitter.com/Fatwa69351857" rel="noopener noreferrer"target="_blank" ><img alt="twitter-social-media" src={twitterLogo} className="twitter-icon sosmed-icon"></img></a>
            <a href = "https://www.linkedin.com/in/fatwa-anugerah-9763b11b4" rel="noopener noreferrer" target="_blank" ><img src={linkedinLogo} alt="linkedin-social-media" className="linkedin-icon sosmed-icon"></img></a>
         </div>
      </div>
   )
}
export default SocialMedia