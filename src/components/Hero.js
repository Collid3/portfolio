import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiMailFill } from "react-icons/ri";

const Hero = () => {
  return (
    <main className="hero-section">
      <img src={require("../images/hero.png")} alt="" />

      <h4>Hello, My name is</h4>

      <h1>Jerry Masola</h1>

      <h4>Full stack developer with 5 years experience</h4>

      <p>
        I am a Hardworking and passionate Self-driven developer dedicated to
        developing user-friendly and feature-rich websites with strong
        organization. Proficient in developing servers, user interfaces, testing
        and debugging. Dependable developer successful at managing multiple
        priorities with a positive attitude. Willingness to take on added
        responsibilities to meet team goals.
      </p>

      <div>
        <button>CONTACT ME</button>

        <section className="socials">
          <BsGithub />

          <RiMailFill />

          <BsLinkedin />
        </section>
      </div>
    </main>
  );
};

export default Hero;
