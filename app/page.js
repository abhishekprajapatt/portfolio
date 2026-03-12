"use client";

import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import ScrollingText from "@/components/ScrollingText";
import Hero from "@/sections/Hero";

// Lazy load sections for better performance
const About = dynamic(() => import("@/sections/About"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const Highlights = dynamic(() => import("@/sections/Highlights"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const Services = dynamic(() => import("@/sections/Services"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const Projects = dynamic(() => import("@/sections/Projects"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const Skills = dynamic(() => import("@/sections/Skills"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const Resume = dynamic(() => import("@/sections/Resume"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const Contact = dynamic(() => import("@/sections/Contact"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollingText />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <About />
      </Suspense>
      <Highlights />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Services />
      </Suspense>
      <ScrollingText />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Skills />
      </Suspense>
      <ScrollingText />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Resume />
      </Suspense>
      <ScrollingText />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}
