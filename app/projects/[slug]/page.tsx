import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import type { CaseStudySection } from "@/data/projects";
import WhatIChangedSection from "@/components/ui/WhatIChangedSection";
import { splitTitle } from "@/lib/utils";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    return notFound();
  }

  const slides = project.imageSlider ?? [];
  const heroImage = project.heroImage;
  const defaultHighlightCards = [
    {
      number: "01",
      title: "Research-led onboarding",
      body: "Traffic source analysis, onboarding metrics, and device behavior revealed the key points where artists abandoned the flow.",
      image: "/images/gigmit/gigmit_Onboarding_1.png",
      alt: "gigmit onboarding redesign overview",
    },
    {
      number: "02",
      title: "Mobile-first signup",
      body: "I simplified the registration path for mobile users, deferred non-essential fields, and added clear progress guidance.",
      image: "/images/gigmit/gigmit_Onboarding_2.png",
      alt: "gigmit mobile-first registration screens",
    },
    {
      number: "03",
      title: "PRO trial conversion",
      body: "The PRO trial step was clarified with stronger hierarchy, better copy, and a smoother path to checkout.",
      image: "/images/gigmit/gigmit_Onboarding_3.png",
      alt: "gigmit PRO trial comparison",
    },
    {
      number: "04",
      title: "Validated impact",
      body: "A/B testing and user feedback confirmed the redesign improved completion, lowered drop-off, and lifted checkout engagement.",
      image: "/images/gigmit/gigmit_Onboarding_4.png",
      alt: "gigmit onboarding validation screens",
    },
  ];
  const highlightCards = project.highlightCards ?? defaultHighlightCards;

  const whatIChangedIndex = project.sections.findIndex(
    (section) => section.type === "text" && section.body === ""
  );

  const firstSections = whatIChangedIndex >= 0 ? project.sections.slice(0, whatIChangedIndex + 1) : project.sections;
  const remainingSections = whatIChangedIndex >= 0 ? project.sections.slice(whatIChangedIndex + 1) : [];

  return (
    <main className="bg-canvas">
      <section className="pt-20 md:pt-28" style={{ paddingBottom: project.client === "gigmit.com" ? "0" : undefined }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-body-sm font-medium text-stone hover:text-ink transition-colors duration-300 mb-6"
          >
            ← Back to projects
          </Link>

          <div className="grid gap-10 xl:grid-cols-[1.2fr_auto] xl:items-start">
            <div>
              {/* Meta pills for all projects: client (highlighted) -> year -> tags */}
              <div className="hero-meta mb-10" style={{ transitionDelay: ".08s" }}>
                {project.client ? (
                  <span className="meta-pill year">{project.client}</span>
                ) : null}
                <span className="meta-pill">{project.year}</span>
                {project.tags && project.tags.map((t) => (
                  <span key={t} className="meta-pill">{t}</span>
                ))}
              </div>
              <h1 className="font-display font-semibold text-display-lg text-ink max-w-4xl">
                {(() => {
                    // Special casing for gigmit title display — only apply to the
                    // original registration case study so other gigmit entries
                    // (e.g. homepage-redesign) render their own titles.
                    if (project.client === "gigmit.com" && project.slug === "registration-onboarding-flow") {
                    const parts = ["Registration & Onboarding", "Flow"];
                    return parts.map((part, i) => (
                      <span key={i}>
                        {i > 0 && <br />}
                        {i === 0 ? (
                          <span style={{ fontStyle: "italic", fontWeight: 300, color: "#FF4D00" }}>
                            {part}
                          </span>
                        ) : (
                          part
                        )}
                      </span>
                    ));
                  }

                  return splitTitle(project.title).map((part, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {i === 1 ? (
                        <span style={{ fontStyle: "italic", fontWeight: 300, color: "#FF4D00" }}>
                          {part}
                        </span>
                      ) : (
                        part
                      )}
                    </span>
                  ));
                })()}
              </h1>
              <p className="mt-6 mb-10 text-body-lg text-stone max-w-3xl">
                {project.description}
              </p>

              {/* Hero stats — use project.heroStats when available */}
              {project.client === "gigmit.com" && project.heroStats && (
                <div className="hero-stats max-w-[1072px] mx-auto" style={{ marginBottom: "clamp(40px, 6vw, 80px)" }}>
                  {project.heroStats.map((s) => (
                    <div key={s.label} className="h-stat">
                      <p className="h-stat-val">{s.value}</p>
                      <p className="h-stat-lbl">{s.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {heroImage ? (
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="hero-img-wrap">
              <img
                src={heroImage}
                alt={`${project.title} hero`}
                className="block w-full h-auto"
              />
            </div>
          </div>
        ) : null}
      </section>

      <section className="pt-12 pb-12 md:pt-20 md:pb-20" style={{ paddingTop: project.client === "gigmit.com" ? "clamp(48px, 6vw, 80px)" : undefined }}>
        <div className={`max-w-6xl mx-auto px-6 md:px-10 ${project.client === "gigmit.com" ? "" : "space-y-12 md:space-y-20"}`}>
          {firstSections.map((section, index) => (
            <SectionBlock key={`${project.slug}-first-${index}`} section={section} mb={section.gap} numberFontSize={section.numberFontSize} />
          ))}
        </div>
      </section>

      {whatIChangedIndex >= 0 ? (
        <WhatIChangedSection key="what-i-changed" cards={highlightCards} />
      ) : null}

      {remainingSections.length > 0 ? (
        <section className="border-t border-mist pt-12 md:pt-20" style={{ paddingTop: project.client === "gigmit.com" ? "clamp(48px, 6vw, 80px)" : undefined }}>
          <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-12 md:space-y-20">
            {remainingSections.map((section, index) => (
              <SectionBlock key={`${project.slug}-remaining-${index}`} section={section} mb={section.gap} numberFontSize={section.numberFontSize} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

function mbStyle(mb?: number): React.CSSProperties | undefined {
  if (!mb) return undefined;
  // Clamp: roughly half the value on mobile, full value on desktop
  return { marginBottom: `clamp(${Math.round(mb * 0.5)}px, ${mb * 0.06}vw + ${Math.round(mb * 0.35)}px, ${mb}px)` };
}

function SectionBlock({ section, mb, numberFontSize }: { section: CaseStudySection; mb?: number; numberFontSize?: string }) {
  if (section.type === "text") {
    return (
      <div className="space-y-4 md:space-y-6" style={mbStyle(mb)}>
        {section.heading ? (
          <h2 className="font-display font-semibold text-display-md text-ink">
            {section.heading}
          </h2>
        ) : null}
        <p className="text-body-lg text-stone max-w-4xl leading-8">{section.body}</p>
      </div>
    );
  }

  if (section.type === "image") {
    return (
      <div className="rounded-2xl bg-dark-surface shadow-[0_32px_80px_rgba(15,12,10,0.12)] overflow-hidden" style={mbStyle(mb)}>
        {section.heading ? (
          <div className="px-8 py-8">
            <h2 className="font-display font-semibold text-display-md text-canvas">
              {section.heading}
            </h2>
          </div>
        ) : null}

        <div className="relative aspect-[16/9] w-full bg-[#0b0907]">
          <Image
            src={section.src ?? ""}
            alt={section.alt ?? "Project image"}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        {section.alt ? (
          <div className="px-8 py-6">
            <p className="text-body-sm text-dark-text">{section.alt}</p>
          </div>
        ) : null}
      </div>
    );
  }

  if (section.type === "metrics") {
    return (
      <div className="space-y-6 md:space-y-8" style={mbStyle(mb)}>
        {section.heading ? (
          <h2 className="font-display font-semibold text-display-md text-ink">
            {section.heading}
          </h2>
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {section.metrics?.map((metric) => (
            <div key={metric.label} className="rounded-3xl bg-mist border border-mist/80 p-6">
              <p className="font-display font-semibold text-[2rem] md:text-[2.5rem] leading-none text-[#ff4d00] mb-3">
                {metric.value}
              </p>
              <p className="text-body-lg text-ink/90">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "comparison") {
    const numberSize = numberFontSize ?? section.numberFontSize ?? "text-[2.5rem]";
    return (
      <div className="space-y-6 md:space-y-8" style={mbStyle(mb)}>
        {section.heading ? (
          <h2 className="font-display font-semibold text-display-md text-ink">
            {section.heading}
          </h2>
        ) : null}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
          {section.comparisons?.map((comp) => (
            <div
              key={comp.title}
              className="group relative overflow-hidden rounded-2xl border border-mist bg-[#E8E6E1] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_48px_rgba(15,12,10,0.1)]"
            >
              <div className="px-5 pt-5 sm:px-6 sm:pt-6 pb-5 sm:pb-6">
                {/* Group label + metric badge */}
                <div className="flex items-center justify-between mb-4">
                  <p className="text-label text-[#FF4D00] uppercase tracking-[0.14em]">
                    {comp.groupLabel}
                  </p>
                  <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none bg-[#E8E6E1] text-ink sm:text-[12px] sm:px-3 sm:py-1.5">
                    {comp.label}
                  </span>
                </div>

                {/* Before | → | After | change — single row */}
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-[10px] text-stone/50 uppercase tracking-[0.18em]">
                      Before
                    </p>
                    <p className="font-display font-semibold text-xl text-ink leading-none sm:text-[2rem]">
                      {comp.before}
                    </p>
                  </div>

                  <div className="text-lg leading-none text-[#FF4D00] sm:text-2xl">
                    →
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <p className="text-[10px] text-stone/50 uppercase tracking-[0.18em]">
                      After
                    </p>
                    <p className="font-display font-semibold text-xl text-ink leading-none sm:text-[2rem]">
                      {comp.after}
                    </p>
                  </div>

                  <p className="text-[11px] font-semibold leading-none text-[#FF4D00] sm:text-label shrink-0">
                    {comp.change}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "beforeAfter") {
    return (
      <div className="space-y-6 md:space-y-8" style={mbStyle(mb)}>
        {section.heading ? (
          <h2 className="font-display font-semibold text-display-md text-ink">
            {section.heading}
          </h2>
        ) : null}

        <div className="rounded-2xl overflow-hidden bg-ink text-canvas border border-dark-border">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="rounded-xl overflow-hidden bg-[#0b0907]">
                <img src={section.before} alt={section.altBefore ?? "Before"} className="w-full h-auto block" />
              </div>
              <div className="rounded-xl overflow-hidden bg-[#0b0907]">
                <img src={section.after} alt={section.altAfter ?? "After"} className="w-full h-auto block" />
              </div>
            </div>
            <p className="mt-6 text-body-sm text-dark-text">Before vs after — highlights of the visual and UX improvements.</p>
          </div>
        </div>
      </div>
    );
  }

  if (section.type === "quote") {
    return (
      <figure className="rounded-[2rem] border border-mist bg-white/90 px-6 py-8 md:px-8 md:py-10 text-stone shadow-sm" style={mbStyle(mb)}>
        <blockquote className="text-body-lg italic text-ink leading-9">
          “{section.quote}”
        </blockquote>
        {section.attribution ? (
          <figcaption className="mt-6 text-label uppercase tracking-widest text-stone">
            {section.attribution}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return null;
}


