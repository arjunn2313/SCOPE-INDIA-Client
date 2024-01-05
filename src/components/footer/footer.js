import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-sec1">
        <div className="footer-element1">
          <img src="assets\scope-india-logo-bird.png" />
          <span>SCOPE INDIA</span>
          <p>
            Helping ambitious learners upskill<br/> themselves & shift to top product<br/>
            based companies
          </p>
        </div>
      </div>

      <div className="footer-list">
         
            <ul>
                <li style={{color:'aqua'}}>About</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Term Of Use</li>
                <li>Refund Policy</li>
               <li>Privacy Policy</li>
            </ul>
       

         
            <ul>
                <li style={{color:'aqua'}}>Usefull Links</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Linkdin</li>
                <li>Telegram</li>
               <li>Youtube</li>
            </ul>
      
      </div>
    </div>
  );
}
