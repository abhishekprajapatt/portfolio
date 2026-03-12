"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function ProjectModal({ modal, projects }) {
  const { active, index } = modal;
  const modalContainer = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let xMoveContainer, yMoveContainer;
    let handleMouseMove;

    import("gsap").then((gsap) => {
      if (!modalContainer.current) return;

      xMoveContainer = gsap.default.quickTo(modalContainer.current, "left", {
        duration: 0.8,
        ease: "power3",
      });
      yMoveContainer = gsap.default.quickTo(modalContainer.current, "top", {
        duration: 0.8,
        ease: "power3",
      });

      handleMouseMove = (e) => {
        xMoveContainer(e.pageX);
        yMoveContainer(e.pageY);
      };

      window.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      if (handleMouseMove) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      ref={modalContainer}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className="pointer-events-none absolute z-50 flex hidden h-96 w-96 flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-700 opacity-0 shadow-2xl transition-opacity duration-300 md:flex md:opacity-100"
    >
      <div
        style={{ top: `${index * -100}%` }}
        className="absolute h-full w-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
      >
        {projects.map((project, projectIndex) => {
          const backgroundColors = [
            "bg-gradient-to-br from-purple-600 via-purple-700 to-pink-500",
            "bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-900",
            "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900",
            "bg-gradient-to-br from-orange-600 via-orange-700 to-red-500",
            "bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-900",
            "bg-gradient-to-br from-teal-600 via-teal-700 to-blue-900",
            "bg-gradient-to-br from-rose-600 via-rose-700 to-pink-900",
            "bg-gradient-to-br from-amber-600 via-amber-700 to-orange-900",
          ];

          const bgColor =
            backgroundColors[projectIndex % backgroundColors.length];

          return (
            <div
              className={`flex h-full w-full flex-col items-center justify-start rounded-2xl p-1 ${bgColor}`}
              key={`modal_${projectIndex}`}
            >
              {/* Image */}
              <div className="relative mb-4 h-52 w-full overflow-hidden rounded-xl px-2 shadow-lg">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>

              {/* Description */}
              <div className="w-full flex-1 overflow-hidden px-2">
                <h3 className="mb-2 text-sm font-semibold text-white">
                  {project.name}
                </h3>
                <p className="line-clamp-5 text-xs leading-relaxed text-gray-100">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
