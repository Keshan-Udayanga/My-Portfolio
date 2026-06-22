import { useEffect, useState } from "react";
import "../Styles/Home.css";
import profileImg from "../assets/profileImg.png";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const professions = [
  "Data Science Undergraduate",
  "Frontend Developer",
  "Web Designer",
  "Data Analytics Enthusiast",
];

const Home = () => {
  const [profIndex, setProfIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  // Cycle through professions every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setProfIndex((prev) => (prev + 1) % professions.length);
      setAnimKey((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prof = professions[profIndex];
  // Split into two lines: first word(s) vs last word
  const words = prof.split(" ");
  const line1 = words.slice(0, Math.ceil(words.length / 2)).join(" ");
  const line2 = words.slice(Math.ceil(words.length / 2)).join(" ");

  return (
    <section className="home-section" id="home">
      {/* ── Left vertical social bar ─────────────────── */}
      <div className="home__social-bar">
        <a
          href="https://github.com/Keshan-Udayanga"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="home__social-link"
        >
          <GitHubIcon fontSize="small" />
        </a>
        <a
          href="https://www.linkedin.com/in/keshan-udayanga-6b526b347/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="home__social-link"
        >
          <LinkedInIcon fontSize="small" />
        </a>
        <a
          href="https://wa.me/94778907002"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="home__social-link"
        >
          <WhatsAppIcon fontSize="small" />
        </a>
        <span className="home__social-line" />
      </div>

      {/* ── Main grid ────────────────────────────────── */}
      <div className="home__grid">
        {/* LEFT — name & greeting */}
        <div className="home__data">
          <span className="home__greeting">Hello, I'm</span>
          <h1 className="home__name">
            Keshan<br />Udayanga
          </h1>
        </div>

        {/* CENTER — image with glow blob */}
        <div className="home__image-wrap">
          <div className="home__blob" />
          <img
            src={profileImg}
            alt="Keshan Udayanga"
            className="home__profile-img"
          />

        </div>

        {/* RIGHT — profession */}
        <div className="home__info">
          <div className="home__profession-wrap">
            <div className="home__profession-overflow" key={`${animKey}-1`}>
              <p className="home__profession-line slide-up-char">{line1}</p>
            </div>
            <div className="home__profession-overflow" key={`${animKey}-2`}>
              <p className="home__profession-line slide-up-char delay-1">{line2}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right CV bar ─────────────────────────────── */}
      <div className="home__cv-bar">
        <a
          href="/keshan-udayanga-cv.pdf"
          download="Keshan-Udayanga-CV.pdf"
          className="home__cv-link"
        >
          Download CV
        </a>
        <span className="home__cv-line" />
      </div>

      {/* ── Scroll indicator ─────────────────────────── */}
      {/* <div className="home__scroll-indicator">
        <span className="home__scroll-dot" />
      </div> */}
    </section>
  );
};

export default Home;
