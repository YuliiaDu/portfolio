import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import type { CaseStudySection } from "@/data/projects";
import WhatIChangedSection from "@/components/ui/WhatIChangedSection";

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
    (section) => section.type === "text" && section.heading === "UX & flow enhancements"
  );

  const firstSections = whatIChangedIndex >= 0 ? project.sections.slice(0, whatIChangedIndex + 1) : project.sections;
  const remainingSections = whatIChangedIndex >= 0 ? project.sections.slice(whatIChangedIndex + 1) : [];

  return (
    <main className="bg-canvas pb-24">
      <section className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-body-sm font-medium text-stone hover:text-ink transition-colors duration-300 mb-8"
          >
            ← Back to projects
          </Link>
<!--meta pills-->==$0
<div class="hero meta reveal in" style="margin-top:28px; transition-delay:08s">
  <span class="meta-pill year">2022</span>
  <span class="meta-pill">SaaS</span>
  <span class="meta-pill">Web Design</span>
  <span class="meta-pill">Mobile Design</span>
  <span class="meta-pill">UX Research</span>
</div>
          <div className="grid gap-10 xl:grid-cols-[1.2fr_auto] xl:items-start">
            <div>
              <p className="text-label uppercase tracking-[0.28em] text-stone mb-4">
                {project.category}
              </p>
              <h1 className="font-display font-semibold text-display-lg text-ink max-w-4xl">
                {project.title}
              </h1>
              <p className="mt-6 text-body-lg text-stone max-w-3xl">
                {project.description}
              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Show video for gigmit homepage redesign, otherwise show hero image */}
        {project.slug === "gigmit-homepage-redesign" ? (
          <div className="w-full mt-16">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wYEDgPEBnZA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-auto"
            />
          </div>
        ) : (
          heroImage ? (
            <div className="w-full overflow-hidden mt-16">
              <img
                src={heroImage}
                alt={`${project.title} hero`}
                className="block w-full h-auto"
              />
            </div>
          ) : null
        )}
      </section>

      <section className="pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-20">
          {firstSections.map((section, index) => (
            <SectionBlock key={`${project.slug}-first-${index}`} section={section} />
          ))}
        </div>
      </section>

      {whatIChangedIndex >= 0 ? (
        <WhatIChangedSection key="what-i-changed" cards={highlightCards} />
      ) : null}

      {remainingSections.length > 0 ? (
        <section className="border-t border-mist pt-16">
          <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-20">
            {remainingSections.map((section, index) => (
              <SectionBlock key={`${project.slug}-remaining-${index}`} section={section} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

function SectionBlock({ section }: { section: CaseStudySection }) {
  if (section.type === "text") {
    return (
      <div className="space-y-6">
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
      <div className="rounded-2xl bg-dark-surface shadow-[0_32px_80px_rgba(15,12,10,0.12)] overflow-hidden">
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
      <div className="space-y-8">
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
    return (
      <div className="space-y-8">
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
                  <p className="font-display font-semibold text-[2.5rem] leading-none text-ink">
                    {comp.before}
                  </p>
                </div>

                {/* Arrow & Change */}
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`text-[2rem] ${
                      comp.changeType === "increase" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {comp.changeType === "increase" ? "▲" : "▼"}
                  </div>
                  <p
                    className={`text-label font-semibold ${
                      comp.changeType === "increase" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {comp.change}
                  </p>
                </div>

                {/* After */}
                <div>
                  <p className="text-body-sm text-stone mb-2">After</p>
                  <p className="font-display font-semibold text-[2.5rem] leading-none text-ink">
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
      <figure className="rounded-[2rem] border border-mist bg-white/90 px-8 py-10 text-stone shadow-sm">
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


