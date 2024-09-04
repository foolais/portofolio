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
import {
  Proyek1,
  Proyek3,
  Proyek4,
  Proyek5,
  Proyek6,
} from "@/assets/images/images";

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

export const socialMediaData = [
  {
    text: "Wahyu Esya Nasution",
    images: LinkedIn,
    imagesName: "LinkedIn",
    link: "https://www.linkedin.com/in/wahyuesyanasution",
  },
  {
    text: "Foolais",
    images: Github,
    imagesName: "Github",
    link: "https://github.com/foolais",
  },
  {
    text: "wahyu.esya17@gmail.com",
    images: Gmail,
    imagesName: "Gmail",
    link: "",
  },
  {
    text: "wahyu_esya",
    images: Instagram,
    imagesName: "Instagram",
    link: "https://www.instagram.com/wahyu_esya/",
  },
  {
    text: "089524038348",
    images: WhatsApp,
    imagesName: "WhatsApp",
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

export const projectsData = [
  {
    title: "Anime Movie App",
    description: "Anime Movie App",
    technologies: [
      {
        name: "TypeScript",
        image: TS,
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
    github: "https://github.com/foolais/anime-movie-ts",
    demo: "https://anime-movie-ts.vercel.app",
    images: Proyek1,
  },
  {
    title: "React Survey",
    description: "React Survey",
    technologies: [
      {
        name: "Javascript",
        image: JS,
      },
      {
        name: "React.js",
        image: React,
      },
      {
        name: "CSS",
        image: CSS,
      },
    ],
    github: "https://github.com/foolais/react-survey",
    demo: "",
    images: Proyek1,
  },
  {
    title: "FrontEnd Foolais Store",
    description: "FrontEnd Foolais Store",
    technologies: [
      {
        name: "Javascript",
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
    github: "https://github.com/foolais/foolais-store-frontend",
    demo: "https://foolais-store.vercel.app/",
    images: Proyek3,
  },
  {
    title: "BackEnd Foolais Store",
    description: "BackEnd Foolais Store",
    technologies: [
      {
        name: "Javascript",
        image: JS,
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
    ],
    github: "https://github.com/foolais/store-api",
    demo: "https://foolais-store-api.vercel.app/",
    images: Proyek4,
  },
  {
    title: "Ceki Game",
    description: "Ceki Game",
    technologies: [
      {
        name: "Javascript",
        image: JS,
      },
      {
        name: "React.js",
        image: React,
      },
      {
        name: "CSS",
        image: CSS,
      },
    ],
    github: "https://github.com/foolais/ceki-game",
    demo: "https://ceki-game.vercel.app/",
    images: Proyek5,
  },
  {
    title: "Kerjakan",
    description: "Kerjakan",
    technologies: [
      {
        name: "Javascript",
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
    github: "https://github.com/foolais/kerjakan",
    demo: "https://kerjakan.netlify.app/",
    images: Proyek6,
  },
];
