export interface CaseStudySection {
  type: "text" | "image" | "image-pair" | "metrics" | "quote" | "comparison";
  heading?: string;
  body?: string;
  src?: string;
  alt?: string;
  pair?: [{ src: string; alt: string }, { src: string; alt: string }];
  metrics?: { label: string; value: string }[];
  quote?: string;
  attribution?: string;
  comparisons?: {
    groupLabel: string;           // "Registrations" | "Subscriptions"
    title: string;
    before: string;
    after: string;
    label: string;                // "completion" | "drop-off" | "reached checkout" | "conversion"
    change: string;
    changeType: "increase" | "decrease";
  }[];
  gap?: number;
  numberFontSize?: string;
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
  imageSlider?: { src: string; alt: string; caption?: string }[];
  heroImage?:  string;
  client?:     string;
  role?:       string;
  services?:   string;
  date?:       string;

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
  {
    slug:        "gigmit-registration-onboarding",
    title:       "gigmit Registration & Onboarding",
    category:    "UX & Product Design",
    year:        "2022",
    description: "gigmit is a digital platform connecting artists with promoters and venues, simplifying booking for live music events. As Product Designer & UX Researcher, I led a full redesign of the registration and onboarding flow to improve conversion and reduce drop-off.",
    coverImage:  "https://yu-dudareva.notion.site/image/attachment%3A5b4b201f-4e44-46c7-a73d-1794bdca2bb3%3ASurface_Pro_8_-_2.png?table=block&id=28f5f7e8-db24-8066-96fe-caf3b122322a&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=2048&userId=&cache=v2",
    accentColor: "#FF4D00",
    tags:        ["SaaS", "Conversion", "Onboarding", "Mobile"],
    featured:    false,
    client:      "gigmit.com",
    role:        "Senior Product Designer, UX Researcher",
    services:    "SaaS, Web Design, Mobile Design, Research",
    date:        "2022",
    heroImage:   "/images/gigmit/Projects_gigmit_Onboarding_Hero.png",
    imageSlider: [
      {
        src: "https://yu-dudareva.notion.site/image/attachment%3Aab44451a-e83d-47f3-a446-41d54ed37043%3Aimage.png?table=block&id=28f5f7e8-db24-80d0-ae3d-ec55b57012e3&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=2048&userId=&cache=v2",
        alt: "gigmit onboarding redesign overview",
        caption: "Redesign version — modern onboarding and registration flow.",
      },
      {
        src: "https://yu-dudareva.notion.site/image/attachment%3A9a2a04de-da47-47e4-a991-83fdda6a4d45%3Aimage.png?table=block&id=28f5f7e8-db24-8019-8efd-e71f12eeb051&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=2048&userId=&cache=v2",
        alt: "gigmit mobile-first onboarding screens",
        caption: "Mobile-first registration screens designed for fast completion.",
      },
      {
        src: "https://yu-dudareva.notion.site/image/attachment%3Af8d93d8a-84f7-45c6-96e2-d5ce341b9c87%3Apro_old_vs_new_2.png?table=block&id=28f5f7e8-db24-80b1-a04c-e9b33ceb9f8d&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=1530&userId=&cache=v2",
        alt: "gigmit PRO trial old vs new comparison",
        caption: "PRO trial redesign — before and after the conversion-focused refresh.",
      },
      {
        src: "https://yu-dudareva.notion.site/image/attachment%3A80561e31-5f60-4c7f-861e-b04d7739bad7%3Aold1.png?table=block&id=28f5f7e8-db24-802c-9cbf-e2906749c2dd&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=490&userId=&cache=v2",
        alt: "gigmit old onboarding design 1",
        caption: "Earlier onboarding version before the flow simplification.",
      },
      {
        src: "https://yu-dudareva.notion.site/image/attachment%3A01e4cb19-46eb-4eda-bf42-30756e9f13ab%3Aold2.png?table=block&id=28f5f7e8-db24-80b7-b17b-e6d17d9dd26b&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=490&userId=&cache=v2",
        alt: "gigmit old onboarding design 2",
        caption: "Original onboarding flow with more friction and cognitive load.",
      },
      {
        src: "https://yu-dudareva.notion.site/image/attachment%3Af2926b57-b972-4c5b-8fb4-cb5b2cdc5bd3%3Aold3.png?table=block&id=28f5f7e8-db24-80c1-94d4-cf0a4b47c4c4&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=490&userId=&cache=v2",
        alt: "gigmit old onboarding design 3",
        caption: "Previous design screens used before the onboarding refresh.",
      },
      {
        src: "https://yu-dudareva.notion.site/image/attachment%3Ad54250cf-9f2c-484b-af59-4c2f455b2352%3Aold4.png?table=block&id=28f5f7e8-db24-808c-a72d-deca3e4ba054&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=490&userId=&cache=v2",
        alt: "gigmit old onboarding design 4",
        caption: "Previous registration screens that highlighted the need for simplification.",
      },
    ],

    problem:  "The registration path was losing users early — onboarding completion was only 12.5% and 81.3% of users dropped off before the PRO trial offer.",
    process:  "I led research, flow simplification, and iterative UX design for registration, onboarding, and the PRO trial journey using traffic analysis, A/B testing, and mobile-first validation.",
    solution: "A lean, intent-driven onboarding funnel with deferred fields, progress guidance, clearer messaging, and a stronger PRO checkout path to reduce friction and improve conversion.",
    outcome:  "Onboarding completion rose to 30.9%, drop-off before the PRO offer fell by 14.3 points, checkout clicks increased 219%, and conversion grew from 0.66% to 2.08%.",

    sections: [
      {
        type: "text",
        heading: "The challenge",
        body: "gigmit's artist onboarding experience was friction-heavy and misaligned with conversion goals. The flow needed to work harder for mobile traffic, reduce unnecessary fields, and help users understand value before the PRO trial step.",
        gap: 80,
      },
      {
        type: "text",
        heading: "Research & discovery",
        body: "We analyzed traffic sources, onboarding metrics, device behavior, and form field relevance. That work revealed the greatest opportunities in mobile friction, unclear intent, and a confusing path into the PRO trial.",
      },
      {
        type: "text",
        body: "",
      },
      {
        type: "comparison",
        heading: "Results: New Registrations & New Subscriptions",
        comparisons: [
          // Row 1 — Registrations
          {
            groupLabel: "Registrations",
            title: "Onboarding Completion Rate",
            before: "12.5%",
            after: "30.9%",
            label: "completion",
            change: "+18.4 pp",
            changeType: "increase",
          },
          {
            groupLabel: "Registrations",
            title: "Drop-off Before Pro Trial",
            before: "81.3%",
            after: "67.0%",
            label: "drop-off",
            change: "-14.3 pp",
            changeType: "decrease",
          },
          // Row 2 — Subscriptions
          {
            groupLabel: "Subscriptions",
            title: "Reached Checkout",
            before: "7.3%",
            after: "23.3%",
            label: "reached checkout",
            change: "+219%",
            changeType: "increase",
          },
          {
            groupLabel: "Subscriptions",
            title: "Conversion Rate",
            before: "0.66%",
            after: "2.08%",
            label: "conversion",
            change: "+217%",
            changeType: "increase",
          },
        ],
        gap: 80,
        numberFontSize: "text-[2rem]",
      },
      {
        type: "text",
        heading: "What I learned",
        body: "Onboarding is more than a starting point — it's a moment to build trust, deliver value, and set users up for success. Small changes in clarity, flow, and motivation can have outsized impact on engagement.",
        gap: 80,
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
