"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaJava } from "react-icons/fa";
import { SiNodedotjs, SiSpringboot } from "react-icons/si";
import { GlowingEffect } from "@/components/GlowingEffect";

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="resume"
      className="relative w-full bg-black px-4 py-16 sm:px-6 md:px-8 lg:px-10"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="font-head my-4 text-3xl font-bold text-white sm:text-4xl md:my-6 md:text-5xl lg:my-8 lg:text-6xl"
          variants={itemVariants}
        >
          Download My{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
            Resume
          </span>
        </motion.h2>

        {/* <motion.p
          className="mb-12 max-w-3xl text-lg text-gray-300 md:text-xl"
          variants={itemVariants}
        >
          Download my Full Stack resume showcasing expertise in Java Spring Boot
          backend and Node.js/React frontend development. Also proficient in AI,
          ML, and deep systems architecture.
        </motion.p> */}

        <motion.div
          className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2"
          variants={containerVariants}
        >
          {/* Left Side - Text Content */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Full Stack Engineer
            </h3>
            <div className="space-y-3 text-base text-gray-300 md:text-lg">
              <p>
                I am a passionate full-stack developer with expertise in
                building scalable enterprise applications using Java Spring Boot
                for backend and Angular, React, (Next.js + Node.js) for frontend
                development.
              </p>
              <p>
                My resume highlights proficiency in microservices, RESTful APIs,
                database management (MySQL, MongoDB), and modern DevOps
                practices. Experienced in building scalable enterprise-grade
                applications.
              </p>
              <p>
                Whether you need a backend specialist, full-stack developer, or
                someone who can architect complex systems, I deliver
                production-ready solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Resume Card */}
          <motion.div
            className="group/bento relative flex w-full flex-col justify-between space-y-0.5 rounded-xl border border-gray-700 bg-black p-6 transition duration-200 hover:shadow-none md:p-8"
            variants={itemVariants}
          >
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />

            <div className="transition duration-200 group-hover/bento:translate-x-2">
              <div className="mb-6 flex items-center justify-center">
                <div className="flex items-center space-x-3 text-4xl">
                  <FaJava className="text-orange-500" />
                  <SiSpringboot className="text-green-500" />
                  <SiNodedotjs className="text-green-500" />
                </div>
              </div>

              <div className="mb-2 flex items-center gap-2">
                <div className="font-head text-xl font-semibold text-white md:text-2xl lg:text-3xl">
                  Java Full Stack / Backend Developer
                </div>
              </div>

              <div className="text-sm font-normal text-gray-300 md:text-base">
                Download my Full Stack resume showcasing expertise in Java
                Spring Boot backend, Angular, React, (Next.js + Node.js)
                frontend, microservices.
              </div>
            </div>

            <motion.a
              href="/resume/SoftwareDeveloperResume.pdf"
              download="SoftwareDeveloperResume.pdf"
              className="relative flex w-full items-center justify-center gap-2 rounded-xl border border-gray-600 bg-gray-900/80 px-8 py-4 font-semibold text-white shadow-lg shadow-black/50 backdrop-blur-sm transition-all duration-300 hover:border-gray-500 hover:bg-gray-800/90 hover:shadow-xl hover:shadow-black/70"
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />

              <FaDownload className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
              <span className="tracking-wide">Download Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 rounded-xl border border-gray-700 bg-gray-800/50 p-6"
          variants={itemVariants}
        >
          <p className="text-sm text-gray-400 md:text-base">
            🔍 <strong className="text-white">Currently Looking For:</strong>{" "}
            Full Stack or Backend opportunities:{" "}
            <strong>Java Spring Boot backend</strong> with{" "}
            <strong>Angular, React, (Next.js + Node.js) frontend</strong> for
            Full Stack roles. Building complete applications from API layer to
            UI, or specialized backend systems. Skilled in scalable system
            architecture and advanced design patterns.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
