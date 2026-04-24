"use client";

import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  const leftColumn = [
    {
      title: "Healix",
      tags: ["Branding", "Web Design", "Motion"],
      image: "/projects/healix.png",
      aspectRatio: "aspect-[16/12]",
    },
    {
      title: "Hayon",
      tags: ["Branding", "Product Design"],
      image: "/projects/hayon.png",
      aspectRatio: "aspect-[16/9]",
    },
    {
      title: "Autospace",
      tags: ["Branding", "Web Design", "Development"],
      image: "/projects/autospace.png",
      aspectRatio: "aspect-[16/9]",
    },
  ];

  const rightColumn = [
    {
      title: "Dg Doctor",
      tags: ["Branding", "Product Design"],
      image: "/projects/dgDoctor.png",
      aspectRatio: "aspect-[16/8]",
    },
    {
      title: "Genpix",
      tags: ["Branding", "Web Design", "Development"],
      image: "/projects/genpix.png",
      aspectRatio: "aspect-[16/10]",
    },

    {
      title: "Conferoo",
      tags: ["Product Design"],
      image: "/projects/conferoo.png",
      aspectRatio: "aspect-[16/13]",
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="mb-16 md:mb-32 flex flex-col md:flex-row md:items-start justify-between gap-8"
        >
          <div className="flex-[0.3]">
            <p className="text-sm font-medium tracking-tight text-gray-400">
              /OUR PROJECTS/
            </p>
          </div>
          <div className="flex-[0.7] max-w-4xl">
            <h2 className="mb-8 text-[clamp(2.5rem,5.2vw,5rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[var(--bg)]">
              Our recent projects
            </h2>
            <div className="max-w-xl">
              <p className="mb-10 text-[1.1rem] md:text-[1.3rem] text-gray-500 leading-[1.3] tracking-tight max-w-lg">
                Dive into our diverse collection of innovative projects, where
                creativity meets cutting-edge technology to solve real-world
                challenges.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 pb-1 border-b border-gray-300 hover:border-[var(--bg)] text-[1.1rem] text-[var(--bg)] font-medium transition-all duration-300"
              >
                All projects
                <ArrowUpRight
                  className="w-5 h-5 text-[#3b82f6]"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Staggered Grid */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
          {/* Left Column - Starts lower */}
          <div className="flex-1 flex flex-col gap-16 md:gap-24 md:pt-48">
            {leftColumn.map((project, idx) => (
              <ProjectCard key={project.title} {...project} index={idx} />
            ))}
          </div>

          {/* Right Column - Starts higher */}
          <div className="flex-1 flex flex-col gap-16 md:gap-24">
            {rightColumn.map((project, idx) => (
              <ProjectCard key={project.title} {...project} index={idx + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
