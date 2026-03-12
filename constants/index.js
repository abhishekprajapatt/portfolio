import { MdEmail } from "react-icons/md";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

// public/projects-png
import project1 from "@/public/projects-png/project1.webp";
import project2 from "@/public/projects-png/project2.webp";
import project3 from "@/public/projects-png/project3.webp";
import project4 from "@/public/projects-png/project4.webp";
import project10 from "@/public/projects-png/project10.webp";
import project11 from "@/public/projects-png/project11.webp";

// constants/navigation.js
export const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#highlights", label: "Highlights" },
  { href: "#services", label: "Services" },
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
    description:
      "E-commerce marketplace where buyers can shop, sellers can list products, delivery guys track orders, and admins manage everything. Has shopping cart, checkout, order tracking, seller dashboard, and analytics.",
  },
  {
    name: "SelfWise",
    image: project2,
    href: "https://github.com/abhishekprajapatt/selfwise/",
    description:
      "Library app for browsing books, searching by title/author, issuing & returning books. Admins can manage inventory, track fines, and generate reports. Built with Java Spring Boot & Angular.",
  },
  {
    name: "OMEGA AI",
    image: project3,
    href: "https://github.com/abhishekprajapatt/omega-ai-web/",
    description:
      "Chat with multiple AI models like ChatGPT, Grok, Gemini & Claude. Has voice chat mode, real-time streaming, and can interrupt AI mid-response. Built with Next.js, React, and MongoDB.",
  },
  {
    name: "Rabbit",
    image: project4,
    href: "https://github.com/abhishekprajapatt/rabbit/",
    description:
      "Online learning platform where students enroll in courses, submit assignments, track progress. Teachers manage courses & grade assignments. Has notifications and student dashboards.",
  },
  {
    name: "Visionex",
    image: project10,
    href: "https://github.com/abhishekprajapatt/visionex",
    description:
      "Productivity app with task management, timers for focused work, built-in music player for ambient sounds. Has multiple timer modes and works on both web and desktop. Built with Next.js & Electron.",
  },
  {
    name: "Postly",
    image: project11,
    href: "https://postly-bhzl.onrender.com/",
    description:
      "Social media app where you can post updates, like posts, add comments, bookmark favorites, and follow other users. Has personalized timeline and profile pages. Built with MERN stack.",
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
