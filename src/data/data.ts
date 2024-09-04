import {
  Github,
  Gmail,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@/assets/icons/icon";
import { CodeXml, Rocket, Home, User } from "lucide-react";
import {
  CSS,
  Express,
  Git,
  HTML,
  JS,
  MongoDB,
  Node,
  React,
  Sass,
  Tailwind,
  TS,
  Vue,
} from "@/assets/icons/tech";

export const navbarData = [
  {
    icon: Home,
    name: "Home",
  },
  {
    icon: User,
    name: "Profile",
  },
  {
    icon: CodeXml,
    name: "Projects",
  },
  {
    icon: Rocket,
    name: "Contact",
  },
];

export const contactData = [
  {
    text: "Wahyu Esya Nasution",
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/wahyuesyanasution",
  },
  {
    text: "Foolais",
    icon: Github,
    link: "https://github.com/foolais",
  },
  {
    text: "wahyu.esya17@gmail.com",
    icon: Gmail,
    link: "",
  },
  {
    text: "wahyu_esya",
    icon: Instagram,
    link: "https://www.instagram.com/wahyu_esya/",
  },
  {
    text: "089524038348",
    icon: WhatsApp,
    link: "https://wa.me/089524038348",
  },
];

export const jobData = [
  {
    company: "Tamadun Teknologi Internasional",
    position: "Frontend Developer",
    date: "Dec 2022 - Dec 2023",
    location: "Yogyakarta",
    description: [
      "Implementing application using Vue.js framework and Vuetify.",
      "Developing a dynamic client configuration for enhanced adaptability and user interaction.",
      "Developing front-end notification alerts using a service worker for seamless and responsive user interactions.",
      "Fixing and discovering bugs while enhancing the application.",
      "Collaborated with team members to improve and enhance the application.",
    ],
    technologies: [
      {
        name: "HTML",
        image: HTML,
      },
      {
        name: "CSS",
        image: CSS,
      },
      {
        name: "JavaScript",
        image: JS,
      },
      {
        name: "Vue.js",
        image: Vue,
      },
      {
        name: "SASS",
        image: Sass,
      },
    ],
  },
  {
    company: "PT Widya Inovasi Indonesia",
    position: "Intern Frontend Developer",
    date: "Feb 2022 - Aug 2022",
    location: "Yogyakarta",
    description: [
      "Developing a web dashboard for order an API Key using React JS.",
      "Implementing Tailwind CSS for styling website.",
      "Implementing consume REST API for communication with backend.",
    ],
    technologies: [
      {
        name: "HTML",
        image: HTML,
      },
      {
        name: "CSS",
        image: CSS,
      },
      {
        name: "JavaScript",
        image: JS,
      },
      {
        name: "React.js",
        image: React,
      },
      {
        name: "Tailwind CSS",
        image: Tailwind,
      },
    ],
  },
];

export const techStackData = [
  {
    name: "HTML",
    image: HTML,
  },
  {
    name: "CSS",
    image: CSS,
  },
  {
    name: "Sass",
    image: Sass,
  },
  {
    name: "Tailwind CSS",
    image: Tailwind,
  },
  {
    name: "JavaScript",
    image: JS,
  },
  {
    name: "TypeScript",
    image: TS,
  },
  {
    name: "React.js",
    image: React,
  },
  {
    name: "Vue.js",
    image: Vue,
  },
  {
    name: "Node.js",
    image: Node,
  },
  {
    name: "Express.js",
    image: Express,
  },
  {
    name: "MongoDB",
    image: MongoDB,
  },
  {
    name: "Git",
    image: Git,
  },
];

export const educationData = [
  {
    name: "Binus Online University",
    location: "Online",
    date: "Mei 2023 - Current",
    major: "Computer Science",
    degree: "Bachelor Degree",
  },
  {
    name: "Telkom University",
    location: "Bandung",
    date: "Aug 2019 - Dec 2022",
    major: "Computer Technology ",
    degree: "Associate Degree",
  },
];
