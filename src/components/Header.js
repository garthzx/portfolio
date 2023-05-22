import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-name">
        <div className="image-container">
          <img src={require("../assets/me.jpg")} alt="profile" />
        </div>
        <div className="typewriter">
          <span></span>
          <a href="#">Garth Dustin</a>
        </div>
      </div>
      <nav>
        <div className="left">
          <div className="nav-item">
            <a href="#projects">Projects</a>
          </div>
          <div className="nav-item">
            <a href="#about">About me</a>
          </div>
          <div className="nav-item">
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="right">
          <a
            href="https://www.instagram.com/garthzx/"
            className="right-item"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/garthzx/"
            className="right-item"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/garth-ayang-ang-378a94262/"
            className="right-item"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https:www.github.com/garthzx"
            className="right-item"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
