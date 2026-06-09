"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { Button } from "@/components/buttons/Button";

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
          <span className="text-label uppercase tracking-widest text-dark-text mb-2">
            NEXT PROJECT
          </span>
          <h3 className="font-display font-semibold text-canvas text-2xl md:text-3xl transition-colors">
            {nextProject.title}
          </h3>
        </div>

        {/* Right side: Circular arrow button */}
        <Button
          href={`/projects/${nextProject.slug}`}
          variant="secondary-accent"
          iconOnly
        />
      </div>
    </Link>
  );
}