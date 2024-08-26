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
    text: "085291369486",
    icon: WhatsApp,
    link: "https://wa.me/085291369486",
  },
];
