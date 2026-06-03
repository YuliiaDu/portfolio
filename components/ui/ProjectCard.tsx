"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { type Project } from "@/data/projects";
import { fadeUp } from "@/lib/motion";
import { Button } from "@/components/buttons/Button";

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
            src={project.heroImage ?? project.coverImage}
            alt={project.title}
            fill
            sizes={isFeatured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
          {/* (Removed gradient overlay) */}
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
              {project.description && project.description.length > 112
                ? project.description.slice(0, 112).trimEnd() + '…'
                : project.description}
            </p>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 mt-1">
            <Button href={`/projects/${project.slug}`} variant="secondary-dark" iconOnly />
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
