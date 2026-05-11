export interface CaseStudySection {
  type: "text" | "image" | "image-pair" | "metrics" | "quote";
  heading?: string;
  body?: string;
  src?: string;
  alt?: string;
  pair?: [{ src: string; alt: string }, { src: string; alt: string }];
  metrics?: { label: string; value: string }[];
  quote?: string;
  attribution?: string;
}

export interface Project {
  slug:        string;
  title:       string;
  category:    string;
  year:        string;
  description: string;
  coverImage:  string;
  accentColor: string;   // per-project accent for case study hero
  tags:        string[];
  featured:    boolean;

  // Case study content
  problem:    string;
  process:    string;
  solution:   string;
  outcome:    string;
  sections:   CaseStudySection[];
}

export const projects: Project[] = [
  {
    slug:        "finvault",
    title:       "FinVault",
    category:    "Product Design",
    year:        "2024",
    description: "Redesigning a personal finance dashboard to reduce cognitive overload and increase daily active engagement by 40%.",
    coverImage:  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    accentColor: "#1A6BFF",
    tags:        ["Mobile App", "Finance", "iOS"],
    featured:    true,

    problem:  "Users found the existing dashboard overwhelming — 14 primary actions above the fold, no clear hierarchy, and a 67% drop-off rate within the first week.",
    process:  "I ran 18 user interviews, built a card-sorting exercise with 40 participants, and mapped emotional responses through diary studies. Insights shaped a complete information architecture overhaul and 4 iterative prototype rounds in Figma.",
    solution: "A three-tab structure anchored by a 'Today' view — one number, one goal, one action. Net worth is replaced by a progress ring. Secondary data lives behind intentional taps, not aggressive surface.",
    outcome:  "DAU increased 40% in the first 90 days post-launch. Session length grew from 1.2 min to 4.7 min. App Store rating moved from 3.1 to 4.6 stars.",

    sections: [
      {
        type: "text",
        heading: "The Problem Space",
        body: "FinVault had all the data. That was exactly the problem. Every metric the product team considered valuable was surfaced simultaneously, creating a dashboard that felt like a financial terminal rather than a personal companion. New users churned within a week — not because the product lacked value, but because they couldn't find it.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",
        alt: "FinVault original dashboard audit",
      },
      {
        type: "text",
        heading: "Research & Discovery",
        body: "Eighteen interviews, four diary study participants, a card sort with 40 users. The consistent signal: people don't want to manage money — they want to feel good about it. Success metrics shifted from data density to emotional confidence.",
      },
      {
        type: "metrics",
        metrics: [
          { value: "18", label: "User Interviews" },
          { value: "40", label: "Card Sort Participants" },
          { value: "4",  label: "Prototype Rounds" },
          { value: "6",  label: "Weeks Discovery" },
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80",
        alt: "FinVault redesigned Today view",
      },
      {
        type: "quote",
        quote: "I opened the app and for the first time I didn't feel anxious. I just saw my number and I knew I was on track.",
        attribution: "Beta user, post-launch interview",
      },
      {
        type: "metrics",
        heading: "Outcomes",
        metrics: [
          { value: "+40%", label: "Daily Active Users" },
          { value: "4.7m",  label: "Avg Session Length" },
          { value: "4.6★",  label: "App Store Rating" },
          { value: "-52%",  label: "Week-1 Churn" },
        ],
      },
    ],
  },
  {
    slug:        "arcflow",
    title:       "ArcFlow",
    category:    "UX Design",
    year:        "2023",
    description: "End-to-end UX for a project management tool built for creative agencies — from blank canvas to shipped product.",
    coverImage:  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80",
    accentColor: "#7C3AED",
    tags:        ["Web App", "SaaS", "Productivity"],
    featured:    true,

    problem:  "Creative agencies were forced to choose between tools built for developers (too rigid) or tools built for enterprises (too complex). ArcFlow needed to feel native to how creatives actually think.",
    process:  "Contextual inquiry at 6 agencies. Workflow mapping. A design sprint that produced 3 competing concepts. Progressive refinement over 12 weeks, shipping a beta to 200 users at week 8.",
    solution: "A canvas-first interface where projects live as visual boards. Tasks breathe — they have mood, context, attachments that surface inline. Time tracking is ambient, not interrogative.",
    outcome:  "Beta NPS of 72. 3 enterprise contracts signed before public launch. Featured in Product Hunt #2 product of the day.",

    sections: [
      {
        type: "text",
        heading: "Creative Work is Non-Linear",
        body: "Every project management tool we audited shared the same assumption: work is a list of tasks with owners and due dates. For creative teams, that's wrong. A campaign brief connects to a mood board, connects to a copywriter's draft, connects to a client note from three weeks ago. The interface had to reflect that reality.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1400&q=80",
        alt: "ArcFlow canvas interface",
      },
      {
        type: "metrics",
        metrics: [
          { value: "6",   label: "Agency Site Visits" },
          { value: "72",  label: "Beta NPS Score" },
          { value: "200", label: "Beta Users" },
          { value: "#2",  label: "Product Hunt" },
        ],
      },
      {
        type: "quote",
        quote: "This is the first tool that actually maps to how our studio thinks, not how a developer thinks we should work.",
        attribution: "Creative Director, agency beta user",
      },
    ],
  },
  {
    slug:        "luma-design-system",
    title:       "Luma Design System",
    category:    "Design Systems",
    year:        "2023",
    description: "Building a scalable, token-based design system across 4 product teams and 2 platforms.",
    coverImage:  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80",
    accentColor: "#059669",
    tags:        ["Design System", "Figma", "Tokens"],
    featured:    true,

    problem:  "Four product teams at a scale-up, two platforms, zero shared language. Components were rebuilt weekly. Brand drift was visible. Designers and engineers spent more time reconciling than shipping.",
    process:  "Audited 2,400 Figma frames. Ran a component inventory. Established a token taxonomy. Built in parallel with engineering using Style Dictionary. Shipped documentation as a living Notion site.",
    solution: "Luma: a three-tier token system (global → semantic → component), 80 documented components, a Figma library with 340 variants, and a contribution process that made adoption feel like a choice rather than a mandate.",
    outcome:  "Design-to-development handoff time dropped 60%. New feature velocity increased 35%. Design system NPS from internal teams: 81.",

    sections: [
      {
        type: "text",
        heading: "The Cost of Inconsistency",
        body: "Before Luma, a button existed in 14 variations across 4 codebases. Not 14 intentional variations — 14 drifted copies. Every new feature started with: 'wait, which button do we use?' The cost wasn't aesthetic. It was velocity, trust, and the quiet mental overhead that killed creative momentum.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1400&q=80",
        alt: "Luma design tokens structure",
      },
      {
        type: "metrics",
        metrics: [
          { value: "80",   label: "Components Documented" },
          { value: "340",  label: "Figma Variants" },
          { value: "-60%", label: "Handoff Time" },
          { value: "81",   label: "Internal NPS" },
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
