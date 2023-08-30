import "../styles/skills.css";
import React from "react";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>

      <div className="skills">
        <div>
          <img src={require("../images/skills/html.png")} alt="" />
          <h4>HTML</h4>
        </div>

        <div>
          <img src={require("../images/skills/css.png")} alt="" />
          <h4>CSS</h4>
        </div>

        <div>
          <img src={require("../images/skills/JavaScript.png")} alt="" />
          <h4>JAVASCRIPT</h4>
        </div>

        <div>
          <img src={require("../images/skills/React.png")} alt="" />
          <h4>REACT JS</h4>
        </div>

        <div>
          <img src={require("../images/skills/nodejs.png")} alt="" />
          <h4>NODE JS</h4>
        </div>

        <div>
          <img src={require("../images/skills/express.png")} alt="" />
          <h4>EXPRESS JS</h4>
        </div>

        <div>
          <img src={require("../images/skills/firebase.png")} alt="" />
          <h4>FIREBASE</h4>
        </div>

        <div>
          <img src={require("../images/skills/mongodb.png")} alt="" />
          <h4>MONGO DB</h4>
        </div>

        <div>
          <img src={require("../images/skills/git.png")} alt="" />
          <h4>GIT</h4>
        </div>

        <div>
          <img src={require("../images/skills/socketio.png")} alt="" />
          <h4>SOCKET.IO</h4>
        </div>
      </div>

      <h3>Other skills</h3>

      <section className="skills-2">
        <p>GITHUB</p>
        <p>UI/UX DESIGN</p>
        <p>RESPONSIVE DESIGN</p>
        <p>PROBLEM SOLVING</p>
        <p>Testing and Debugging</p>
        <p>CREATIVITY</p>
        <p>SEO</p>
      </section>
    </section>
  );
};

export default Skills;
