import React from "react";
import "./course.css";

export default function Course() {
  return (
    <div className="course">
      {/* SECTION 1 */}
      <div className="course-title">
        <span>Our Courses</span>
        <h5>Browse Our Popular Courses</h5>
        <p>
          Upgrade your knowledge and boost your career with our in-depth class
          videos. Our expert instructors have years of experience
          <br />
          in the industry and are dedicated to sharing their knowledge and
          skills with you
        </p>
      </div>

      {/* SECTION 2 */}
      <div className="course-icons">
        <div className="course-icon-el">
          <img src="assets\Group 5.png" />
          <span>All Categories</span>
        </div>

        <div className="course-icon-el">
          <img src="assets\Group 5 (1).png" />
          <span>Digital Marketing</span>
        </div>

        <div className="course-icon-el">
          <img src="assets\Group 5 (2).png" />
          <span>Programming</span>
        </div>

        <div className="course-icon-el">
          <img src="assets\Group 5 (3).png" />
          <span>Networking</span>
        </div>
      </div>

      {/* SECTION 3 */}

      <div className="course-container">
        <div className="course-containe-content">
          <div>
            <img src="assets\1 1.png" />
          </div>
          <div>
          <span style={{backgroundColor:'#1700FF'}}>Digital</span>
          </div>
          <h6>Basic Graphic Design</h6>
          <p>
            Unlock the power of design to boost conversions <br/> and drive more
            sales. In this class, you'll learn <br/>how to use design elements such
            as color,<br/> typography, and composition to create visually <br/>compelling
            and persuasive designs.
          </p>
        </div>

        <div className="course-containe-content">
          <div>
            <img src="assets\2 1.png" />
          </div>
          <div>
          <span style={{backgroundColor:'#FF0069'}}>Programming</span>
          </div>
          <h6>Basic Programming Language</h6>
          <p>
            Unlock the power of code to boost sales and drive<br/> more revenue. In
            this class, you'll learn how to use <br/> programming techniques to create
            persuasive <br/> and compelling digital experiences, you'll master <br/>the art
            of persuasive programming.
          </p>
        </div>

        <div className="course-containe-content">
          
            <img src="assets\3 1.png" />
         
          <div>
          <span style={{backgroundColor:'#FFA800'}}>Networking</span>
          </div>
          <h6>Basic Networking</h6>
          <p>
            Unlock the secrets of successful sales and drive<br/> more revenue for
            your business. In this class,<br/> you'll learn how to sell effectively
            and efficiently,<br/> mastering the art of persuasion and closing more<br/>
            deals.
          </p>
        </div>
      </div>
     
    </div>
  );
}
