import carRentalVideo from "../assets/Car_Rental_System/car_rental_system.mp4";
import carRentalImage1 from "../assets/Car_Rental_System/image1.png";
import carRentalImage2 from "../assets/Car_Rental_System/image2.png";

import DWBI_Image_1 from "../assets/DataWarehouse/DWBI-Linked-in_1.jpg";
import DWBI_Image_2 from "../assets/DataWarehouse/DWBI-Linked-in_2.jpg";
import DWBI_Image_3 from "../assets/DataWarehouse/DWBI-Linked-in_3.jpg";
import DWBI_Image_4 from "../assets/DataWarehouse/DWBI-Linked-in_4.jpg";
import DWBI_Image_5 from "../assets/DataWarehouse/DWBI-Linked-in_5.jpg";
import DWBI_Image_6 from "../assets/DataWarehouse/DWBI-Linked-in_6.jpg";
import DWBI_Image_7 from "../assets/DataWarehouse/DWBI-Linked-in_7.jpg";

import speedTravelsImg1 from "../assets/SpeedTravels/img1.png";
import speedTravelsImg2 from "../assets/SpeedTravels/img2.png";
import speedTravelsVideo from "../assets/SpeedTravels/video.mp4";

import SmartCampusImg1 from "../assets/Smart_Campus/image_1.png";
import SmartCampusImg2 from "../assets/Smart_Campus/image_2.png";
import SmartCampusImg3 from "../assets/Smart_Campus/image_3.png";
import SmartCampusImg4 from "../assets/Smart_Campus/image_4.png";
import SmartCampusImg5 from "../assets/Smart_Campus/image_5.png";
import SmartCampusImg6 from "../assets/Smart_Campus/image_6.png";
import SmartCampusImg7 from "../assets/Smart_Campus/image_7.png";
import SmartCampusImg8 from "../assets/Smart_Campus/image_8.png";
import SmartCampusImg9 from "../assets/Smart_Campus/image_9.png";
import SmartCampusImg10 from "../assets/Smart_Campus/image_10.png";
import SmartCampusImg11 from "../assets/Smart_Campus/image_11.png";
import SmartCampusVideo from "../assets/Smart_Campus/video.mp4";

export const projectsData = [
  {
    title: "Smart Campus Management System",
    description:
      "A full-stack campus resource management platform built with React.js, Spring Boot, and MongoDB. Developed the Resource Catalog Module with resource management, categorization, and search features while integrating Google OAuth authentication and RESTful APIs.",
    image: SmartCampusImg1,
    images: [SmartCampusImg1, SmartCampusImg2, SmartCampusImg3,SmartCampusImg4,SmartCampusImg5,SmartCampusImg6,SmartCampusImg7,SmartCampusImg8,SmartCampusImg9,SmartCampusImg10,SmartCampusImg11,SmartCampusVideo],
    tech: ["React.js", "Spring Boot", "Java", "MongoDB", "Google OAuth"],
    live: "#",
    github:
      "https://github.com/Keshan-Udayanga/it3030-paf-2026-smart-campus-group-114",
  },
  {
    title: "Vehicle Rental Management System",
    description:
      "A Java-based vehicle rental management system that helps manage vehicles, customer information, reservations, and rental operations. Built using Object-Oriented Programming principles to provide an organized and efficient rental management solution.",
    image: carRentalImage1,
    images: [carRentalImage1, carRentalImage2, carRentalVideo],
    tech: ["Java", "OOP", "Design Patterns", "GitHub"],
    live: "#",
    github: "https://github.com/Keshan-Udayanga/OOP_VehicleRentalSystem",
  },
  {
    title: "Retail Analytics Data Warehouse Project",
    description:
      "A Data Warehouse and Business Intelligence project developed to analyze retail sales data and generate meaningful business insights. The system uses ETL processes, data warehousing techniques, and interactive dashboards to support data-driven decision making.",
    image: DWBI_Image_2,
    images: [
      DWBI_Image_1,
      DWBI_Image_2,
      DWBI_Image_3,
      DWBI_Image_4,
      DWBI_Image_5,
      DWBI_Image_6,
      DWBI_Image_7,
    ],
    tech: ["SQL Server", "SSIS", "SSAS", "SSRS", "Data Warehouse"],
    live: "#",
    github: "https://github.com/Keshan-Udayanga/DWBI-Retail-Analytics-Project",
  },
  {
    title: "Speed Travels Rental System",
    description:
      "Contributed to the front-end development of a travel and vehicle rental web application. Designed and implemented responsive user interfaces, improved user experience, and developed visually appealing web pages using modern web technologies.",
    image: speedTravelsImg1,
    images: [speedTravelsImg1, speedTravelsImg2, speedTravelsVideo],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "#",
    github: "https://github.com/thanuj-23/SpeedTravels-Rental-System",
  },
];
