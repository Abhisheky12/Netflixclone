import React from 'react'
import "./Footer.css"
export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src="./images/youtube_icon.png" alt="" />
        <img src="./images/twitter_icon.png" alt="" />
        <img src="./images/instagram_icon.png" alt="" />
        <img src="./images/facebook_icon.png" alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Coporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p children='copyright-text'>© 1997-2020 Netflix,Inc.</p>
    </div>
  )
}


