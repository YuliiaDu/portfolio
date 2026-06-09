export interface CaseStudySection {
  type: "text" | "image" | "image-pair" | "metrics" | "quote" | "comparison" | "beforeAfter" | "research-competitive-analysis" | "research-interviews" | "research-personas" | "research-journey-map" | "research-objectives" | "research-interview-insights";
  heading?: string;
  body?: string;
  src?: string;
  alt?: string;
  pair?: [{ src: string; alt: string }, { src: string; alt: string }];
  // beforeAfter section
  before?: string | string[];
  after?: string | string[];
  insights?: { id: string; body: string }[];
  altBefore?: string;
  altAfter?: string;
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
  objectives?: { title: string; body?: string }[];
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
  heroStats?: { value: string; label: string }[];
  highlightCards?: {
    number: string;
    title: string;
    body: string;
    image: string;
    alt: string;
  }[];
  whatIChangedHeading?: string;
  whatIChangedDescription?: string;

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
    coverImage:  "/images/gigmit/Projects_gigmit_Onboarding_Hero_Preview.png",
    accentColor: "#FF4D00",
    tags:        ["SaaS", "Conversion", "Onboarding", "Mobile"],
    featured:    false,
    client:      "gigmit.com",
    role:        "Senior Product Designer, UX Researcher",
    services:    "SaaS, Web Design, Mobile Design, Research",
    date:        "2022",
    heroImage:   "/images/gigmit/Projects_gigmit_Onboarding_Hero_Preview.png",
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
    heroStats: [
      { value: "+189%", label: "Onboarding completion" },
      { value: "+219%", label: "Users reaching checkout" },
      { value: "47% faster", label: "Time to checkout click" },
    ],

    sections: [
      {
        type: "research-objectives",
        heading: "Challenges",
        objectives: [
          { title: "Increase registrations", body: "Grow the number of users starting and completing the registration process" },
          { title: "Reduce friction", body: "Simplify the mobile-first flow by deferring non-essential fields and reducing cognitive load" },
          { title: "Reduce drop-off", body: "Lower abandonment before the PRO trial offer through clearer messaging and progress guidance" },
          { title: "Align with business goals", body: "Tighten the onboarding path to improve conversion from sign-up to trial and checkout" },
        ],
        gap: 80,
      },
      {
        type: "text",
        heading: "Process",
        body: "I led research and iterative design across two workstreams to reduce friction and improve conversion.<br/><br/>1. <strong>Registration & Onboarding</strong> — Analysed traffic sources and onboarding metrics, then streamlined the mobile-first flow with deferred fields, a progress indicator, and a simplified PRO trial step. Validated each iteration through A/B testing and behavioural data.<br/><br/>2. <strong>PRO Trial Page</strong> — Used heatmaps, session replays, and funnel analysis to identify drop-off points. Simplified the form, reworked visual hierarchy, and optimised CTAs — with a mobile-first approach throughout.",
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
        body: "Redesigning the homepage taught me that clarity and motivation go hand in hand. When users instantly understand what’s offered and why it matters, they’re far more likely to take the next step. Improving sign-ups wasn’t about flashy visuals — it was about empathy, focus, and reducing friction at every click.",
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
    coverImage:  "/images/gigmit/Projects_gigmit_Homepage_Hero_Preview.png",
    accentColor: "#FF4D00",
    tags:        ["SaaS", "Web Design", "Mobile", "Landing Page"],
    featured:    false,
    client:      "gigmit.com",
    role:        "Senior Product Designer, UX Researcher",
    services:    "SaaS, Web Design, Mobile Design, Research",
    date:        "2024",
    heroImage:   "/images/gigmit/Projects_gigmit_Homepage_Hero_Preview.png",
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

    heroStats: [
      { value: "+79%", label: "Visitors who started registration" },
      { value: "+108%", label: "Mobile conversion rate" },
      { value: "-10.6 pp", label: "Drop off" },
    ],

    highlightCards: [
      {
        number: "01",
        title: "Redesigned mobile homepage",
        body: "Clear user segmentation, simplified layout, and improved contrast and readability — with strong visual hierarchy and action-oriented CTAs.",
        image: "/images/gigmit/WID_Projects_gigmit_Homepage_1.png",
        alt: "gigmit mobile homepage redesign — after",
      },
      {
        number: "02",
        title: "Before: the original homepage",
        body: "Unclear user segmentation, overloaded layout, low readability, weak visual hierarchy, outdated visual style, and unfocused CTAs.",
        image: "/images/gigmit/WID_Projects_gigmit_Homepage_2.png",
        alt: "gigmit mobile homepage — before redesign",
      },
      {
        number: "03",
        title: "Desktop redesign",
        body: "Responsive desktop layout with clear value proposition, community-led messaging, testimonials, and structured sections for artists and promoters.",
        image: "/images/gigmit/WID_Projects_gigmit_Homepage_3.png",
        alt: "gigmit desktop homepage redesign screens",
      },
      {
        number: "04",
        title: "Validated by data",
        body: "The redesign significantly increased users reaching the registration stage. Conversion rate for account creation more than doubled compared to the previous version.",
        image: "/images/gigmit/WID_Projects_gigmit_Homepage_4.png",
        alt: "gigmit homepage redesign analytics results",
      },
    ],

    whatIChangedHeading: "Key redesign moments from gigmit homepage",
    whatIChangedDescription: "Key design decisions shaped by user research and a stronger community-driven value proposition — showcased through the redesigned homepage.",

    sections: [
      {
        type: "research-objectives",
        heading: "Challenges",
        objectives: [
          { title: "Increase registrations", body: "Increase the number of users starting the registration process" },
          { title: "Better Sign-Up experience", body: "Support improvements in the overall registration flow" },
          { title: "Mobile first", body: "Prioritize mobile usability and accessibility" },
          { title: "Brand & community growth", body: "Strengthen gigmit's branding and community-driven message" },
        ],
        gap: 80,
      },
      {
        type: "text",
        heading: "Process",
        body: "This project followed a structured approach to validate the market opportunity and improve the homepage design.<br/><br/>1. <strong>Pre-Launch Analysis</strong> reviewed traffic sources and user behaviour using heatmaps, identified friction points and drop-off areas, and analysed niche competitors.<br/><br/>2. <strong>Design & Content Strategy</strong> developed a value proposition centred on community, simplified homepage layout and visual hierarchy, added clear CTAs, applied design writing to refine copy, and ensured mobile-first accessibility.<br/><br/>3. <strong>Post-Launch Validation</strong> measured behaviour with heatmaps and analytics (Amplitude) to verify design impact and iterated where necessary.",
        gap: 0,
      },
      {
        type: "text",
        body: "",
      },
      {
        type: "comparison",
        heading: "Results",
        comparisons: [
          {
            groupLabel: "Mobile Users",
            title: "Visitors who started the registration process",
            before: "13.4%",
            after: "24%",
            label: "started registration",
            change: "+79%",
            changeType: "increase",
          },
          {
            groupLabel: "Mobile Users",
            title: "Overall mobile conversion rate (completed registration)",
            before: "3.86%",
            after: "8.02%",
            label: "conversion",
            change: "+108%",
            changeType: "increase",
          },
          {
            groupLabel: "Mobile Users",
            title: "Drop off",
            before: "86.62%",
            after: "76.03%",
            label: "drop-off",
            change: "-10.6 pp",
            changeType: "decrease",
          },
          {
            groupLabel: "All Users",
            title: "Overall conversion rate (completed registration)",
            before: "4.66%",
            after: "9.42%",
            label: "conversion",
            change: "+102%",
            changeType: "increase",
          },
        ],
        gap: 80,
        numberFontSize: "text-[2rem]",
      },
      {
        type: "text",
        heading: "What I learned",
        body: "Redesigning the homepage taught me that clarity and motivation go hand in hand. When users instantly understand what’s offered and why it matters, they’re far more likely to take the next step. Improving sign-ups wasn’t about flashy visuals — it was about empathy, focus, and reducing friction at every click.",
        gap: 80,
      },
    ],
  },
  // Clone 3
  {
    slug:        "saas-no-code-tool",
    title:       "SaaS no-code tool",
    category:    "UX & Product Design",
    year:        "2022",
    description: "SaaS no-code development tool for creating complex applications for business-specific processes. With Any2Info you can build completely customized apps to provide your customers and employees with the right information at the right time.",
    coverImage:  "/images/any2info/Projects_ANY2INFO_Hero_Preview.png",
    accentColor: "#FF4D00",
    tags:        ["SaaS", "Responsive", "Web"],
    featured:    false,
    client:      "Any2info",
    role:        "UX/UI Designer",
    services:    "SaaS, Web, Design System, Redesign",
    date:        "2021",
    heroImage:   "/images/any2info/Projects_ANY2INFO_Hero_Preview.png",
    imageSlider: [],

    problem:  "The registration path was losing users early — onboarding completion was only 12.5% and 81.3% of users dropped off before the PRO trial offer.",
    process:  "I led research, flow simplification, and iterative UX design for registration, onboarding, and the PRO trial journey using traffic analysis, A/B testing, and mobile-first validation.",
    solution: "A lean, intent-driven onboarding funnel with deferred fields, progress guidance, clearer messaging, and a stronger PRO checkout path to reduce friction and improve conversion.",
    outcome:  "Onboarding completion rose to 30.9%, drop-off before the PRO offer fell by 14.3 points, checkout clicks increased 219%, and conversion grew from 0.66% to 2.08%.",

    sections: [
      {
        type: "research-objectives",
        heading: "Challenges",
        objectives: [
          { title: "Evolve the design system", body: "Extend the existing design system to enable scalable, web-compatible components across all devices" },
          { title: "Reduce cognitive load", body: "Simplify complex desktop patterns and minimise visual noise to keep users focused on core tasks" },
          { title: "Optimise for responsive", body: "Adapt layouts and interactions for seamless cross-device performance and usability" },
          { title: "Clarify hierarchy", body: "Establish a clear visual hierarchy that guides users naturally through key workflows" },
        ],
        gap: 80,
      },
      {
        type: "text",
        heading: "Process",
        body: "The project followed a structured, research-driven approach to transform a complex desktop tool into a modern responsive experience.<br/><br/>1. <strong>Audit & Analysis</strong> reviewed the existing desktop interface to identify usability issues, visual inconsistencies, and simplification opportunities across the core workflows.<br/><br/>2. <strong>Design System Expansion</strong> refined and extended the component library to create modular, web-compatible patterns that maintained visual consistency across screen sizes.<br/><br/>3. <strong>Layout & Interaction Design</strong> adapted layouts and interaction patterns for responsive behaviour, ensuring a seamless experience from desktop to mobile.<br/><br/>4. <strong>Simplification & Focus</strong> reduced cognitive load by clarifying hierarchy, minimising visual noise, and emphasising core content for each user scenario.",
        gap: 80,
      },
      {
        type: "text",
        heading: "Result",
        body: "The redesigned interface improved clarity and responsiveness; the new component library enabled faster iteration and consistent cross-device behaviour. The redesign is displayed in the images and validated through user feedback.",
        gap: 80,
      },
      {
        type: "beforeAfter",
        heading: "Screenshots — before & after",
        before: [
          "/images/any2info/any2info_1.png",
          "/images/any2info/any2info_2.png",
        ],
        after: [
          "/images/any2info/any2info_3_1.png",
          "/images/any2info/any2info_4.png",
        ],
        altBefore: "Any2info before redesign",
        altAfter: "Any2info after redesign",
        gap: 80,
      },
      {
        type: "text",
        heading: "What I learned",
        body: "I learned how to adapt complex desktop interfaces into flexible, responsive web experiences while maintaining visual consistency and usability. The project strengthened my skills in scalable design systems, responsive layouts, and simplifying interfaces to reduce cognitive load.",
        gap: 80,
      },
    ],
  },
  // UX Research Case Study
  {
    slug:        "ux-research-case-study",
    title:       "Accommodation Platform Discovery Research",
    category:    "UX Research",
    year:        "2021",
    description: "The sharing economy has reshaped accommodation, dominated by Airbnb, though gaps remain in niche markets. A startup entered the space with an experience-led concept but lacked validated user insights. This research aimed to test core assumptions and guide product decisions with evidence.",
    coverImage:  "https://yu-dudareva.notion.site/image/attachment%3A5b4b201f-4e44-46c7-a73d-1794bdca2bb3%3ASurface_Pro_8_-_2.png?table=block&id=28f5f7e8-db24-8066-96fe-caf3b122322a&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=2048&userId=&cache=v2",
    accentColor: "#FF4D00",
    tags:        ["Discovery Research", "Qualitative Research", "Product Strategy"],
    featured:    false,
    client:      "Accommodation Platform Startup",
    role:        "Lead UX Researcher",
    services:    "Discovery Research, User Interviews, Competitive Analysis, Proto-Persona Development",
    date:        "2021",
    heroImage:   "/images/ux-research/UX_research_hero_image.png",
    imageSlider: [],

    problem:  "A newly funded accommodation booking startup needed to validate market demand, identify their primary user segments, and determine which platform features were essential for early-stage product-market fit. The founders had an intuition about the market but lacked empirical user and competitive data to guide product prioritization.",
    process:  "I designed and led a mixed-methods discovery research program combining desk research, competitor benchmarking, and qualitative interviews. Over 8 weeks, I conducted 5 in-depth user interviews, analyzed 6 direct competitors, synthesized findings into actionable insights, and developed a proto-persona framework to guide initial product strategy.",
    solution: "Research-backed product requirements document identifying core platform needs, user pain points with existing solutions, and a prioritized feature roadmap informed by user behavior patterns and market gaps.",
    outcome:  "Provided stakeholders with evidence-based product direction, reducing feature scope ambiguity by 65% and enabling the team to move forward with confident resource allocation. Proto-personas became the foundation for all subsequent design and development decisions.",

    heroStats: [
      { value: "5", label: "Participants interviewed" },
      { value: "6", label: "Competitors analyzed" },
      { value: "8", label: "Weeks total research timeline" },
      { value: "4", label: "Key user pain points identified" },
    ],

    sections: [
      {
        type: "research-objectives",
        heading: "Research Objectives",
        objectives: [
          { title: "Validate core assumptions", body: "Validate core assumptions about target audience identity, motivations, and behaviors in the accommodation booking space." },
          { title: "Understand pain points", body: "Understand existing user pain points with current solutions (Airbnb, Booking.com, direct booking)." },
          { title: "Must-have vs nice-to-have", body: "Identify must-have platform features from a user perspective versus nice-to-have functionality." },
          { title: "Opportunities & differentiation", body: "Uncover opportunities for differentiation and competitive advantage based on user needs and market gaps." },
        ],
        gap: 80,
      },
      {
        type: "text",
        heading: "Methodology & Approach",
        body: "This study employed a mixed-methods approach to validate the market opportunity and define product strategy for an accommodation booking platform.<br/><br/>1. <strong>Competitor benchmarking</strong> was conducted to analyze existing accommodation platforms, identify key UX patterns, and uncover market gaps.<br/><br/>2. <strong>Proto-personas development</strong> was based on initial assumptions to define target user segments and guide the research focus.<br/><br/>3. <strong>Qualitative user interviews</strong> were conducted to explore real user needs, motivations, and pain points in the accommodation booking process.<br/><br/>4. <strong>Synthesis and validation</strong> of findings were performed to refine proto-personas and translate insights into platform requirements and product strategy.",
        gap: 80,
      },
      {
        type: "research-competitive-analysis",
        heading: "Competitor benchmarking",
        gap: 80,
      },
      {
        type: "research-personas",
        heading: "Building proto-persona",
        gap: 80,
      },
      {
        type: "research-interview-insights",
        insights: [
          { id: "01", body: "Interviewee 5 had a case where she had to wait to check in from 8 am until 3pm, but this information was not given before paying for the reservation." },
          { id: "02", body: "Interviewee 2 had a case where the reservation included breakfast, but it ended up costing money and the kitchen could not be used at all." },
          { id: "03", body: "Interviewee 2 had a case where they asked to pay an additional fee (tourist tax) at check-in, which was not included in the price on the website." },
          { id: "04", body: "Interviewee 4 cares about both the map and the list. He is guided by the list because it is just in front of his eyes, but he cares about the location - that's why the map prevails over the list." },
        ],
        gap: 80,
      },
      {
        type: "research-interviews",
        gap: 80,
      },
      {
        type: "research-journey-map",
        heading: "User Journey Map — Accommodation Booking",
        gap: 80,
      },
      {
        type: "text",
        heading: "What I learned",
        body: "Even when a solution seems complete, there’s always room for improvement. Continuous learning and iteration are essential to creating meaningful and effective user experiences.",
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
