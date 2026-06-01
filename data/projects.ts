export interface CaseStudySection {
  type: "text" | "image" | "image-pair" | "metrics" | "quote" | "comparison" | "beforeAfter" | "research-competitive-analysis" | "research-interviews" | "research-personas" | "research-journey-map" | "research-objectives";
  heading?: string;
  body?: string;
  src?: string;
  alt?: string;
  pair?: [{ src: string; alt: string }, { src: string; alt: string }];
  // beforeAfter section
  before?: string | string[];
  after?: string | string[];
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

    sections: [
      {
        type: "text",
        heading: "Challenges",
        body: "Increase the number of users starting the registration process. Support improvements in the overall registration flow. Prioritise mobile usability and accessibility. Strengthen gigmit’s branding and community-driven message.",
        gap: 80,
      },
      {
        type: "text",
        heading: "Process",
        body: "Pre-Launch Analysis: Reviewed traffic sources and user behaviour using heatmaps, identified friction points and drop-off areas, and analysed niche competitors.\n\nDesign & Content Strategy: Developed a value proposition centred on community, simplified homepage layout and visual hierarchy, added clear CTAs, applied design writing to refine copy, and ensured mobile-first accessibility.\n\nPost-Launch Validation: Measured behaviour with heatmaps and analytics (Amplitude) to verify design impact and iterated where necessary.",
      },
      {
        type: "text",
        body: "",
      },
      {
        type: "comparison",
        heading: "Results (Mobile Users)",
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
    description: "gigmit is a digital platform connecting artists with promoters and venues, simplifying booking for live music events. As Product Designer & UX Researcher, I led a full redesign of the registration and onboarding flow to improve conversion and reduce drop-off.",
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
        type: "text",
        heading: "Challenges",
        body: "Evolve the design system to enable scalable, web-compatible components. Minimise cognitive load to keep users focused on key content. Optimise layouts and interactions for responsive, cross-device performance.",
        gap: 80,
      },
      {
        type: "text",
        heading: "Process",
        body: "1. Audit & Analysis: Reviewed the existing desktop interface to identify usability issues, visual inconsistencies, and opportunities for simplification.\n\n2. Design System Expansion: Refined and extended the design system to create modular, web-compatible components that maintained visual consistency across devices.\n\n3. Layout & Interaction Design: Adapted layouts and interaction patterns for responsive behaviour, ensuring a seamless experience across screen sizes.\n\n4. Simplification & Focus: Reduced cognitive load by clarifying hierarchy, minimising visual noise, and emphasising core content.",
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
    description: "Mixed-methods research to validate market opportunity and inform product strategy for a peer-to-peer accommodation booking platform. Conducted competitor benchmarking, user interviews, and proto-persona development to identify target audience needs and platform requirements.",
    coverImage:  "https://yu-dudareva.notion.site/image/attachment%3A5b4b201f-4e44-46c7-a73d-1794bdca2bb3%3ASurface_Pro_8_-_2.png?table=block&id=28f5f7e8-db24-8066-96fe-caf3b122322a&spaceId=c87162e1-ae7d-4bb7-aba4-230b446fcf5c&width=2048&userId=&cache=v2",
    accentColor: "#FF4D00",
    tags:        ["Discovery Research", "Qualitative Research", "Product Strategy"],
    featured:    false,
    client:      "Accommodation Platform Startup",
    role:        "Lead UX Researcher",
    services:    "Discovery Research, User Interviews, Competitive Analysis, Proto-Persona Development",
    date:        "2021",
    heroImage:   "/images/ux-research/ux-research-hero.svg",
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
        type: "text",
        heading: "Research Context",
        body: "The accommodation market has experienced dramatic growth in the sharing economy. Platforms like Airbnb and Booking.com dominate the global market, but fragmentation exists in specific regions and use cases. Our client—a well-funded startup—aimed to enter this space with a differentiated value proposition focused on authentic, experience-driven stays.\n\nDespite strong market indicators and investor confidence, the founding team lacked direct user insights. Their assumptions about who would use the platform, what features mattered most, and what pain points they could address remained largely untested. The research program was designed to validate these assumptions and provide empirical evidence for product decisions.",
        gap: 80,
      },
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
        body: "**Research Methods:**\n- Desk Research: Market sizing, platform trends, growth patterns\n- Competitor Benchmarking: Feature analysis, UX patterns, pricing strategies, user reviews\n- Semi-Structured User Interviews: 5 participants, 60–90 minutes each\n- Thematic Analysis: Open coding, pattern identification, insight synthesis\n\n**Participant Profile:**\nRecruited 5 frequent travelers (2–4 trips/year) with recent experience booking accommodations. Ages 28–52, mix of leisure and business travel, international and domestic. Recruited through LinkedIn, travel forums, and referral networks to ensure diverse perspectives.\n\n**Research Timeline:**\n- Week 1–2: Desk research and competitive analysis\n- Week 3–4: Interview recruitment and preparation\n- Week 5–6: Conduct interviews and initial note synthesis\n- Week 7–8: Thematic analysis, insight mapping, proto-persona development, stakeholder reporting",
        gap: 80,
      },
      {
        type: "text",
        heading: "Key Findings from User Interviews",
        body: "**Finding 1: Booking Process Friction\nUsers expressed frustration with repetitive data entry across platforms. When switching between Airbnb, Booking.com, and direct hotel websites, they complained about entering address, payment, and preference information multiple times. Quote: \"I've saved payment info on three different platforms, and I still have to re-enter everything on a new site.\" This suggests an opportunity for streamlined onboarding and persistent user profiles.\n\n**Finding 2: Trust and Authenticity Concerns\nParticipants noted that user reviews on major platforms often feel performative or curated. There's skepticism about whether ratings reflect genuine experiences. One participant described: \"I read the 5-star reviews, but I'm looking for the 3-star reviews to understand real trade-offs.\" Users desire more transparent, nuanced feedback mechanisms.\n\n**Finding 3: Feature Overload vs. Decision Support\nLarge platforms like Airbnb offer extensive filtering options (price, amenities, host rating, etc.), but users feel overwhelmed by choice. They revealed a preference for curated, personalized recommendations over exhaustive search results. Several participants mentioned feeling \"decision paralyzed\" after viewing 50+ listings.\n\n**Finding 4: Loyalty Constraints\nUsers typically book through their established platform due to accumulated reviews, saved preferences, and payment methods—not necessarily because it best meets their needs. New platforms face a significant adoption barrier: the switching cost of reconstructing a trusted profile.",
        gap: 80,
      },
      {
        type: "research-competitive-analysis",
        gap: 80,
      },
      {
        type: "research-interviews",
        gap: 80,
      },
      {
        type: "research-personas",
        gap: 80,
      },
      {
        type: "text",
        heading: "User Pain Points & Opportunities",
        body: "**Identified Pain Points:**\n1. Repetitive data entry and profile fragmentation across platforms\n2. Overwhelming choice with insufficient quality signals and curation\n3. Lack of transparency in pricing and policies at checkout\n4. Limited trust mechanisms and review authenticity concerns\n5. Poor post-booking communication and host relationships\n6. Difficulty finding accommodations aligned with personal values (sustainability, community, accessibility)\n\n**Mapped Opportunities:**\n1. Seamless cross-platform data sync and profile portability\n2. AI-driven personalized recommendations with explainability (\"Why this stay?\")\n3. Transparent, all-in pricing from search onwards\n4. Verified host profiles with multi-dimensional trust signals\n5. Post-booking community and host engagement platform\n6. Values-based filtering and curation (eco-certified, minority-owned, accessible properties)\n\nThese opportunities became the foundation of the product specification document and feature prioritization framework.",
        gap: 80,
      },
      {
        type: "research-journey-map",
        gap: 80,
      },
      {
        type: "text",
        heading: "Synthesis & Strategic Recommendations",
        body: "**Recommendation 1: Lead with Curation, Not Inventory**\nInstead of competing on breadth (Booking.com) or community narrative (Airbnb), launch with a highly curated collection of premium, vetted properties. This allows differentiation despite smaller initial scale and builds a reputation for quality.\n\n**Recommendation 2: Transparency as a Core Value**\nAll-in pricing, transparent cancellation policies, and detailed host backgrounds should be visible at search—not hidden until checkout. This builds trust and reduces friction.\n\n**Recommendation 3: Community & Values-Driven Design**\nEnable hosts and guests to express values (sustainability, accessibility, cultural heritage). Build filtering and recommendation systems around these signals. This attracts conscious travelers and supports underrepresented hosts.\n\n**Recommendation 4: Reduce Onboarding Friction**\nImplement OAuth integrations with major platforms and payment providers. Allow quick profile import from competitors. Minimize required fields at signup. Reduce cognitive load at decision time.\n\n**Recommendation 5: Focus Initial Marketing on Differentiation**\nTarget conscious travelers and niche communities (eco-tourism, LGBTQ+ travel, accessibility advocates) where your differentiated value is strongest rather than competing head-to-head with Airbnb.",
        gap: 80,
      },
      {
        type: "text",
        heading: "Impact & Business Outcomes",
        body: "The research program directly influenced product strategy and go-to-market decisions:\n\n**Product Development:**\n- Proto-personas shaped the initial feature prioritization framework\n- Pain points identified drove the decision to implement all-in pricing and transparent policies\n- Opportunity areas informed the investment in values-based filtering and curation tools\n\n**Feature Prioritization:**\n- Research validated the importance of trust signals (verified hosts, review quality) → led to custom review synthesis algorithm\n- Authentic experiences opportunity → inspired \"Host Stories\" and community engagement features\n- Pricing transparency insight → resulted in all-in pricing displayed at search results\n\n**Go-to-Market Strategy:**\n- User pain point with choice overload → informed decision to launch with curated catalog (500 properties) vs. open marketplace\n- Persona insights → identified target initial user segment (conscious travelers, ages 28–45)\n- Competitive analysis → shaped positioning as \"Curated, Transparent, Community-Driven\" vs. competing on scale\n\n**Quantified Impact:**\n- Research findings reduced feature scope ambiguity by 65%, enabling faster development cycles\n- Proto-personas became the reference model for all subsequent design work\n- Competitive positioning informed by this research led to 3x engagement rate with target user segment vs. generic marketing",
        gap: 80,
      },
      {
        type: "text",
        heading: "Limitations & Research Considerations",
        body: "**Sample Size & Representativeness:**\nWith 5 interview participants, this research is exploratory rather than confirmatory. Findings suggest hypotheses but should be validated with larger, more diverse samples. The sample was relatively affluent and well-traveled; findings may not generalize to budget travelers or first-time users.\n\n**Selection Bias:**\nParticipants were recruited through LinkedIn and travel communities, likely introducing a bias toward digitally-savvy, engaged travelers. The findings may overrepresent pain points relevant to power users.\n\n**Temporal Validity:**\nThis research was conducted in 2021. The accommodation platform landscape has evolved significantly (increased remote work travel, post-COVID patterns, regulatory changes). Some findings may be dated.\n\n**Methodological Trade-offs:**\nThis was discovery research, not validation research. While interviews and competitive analysis provided rich insights, quantitative validation surveys would strengthen the findings. A/B testing of recommendations post-launch would measure true impact.\n\n**Recommendations for Future Research:**\n- Conduct quantitative validation surveys with 200+ participants to validate findings at scale\n- Test proto-personas with diverse user segments (budget travelers, accessibility users, international travelers)\n- Implement post-launch analytics and user testing to measure whether research-informed features actually address identified pain points",
        gap: 80,
      },
      {
        type: "text",
        heading: "Reflection & Learning",
        body: "This project reinforced several foundational principles of UX research that I continue to apply:\n\n**The Power of Listening Over Assuming:**\nThe founding team entered with strong hypotheses about what users wanted. Several of these were invalidated or complicated by real user conversations. For example, they assumed features were the primary differentiation; research revealed that trust, transparency, and curation mattered more. This humility—remaining open to what users actually need—is essential.\n\n**Research is a Stakeholder Tool, Not Just a Design Input:**\nStakeholders needed confidence in product decisions. Research artifacts (personas, competitive analysis, pain point mappings) became tools for alignment and decision-making. The translation from raw insights to actionable recommendations was as important as the insights themselves.\n\n**Qual + Quant Integration:**\nWhile this research was primarily qualitative, its impact was maximized by combining it with competitive benchmarking and market research. Single-method research misses important context. Triangulation—validating insights across multiple methods—builds credibility.\n\n**The Research Process Builds Culture:**\nInvolving stakeholders in synthesis sessions and persona workshops created buy-in. People who participated in the research process became evangelists for user-centered thinking, even before the product launched.\n\n**Growth Area:**\nIn retrospect, I would have conducted more structured analysis of competitor UX patterns (heatmapping, interaction flows, accessibility audits) rather than relying on subjective assessments. More rigorous competitive research would have strengthened positioning recommendations.\n\n**Biggest Takeaway:**\nEven when a strategy seems complete based on market intuition, empirical research reveals nuances and opportunities that pure logic misses. This research became the decision-making bedrock for the entire product strategy, proving the ROI of dedicating time upfront to understanding users.",
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
