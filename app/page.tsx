import type { Metadata } from "next";
import { Hero }             from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ProcessMarquee }   from "@/components/sections/ProcessMarquee";
import { Disciplines }      from "@/components/sections/Disciplines";
import { Testimonial }      from "@/components/sections/Testimonial";
import { HomeCTA }          from "@/components/sections/HomeCTA";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Yuliia Dudareva — UI/UX & Product Designer",
  description:
    "UI/UX and Product Designer crafting clear, intentional digital experiences. Based in Munich, Germany.",
  openGraph: {
    title: "Yuliia Dudareva — UI/UX & Product Designer",
    description: "UI/UX and Product Designer crafting clear, intentional digital experiences. Based in Munich, Germany.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/preview_image1.png",
        width: 1200,
        height: 630,
        alt: "Yuliia Dudareva — UI/UX & Product Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuliia Dudareva — UI/UX & Product Designer",
    images: ["/preview_image1.png"],
  },
};

export default function HomePage() {
  const featured = projects.slice(0, 3);

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
