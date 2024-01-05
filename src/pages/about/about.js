import React from "react";
import Aboutus from "../../components/aboutus/aboutus";
import Navbar from "../../components/navbar/navbar";
import "./about.css";
import Footer from "../../components/footer/footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <Aboutus />

      <div className="about-us-bottom">
        <h2>SCOPE INDIA, your career partner!</h2>
        <h4>
          One of the best Training Destination for Software, Networking and
          Cloud Computing courses in India
        </h4>
        <p>
          Software, Networking, and Cloud Professional Education Centre in
          Kerala from Suffix E Solutions with WORKING PROFESSIONALS oriented
          on-the-job <br /> TRAINING model. SCOPE INDIA provides courses for
          Software Programming in Python (Data Science | Artificial Intelligence
          |<br />
          Machine Learning | Deep Learning), Java, PHP, .Net, Software Testing
          Manual and Automation, Cloud in AWS, Azure, Server Administration{" "}
          <br />
          in MCSE, and RHCE, CCNA, Mobile App Development in Flutter, and,
          Digital Marketing. Training with 100% Trusted Job Based Internship
          <br /> Model. SCOPE INDIA has a Strong Placement Cell that provides
          jobs to 1000's of students every year. We assure you, you won't regret
          it after <br />
          training from SCOPE INDIA!
        </p>
        <img src="assets\5star.png" style={{ width: "20%" }} />
        <span>Google 4.9 * Rated Institute</span>
      </div>
      <Footer />
    </div>
  );
}
