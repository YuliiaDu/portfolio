'use client';

export default function PersonaCards() {
  const personas = [
    {
      name: 'Oliver Berzins',
      avatar: '👨‍🏫',
      age: 32,
      maritalStatus: 'Married',
      children: '1 Son',
      occupation: 'Fitness Trainer',
      location: 'Latvia',
      techLevel: 'Middle',
      bio: "A fitness trainer who's passionate about Arduino and nature. Planning to move to Cambodia for new opportunities, but exploring accommodation options first.",
      causes: [
        'Vacation with family in another city',
        'Feel the local flavor',
        'Learn about positive and negative sides of location (financial, social issues)',
        'Find out about possible work opportunities',
      ],
      goals: [
        'Find suitable options for apartments and compare them',
        'Make a reservation of a favorite option',
        'Easily change an apartment if Oliver moves to another location',
        'Get support if Oliver experiences difficulties when looking for or reserving an apartment',
      ],
      coreNeeds: [
        'See liked options on the map',
        'View information directly on the map',
        'Filter by distance from the center',
        'Add options to favorites',
        'Save filter presets',
        'Set filters by price, date, rating, facilities',
        'View map of nearby infrastructure',
        'See other users\' reviews with real photos',
        'Ask questions to the landlord',
        'Pay for preferred option conveniently',
      ],
      risks: [
        'Lack of confidence in the service',
        'Lack of onboarding',
        'Fear of losing money',
      ],
      motivators: [
        'List of Top Options in chosen location',
        'Information about discounts, deals, limited offers',
        '"Verified Landlord" status',
        'High ratings from other users',
        'Possibility of payment after check-in',
        'Free cancellation policy',
      ],
      kpi: [
        'Measure user satisfaction with completed scenario using survey',
        'Measure number of cancellations and low ratings after arrival',
        'Measure customer service complaints and quality of interactions',
        'Measure actions from choosing liked option to paying for reservation',
      ],
    },
  ];

  const persona = personas[0];
  const initials = persona.name.split(' ').map((n) => n[0]).slice(0,2).join('').toUpperCase();

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 xl:gap-8">
        {/* Left Column - Persona Identity */}
        <div className="xl:col-span-1">
          <div className="rounded-2xl border border-mist bg-white/5 backdrop-blur-sm p-4 md:p-6 space-y-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-ember flex items-center justify-center text-canvas text-lg md:text-xl font-semibold mb-3">{initials}</div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-ink leading-tight">{persona.name}</h3>
              <p className="text-sm text-stone mt-1">{persona.occupation} · {persona.location}</p>
            </div>

            <div className="border-t border-mist/60 pt-4">
              <div className="hidden xl:flex flex-wrap gap-x-4 gap-y-2 text-xs">
                <span><span className="font-semibold text-stone uppercase">AGE</span> <span className="font-semibold text-ink">{persona.age}</span></span>
                <span><span className="font-semibold text-stone uppercase">STATUS</span> <span className="font-semibold text-ink">{persona.maritalStatus}</span></span>
                <span><span className="font-semibold text-stone uppercase">CHILDREN</span> <span className="font-semibold text-ink">{persona.children}</span></span>
                <span><span className="font-semibold text-stone uppercase">TECH LEVEL</span> <span className="font-semibold text-ink">{persona.techLevel}</span></span>
              </div>
              <div className="flex xl:hidden flex-col space-y-2">
                <div className="flex justify-between"><span className="font-semibold text-stone uppercase text-xs">AGE</span><span className="font-semibold text-ink text-sm">{persona.age}</span></div>
                <div className="flex justify-between"><span className="font-semibold text-stone uppercase text-xs">STATUS</span><span className="font-semibold text-ink text-sm">{persona.maritalStatus}</span></div>
                <div className="flex justify-between"><span className="font-semibold text-stone uppercase text-xs">CHILDREN</span><span className="font-semibold text-ink text-sm">{persona.children}</span></div>
                <div className="flex justify-between"><span className="font-semibold text-stone uppercase text-xs">TECH LEVEL</span><span className="font-semibold text-ink text-sm">{persona.techLevel}</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Columns - Persona Details */}
        <div className="xl:col-span-4 space-y-6">
          {/* Bio */}
            <div className="rounded-2xl border border-mist bg-white/5 backdrop-blur-sm p-4 md:p-6">
              <div className="space-y-2">
                <h4 className="font-display font-semibold text-ink">Biography</h4>
                <p className="text-body-sm text-stone">{persona.bio}</p>
              </div>
            </div>

          {/* Causes & Motivations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Causes */}
            <div className="rounded-xl border border-mist bg-white/50 backdrop-blur-sm p-4 md:p-6">
              <div className="space-y-2">
                <h4 className="font-display font-semibold text-ink">Causes</h4>
                <ul className="space-y-3">
                  {persona.causes.map((cause, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 flex-shrink-0" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="11" cy="11" r="8" stroke="#FF4D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M21 21l-4.35-4.35" stroke="#FF4D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-body-sm text-ink break-words">{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Goals */}
            <div className="rounded-xl border border-mist bg-white/50 backdrop-blur-sm p-4 md:p-6">
              <div className="space-y-2">
                <h4 className="font-display font-semibold text-ink">Goals</h4>
                <ul className="space-y-3">
                  {persona.goals.map((goal, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 flex-shrink-0" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="8" stroke="#FF4D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="12" r="3" fill="#FF4D00" />
                        </svg>
                      </span>
                      <span className="text-body-sm text-ink break-words">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Needs & Risks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Core Needs */}
            <div className="rounded-xl border border-mist bg-white/50 backdrop-blur-sm p-4 md:p-6">
              <div className="space-y-2">
                <h4 className="font-display font-semibold text-ink">Core Needs</h4>
                <ul className="space-y-2">
                  {persona.coreNeeds.map((need, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 flex-shrink-0" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2v8m0 4v4M4 12h16" stroke="#FF4D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-body-sm text-ink break-words">{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Risks */}
            <div className="rounded-xl border border-mist bg-white/50 backdrop-blur-sm p-4 md:p-6">
              <div className="space-y-2">
                <h4 className="font-display font-semibold text-ink">Risks & Barriers</h4>
                <ul className="space-y-3">
                  {persona.risks.map((risk, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 flex-shrink-0" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2v8" stroke="#FF4D00" strokeWidth="1.5" strokeLinecap="round" />
                          <circle cx="12" cy="16" r="1.5" fill="#FF4D00" />
                        </svg>
                      </span>
                      <span className="text-body-sm text-ink break-words">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Motivators & KPI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Motivators */}
            <div className="rounded-xl border border-mist bg-white/50 backdrop-blur-sm p-4 md:p-6">
              <div className="space-y-2">
                <h4 className="font-display font-semibold text-ink">Key Motivators</h4>
                <ul className="space-y-2">
                  {persona.motivators.map((motivator, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 flex-shrink-0" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2l2.5 8.5h7.5l-6 4.5 2.5 8.5-6-5.5-6 5.5 2.5-8.5-6-4.5h7.5L12 2z" stroke="#FF4D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-body-sm text-ink break-words">{motivator}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* KPI */}
            <div className="rounded-xl border border-mist bg-white/50 backdrop-blur-sm p-4 md:p-6">
              <div className="space-y-2">
                <h4 className="font-display font-semibold text-ink">Success Metrics (KPI)</h4>
                <ul className="space-y-2">
                  {persona.kpi.map((metric, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 flex-shrink-0" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12l5 5 9-9" stroke="#FF4D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-body-sm text-ink break-words">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Archetype Summary */}
      <div className="rounded-2xl border border-mist bg-white/5 backdrop-blur-sm p-6">
        <p className="text-body-lg text-ink max-w-4xl">
          <span className="font-semibold">Oliver represents the {persona.techLevel} tech user</span> who values convenience,
          trust, and local experience. He needs clear navigation, visual filtering, and transparent communication throughout the
          booking process. His primary concern is balancing feature richness with ease of use.
        </p>
      </div>
    </div>
  );
}
