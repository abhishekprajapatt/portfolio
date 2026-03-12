"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaDatabase,
  FaServer,
  FaCodeBranch,
  FaCloud,
  FaFlask,
  FaShieldAlt,
} from "react-icons/fa";
import { SiSpringboot, SiAngular } from "react-icons/si";
import { MdArchitecture, MdSecurityUpdateGood } from "react-icons/md";
import { GlowingEffect } from "@/components/GlowingEffect";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Java Backend Development",
      description:
        "Expert in Java Spring Boot, microservices architecture, REST APIs, JPA/Hibernate, and building enterprise-grade scalable server solutions.",
      icon: <FaJava className="text-orange-500" />,
      accentColor: "from-orange-500/20 to-orange-500/5",
    },
    {
      id: 2,
      title: "Microservices & System Design",
      description:
        "Designing and implementing scalable microservices using Spring Boot, Kafka event streaming, service discovery, distributed system patterns.",
      icon: <FaCodeBranch className="text-teal-500" />,
      accentColor: "from-teal-500/20 to-teal-500/5",
    },
    {
      id: 3,
      title: "Database & Data Architecture",
      description:
        "MySQL, PostgreSQL, MongoDB optimization. Expert in data modeling, indexing strategies, query optimization, and database design.",
      icon: <FaDatabase className="text-purple-500" />,
      accentColor: "from-purple-500/20 to-purple-500/5",
    },
    {
      id: 4,
      title: "RESTful API Design",
      description:
        "RESTful API design, Swagger/OpenAPI documentation, API versioning, security (JWT), rate limiting, and production best practices.",
      icon: <FaShieldAlt className="text-lime-500" />,
      accentColor: "from-lime-500/20 to-lime-500/5",
    },
    {
      id: 5,
      title: "Backend Testing & Quality",
      description:
        "Unit testing, integration testing, JUnit, Mockito, test-driven development (TDD), code coverage, and quality assurance.",
      icon: <FaFlask className="text-pink-500" />,
      accentColor: "from-pink-500/20 to-pink-500/5",
    },
    {
      id: 6,
      title: "Cloud Deployment & DevOps",
      description:
        "Docker, Kubernetes, Jenkins, AWS EC2/RDS, CI/CD pipelines, automated deployments, and production environment management.",
      icon: <FaCloud className="text-cyan-500" />,
      accentColor: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      id: 7,
      title: "Frontend Development",
      description:
        "React, Next.js, Angular with TypeScript. Modern responsive UI, state management, and performance optimization (secondary expertise).",
      icon: <FaReact className="text-blue-400" />,
      accentColor: "from-blue-400/20 to-blue-400/5",
    },
    {
      id: 8,
      title: "Full Stack Solutions",
      description:
        "End-to-end backend-first full stack development: database design, robust APIs, microservices, frontend integration.",
      icon: <FaServer className="text-green-500" />,
      accentColor: "from-green-500/20 to-green-500/5",
    },
    {
      id: 9,
      title: "System Architecture",
      description:
        "High-level system planning, scalable architecture, design patterns (SOLID), load balancing, caching strategies, and performance optimization.",
      icon: <MdArchitecture className="text-indigo-500" />,
      accentColor: "from-indigo-500/20 to-indigo-500/5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="services"
      className="relative w-full bg-black px-4 py-16 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="font-head my-4 text-4xl font-bold text-white sm:text-5xl md:my-8 md:text-7xl lg:my-10 lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative rounded-xl border border-gray-700 bg-black p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/50 md:p-8"
            >
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={60}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              {/* Background gradient */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.accentColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-600 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-500 group-hover:bg-gray-800/50">
                  <div className="text-2xl">{service.icon}</div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold text-white transition-colors duration-300 md:text-xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300 md:text-base">
                  {service.description}
                </p>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-xl border border-gray-500/0 transition-all duration-300 group-hover:border-gray-500/50" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.div
          className="mt-12 rounded-xl border border-gray-700 bg-gray-800/30 p-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-sm text-gray-300 md:text-base">
            I specialize in{" "}
            <strong className="text-white">
              backend development &amp; system architecture
            </strong>
            delivering production-ready, scalable solutions. I also provide
            full-stack capabilities with frontend expertise when needed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
