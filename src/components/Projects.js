import "../styles/project.css";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h2>PROJECTS</h2>

      <div className="project">
        <div className="project-image">
          <img src={require("../images/projects/musicpad.png")} alt="" />
        </div>

        <section>
          <h3>MusicPad</h3>

          <p>
            Musicpad is an application I built from scratch for song writers to
            write their lyrics at. It is different from notepad as it has a
            feature for searching rhymes of a word and gives you meaning,
            synonyms and examples of the word you want to know about. Making it
            easier to write.
          </p>

          <div className="buttons">
            <a
              href="https://github.com/Collid3/musicpad"
              target="_blank"
              rel="noreferrer"
            >
              Source Code{" "}
              <span>
                <AiFillGithub />
              </span>
            </a>

            <a
              href="https://musicpad.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              Run App{" "}
              <span className="play-button">
                <FaPlay />
              </span>
            </a>
          </div>
        </section>
      </div>

      <div className="project">
        <div className="project-image">
          <img src={require("../images/projects/movies2.png")} alt="" />
        </div>

        <section>
          <h3>Movies App</h3>

          <p>
            Movie app is the app I built to get hold of making Api calls and
            fetching data from an already existing database. Forced me to be
            creative in making an application from a Json data
          </p>

          <div className="buttons">
            <a
              href="https://github.com/Collid3/seroba-movies"
              target="_blank"
              rel="noreferrer"
            >
              Source Code{" "}
              <span>
                <AiFillGithub />
              </span>
            </a>

            <a
              href="https://seroba-movies.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              Run App{" "}
              <span className="play-button">
                <FaPlay />
              </span>
            </a>
          </div>
        </section>
      </div>

      <div className="project">
        <div className="project-image">
          <img src={require("../images/projects/chat.png")} alt="" />
        </div>

        <section>
          <h3>Chat App</h3>

          <p>
            This is an application I created to add a new skill to my calibre
            which is socket.io. It was never easy working with sockets and
            database at the same time, but I managed to make it happen.
          </p>

          <div className="buttons">
            <a
              href="https://github.com/Collid3/chat-client"
              target="_blank"
              rel="noreferrer"
            >
              Source Code{" "}
              <span>
                <AiFillGithub />
              </span>
            </a>

            <a
              href="https://seroba-chat.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              Run App{" "}
              <span className="play-button">
                <FaPlay />
              </span>
            </a>
          </div>
        </section>
      </div>

      <div className="project">
        <div className="project-image">
          <img src={require("../images/projects/e-commerce.png")} alt="" />
        </div>

        <section>
          <h3>E-commerce App</h3>

          <p>
            An E-commerce application inspired by the app i made above this one
            called movies app. I developed it to sharpen my skills in being
            creative and make something out of nothing.
          </p>

          <div className="buttons">
            <a
              href="https://github.com/Collid3/seroba-store"
              target="_blank"
              rel="noreferrer"
            >
              Source Code{" "}
              <span>
                <AiFillGithub />
              </span>
            </a>

            <a
              href="https://seroba-store.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              Run App{" "}
              <span className="play-button">
                <FaPlay />
              </span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
