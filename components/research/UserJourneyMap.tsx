"use client";

import { Heading } from "@/components/ui/Heading";

export default function UserJourneyMap() {
  const journeyPhases = [
    {
      phase: "Preparation",
      goal: "Realize the need and value of the resource",
      emotionLabel: "Excited",
      actions: ["Interaction with the system, introductory materials only"],
      touchpoints: ["Ad banners", "Articles and video reviews", "Search engine results"],
      problems: [
        "Interaction takes place outside the system",
        "High niche competition",
        "Preference for a better-known competitor",
      ],
      solutions: ["Use targeting ads", "Optimize taxonomy for search results", "Involve influencers"],
    },
    {
      phase: "Research",
      goal: "Narrow down the number of options to compare them",
      emotionLabel: "Thoughtful",
      actions: [
        "Entering directly with the system",
        "Viewing information about location and infrastructure",
        "Saving favorites to compare later",
      ],
      touchpoints: ["Service main landing", "Sign up form", "Facets and presets", "Sorting and favorites"],
      problems: [
        "Not all information displayed clearly (map overload)",
        "Popular options dominate results",
        "Filters are confusing and lack transparency",
      ],
      solutions: [
        "Use progressive information disclosure",
        "Display relevant results first with clear defaults",
        "Provide in-context feedback for search",
      ],
    },
    {
      phase: "Comparison",
      goal: "Find the best options in the desired location",
      emotionLabel: "Deliberate",
      actions: ["View map of nearby infrastructure", "View listings", "Manage favorites"],
      touchpoints: ["Favorites", "Reviews", "Sorting options"],
      problems: [
        "New landlords may lack data/filters (0 results)",
        "Reviews can be biased or insufficient",
        "Required information not always visible",
      ],
      solutions: [
        "Ask for feedback when no results are found",
        "Add 'Verified Landlord' trust tag",
        "Limit and simplify filters for clarity",
      ],
    },
    {
      phase: "Booking",
      goal: "Book the accommodation quickly and easily",
      emotionLabel: "Confident",
      actions: ["Add to favorites", "Add notes to options", "Proceed to reservation"],
      touchpoints: ["Rating", "Registration form", "Payment form"],
      problems: ["Registration flow too long", "Short reservation sessions", "Limited payment options"],
      solutions: [
        "Request only necessary user info",
        "Set a 10–15 minute reservation session",
        "Offer multiple payment methods and 'pay later' options",
      ],
    },
    {
      phase: "Payment",
      goal: "Pay in the most convenient way",
      emotionLabel: "Satisfied",
      actions: ["Select payment method and enter details"],
      touchpoints: ["Payment", "Email", "Wallet"],
      problems: ["Limited payment options", "Refunds not available before departure", "Payment failures"],
      solutions: ["Add popular payment providers", "Allow refund before departure", "Provide clear payment failure recovery"],
    },
    {
      phase: "Final stage",
      goal: "Successfully move into the chosen apartment",
      emotionLabel: "Delighted",
      actions: ["Receive booking confirmation and instructions"],
      touchpoints: ["Email", "Wallet"],
      problems: [
        "Payment confirmation takes time",
        "No online chat or host communication",
        "Late check-in and service issues",
      ],
      solutions: ["Proactive host communication", "Clear check-in instructions", "Refund & support policies"],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <Heading level={3} className="mb-2">User Journey Map — Accommodation Booking</Heading>
        <p className="text-body-md text-stone max-w-3xl">A condensed, professional journey map derived from research notes. Phases are laid out left → right; each column contains goals, emotion, actions, touchpoints, problems, and solutions rendered in the site design language.</p>
      </div>

      {/* Horizontal phases grid */}
      {/* Scroll indicator to show the grid is horizontally scrollable */}
      <div className="mb-3 flex items-center justify-start md:justify-center gap-3">
        <div className="hidden sm:flex items-center gap-3">
          <div className="relative w-36 h-2 rounded-full bg-white/5 overflow-hidden" aria-hidden>
            <div className="absolute left-0 top-0 h-2 w-12 bg-ember rounded-full animate-pulse" />
          </div>
        </div>
        <div className="flex sm:hidden items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M7 7L3 11L7 15" stroke="#C7C2BD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 7L21 11L17 15" stroke="#C7C2BD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="overflow-x-auto relative">
        <div className="min-w-[1200px] grid grid-cols-6 gap-6 pr-8">
          {journeyPhases.map((phase) => (
            <section key={phase.phase} className="bg-white/3 border border-mist rounded-2xl p-4">
              <header className="mb-3">
                <h4 className="font-display text-sm font-semibold text-ink">{phase.phase}</h4>
                <p className="text-xs text-stone mt-1">{phase.goal}</p>
              </header>

              <div className="space-y-3">
                {/* Emotion badge (lined orange) */}
                <div className="flex items-center gap-3">
                  <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <circle cx="14" cy="14" r="10" stroke="#FF4D00" strokeWidth="1.8" fill="transparent" />
                    <path d="M9 12c1 1.5 3 2 5 2s4-0.5 5-2" stroke="#FF4D00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-stone">{phase.emotionLabel}</span>
                </div>

                {/* Actions (sticky notes) */}
                <div>
                  <h5 className="text-xs font-semibold text-stone uppercase tracking-wide mb-2">Actions</h5>
                  <div className="space-y-2">
                    {phase.actions.map((a, i) => (
                      <div key={i} className="rounded-lg px-3 py-2 bg-ember/10 border border-mist text-sm text-ink">{a}</div>
                    ))}
                  </div>
                </div>

                {/* Touchpoints */}
                <div>
                  <h5 className="text-xs font-semibold text-stone uppercase tracking-wide mb-2">Touchpoints</h5>
                  <div className="flex flex-wrap gap-2">
                    {phase.touchpoints.map((t, i) => (
                      <div key={i} className="text-xs px-2 py-1 bg-white/5 border border-mist rounded text-stone">{t}</div>
                    ))}
                  </div>
                </div>

                {/* Problems */}
                <div>
                  <h5 className="text-xs font-semibold text-stone uppercase tracking-wide mb-2">Problems</h5>
                  <div className="space-y-2">
                    {phase.problems.map((p, i) => (
                      <div key={i} className="rounded-lg px-3 py-2 bg-white/5 border-l-4 border-ember text-sm text-ink">{p}</div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <h5 className="text-xs font-semibold text-stone uppercase tracking-wide mb-2">Solutions</h5>
                  <div className="space-y-2">
                    {phase.solutions.map((s, i) => (
                      <div key={i} className="rounded px-3 py-2 bg-mist text-sm text-ink border border-mist">{s}</div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        {/* Right-side visual cue: gradient fade + chevron to imply continuation */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 md:w-36">
          <div className="h-full w-full bg-gradient-to-l from-white/8 to-transparent" />
        </div>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-90">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M10 6L16 12L10 18" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Dark insights strip */}
      <aside className="rounded-2xl bg-ink text-canvas p-6">
        <h4 className="font-semibold mb-3">Journey Insights (from research)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p><strong>Emotion arc:</strong> Confidence peaks during research & comparison, dips at payment, rebounds post-confirmation. Booking and payment are critical friction points.</p>
            <p><strong>Information overload:</strong> Early phases suffer from too many filters; users need progressive disclosure and smarter defaults.</p>
          </div>
          <div className="space-y-2">
            <p><strong>Trust signals:</strong> "Verified Landlord", clear reviews, and transparent policies drive decisions in Comparison and Booking.</p>
            <p><strong>Post-booking gap:</strong> Final stage needs proactive host communication and check-in support — an opportunity to differentiate.</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
