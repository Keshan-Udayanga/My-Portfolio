import { useEffect, useState } from "react";
import "../Styles/About.css";
import profileImg from "../assets/profileImg.png";
import IconButton from "@mui/material/IconButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


const titles = [
  "Data Science Undergraduate ",
  "Web Designer ",
  "Frontend Developer ",
  "Data Analytics Enthusiast "
];

const About = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && subIndex === titles[index].length) {
      setTimeout(() => setIsDeleting(true), 1200);
      return;
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
      setText(titles[index].substring(0, subIndex));
    }, isDeleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <p className="section-eyebrow">Get To Know</p>
        <h2 className="section-title">
          About <span className="highlight">Me</span>
        </h2>
      </div>

      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-left">
          <h3>Hello, I’m</h3>
          <h1>Keshan Udayanaga</h1>

          <h2 className="typing">
            {text}
            <span className="cursor">|</span>
          </h2>

          <p>
            A motivated undergraduate pursuing a degree in Data Science, with a
            strong interest in web design, graphic design, and data analysis. Currently
            developing practical and technical skills through independent learning,
            with the aim of applying analytical thinking and creative problem-solving
            to real-world projects and professional growth.
          </p>

          <div className="social-icons">
            <IconButton color="primary" aria-label="GitHub" component="a" href="https://github.com/Keshan-Udayanga" target="_blank">
              <GitHubIcon />
            </IconButton>

            <IconButton color="primary" aria-label="LinkedIn" component="a" href="https://www.linkedin.com/in/keshan-udayanga-6b526b347/" target="_blank">
              <LinkedInIcon />
            </IconButton>

            <IconButton color="primary" aria-label="WhatsApp" component="a" href="https://wa.me/94778907002" target="_blank">
              <WhatsAppIcon />
            </IconButton>
          </div>

          <div className="about-btn">
            <button className="contact-btn">
              <span><a href="#contact">Contact Me</a></span>
            </button>
            <a
              className="about-cv-btn"
              href="/keshan-udayanga-cv.pdf"
              download="Keshan-Udayanga-CV.pdf"
            >
              <span>Download CV</span>
            </a>
          </div>


        </div>

        {/* RIGHT IMAGE */}
        <div className="about-right">
          <div className="profile-img-wrapper">
            <img src={profileImg} alt="Profile" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
