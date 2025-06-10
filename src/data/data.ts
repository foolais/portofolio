import {
  CodeXml,
  Home,
  User,
  GithubIcon,
  Mail,
  LinkedinIcon,
} from "lucide-react";
import {
  CSS,
  Express,
  Git,
  HTML,
  JS,
  MongoDB,
  Next,
  Node,
  Prisma,
  React,
  Sass,
  Tailwind,
  TS,
  Vue,
} from "@/assets/icons/tech";
import {
  ProjectPortofolio,
  ProjectImagesSlider,
  ProjectAnimeTs,
  ProjectSurvey,
  ProjectFeStore,
  ProjectBeStore,
  ProjectCekiGame,
  ProjectKerjakan,
  ProjectUtilify,
  ProjectMindOrbit,
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
];

export const socialMediaData = [
  {
    type: "Gmail",
    text: "wahyu.esya17@gmail.com",
    url: null,
    icon: Mail,
  },
  {
    type: "LinkedIn",
    text: "Wahyu Esya Nasution",
    url: "https://www.linkedin.com/in/wahyuesyanasution",
    icon: LinkedinIcon,
  },
  {
    type: "Github",
    text: "Foolais",
    url: "https://github.com/foolais",
    icon: GithubIcon,
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
    name: "Next.js",
    image: Next,
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
    name: "Prisma",
    image: Prisma,
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
    title: "Mind Orbit",
    description:
      "This project is a responsive web application built with Next.js, TypeScript, and Prisma. It focuses on managing projects and tasks, with features like project creation, task organization, filtering, and user authentication.",
    technologies: [
      {
        name: "Next.js",
        image: Next,
      },
      {
        name: "TypeScript",
        image: TS,
      },
      {
        name: "Tailwind CSS",
        image: Tailwind,
      },
      {
        name: "Prisma",
        image: Prisma,
      },
    ],
    github: "https://github.com/foolais/mind-orbit",
    demo: "https://mind-orbit-rose.vercel.app/",
    images: ProjectMindOrbit,
    type: "web" as "web" | "mobile",
  },
  {
    title: "Utilify",
    description:
      "This project is a web-based tool management system built with Next.js. It allows users to manage tools, track loans, and view history. Key features include user authentication, tool and loan management, search, pagination, and responsive UI components like tables, forms, and modals for easy interaction.",
    technologies: [
      {
        name: "Next.js",
        image: Next,
      },
      {
        name: "TypeScript",
        image: TS,
      },
      {
        name: "Tailwind CSS",
        image: Tailwind,
      },
      {
        name: "Prisma",
        image: Prisma,
      },
    ],
    github: "https://github.com/foolais/utilify",
    demo: "https://utilify-seven.vercel.app/",
    images: ProjectUtilify,
    type: "web" as "web" | "mobile",
  },
  {
    title: "Portofolio",
    description:
      " A portfolio built using TypeScript, Tailwind CSS, ShadCN UI, and Aceternity UI.",
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
    github: "https://github.com/foolais/portofolio",
    demo: "https://thisiswahyuesya.vercel.app/",
    images: ProjectPortofolio,
    type: "web" as "web" | "mobile",
  },
  {
    title: "Slider Mobile App",
    description:
      "The Slider Mobile App is a React Native project featuring two sliders on a single screen, where images automatically slide, while videos are displayed without sliding functionality.",
    technologies: [
      {
        name: "TypeScript",
        image: TS,
      },
      {
        name: "React Native",
        image: React,
      },
    ],
    github: "https://github.com/foolais/ImagesSlider",
    demo: null,
    images: ProjectImagesSlider,
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
    images: ProjectAnimeTs,
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
    images: ProjectSurvey,
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
    images: ProjectFeStore,
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
    images: ProjectBeStore,
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
    images: ProjectCekiGame,
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
    images: ProjectKerjakan,
    type: "web" as "web" | "mobile",
  },
];
