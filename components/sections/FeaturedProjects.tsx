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
   ProjectRow
   - Mobile (<774px): full-card image with title/year overlay
   - Desktop (≥774px): constrained left text column + dominant
     right image column. Hover flips bg to ink; all text goes
     canvas. Arrow stays readable in canvas/canvas tones.
─────────────────────────────────────────────────────────────── */
interface ProjectRowProps {
  project: Project;
  index:   number;
  inView:  boolean;
}

function ProjectRow({ project, index, inView }: ProjectRowProps) {
  return (
    <motion.article
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay: 0.15 + index * 0.13 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative grid gap-0 rounded-3xl overflow-hidden bg-mist hover:bg-ink transition-colors duration-500 ring-1 ring-stone/40 hover:ring-black min-[774px]:grid-cols-[320px_1fr]"
        style={{ minHeight: 420 }}
      >
        {/* ── Mobile: full-card image with title overlay ─── */}
        <div className="relative min-[774px]:hidden" style={{ minHeight: 260 }}>
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
          {/* Floating label with project name (no year) */}
          <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2">
            <span
              className={
                index === 0
                  ? "font-display text-display-sm bg-ink/70 text-canvas px-4 py-2 rounded-full backdrop-blur-sm max-w-[90vw] truncate"
                  : "font-display text-body-sm bg-ink/70 text-canvas px-4 py-2 rounded-full backdrop-blur-sm"
              }
            >
              {project.title}
            </span>
          </div>
        </div>

        {/* ── Desktop: left constrained content ─────────── */}
        <div className="hidden min-[774px]:flex flex-col justify-between p-8 lg:p-10">
          {/* Top: index + category */}
          <div className="flex items-center gap-3">
            <span className="text-label text-stone group-hover:text-canvas/40 transition-colors duration-500">
              {pad(index + 1)} /
            </span>
            <span className="text-label uppercase tracking-widest text-stone group-hover:text-canvas/40 transition-colors duration-500">
              {project.category}
            </span>
          </div>

          {/* Middle: title + description */}
          <div className="mt-auto mb-auto py-6">
            <h3 className="font-display font-semibold text-display-md text-ink group-hover:text-canvas transition-colors duration-500 mb-3 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-body-sm text-stone group-hover:text-canvas/60 transition-colors duration-500 line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Bottom: tags + arrow */}
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-label text-stone bg-ink/6 group-hover:bg-canvas/10 group-hover:text-canvas/60 px-3 py-1.5 rounded-full transition-colors duration-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow CTA */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-stone/30 group-hover:border-black group-hover:bg-ember/10 flex items-center justify-center transition-all duration-300">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-ink group-hover:text-ember transition-colors duration-300 -rotate-45"
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

        {/* ── Desktop: dominant image column ─────────────── */}
        <div className="relative overflow-hidden hidden min-[774px]:block">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(min-width: 774px) 65vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
        </div>
      </Link>
    </motion.article>
  );
}
