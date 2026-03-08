"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SKILLS1, SKILLS2, SKILLS3, SKILLS4 } from "@/constants/skills";

const Skills = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  // Define all skill rows
  const skillRows = [
    { skills: SKILLS1, direction: "left" },
    { skills: SKILLS2, direction: "right" },
    { skills: SKILLS3, direction: "left" },
    { skills: SKILLS4, direction: "right" },
  ];

  const SkillCard = ({ skill }) => (
    <div className="group flex min-w-[120px] flex-shrink-0 flex-col items-center p-3 transition-all duration-300 hover:scale-105 md:min-w-[140px] md:p-4">
      {/* Logo */}
      <div className="mb-3 flex h-40 w-32 flex-col items-center justify-center rounded-xl border border-gray-800 bg-[#1a1a1a] transition-all duration-300 group-hover:border-gray-600 group-hover:bg-gray-700 group-hover:shadow-lg md:h-44 md:w-36 lg:h-48 lg:w-40">
        <div className="relative mb-4 h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20">
          <Image
            src={skill.logo}
            alt={skill.name}
            loading="lazy"
            width={80}
            height={80}
            sizes="(max-width: 768px) 64px, (max-width: 1024px) 72px, 80px"
            className="object-contain filter transition-all duration-300 group-hover:brightness-110"
          />
        </div>
        {/* Skill Name */}
        <h3 className="px-2 text-center text-sm leading-tight font-medium text-white md:text-base lg:text-lg">
          {skill.name}
        </h3>
      </div>
    </div>
  );

  const SkillRow = ({ skills, direction = "left", rowIndex }) => {
    const isHovered = hoveredRow === rowIndex;

    return (
      <div
        className="relative mb-4 md:mb-6"
        onMouseEnter={() => setHoveredRow(rowIndex)}
        onMouseLeave={() => setHoveredRow(null)}
      >
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-black via-black/80 to-transparent md:w-16"></div>
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-black via-black/80 to-transparent md:w-16"></div>

        {/* Scrollable Container */}
        <div className="scrollbar-hide overflow-x-auto">
          <div
            className={`flex space-x-4 px-6 md:space-x-6 md:px-8 animate-scroll-${direction}`}
            style={{
              width: "max-content",
              animationDuration: "30s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationPlayState: isHovered ? "paused" : "running",
            }}
          >
            {/* Duplicate skills for seamless loop */}
            {[...skills, ...skills].map((skill, index) => (
              <SkillCard key={`${skill.name}-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="w-full bg-black px-4 py-16 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="font-head my-4 text-4xl font-bold text-white md:my-8 md:text-7xl lg:my-10 lg:text-8xl">
          Skills
        </h2>

        {/* Four Rows of Skills */}
        <div className="space-y-4 md:space-y-6">
          {skillRows.map((row, index) => (
            <SkillRow
              key={index}
              skills={row.skills}
              direction={row.direction}
              rowIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
