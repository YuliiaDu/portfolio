"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { type Project } from "@/data/projects";
import { fadeUp } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
  index:   number;
  variant?: "grid" | "featured";
}

export function ProjectCard({ project, index, variant = "grid" }: ProjectCardProps) {
  const isFeatured = variant === "featured" && index === 0;

  return (
    <motion.article variants={fadeUp} className="group">
      <Link href={`/projects/${project.slug}`} className="block">
        {/* Image container */}
        <div
          className={`
            relative overflow-hidden rounded-3xl bg-mist mb-5
            ${isFeatured ? "aspect-[16/9]" : "aspect-[4/3]"}
          `}
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes={isFeatured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all duration-500" />

          {/* Year badge */}
          <span className="absolute top-4 right-4 bg-canvas/90 backdrop-blur-sm text-ink text-label px-3 py-1.5 rounded-full">
            {project.year}
          </span>
        </div>

        {/* Meta */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-label uppercase tracking-widest text-stone mb-1.5">
              {project.category}
            </p>
            <h3 className="font-display font-semibold text-display-md text-ink group-hover:text-stone transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-body-sm text-stone mt-2 max-w-[50ch]">
              {project.description}
            </p>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 mt-1">
            <div className="w-9 h-9 rounded-full border border-mist flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition-all duration-300">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-ink group-hover:text-canvas transition-colors duration-300 -rotate-45"
              >
                <path
                  d="M2 7h10M7 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-label text-stone bg-mist px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
