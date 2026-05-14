import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="bg-canvas">
      <section className="pt-28 pb-14">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-label uppercase tracking-[0.28em] text-stone mb-4">
            Selected work
          </p>
          <h1 className="font-display font-semibold text-display-lg text-ink max-w-4xl">
            Meaningful product and experience design for conversion-led digital tools.
          </h1>
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
    </main>
  );
}
