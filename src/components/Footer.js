import "../styles/footer.css";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="left">
          <h3>JERRY MASOLA</h3>

          <p>
            A growth-orientated Full Stack developer dedicated in building
            responsive user-friendly applications with efficient features and
            creative designs.
          </p>
        </div>

        <div className="right">
          <h3>SOCIALS</h3>

          <section className="socials">
            <BsGithub />

            <GrMail />

            <BsLinkedin />
          </section>
        </div>
      </div>

      <p>
        &copy;Copyright 2023. Developed by {/*  */}
        <a href="#" onClick={(e) => e.preventDefault()}>
          Jerry Masola
        </a>
      </p>
    </footer>
  );
};

export default Footer;
