import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaFigma,
  FaFileExcel,
  FaChartBar,
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
  SiPostgresql,
  SiReact,
} from "react-icons/si";


export const skillsData = [

  {
    category: "Programming Languages",
    skills: [
      {
        name: "Python",
        Icon: FaPython,
        color: "#3776ab",
      },
      {
        name: "Java",
        Icon: FaJava,
        color: "#e36e14",
      },
      {
        name: "R",
        Icon: SiR,
        color: "#276dc3",
      },
      {
        name: "C",
        Icon: SiC,
        color: "#00599c",
      },
    ],
  },


  {
    category: "Data Science & Analytics",
    skills: [
      {
        name: "Pandas",
        Icon: FaDatabase,
        color: "#150458",
      },
      {
        name: "NumPy",
        Icon: FaDatabase,
        color: "#013243",
      },
      {
        name: "Matplotlib",
        Icon: FaChartBar,
        color: "#11557c",
      },
      {
        name: "Scikit-learn",
        Icon: FaChartBar,
        color: "#f7931e",
      },
      {
        name: "Machine Learning",
        Icon: FaChartBar,
        color: "#ff6f00",
      },
    ],
  },


  {
    category: "Business Intelligence",
    skills: [
      {
        name: "Power BI",
        Icon: FaChartBar,
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


  {
    category: "Graphic Design Tools",
    skills: [
      {
        name: "Photoshop",
        Icon: FaFigma,
        color: "#31a8ff",
      },
      {
        name: "Illustrator",
        Icon: FaFigma,
        color: "#ff9a00",
      },
      {
        name: "Affinity Designer",
        Icon: FaFigma,
        color: "#00d4ff",
      },
    ],
  },

];