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
  Proyek2,
  Proyek3,
  Proyek4,
  Proyek5,
  Proyek6,
  Proyek7,
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
    text: "089524038348",
    images: WhatsApp,
    imagesName: "WhatsApp",
    link: "https://wa.me/089524038348",
  },
  {
    text: "wahyu_esya",
    images: Instagram,
    imagesName: "Instagram",
    link: "https://www.instagram.com/wahyu_esya",
  },
  {
    text: "wahyu.esya17@gmail.com",
    images: Gmail,
    imagesName: "Gmail",
    link: "https://mail.google.com",
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
    title: "Slider Mobile App",
    description:
      "The Slider Mobile App is a React Native project featuring two sliders on a single screen, where images automatically slide, while videos are displayed without sliding functionality.",
    technologies: [
      {
        name: "React Native",
        image: React,
      },
    ],
    github: "https://github.com/foolais/ImagesSlider",
    demo: null,
    images: Proyek7,
    type: "mobile" as "web" | "mobile",
  },
  {
    title: "Anime Movie App",
    description:
      "The Anime Movie App lets users explore trending and upcoming anime, view details, and search for favorite titles, all with a Netflix-style design.",
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
    type: "web" as "web" | "mobile",
  },
  {
    title: "React Survey",
    description:
      "The React Survey Project is a survey app with 10 questions and a 10-minute time limit, allowing users to review their answers after submitting.",
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
    demo: "https://react-survey-app-eight.vercel.app/",
    images: Proyek2,
    type: "web" as "web" | "mobile",
  },
  {
    title: "FrontEnd Foolais Store",
    description:
      "A Point of Sale (POS) System at Warung Soto Bakso Hanna, offering features like menu and table management, sales tracking, and order history to boost efficiency and accuracy.",
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
    type: "web" as "web" | "mobile",
  },
  {
    title: "BackEnd Foolais Store",
    description:
      "A Point of Sale (POS) System at Warung Soto Bakso Hanna, offering features like menu and table management, sales tracking, and order history to boost efficiency and accuracy.",
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
    type: "web" as "web" | "mobile",
  },
  {
    title: "Ceki Game",
    description:
      "The Ceki Game Project is built to assist with score calculation, eliminating the need for players to remember their scores, ensuring a smoother and more enjoyable gameplay experience. ",
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
    type: "web" as "web" | "mobile",
  },
  {
    title: "Kerjakan",
    description:
      "The Kerjakan project is designed to help users search for job vacancies, serving as the final task for the Sanbercode bootcamp.",
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
    type: "web" as "web" | "mobile",
  },
];
