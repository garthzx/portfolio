import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="description">
        <h3>
          As a driven and versatile full stack web developer, I am fueled by a
          deep passion for crafting exceptional digital experiences from start
          to finish. With expertise in both front-end and back-end development,
          I thrive on the opportunity to bring ideas to life and create
          meaningful interactions in the online world.
          <br />
          <br />
          My journey as a full stack web developer began with a desire to
          understand the complete picture of web development. Through dedicated
          learning and hands-on experience, I have honed my skills in a wide
          range of technologies, including HTML, CSS, JavaScript, Python, C#,
          Java, and various frameworks such as React and ASP.NET.
        </h3>
      </div>
      <main id="container">
        <div id="terminal" data-aos="fade-up">
          <section id="terminal__bar">
            <div id="bar__buttons">
              <button className="bar__button" id="bar__button--exit">
                &#10005;
              </button>
              <button className="bar__button">&#9472;</button>
              <button className="bar__button">&#9723;</button>
            </div>
            <p id="bar__user">garth@ubuntu: ~</p>
          </section>
          <section id="terminal__body">
            <div id="terminal__prompt">
              <span id="terminal__prompt--user">garth@ubuntu:</span>
              <span id="terminal__prompt--location">~</span>
              <span id="terminal__prompt--bling">
                $ <span className="command-text">cd ./info</span>
              </span>
            </div>
            <div id="terminal__prompt">
              <span id="terminal__prompt--user">garth@ubuntu:</span>
              <span id="terminal__prompt--location">~/info</span>
              <span id="terminal__prompt--bling">
                ${" "}
                <span className="command-text">
                  cat --pretty-format location.json
                </span>
              </span>
            </div>
            <div id="terminal__prompt" className="prompt__output">
              <div className="command-output">&#123;</div>
              <div className="command-output">country : "Philippines",</div>
              <div className="command-output">
                Region : "Cordillera Administrative Region",
              </div>
              <div className="command-output">State : "Kalinga",</div>
              <div className="command-output">City : "Tabuk"</div>
              <div className="command-output">&#125;</div>
            </div>
            <div id="terminal__prompt">
              <span id="terminal__prompt--user">garth@ubuntu:</span>
              <span id="terminal__prompt--location">~/info</span>
              <span id="terminal__prompt--bling">
                ${" "}
                <span className="command-text">
                  cat --pretty-format contact.json
                </span>
              </span>
            </div>
            <div id="terminal__prompt" className="prompt__output">
              <div className="command-output">&#123;</div>
              <div className="command-output">
                email :{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="command-output-link"
                  href="mailto: gotfangarth@gmail.com"
                >
                  "gotfangarth@gmail.com"
                </a>
                ,
              </div>
              <div className="command-output">
                number :{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="command-output-link"
                  href="tel:+639156390954"
                >
                  "+639156390954",
                </a>
              </div>
              <div className="command-output">
                linkedin :{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="command-output-link"
                  href="https://www.linkedin.com/in/garth-ayang-ang-378a94262/"
                >
                  "https://www.linkedin.com/in/garth-ayang-ang-378a94262/"
                </a>
                ,
              </div>
              <div className="command-output">
                github :{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="command-output-link"
                  href="https:www.github.com/garthzx"
                >
                  "garthzx"
                </a>
              </div>
              <div className="command-output">&#125;</div>
            </div>
            <div id="terminal__prompt">
              <span id="terminal__prompt--user">garth@ubuntu:</span>
              <span id="terminal__prompt--location">~/info</span>
              <span id="terminal__prompt--bling">
                ${" "}
                <span className="command-text">
                  cat --pretty-format edu.json
                </span>
              </span>
            </div>
            <div id="terminal__prompt" className="prompt__output">
              <div className="command-output">&#123;</div>
              <div className="command-output">
                university : "University of Saint Louis Tuguegarao",
              </div>
              <div className="command-output">
                degree : "Bachelor of Science in Computer Science",
              </div>
              <div className="command-output">year : "3rd year"</div>
              <div className="command-output">&#125;</div>
            </div>
            <div id="terminal__prompt">
              <span id="terminal__prompt--user">garth@ubuntu:</span>
              <span id="terminal__prompt--location">~/info</span>
              <span id="terminal__prompt--bling">
                $ <span className="command-text"></span>
              </span>
              <span id="terminal__prompt--cursor"></span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
