import React, { useState } from "react";
import "../Styles/Projects.css";
import { projectsData } from "../data/projectsData.js";
import ProjectImageModal from "./ImageModel.js";

const Projects = () => {
  const [openImages, setOpenImages] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <p className="section-eyebrow">Projects</p>
      <h2 className="section-title">
        My <span className="highlight">Projects</span>
      </h2>
      <p className="section-subtitle">
        A selection of projects that showcase my skills in web development,
        design, and problem-solving using modern technologies.
      </p>

      <div className="projects-grid">
        {projectsData.map((project, index) => {
          const isVideo = typeof project.image === 'string' && 
            (project.image.includes('.mp4') || project.image.includes('.webm') || project.image.includes('.ogg'));
          
          return (
            <div className="project-card" key={index}>
              {isVideo ? (
                <video
                  src={project.image}
                  className="project-img"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              )}

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
              >
                Code
              </a>

              {/* ✅ ONLY ADD THIS BUTTON */}
              <button
                className="btn-demo"
                onClick={() => setOpenImages(project.images)}
                >
                More Images
                </button>

            </div>
          </div>
          );
        })}
      </div>

      {openImages && (
        <ProjectImageModal
          images={openImages}
          onClose={() => setOpenImages(null)}
        />
      )}
    </section>
  );
};

export default Projects;
