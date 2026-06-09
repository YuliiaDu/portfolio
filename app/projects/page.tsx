"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import ImageSlider from "@/components/ui/ImageSlider";
import { designConcepts } from "@/data/design-concepts";

export default function ProjectsPage() {
  return (
    <main className="bg-canvas">
      <section className="pt-28 pb-14">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-label uppercase tracking-widest text-stone mb-4">
            Selected work
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <motion.h1
              variants={fadeUp}
              className="font-display text-display-xl text-ink text-balance leading-none tracking-[-0.03em]"
            >
              Turning complexity
            </motion.h1>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-baseline gap-x-5 gap-y-0"
            >
              <span className="font-display text-display-xl text-ink italic font-light leading-none tracking-[-0.03em]">
                into&nbsp;
              </span>
              <span
                className="font-display text-display-xl leading-none tracking-[-0.03em]"
                style={{ color: "#FF4D00" }}
              >
                clarity.
              </span>
            </motion.div>
          </motion.div>
          <p className="mt-6 text-body-lg text-stone max-w-3xl">
            A curated collection of case studies across onboarding, mobile-first SaaS, and product design systems — all built to drive clarity, confidence, and measurable outcomes.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ImageSlider concepts={designConcepts} />
    </main>
  );
}
