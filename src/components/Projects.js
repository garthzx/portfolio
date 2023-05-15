import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [listItemClicked, setListItemClicked] = useState("All");

  const listItemClickHandler = (e, menuName) => {
    setListItemClicked(menuName);
  };

  const renderMenuList = () => {
    const menuList = ["All", "C#", "Java", "Python", "React"];

    return menuList.map((menu) => {
      return (
        <li
          onClick={(e) => listItemClickHandler(e, menu)}
          className={`${
            menu === listItemClicked ? "current" : ""
          } menu-list-item`}
          key={menu}
          data-target={menu}
        >
          {menu}
        </li>
      );
    });
  };

  return (
    <section id="projects" className="projects">
      <div className="wrapper">
        <div className="title-container">
          <h1 className="title">Projects</h1>
        </div>
        {/* <ul className="portfolio-menu">{renderMenuList()}</ul> */}
        <div className="project-list">
          <div className="grid-container">
            <div className="project-tile" data-aos="fade-up">
              <div className="project-tile-expansion">
                <p className="project-description">
                  Doodle is a simple search engine that is similar in features
                  as Google's. It stores sites and images in a MySQL database.
                </p>
              </div>
              <div>
                <img
                  src={require("../assets/projects/doodle.png")}
                  alt="survey-form"
                />
                <div className="tech-used">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>PHP</span>
                  <span>MYSQL</span>
                  <a
                    href="https://github.com/garthzx/doodle"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <h2 className="project-title">Doodle</h2>
              </div>
            </div>
            <div className="project-tile" data-aos="fade-up">
              <div className="project-tile-expansion">
                <p className="project-description">
                  A dynamically-typed, C-based syntax programming language.
                  Supports arithmetic operations, conditional statements, and
                  loops. Written in Python 3.
                </p>
              </div>
              <div>
                <img
                  style={{ objectFit: "contain" }}
                  src={require("../assets/projects/gelic.png")}
                  alt="tribute-page"
                />
                <div className="tech-used">
                  <span>Python</span>
                  <a
                    href="https://github.com/garthzx/gelic"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <h2 className="project-title">Gelic</h2>
              </div>
            </div>
            <div className="project-tile" data-aos="fade-up">
              <div className="project-tile-expansion">
                <p className="project-description">
                  An expense tracker application written in ASP.NET Core MVC,
                  Bootstrap 5, and Syncfusion.
                </p>
              </div>
              <div>
                <img
                  style={{ objectFit: "cover" }}
                  src={require("../assets/projects/extrack.png")}
                  alt="tribute-page"
                />
                <div className="tech-used">
                  <span>ASP.NET MVC</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                  <span>Syncfusion</span>
                  <a
                    href="https://github.com/garthzx/extrack"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <h2 className="project-title">ExTrack</h2>
              </div>
            </div>
            <div className="project-tile" data-aos="fade-up">
              <div className="project-tile-expansion">
                <p className="project-description">
                  A simple E-Commerce website built using ASP.NET Core MVC (.NET
                  6). This was developed by following my online course on Udemy.
                </p>
              </div>
              <div>
                <img
                  style={{ objectFit: "cover" }}
                  src={require("../assets/projects/bulkybook.png")}
                  alt="tribute-page"
                />
                <div className="tech-used">
                  <span>ASP.NET MVC</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                  <a
                    href="https://github.com/garthzx/bulkybook"
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <h2 className="project-title">Bulky Book</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
