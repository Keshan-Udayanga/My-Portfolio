import React from "react";
import "../Styles/Skills.css";
import { skillsData } from "../data/skillsData";
import {
  FaTerminal,
  FaLaptopCode,
  FaLayerGroup,
  FaServer,
  FaPaintBrush,
  FaPalette,
} from "react-icons/fa";

const categoryIcons = {
  "Programming Languages": FaTerminal,
  "Front-End Development": FaLaptopCode,
  "Frameworks": FaLayerGroup,
  "Back-End Development": FaServer,
  "UI / UX Design": FaPaintBrush,
  "Graphic Design Tools": FaPalette,
};

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <p className="section-eyebrow">Skills</p>
      <h2 className="section-title">
        My <span className="highlight">Skills</span>
      </h2>
      <p className="section-subtitle">
        A passionate developer with a strong foundation in programming,
        web development, and UI/UX design. Building clean, responsive,
        and user-friendly applications using modern technologies.
      </p>

      <div className="skills-box-grid">
        {skillsData.map((group, index) => {
          const CategoryIcon = categoryIcons[group.category] || FaTerminal;

          return (
            <div className="skills-box" key={index}>
              <div className="skills-box-header">
                <div className="category-icon-box">
                  <CategoryIcon className="category-header-icon" />
                </div>
                <h3 className="category-title">{group.category}</h3>
              </div>

              <div className="skills-grid-new">
                {group.skills.map((skill, i) => (
                  <div className="skill-card-new" key={i}>
                    <div className="skill-icon-container">
                      <skill.Icon className="skill-icon-new" style={{ color: skill.color }} />
                    </div>
                    <p className="skill-name-new">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
