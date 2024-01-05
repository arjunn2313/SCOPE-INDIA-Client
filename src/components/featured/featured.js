import React from "react";
import "./featured.css";

export default function Featured() {
  return (
    <>
    <div className="featured">
      <div className="f-sec1">
        <div className="f1-elemnts">
          <span>WHY CHOOSE US</span>
          <h2>
            The Benefits You Get When <br /> You Study at Scope
          </h2>
        </div>
      </div>
      </div>
      <div className="f-sec2">

        <div className="f2Child" style={{borderTop:'5px solid #1700FF'}}>
           
            <img src="assets\Frame 9 (1).png" />
            <h5>Experienced mentors</h5>
            <span>
              all the mentors are very experienced <br/> in the industry, get
              interesting<br/> experiences by studying here
            </span>
          
        </div>

        <div className="f2Child" style={{borderTop:'5px solid #FF0069'}}>

          
            <img src="assets\Frame 9 (2).png" />
            <h5>24/7 Study Anywhere</h5>
            <span>
              by studying online you can learn anywhere and anytime and of
              course not bound by time
            </span>
          
        </div>
        <div className="f2Child" style={{borderTop:'5px solid #FFA800'}}>

           
            <img src="assets\Frame 9 (3).png" />
            <h5>Free E - Book Everyweek</h5>
            <span>
              every week you will get a free ebook that you can read according
              to your interests
            </span>
           
        </div>
        <div className="f2Child" style={{borderTop:'5px solid #00FF47'}}>
           
            <img src="assets\Frame 9.png" />
            <h5>Affordable Prices</h5>
            <span>
              studying here is very affordable and you will get features that
              are very helpful for your learning process
            </span>
           
        </div>
      </div>
      </>
  );
}
