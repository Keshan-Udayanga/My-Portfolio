import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPython,
  FaJava,
  FaDatabase,
  FaFigma,
  FaFileExcel,
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
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPostgresql,
  SiReact,
  SiPowerbi,
} from "react-icons/si";


export const skillsData = [

  // Programming Languages
  {
    category: "Programming Languages",
    skills: [
      {
        name: "Python",
        Icon: FaPython,
        color: "#3776ab"
      },
      {
        name: "Java",
        Icon: FaJava,
        color: "#e36e14"
      },
      {
        name: "R",
        Icon: SiR,
        color: "#276dc3"
      },
      {
        name: "C",
        Icon: SiC,
        color: "#00599c"
      },
    ],
  },


  // Data Science & Analytics
  {
    category: "Data Science & Analytics",
    skills: [
      {
        name: "Pandas",
        Icon: SiPandas,
        color: "#150458",
      },
      {
        name: "NumPy",
        Icon: SiNumpy,
        color: "#013243",
      },
      {
        name: "Matplotlib",
        Icon: FaDatabase,
        color: "#11557c",
      },
      {
        name: "Scikit-learn",
        Icon: SiScikitlearn,
        color: "#f7931e",
      },
      {
        name: "TensorFlow",
        Icon: SiTensorflow,
        color: "#ff6f00",
      },
    ],
  },


  // Business Intelligence
  {
    category: "Business Intelligence",
    skills: [
      {
        name: "Power BI",
        Icon: SiPowerbi,
        color: "#f2c811",
      },
      {
        name: "DAX",
        Icon: FaDatabase,
        color: "#0089d6",
      },
      {
        name: "Excel",
        Icon: FaFileExcel,
        color: "#217346",
      },
    ],
  },


  // Databases
  {
    category: "Databases",
    skills: [
      {
        name: "SQL",
        Icon: FaDatabase,
        color: "#336791",
      },
      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        color: "#336791",
      },
      {
        name: "MySQL",
        Icon: SiMysql,
        color: "#4479a1",
      },
      {
        name: "MongoDB",
        Icon: SiMongodb,
        color: "#47a248",
      },
    ],
  },


  // Frontend Development
  {
    category: "Front-End Development",
    skills: [
      {
        name: "HTML",
        Icon: FaHtml5,
        color: "#e34f26",
      },
      {
        name: "CSS",
        Icon: FaCss3Alt,
        color: "#1572b6",
      },
      {
        name: "JavaScript",
        Icon: FaJs,
        color: "#f7df1e",
      },
      {
        name: "React.js",
        Icon: SiReact,
        color: "#61dafb",
      },
    ],
  },


  // Backend
  {
    category: "Backend Development",
    skills: [
      {
        name: "Spring Boot",
        Icon: SiSpringboot,
        color: "#6db33f",
      },
    ],
  },


  // UI/UX
  {
    category: "UI / UX Design",
    skills: [
      {
        name: "Figma",
        Icon: FaFigma,
        color: "#f24e1e",
      },
    ],
  },


  // Graphic Design
  {
    category: "Graphic Design Tools",
    skills: [
      {
        name: "Photoshop",
        Icon: SiAdobephotoshop,
        color: "#31a8ff",
      },
      {
        name: "Illustrator",
        Icon: SiAdobeillustrator,
        color: "#ff9a00",
      },
      {
        name: "Affinity Designer",
        Icon: SiAffinity,
        color: "#00d4ff",
      },
    ],
  },

];