import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Yuliia Dudareva",
  description:
    "Learn about Yuliia Dudareva's journey from marketing to senior UX/UI design, blending strategy, creativity, and modern web technologies.",
  openGraph: {
    title: "About — Yuliia Dudareva",
    description: "Learn about Yuliia Dudareva's journey from marketing to senior UX/UI design, blending strategy, creativity, and modern web technologies.",
       url: "https://yudu.design/about",
    siteName: "Yuliia Dudareva Portfolio",
    type: "website",
    images: [
      {
           url: "/preview_image.png",
        width: 1200,
        height: 630,
        alt: "Yuliia Dudareva — UI/UX & Product Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Yuliia Dudareva",
       images: ["/preview_image.png"],
  },
};