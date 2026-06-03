"use client";

import Link from "next/link";
import { projects } from "@/data/projects";

interface NextProjectProps {
  currentSlug: string;
}

export default function NextProject({ currentSlug }: NextProjectProps) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <Link
      href={`/projects/${nextProject.slug}`}
      className="group block rounded-2xl bg-ink text-canvas border border-dark-border overflow-hidden transition-all duration-300"
    >
      <div className="flex items-center justify-between p-6 md:p-8">
        {/* Left side: Label and title */}
        <div className="flex flex-col">
          <span className="text-label uppercase tracking-[0.14em] text-dark-text mb-2">
            NEXT PROJECT
          </span>
          <h3 className="font-display font-semibold text-canvas text-2xl md:text-3xl transition-colors">
            {nextProject.title}
          </h3>
        </div>

        {/* Right side: Circular arrow button */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-canvas/30 group-hover:border-ember group-hover:bg-ember/10 flex items-center justify-center transition-all duration-300">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="text-canvas group-hover:text-ember transition-colors duration-300"
          >
            <path
              d="M2 7h10M9 4l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}