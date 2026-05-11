"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { type Project } from "@/data/projects";
import { fadeUp, EASE_OUT_EXPO } from "@/lib/motion";
import { pad } from "@/lib/utils";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="py-section bg-canvas">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* ── Section header ───────────────────────────────── */}
        <div className="flex items-end justify-between mb-16 md:mb-20">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <p className="text-label uppercase tracking-widest text-stone mb-3">
              Selected work
            </p>
            <h2 className="font-display font-semibold text-display-lg text-ink">
              Projects
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.2 }}
          >
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-body-sm font-medium text-stone hover:text-ink transition-colors duration-300 underline-ember"
            >
              All projects
              <span>→</span>
            </Link>
          </motion.div>
        </div>

        {/* ── Project list ─────────────────────────────────── */}
        <div className="space-y-6 md:space-y-8">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* ── Mobile "all projects" CTA ────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 flex md:hidden"
        >
          <Link
            href="/projects"
            className="w-full text-center border border-mist text-body-sm font-medium text-stone py-4 rounded-full hover:border-ink hover:text-ink transition-all duration-300"
          >
            View all projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ProjectRow — the main card layout on home
──────────────────────────────────────────────────────────────── */
interface ProjectRowProps {
  project: Project;
  index:   number;
  inView:  boolean;
}

function ProjectRow({ project, index, inView }: ProjectRowProps) {
  const isLarge = index === 0;

  return (
    <motion.article
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay: 0.15 + index * 0.13 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative grid md:grid-cols-[1fr_auto] gap-0 rounded-3xl overflow-hidden bg-mist hover:bg-ink transition-colors duration-500"
        style={{ minHeight: isLarge ? "420px" : "280px" }}
      >
        {/* ── Left: text content ───────────────────────────── */}
        <div className="relative z-10 flex flex-col justify-between p-8 md:p-10">
          {/* Top meta */}
          <div className="flex items-center justify-between mb-auto">
            <div className="flex items-center gap-3">
              <span className="text-label text-stone group-hover:text-canvas/50 transition-colors duration-500">
                {pad(index + 1)} /
              </span>
              <span className="text-label uppercase tracking-widest text-stone group-hover:text-canvas/50 transition-colors duration-500">
                {project.category}
              </span>
            </div>
            <span className="text-label text-stone group-hover:text-canvas/40 transition-colors duration-500">
              {project.year}
            </span>
          </div>

          {/* Main text */}
          <div className="mt-8">
            <h3
              className={`font-display font-semibold text-ink group-hover:text-canvas transition-colors duration-500 mb-3 ${
                isLarge ? "text-display-lg" : "text-display-md"
              }`}
            >
              {project.title}
            </h3>
            <p className="text-body-sm text-stone group-hover:text-canvas/60 transition-colors duration-500 max-w-[48ch]">
              {project.description}
            </p>
          </div>

          {/* Tags + arrow */}
          <div className="flex items-end justify-between mt-8 gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-label text-stone bg-canvas/60 group-hover:bg-canvas/10 group-hover:text-canvas/60 px-3 py-1.5 rounded-full transition-colors duration-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Animated arrow circle */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-mist group-hover:border-canvas/30 flex items-center justify-center transition-all duration-300">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-ink group-hover:text-canvas transition-colors duration-500 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
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

        {/* ── Right: cover image ───────────────────────────── */}
        <div
          className={`relative overflow-hidden ${
            isLarge
              ? "hidden md:block md:w-[400px]"
              : "hidden md:block md:w-[300px]"
          }`}
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="400px"
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105 opacity-80 group-hover:opacity-60"
          />
          {/* Gradient blend — left edge merges with card bg */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-mist group-hover:from-ink transition-colors duration-500 z-10" />
        </div>
      </Link>
    </motion.article>
  );
}
