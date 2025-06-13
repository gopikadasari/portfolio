import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  aws,
  tailwind,
  html,
  javascript,
  reactjs,
  redux,
  git,
} from '../assets'





export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

 
 
 
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Co-Founder",
    company_name: "InventroX",
    iconBg: "#383E56",
    date: "Jan 2025 - present",
    points: [
      "Designed and developed a full-stack Inventory Management System",
      "Implemented real-time inventory updates and low-stock alerts, ensuring data consistency and preventing stockouts.",
    ],
  },
];

const projects = [
  {
    name: "Airline Ticket Management System",
    description:
      "Airline Ticket Management System (ATMS), aims to provide an automated, reliable, and user-friendly database management system to streamline the process of managing ticket records.",
    tags: [
      {
        name: "html",
        color: "white-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/gopikadasari/airline-management",
  },
  {
    name: "SecureAI-Med A Blockchain-Integrated Deep Learning",
    description:
      "Develop an efficient image processing pipeline to accurately classify medical images and detect affected regions. Use blockchain technology to ensure the integrity, privacy, and security of sensitive patient data. Provide a user-friendly interface for seamless and secure interaction with the system.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "imageprocessing",
        color: "green-text-gradient",
      },
      {
        name: "machinelearning",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/gopikadasari/SecureAI-Med-A-Blockchain-Integrated-Deep-Learning",
  },
  {
    name: "Lane Detection Tool",
    description:
      "Developed a lane detection tool that accurately identifies and tracks lanes in real-time video streams. Implement advanced computer vision techniques to detect lane markings, calculate curvature, and provide steering commands for autonomous vehicles.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "imageprocessing",
        color: "white-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/gopikadasari/lane_detection",
  },
];

export { services, technologies, experiences, projects };
