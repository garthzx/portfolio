import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { projectData } from "../data/project";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [listItemClicked, setListItemClicked] = useState("All");

  const listItemClickHandler = (e, menuName) => {
    setListItemClicked(menuName);
  };

  const renderProjectTiles = () => {
    return projectData.map((project) => {
      return (
        <div className="project-tile" data-aos="fade-up" key={project.id}>
          <div className="project-tile-expansion">
            <p className="project-description">{project.description}</p>
          </div>
          <div>
            <img src={project.imgSrc} alt="survey-form" />
            <div className="tech-used">
              <div>
                {project.techUsed.map((i) => (
                  <span key={project.techUsed.indexOf(i)}>{i}</span>
                ))}
              </div>
              <a
                href={project.githubHref}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <h2 className="project-title">{project.title}</h2>
          </div>
        </div>
      );
    });
  };

  // FEATURE: To be added upon having more projects :)
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
          <div className="grid-container">{renderProjectTiles()}</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
