import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

const dmSans = DM_Sans({
  subsets: ["latin"],
  axes: ["opsz"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Senior Product Designer & UI/UX Designer in Germany | Yuliia Dudareva",
    template: "%s — Yuliia Dudareva",
  },
  description:
    "Senior Product Designer and UX/UI Designer based in Germany. Specializing in AI-powered products, SaaS platforms, mobile applications, design systems, user research, prototyping and user-centered design. Experienced in creating scalable digital products and intuitive user experiences.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Yuliia Dudareva — UI/UX & Product Designer",
    description:
      "Portfolio, case studies, AI-powered products, SaaS and mobile apps.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuliia Dudareva — UI/UX & Product Designer",
  },
  keywords: [
    "Product Designer Germany",
    "Senior Product Designer",
    "UX Designer Germany",
    "UI Designer Germany",
    "UX/UI Designer",
    "AI Product Designer",
    "AI UX Designer",
    "Generative AI Design",
    "AI-powered Products",
    "Human-AI Interaction",
    "LLM Product Design",
    "Conversational AI Design",
    "Design Engineer",
    "Digital Product Designer",
    "SaaS Product Designer",
    "Mobile App Designer",
    "Design Systems",
    "User Experience Designer",
    "User Interface Designer",
    "Product Design Portfolio",
    "Figma Expert",
    "User Research",
    "Interaction Design",
    "UX Research",
    "Prototyping",
    "Product Strategy",
    "Claude AI",
    "Visual Studio Code",
    "Vibe coding",
    "AI-assisted design workflow",
    "Design Engineering",
    "AI-native Product Designer",
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="grain">
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
