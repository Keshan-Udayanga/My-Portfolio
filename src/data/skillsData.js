import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPython,
  FaJava,
  FaDatabase,
  FaFigma,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAffinity,
  SiC,
  SiR,
  SiSpringboot,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", Icon: FaPython, color: "#3776ab" },
      { name: "Java", Icon: FaJava, color: "#e36e14" },
      { name: "C", Icon: SiC, color: "#00599c" },
      { name: "R", Icon: SiR, color: "#276dc3" },
    ],
  },
  {
    category: "Front-End Development",
    skills: [
      { name: "HTML", Icon: FaHtml5, color: "#e34f26" },
      { name: "CSS", Icon: FaCss3Alt, color: "#1572b6" },
      { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Bootstrap", Icon: FaBootstrap, color: "#7952b3" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6db33f" },
    ],
  },
  {
    category: "Back-End Development",
    skills: [
      { name: "SQL", Icon: FaDatabase, color: "#336791" },
      { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
    ],
  },
  {
    category: "UI / UX Design",
    skills: [
      { name: "Figma", Icon: FaFigma, color: "#f24e1e" },
    ],
  },
  {
    category: "Graphic Design Tools",
    skills: [
      { name: "Photoshop", Icon: SiAdobephotoshop, color: "#31a8ff" },
      { name: "Illustrator", Icon: SiAdobeillustrator, color: "#ff9a00" },
      { name: "Affinity", Icon: SiAffinity, color: "#00d4ff" },
    ],
  },
];
