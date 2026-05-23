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
  // Original gigmit project (clone 1)
  {
    slug:        "registration-onboarding-flow",
    title:       "Registration & Onboarding Flow",
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
        body: "Redesigning the homepage taught me that **clarity and motivation go hand in hand**. When users instantly understand what’s offered and why it matters, they’re far more likely to take the next step. Improving sign-ups wasn’t about flashy visuals — it was about empathy, focus, and reducing friction at every click.",
        gap: 80,
      },
    ],
  },
  // Clone 2
  {
    slug:        "homepage-redesign",
    title:       "Homepage Redesign",
    category:    "UX & Product Design",
    year:        "2024",
    description: "gigmit is a digital platform connecting artists with promoters and venues, simplifying booking for live music events. As Product Designer & UX Researcher, I led a full redesign of the registration and onboarding flow to improve conversion and reduce drop-off.",
    coverImage:  "https://yu-dudareva.notion.site/image/attachment%3A04f85aff-9528-4dcc-a57f-50698d0f7441%3Ahomepage_cover_mobile.png?table=block&id=2955f7e8-db24-8012-9bda-e746ab8c5702&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
    accentColor: "#FF4D00",
    tags:        ["SaaS", "Web Design", "Mobile", "Landing Page"],
    featured:    false,
    client:      "gigmit.com",
    role:        "Senior Product Designer, UX Researcher",
    services:    "SaaS, Web Design, Mobile Design, Research",
    date:        "2024",
    heroImage:   "/images/gigmit/Projects_gigmit_Onboarding_Hero.png",
    imageSlider: [
      {
        src: "https://yu-dudareva.notion.site/image/attachment%3Aab44451a-e83d-47f3-a446-41d54ed37043%3Aimage.png?table=block&id=28f5f7e8-db24-80d0-ae3d-ec55b57012e3&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=2048&userId=&cache=v2",
        alt: "gigmit onboarding redesign overview",
        caption: "Redesign version — modern onboarding and registration flow.",
      },
    ],

    problem:  "The registration path was losing users early — onboarding completion was only 12.5% and 81.3% of users dropped off before the PRO trial offer.",
    process:  "I led research, flow simplification, and iterative UX design for registration, onboarding, and the PRO trial journey using traffic analysis, A/B testing, and mobile-first validation.",
    solution: "A lean, intent-driven onboarding funnel with deferred fields, progress guidance, clearer messaging, and a stronger PRO checkout path to reduce friction and improve conversion.",
    outcome:  "Onboarding completion rose to 30.9%, drop-off before the PRO offer fell by 14.3 points, checkout clicks increased 219%, and conversion grew from 0.66% to 2.08%.",

    sections: [],
  },
  // Clone 3
  {
    slug:        "saas-no-code-tool",
    title:       "SaaS no-code tool",
    category:    "UX & Product Design",
    year:        "2022",
    description: "gigmit is a digital platform connecting artists with promoters and venues, simplifying booking for live music events. As Product Designer & UX Researcher, I led a full redesign of the registration and onboarding flow to improve conversion and reduce drop-off.",
    coverImage:  "https://yu-dudareva.notion.site/image/attachment%3A5b4b201f-4e44-46c7-a73d-1794bdca2bb3%3ASurface_Pro_8_-_2.png?table=block&id=28f5f7e8-db24-8066-96fe-caf3b122322a&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=2048&userId=&cache=v2",
    accentColor: "#FF4D00",
    tags:        ["SaaS", "Responsive", "Web"],
    featured:    false,
    client:      "Any2info",
    role:        "UX/UI Designer",
    services:    "SaaS, Web, Design System, Redesign",
    date:        "2021",
    heroImage:   "/images/gigmit/Projects_gigmit_Onboarding_Hero.png",
    imageSlider: [],

    problem:  "The registration path was losing users early — onboarding completion was only 12.5% and 81.3% of users dropped off before the PRO trial offer.",
    process:  "I led research, flow simplification, and iterative UX design for registration, onboarding, and the PRO trial journey using traffic analysis, A/B testing, and mobile-first validation.",
    solution: "A lean, intent-driven onboarding funnel with deferred fields, progress guidance, clearer messaging, and a stronger PRO checkout path to reduce friction and improve conversion.",
    outcome:  "Onboarding completion rose to 30.9%, drop-off before the PRO offer fell by 14.3 points, checkout clicks increased 219%, and conversion grew from 0.66% to 2.08%.",

    sections: [],
  },
  // Clone 4
  {
    slug:        "ux-research-case-study",
    title:       "UX Research",
    category:    "UX Research",
    year:        "2022",
    description: "gigmit is a digital platform connecting artists with promoters and venues, simplifying booking for live music events. As Product Designer & UX Researcher, I led a full redesign of the registration and onboarding flow to improve conversion and reduce drop-off.",
    coverImage:  "https://yu-dudareva.notion.site/image/attachment%3A5b4b201f-4e44-46c7-a73d-1794bdca2bb3%3ASurface_Pro_8_-_2.png?table=block&id=28f5f7e8-db24-8066-96fe-caf3b122322a&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=2048&userId=&cache=v2",
    accentColor: "#FF4D00",
    tags:        ["Research", "User Research"],
    featured:    false,
    client:      "",
    role:        "UX Researcher",
    services:    "UX Research",
    date:        "2021",
    heroImage:   "/images/gigmit/Projects_gigmit_Onboarding_Hero.png",
    imageSlider: [],

    problem:  "The registration path was losing users early — onboarding completion was only 12.5% and 81.3% of users dropped off before the PRO trial offer.",
    process:  "I led research, flow simplification, and iterative UX design for registration, onboarding, and the PRO trial journey using traffic analysis, A/B testing, and mobile-first validation.",
    solution: "A lean, intent-driven onboarding funnel with deferred fields, progress guidance, clearer messaging, and a stronger PRO checkout path to reduce friction and improve conversion.",
    outcome:  "Onboarding completion rose to 30.9%, drop-off before the PRO offer fell by 14.3 points, checkout clicks increased 219%, and conversion grew from 0.66% to 2.08%.",

    sections: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
