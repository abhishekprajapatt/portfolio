import { MdEmail } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

// public/projects-png
import project1 from "@/public/projects-png/project1.webp";
import project2 from "@/public/projects-png/project2.webp";
import project3 from "@/public/projects-png/project3.webp";
import project4 from "@/public/projects-png/project4.webp";
import project5 from "@/public/projects-png/project5.webp";
import project6 from "@/public/projects-png/project6.webp";
import project7 from "@/public/projects-png/project7.webp";
import project8 from "@/public/projects-png/project8.webp";
import project9 from "@/public/projects-png/project9.webp";
import project10 from "@/public/projects-png/project10.webp";
import project11 from "@/public/projects-png/project11.webp";

// constants/navigation.js
export const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#highlights", label: "Highlights" },
  { href: "#works", label: "Works" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export const BRAND_NAME = "Abhishek";

export const PROJECTS = [
  {
    name: "ShopNow",
    image: project1,
    href: "https://github.com/abhishekprajapatt/shopnow/",
  },
  {
    name: "SelfWise",
    image: project2,
    href: "https://github.com/abhishekprajapatt/selfwise/",
  },
  {
    name: "OMEGA AI",
    image: project3,
    href: "https://github.com/abhishekprajapatt/omega-ai-web/",
  },
  {
    name: "Rabbit",
    image: project4,
    href: "https://github.com/abhishekprajapatt/rabbit/",
  },
  {
    name: "Gesture Mouse",
    image: project5,
    href: "https://github.com/abhishekprajapatt/gesturemouse/",
  },
  {
    name: "Kernel Os",
    image: project6,
    href: "https://github.com/abhishekprajapatt/kernel-os/",
  },
  {
    name: "Infernova",
    image: project7,
    href: "https://github.com/abhishekprajapatt/infernova/",
  },
  {
    name: "GPU VMM",
    image: project8,
    href: "https://github.com/abhishekprajapatt/gpu-vmm/",
  },
  {
    name: "Slam Core",
    image: project9,
    href: "https://github.com/abhishekprajapatt/slam-core/",
  },
  {
    name: "Visionex",
    image: project10,
    href: "https://visionex-app.vercel.app/",
  },
  {
    name: "Postly",
    image: project11,
    href: "https://postly-bhzl.onrender.com/",
  },
];

export const SOCIAL_LINKS = [
  {
    id: 1,
    label: "GitHub",
    href: "https://github.com/abhishekprajapatt",
    icon: <FaGithub className="text-2xl text-white" />,
  },
  {
    id: 2,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishekprajapatt/",
    icon: <FaLinkedinIn className="text-2xl text-white" />,
  },
  {
    id: 3,
    label: "Instagram",
    href: "https://www.instagram.com/abhishekprajapatt",
    icon: <FaInstagram className="text-2xl text-white" />,
  },
  {
    id: 4,
    label: "Email",
    href: "mailto:prajapatiabhishek13988@gmail.com",
    icon: <MdEmail className="text-2xl text-white" />,
  },
];
