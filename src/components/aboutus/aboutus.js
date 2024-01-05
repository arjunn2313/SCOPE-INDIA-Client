import React from "react";
import "./aboutus.css";

export default function Aboutus() {
  return (
    <div className="aboutus">
      <div className="about-img">
        <img src="assets\front-view-female-teacher-pink-blouse-green 1.png" />
      </div>
       
      <div className="about-contents">
        <span>About us</span>
        <h5>
          Talented and Highly Qualified <br /> Tutors to Serve You for Online{" "}
          <br />
          Study
        </h5>
        <div>
          <p>
            there are lots of experienced mentors and learning videos here which
            are very
            <br />
            useful in the industry because we make case studies that are very
            related to the
            <br />
            world of work
          </p>

          <button>Join Now</button>
        </div>
      </div>
      {/* <div className="about-footer">
         <img src="assets\OBJECTS2.png" />
     </div> */}
    </div>
  );
}
