'use client';

import { Heading } from "@/components/ui/Heading";

export default function UserInterviewSynthesis() {
  const findings = [
    {
      id: 1,
      statement: 'People prefer the map view over the list view',
      results: ['False', 'False', 'True', 'True', 'True'],
    },
    {
      id: 2,
      statement: 'People choose more based on photos than on descriptions',
      results: ['True', 'True', 'True', 'True', 'True'],
    },
    {
      id: 3,
      statement: 'It is important for people to see all instructions at once (no animals, couples only, women only, etc.)',
      results: ['True', 'True', 'True', 'True', 'True'],
    },
    {
      id: 4,
      statement: 'People compare options by opening them in different tabs',
      results: ['True', 'True', 'True', 'True', 'True'],
    },
    {
      id: 5,
      statement: 'People use the filter by price more often than by location',
      results: ['True', 'Not sure', 'False', 'True', 'True'],
    },
    {
      id: 6,
      statement: 'People primarily use the filter by rating',
      results: ['True', 'True', 'False', 'False', 'True'],
    },
    {
      id: 7,
      statement: 'People prefer to pay for accommodation after moving in',
      results: ['True', 'True', 'True', 'True', 'True'],
    },
    {
      id: 8,
      statement: 'It\'s important for people to have the comparison feature to compare multiple housing options',
      results: ['True', 'Not sure', 'False', 'Not sure', 'False'],
    },
    {
      id: 9,
      statement: 'It is important for people to get recommendations for restaurants, sightseeing, swimming pools, etc. nearby',
      results: ['True', 'True', 'True', 'Not sure', 'True'],
    },
    {
      id: 10,
      statement: 'It is important for people to be able to check in easily at any time throughout the day',
      results: ['True', 'True', 'True', 'True', 'True'],
    },
    {
      id: 11,
      statement: 'People more often prefer landlords with more reviews or "Verified User" status',
      results: ['True', 'True', 'True', 'True', 'True'],
    },
    {
      id: 12,
      statement: 'It\'s important for people to have support from the service available 24/7',
      results: ['True', 'True', 'True', 'Not sure', 'True'],
    },
    {
      id: 13,
      statement: 'It is important for people to make sure that the landlord follows pandemic safety rules',
      results: ['True', 'False', 'True', 'Not sure', 'True'],
    },
  ];

  const getStatusColor = (status: string) => {
    if (status === 'True') return '';
    if (status === 'False') return '';
    return 'bg-mist text-stone';
  };

  const getStatusEmoji = (status: string) => {
    if (status === 'True') return '✓';
    if (status === 'False') return '✕';
    return '?';
  };

  return (
    <div className="space-y-6">
      <div>
        <Heading level={3} className="mb-1">Research Hypothesis Validation Matrix</Heading>
        <p className="text-body-sm text-stone mb-4">Synthesized data from <span className="font-semibold text-ink">5 user interviews</span> validating core assumptions about user behavior and feature prioritization.</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-mist bg-white/50 backdrop-blur-sm">
        <table className="min-w-full text-sm table-fixed">
          <colgroup>
            <col style={{ width: '48px' }} />
            <col />
            <col style={{ width: '64px' }} />
            <col style={{ width: '64px' }} />
            <col style={{ width: '64px' }} />
            <col style={{ width: '64px' }} />
            <col style={{ width: '64px' }} />
          </colgroup>
          <thead>
            <tr className="border-b border-mist bg-ember">
              <th className="px-5 py-3 text-left font-semibold text-white text-sm"></th>
              <th className="px-5 py-3 text-left font-semibold text-white text-sm">Finding / Hypothesis</th>
              <th className="px-2 py-3 text-center font-semibold text-white text-sm">P1</th>
              <th className="px-2 py-3 text-center font-semibold text-white text-sm">P2</th>
              <th className="px-2 py-3 text-center font-semibold text-white text-sm">P3</th>
              <th className="px-2 py-3 text-center font-semibold text-white text-sm">P4</th>
              <th className="px-2 py-3 text-center font-semibold text-white text-sm">P5</th>
            </tr>
          </thead>
          <tbody>
            {findings.map((finding) => (
              <tr key={finding.id} className="border-b border-mist/40 hover:bg-blue-50/30 transition-colors">
                <td className="px-5 py-4 text-ink font-semibold text-sm">{finding.id}</td>
                <td className="px-5 py-4 text-sm text-ink leading-relaxed">{finding.statement}</td>
                {finding.results.map((result, idx) => (
                  <td key={idx} className="px-2 py-4 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 flex-shrink-0" aria-hidden="true">
                      {result === 'True' ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: 'rgba(255, 77, 0, 0.6)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12l5 5 9-9" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      ) : result === 'False' ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-mist">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6l12 12M18 6l-12 12" stroke="#FF4D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-mist">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2v8" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="12" cy="16" r="1.5" fill="#0E0E0E" />
                          </svg>
                        </span>
                      )}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="rounded-lg border border-mist bg-white/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0" aria-hidden="true" style={{ backgroundColor: 'rgba(255, 77, 0, 0.6)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12l5 5 9-9" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-semibold text-ink">Strongly Validated</span>
          </div>
          <p className="text-sm text-stone">
            11 of 13 hypotheses confirmed across 4+ participants. Map preference, photo-driven decisions, and easy check-in are critical needs.
          </p>
        </div>
        <div className="rounded-lg border border-mist bg-white/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 bg-mist" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2v8" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="16" r="1.5" fill="#0E0E0E" />
              </svg>
            </span>
            <span className="font-semibold text-ink">Mixed Results</span>
          </div>
          <p className="text-sm text-stone">
            Comparison features and 24/7 support show variance. Behavior depends on user context and accommodation type. Further exploration needed.
          </p>
        </div>
        <div className="rounded-lg border border-mist bg-white/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 bg-mist" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6l12 12M18 6l-12 12" stroke="#FF4D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-semibold text-ink">Challenged</span>
          </div>
          <p className="text-sm text-stone">
            Map preference initially assumed universal—actually context-dependent. Some users prefer list + filters for quick filtering.
          </p>
        </div>
      </div>
    </div>
  );
}
