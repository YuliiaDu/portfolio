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
  const highlightCards = [
    {
      number: "01",
      title: "Research-led onboarding",
      body: "Traffic source analysis, onboarding metrics, and device behavior revealed the key points where artists abandoned the flow.",
      image: "/images/gigmit/WID_Projects_gigmit_Onboarding_1.png",
      alt: "gigmit onboarding redesign overview",
    },
    {
      number: "02",
      title: "Mobile-first signup",
      body: "I simplified the registration path for mobile users, deferred non-essential fields, and added clear progress guidance.",
      image: "/images/gigmit/WID_Projects_gigmit_Onboarding_2.png",
      alt: "gigmit mobile-first registration screens",
    },
    {
      number: "03",
      title: "PRO trial conversion",
      body: "The PRO trial step was clarified with stronger hierarchy, better copy, and a smoother path to checkout.",
      image: "/images/gigmit/WID_Projects_gigmit_Onboarding_3.png",
      alt: "gigmit PRO trial comparison",
    },
    {
      number: "04",
      title: "Validated impact",
      body: "A/B testing and user feedback confirmed the redesign improved completion, lowered drop-off, and lifted checkout engagement.",
      image: "/images/gigmit/WID_Projects_gigmit_Onboarding_4.png",
      alt: "gigmit onboarding validation screens",
    },
  ];

  const whatIChangedIndex = project.sections.findIndex(
    (section) => section.type === "text" && section.body === ""
  );

  const firstSections = whatIChangedIndex >= 0 ? project.sections.slice(0, whatIChangedIndex + 1) : project.sections;
  const remainingSections = whatIChangedIndex >= 0 ? project.sections.slice(whatIChangedIndex + 1) : [];

  return (
    <main className="bg-canvas pb-24">
      <section className="pt-28" style={{ paddingBottom: project.slug === "gigmit-registration-onboarding" ? "0" : undefined }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-body-sm font-medium text-stone hover:text-ink transition-colors duration-300 mb-6"
          >
            ← Back to projects
          </Link>

          <div className="grid gap-10 xl:grid-cols-[1.2fr_auto] xl:items-start">
            <div>
              {project.slug === "gigmit-registration-onboarding" ? (
                /* Meta pills */
                <>
                  <div className="hero-meta mb-10" style={{ transitionDelay: ".08s" }}>
                    <span className="meta-pill year">2022</span>
                    <span className="meta-pill">SaaS</span>
                    <span className="meta-pill">Web Design</span>
                    <span className="meta-pill">Mobile Design</span>
                    <span className="meta-pill">UX Research</span>
                  </div>
                </>
              ) : (
                <p className="text-label uppercase tracking-[0.28em] text-stone mb-4">
                  {project.category}
                </p>
              )}
              <h1 className="font-display font-semibold text-display-lg text-ink max-w-4xl">
                {splitTitle(project.title).map((part, i) => (
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
                ))}
              </h1>
              <p className="mt-6 mb-10 text-body-lg text-stone max-w-3xl">
                {project.description}
              </p>

              {/* Hero stats — gigmit only */}
              {project.slug === "gigmit-registration-onboarding" && (
                <div className="hero-stats max-w-[1072px] mx-auto" style={{ marginBottom: "80px" }}>
                  <div className="h-stat">
                    <p className="h-stat-val">+189%</p>
                    <p className="h-stat-lbl">Onboarding completion</p>
                  </div>
                  <div className="h-stat">
                    <p className="h-stat-val">+219%</p>
                    <p className="h-stat-lbl">Users reaching checkout</p>
                  </div>
                  <div className="h-stat">
                    <p className="h-stat-val">47% faster</p>
                    <p className="h-stat-lbl">Time to checkout click</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {heroImage ? (
            <div className="hero-img-wrap">
            <img
              src={heroImage}
              alt={`${project.title} hero`}
              className="block w-full h-auto"
            />
          </div>
        ) : null}
      </section>

      <section className="pt-20 pb-20" style={{ paddingTop: project.slug === "gigmit-registration-onboarding" ? "80px" : undefined }}>
        <div className={`max-w-6xl mx-auto px-6 md:px-10 ${project.slug === "gigmit-registration-onboarding" ? "" : "space-y-20"}`}>
          {firstSections.map((section, index) => (
            <SectionBlock key={`${project.slug}-first-${index}`} section={section} mb={section.gap} numberFontSize={section.numberFontSize} />
          ))}
        </div>
      </section>

      {whatIChangedIndex >= 0 ? (
        <WhatIChangedSection key="what-i-changed" cards={highlightCards} />
      ) : null}

      {remainingSections.length > 0 ? (
        <section className="border-t border-mist pt-20" style={{ paddingTop: project.slug === "gigmit-registration-onboarding" ? "80px" : undefined }}>
          <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-20">
            {remainingSections.map((section, index) => (
              <SectionBlock key={`${project.slug}-remaining-${index}`} section={section} mb={section.gap} numberFontSize={section.numberFontSize} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

function SectionBlock({ section, mb, numberFontSize }: { section: CaseStudySection; mb?: number; numberFontSize?: string }) {
  if (section.type === "text") {
    return (
      <div className="space-y-6" style={mb ? { marginBottom: `${mb}px` } : undefined}>
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
      <div className="rounded-2xl bg-dark-surface shadow-[0_32px_80px_rgba(15,12,10,0.12)] overflow-hidden" style={mb ? { marginBottom: `${mb}px` } : undefined}>
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
      <div className="space-y-8" style={mb ? { marginBottom: `${mb}px` } : undefined}>
        {section.heading ? (
          <h2 className="font-display font-semibold text-display-md text-ink">
            {section.heading}
          </h2>
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {section.metrics?.map((metric) => (
            <div key={metric.label} className="rounded-3xl bg-mist border border-mist/80 p-6">
              <p className="font-display font-semibold text-[2.5rem] leading-none text-[#ff4d00] mb-3">
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
    const numberSize = section.numberFontSize ?? "text-[2.5rem]";
    return (
      <div className="space-y-8" style={mb ? { marginBottom: `${mb}px` } : undefined}>
        {section.heading ? (
          <h2 className="font-display font-semibold text-display-md text-ink">
            {section.heading}
          </h2>
        ) : null}
        <div className="space-y-6">
          {section.comparisons?.map((comp) => (
            <div key={comp.title} className="rounded-3xl bg-mist border border-mist/80 p-8">
              <p className="text-label uppercase tracking-widest text-stone mb-6">{comp.title}</p>
              <div className="grid grid-cols-3 gap-4 items-end">
                {/* Before */}
                <div>
                  <p className="text-body-sm text-stone mb-2">Before</p>
                  <p className={`font-display font-semibold ${numberSize} leading-none text-ink`}>
                    {comp.before}
                  </p>
                </div>

                {/* Arrow & Change */}
                <div className="flex flex-col items-center gap-1">
                    <div
                      className={`text-[2rem] ${
                        comp.changeType === "increase" ? "text-green-600" : "text-[#16A34A]"
                      }`}
                    >
                      {comp.changeType === "increase" ? "▲" : "▼"}
                    </div>
                    <p
                      className={`text-label font-semibold ${
                        comp.changeType === "increase" ? "text-green-600" : "text-[#16A34A]"
                      }`}
                    >
                      {comp.change}
                    </p>
                </div>

                {/* After */}
                <div>
                  <p className="text-body-sm text-stone mb-2">After</p>
                  <p className={`font-display font-semibold ${numberSize} leading-none text-ink`}>
                    {comp.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "quote") {
    return (
      <figure className="rounded-[2rem] border border-mist bg-white/90 px-8 py-10 text-stone shadow-sm" style={mb ? { marginBottom: `${mb}px` } : undefined}>
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


