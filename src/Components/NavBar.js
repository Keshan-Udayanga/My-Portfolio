import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import "../Styles/NavBarStyles.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar className="custom-navbar">
        <Container className="nav-wrapper">

          {/* LEFT */}
          <div className="nav-logo">
            <h2>
              <span>K</span>eshan<span>U</span>dayanaga
            </h2>
          </div>

          {/* CENTER (DESKTOP) */}
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contacts</a>
          </div>

          {/* RIGHT */}
          <a
            className="cv-btn"
            href="/keshan-udayanga-cv.pdf"
            download="Keshan-Udayanga-CV.pdf"
          >
            <span>Download CV</span>
          </a>

          {/* MOBILE ICON */}
          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

        </Container>
      </Navbar>

      {/* MOBILE SLIDE MENU */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contacts</a>
      </div>
    </>
  );
};

export default NavBar;
