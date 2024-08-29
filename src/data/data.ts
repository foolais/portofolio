import {
  Github,
  Gmail,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@/assets/icons/icon";
import { CodeXml, Contact, GitBranch, Home } from "lucide-react";

export const navbarData = [
  {
    icon: Home,
    name: "Home",
  },
  {
    icon: GitBranch,
    name: "Carrer",
  },
  {
    icon: CodeXml,
    name: "Projects",
  },
  {
    icon: Contact,
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
    company: "Widya Robotics",
    position: "Frontend Developer",
    date: "Feb 2022 - Aug 2022",
    location: "Yogyakarta",
  },
  {
    company: "Tamtech Internasional",
    position: "Frontend Developer",
    date: "Dec 2022 - Dec 2023",
    location: "Yogyakarta",
  },
];
