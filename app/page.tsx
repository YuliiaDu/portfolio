import type { Metadata } from "next";
import { Hero }             from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ProcessMarquee }   from "@/components/sections/ProcessMarquee";
import { Disciplines }      from "@/components/sections/Disciplines";
import { Testimonial }      from "@/components/sections/Testimonial";
import { HomeCTA }          from "@/components/sections/HomeCTA";
import { getFeaturedProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Jane Doe — UI/UX & Product Designer",
  description:
    "UI/UX and Product Designer crafting clear, intentional digital experiences. Currently at Linear.",
};

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* 1. Hero — full viewport, staggered text entrance */}
      <Hero />

      {/* 2. Featured Projects — 3 scroll-triggered project rows */}
      <FeaturedProjects projects={featured} />

      {/* 3. Process Marquee — ember strip, infinite scroll */}
      <ProcessMarquee />

      {/* 4. Disciplines — dark 2×2 grid */}
      <Disciplines />

      {/* 5. Testimonial — large centered quote, light bg */}
      <Testimonial />

      {/* 6. CTA — dark contact section above footer */}
      <HomeCTA />
    </>
  );
}
