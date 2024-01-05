import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./contact.css";
import ContactForm from "../../components/contactForm/contactForm";
import Footer from "../../components/footer/footer";

export default function Contact() {
  return (
    <div>
      <Navbar />

      <div className="contact-header">
        {/* section 1 */}
        <div className="sec1-title">
          <h3>DISCOVER US</h3>
          <p>
            Scope is here to help you;
            <br />
            Our experts are available to answer any questions you <br /> might
            have. We’ve got the answers.
          </p>

          <div>
            <h5>Visit Us</h5>
            <p>
              TC 25/1403/3, Athens Plaza, SS Kovil Road, Thampanoor,
              <br /> Trivandrum, Kerala 695001
            </p>
          </div>

          <p>Feel free to get in touch with us through our channels: </p>

          <div>
            <h5>Email US</h5>
            <p>scope@gmail.com </p>
          </div>

          <div>
            <h5>Contact US</h5>
            <p>
              +971-4-576-6770 <br />
              +971-55-983-7007{" "}
            </p>
          </div>
        </div>

        <div className="sec-2">
          <div className=".sec-imgcon1">
            <img src="assets\1.png" alt="g"/>
            <img src="assets\3.png" alt="h" />
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
