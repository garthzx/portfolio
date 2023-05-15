import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <div className="wrapper">
        <div className="flexed">
          <h1>Contact me!</h1>
          <nav className="contacts-nav">
            <span>
              <a className="nav-item" href="mailto: gotfangarth@gmail.com" target="_blank" rel="noreferrer">gotfangarth@gmail.com</a>
            </span>
            <span>
              <a className="nav-item" href="https://www.linkedin.com/in/garth-ayang-ang-378a94262/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </span>
            <span>
              <a className="nav-item" href="https:www.github.com/garthzx" target="_blank" rel="noreferrer">github</a>
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Contact;
