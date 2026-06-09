"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { type Project } from "@/data/projects";
import { fadeUp, EASE_OUT_EXPO } from "@/lib/motion";
import { pad, splitTitle } from "@/lib/utils";
import { Button } from "@/components/buttons/Button";
import { Heading } from "@/components/ui/Heading";

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
            <Heading level={2}>Projects</Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.2 }}
          >
            <Button href="/projects" variant="link">
              All projects
            </Button>
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
          <Button
            href="/projects"
            variant="link"
            className="w-full text-center"
          >
            View all projects
          </Button>
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
        className="group relative grid gap-0 rounded-3xl overflow-hidden bg-ink transition-colors duration-500 ring-1 ring-white/10 hover:ring-white/20 min-[774px]:grid-cols-[320px_1fr]"
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
                  ? "font-display text-display-sm bg-ink/70 text-canvas px-4 py-2 rounded-full backdrop-blur-sm max-w-[90vw]"
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
            <span className="text-label text-canvas/60 group-hover:text-canvas/80 transition-colors duration-500">
              {pad(index + 1)} /
            </span>
            <span className="text-label uppercase tracking-widest text-canvas/60 group-hover:text-canvas/80 transition-colors duration-500">
              {project.category}
            </span>
          </div>

          {/* Middle: title + description */}
          <div className="mt-auto mb-auto py-6">
            <Heading level={3} className="mb-3 text-white group-hover:text-white transition-colors duration-500">
              {splitTitle(project.title).map((part, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {i === 0 ? (
                    <span className="font-semibold">
                      {part}
                    </span>
                  ) : (
                    <span style={{ fontStyle: "italic", fontWeight: 300, color: "#FF4D00" }}>
                      {part}
                    </span>
                  )}
                </span>
              ))}
            </Heading>
            <p className="text-body-sm text-canvas/75 group-hover:text-canvas/90 transition-colors duration-500 line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Bottom: tags + arrow */}
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-label text-canvas/75 bg-canvas/10 group-hover:bg-canvas/20 group-hover:text-white px-3 py-1.5 rounded-full transition-colors duration-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow CTA */}
            <Button href={`/projects/${project.slug}`} variant="secondary-accent" iconOnly />
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
