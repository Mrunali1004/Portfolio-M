import instockLandingPage from "../assets/images/instock.png";
import brainflixLandingPage from "../assets/images/brainflix.png";
import jennyImage from "../assets/images/jenny.jpg";
import mariaImage from "../assets/images/maria.jpg";
import zanabImage from "../assets/images/zanab.jpeg";
import brainstationImage from "../assets/images/brainstation.png";
import JavaScriptIcon from "../assets/icons/square-js.svg";
import TypeScriptIcon from "../assets/icons/square-ts.svg";
import Html5Icon from "../assets/icons/html5.svg";
import Css3Icon from "../assets/icons/css3.svg";
import ReactIcon from "../assets/icons/react.svg";
import GitHubIcon from "../assets/icons/github.svg";
import TailwindIcon from "../assets/icons/tailwind.svg";
import NextIcon from "../assets/icons/next.svg";
import NodeIcon from "../assets/icons/node.svg";
import MySqlIcon from "../assets/icons/mysql.svg";
import PostgreSQLIcon from "../assets/icons/postgreSQL.svg";
import PrismaIcon from "../assets/icons/prisma.svg";
import DockerIcon from "../assets/icons/docker.svg";
import AWSIcon from "../assets/icons/aws.svg";
import FigmaIcon from "../assets/icons/figma.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import EmailIcon from "../assets/icons/email.svg";
import atomicHabits from "../assets/images/book-cover.png";
import mistborn1 from "../assets/images/mistborn-1.png";
import mistborn2 from "../assets/images/mistborn-2.png";
import mistborn3 from "../assets/images/mistborn-3.png";
import wayOfShadows1 from "../assets/images/way-of-shadows-1.png";
import poppyWars1 from "../assets/images/poppy-war-1.png";
import inheritanceGames1 from "../assets/images/inheritance-games-1.png";

export const Projects = [
  {
    company: "Brainstation",
    year: "2024",
    title: "Instock",
    results: [
      { title: "Tech Stack: Reach, Express, MySQL" },
      { title: "Developed collaboratively in a team" },
      { title: "Agile Development, GitFlow, Jira" },
    ],
    link: "https://github.com/emilyjanedev/instock",
    image: instockLandingPage,
    isDeployed: false,
  },
  {
    company: "Brainstation",
    year: "2024",
    title: "Brainflix",
    results: [
      { title: "React, Express, REST API" },
      { title: "Video sharing web app" },
      { title: "Blob management with multer" },
    ],
    link: "https://github.com/emilyjanedev/emily-schur-brainflix",
    image: brainflixLandingPage,
    isDeployed: false,
  },
];

export const testimonials = [
  {
    name: "Maria Jose Cilloniz",
    position: "Software Engineer @ Brainstation",
    text: "Emily is amazing at guiding teams. She has a talent for breaking down complicated tasks and fostering effective collaboration. When team members like myself needed support, she provided clear guidance and assistance, ensuring everyone stayed on track while maintaining a positive environment.",
    avatar: mariaImage,
  },
  {
    name: "Jenny Kim",
    position: "Full-Stack Developer @ Brainstation",
    text: "Emily's technical skills are impressive, and she consistently demonstrated a strong ability to solve problems efficiently and effectively. Beyond her coding skills, her communication, leadership, and collaboration abilities made her an invaluable part of our group project.",
    avatar: jennyImage,
  },
  {
    name: "Former Teacher",
    position: "Educator @ Brainstation",
    text: "Emily is a strong and confident developer who has demonstrated exceptional team leadership skills as well as great communication skills. She has the ability to jump into any new technical challenge and excel, with great attention to detail.",
    avatar: brainstationImage,
  },
  {
    name: "Zanab Jafry Shah",
    position: "TA @ Brainstation",
    text: "Emily's capstone project at BrainStation showcases her attention to detail & commitment to industry best practices. Her entire body of work showcases how Emily is always testing *herself* to take stock of her own knowledge. Emily would be an exemplary addition to any team that values stamina and rigour. ",
    avatar: zanabImage,
  },
];

export const toolbox = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "HTML5",
    iconType: Html5Icon,
  },
  {
    title: "CSS3",
    iconType: Css3Icon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextIcon,
  },
  {
    title: "Node.js",
    iconType: NodeIcon,
  },
  {
    title: "MySQL",
    iconType: MySqlIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgreSQLIcon,
  },
  {
    title: "Prisma",
    iconType: PrismaIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "AWS",
    iconType: AWSIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
];

export const hobbies = [
  {
    title: "Cycling",
    emoji: "🚴🏻‍♀️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "40%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏃🏻‍♀️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Cats",
    emoji: "🐱",
    left: "45%",
    top: "70%",
  },
  {
    title: "Board Games",
    emoji: "🎲",
    left: "65%",
    top: "20%",
  },
];

export const footerLinks = [
  {
    title: "LinkedIn",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/emilyjschur/",
  },
  {
    title: "GitHub",
    icon: <GitHubIcon />,
    href: "https://github.com/emilyjanedev",
  },
  {
    title: "Email",
    icon: <EmailIcon />,
    href: "mailto:ejschur@gmail.com",
  },
];

export const books = [
  atomicHabits,
  mistborn1,
  wayOfShadows1,
  mistborn2,
  poppyWars1,
  mistborn3,
  inheritanceGames1,
];
