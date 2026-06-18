import { useEffect, useState } from "react";
import "../Styles/About.css";
import profileImg from "../assets/profileImg.png"; 
import IconButton from "@mui/material/IconButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


const titles = [
  "Web Designer  ",
  "Frontend Developer  ",
  "Full Stack Developer  ",
  "Graphic Designer  "
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
            I am a passionate Web Designer and Full Stack Developer who loves
            creating modern, user-friendly, and visually appealing digital experiences.
            I specialize in frontend development, UI/UX design, and graphic design,
            focusing on clean code and intuitive interfaces.
          </p>

        <div className="social-icons">
            <IconButton color="primary" aria-label="GitHub" component="a" href="https://github.com/yourusername" target="_blank">
                <GitHubIcon />
            </IconButton>

            <IconButton color="primary" aria-label="LinkedIn" component="a" href="https://linkedin.com/in/yourusername" target="_blank">
                <LinkedInIcon />
            </IconButton>

            <IconButton color="primary" aria-label="WhatsApp" component="a" href="https://wa.me/94778907002" target="_blank">
                <WhatsAppIcon />
            </IconButton>
        </div>

        <div>
            <button className="contact-btn">
                <span>Contact Me</span>
            </button>
            <button className="about-cv-btn">
                <span>Download CV</span>
            </button>
        </div>


        </div>

        {/* RIGHT IMAGE */}
        <div className="about-right">
          <img src={profileImg} alt="Profile" />
        </div>

      </div>
    </section>
  );
};

export default About;
