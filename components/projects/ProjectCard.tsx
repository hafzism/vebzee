"use client";

/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tags: string[];
  image: string;
  aspectRatio: string;
  url: string;
  index: number;
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ProjectCard({ title, tags, image, aspectRatio, url, index }: ProjectCardProps) {
  return (
    <motion.a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}
      className="group relative break-inside-avoid flex flex-col"
    >
      {/* Image Container */}
      <div className={`relative w-full overflow-hidden ${aspectRatio} rounded-[1.5rem] bg-black/[0.03]`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03] opacity-[0.98] brightness-[0.99]"
        />
        
        {/* Overlay Hover Effect */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Hover Arrow Button */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10 pointer-events-none">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            <ArrowUpRight className="w-5 h-5 text-[#3b82f6]" />
          </div>
        </div>
      </div>
      
      {/* Footer Text area */}
      <div className="pt-4 pb-2 md:pt-5 flex flex-wrap md:flex-nowrap items-start md:items-center justify-between gap-3">
        <h3 className="text-xl md:text-[1.35rem] font-medium text-[var(--bg)] tracking-tight">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 md:opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] uppercase font-medium tracking-wide text-gray-400 border border-gray-200 rounded-full bg-transparent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

