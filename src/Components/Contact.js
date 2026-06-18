import React from "react";
import "../Styles/Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

const contactItems = [
  {
    id: "contact-email",
    icon: <FaEnvelope />,
    label: "Email",
    value: "lmkeshanudayanga@gmail.com",
    href: "mailto:lmkeshanudayanga@gmail.com",
  },
  {
    id: "contact-phone",
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+94 778907002",
    href: "tel:+94778907002",
  },
  {
    id: "contact-github",
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Keshan-Udayanga",
    href: "https://github.com/Keshan-Udayanga",
  },
  {
    id: "contact-linkedin",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    value: "linkedin.com/in/keshan-udayanga",
    href: "https://www.linkedin.com/in/keshan-udayanga-6b526b347/",
  },
  {
    id: "contact-whatsapp",
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/94778907002",
  },
  {
    id: "contact-cv",
    icon: <FaDownload />,
    label: "CV",
    value: "Download CV",
    href: "/cv.pdf",
    download: true,
  },
];

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      {/* Decorative background glows */}
      <div className="contact-glow contact-glow-left" />
      <div className="contact-glow contact-glow-right" />

      <div className="contact-inner">
        {/* ── Header ── */}
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">
          Let's <span className="highlight">build something</span> great.
        </h2>
        <p className="section-subtitle">
          Open for internships and collaborations. Drop a line —&nbsp;
          I usually reply within a day.
        </p>

        {/* ── Cards Grid ── */}
        <div className="contact-grid">
          {contactItems.map((item) => (
            <a
              key={item.id}
              id={item.id}
              href={item.href}
              className="contact-card"
              target={item.download ? "_self" : "_blank"}
              rel="noopener noreferrer"
              download={item.download || undefined}
            >
              <div className="contact-card-icon">{item.icon}</div>
              <div className="contact-card-text">
                <span className="contact-card-label">{item.label}</span>
                <span className="contact-card-value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
