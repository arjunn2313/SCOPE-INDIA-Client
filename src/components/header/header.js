import React from "react";
import "./header.css";
import Navbar from "../navbar/navbar";

export default function Header() {
  return (
    <>
    <Navbar/>
    <div className="header">
      <div className="header-title">
        <h2>
          Find The Best <br /> Online & Offline <br /> Course 
          Learn <br />For Your Future
        </h2>
        <p>
          Scope is the e learning platform, where students of all ages can
          access
          <br />
          learning tools and resources to achieve their personalized career
          <br />
          objectives at the comfort of their home.
        </p>
        <div className="header-btn">
          <button>Register Now</button>
        </div>
        <div className="header-footer">
          <img src="assets\Frame 5.png" />
          <span>
          <h6>250K</h6>
          <span>Happy Students</span> 
          </span>
           </div>
      </div>

      <div>
        <div className="header-sl2">
      <img src="assets\icons8-team-FcLyt7lW5wg-unsplash 1.png" />
      </div>
      </div>
    </div>
    </>
  );
}
