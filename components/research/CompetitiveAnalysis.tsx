'use client';

export default function CompetitiveAnalysis() {
  const competitors = [
    {
      name: 'Cian.ru',
      avgTime: '9.21',
      deepOfVisit: '14.25',
      bounceRate: '32.53%',
      monthlyVisits: '29.40M',
      trafficSource: 'Russia',
    },
    {
      name: 'Realty.yandex.ru',
      avgTime: '5.24',
      deepOfVisit: '10.25',
      bounceRate: '38.00%',
      monthlyVisits: '3.70B',
      trafficSource: 'Russia',
    },
    {
      name: 'Realt.by',
      avgTime: '7.48',
      deepOfVisit: '15.46',
      bounceRate: '39.74%',
      monthlyVisits: '3.80M',
      trafficSource: 'Belarus',
    },
    {
      name: 'VRBO.com',
      avgTime: '6:56',
      deepOfVisit: '7.85',
      bounceRate: '38.98%',
      monthlyVisits: '51.60M',
      trafficSource: 'US',
    },
    {
      name: 'Homestay.com',
      avgTime: '2:38',
      deepOfVisit: '3.81',
      bounceRate: '49.64%',
      monthlyVisits: '267.50K',
      trafficSource: 'US',
    },
    {
      name: 'Hometogo.com',
      avgTime: '3:38',
      deepOfVisit: '4.89',
      bounceRate: '32.41%',
      monthlyVisits: '6.20M',
      trafficSource: 'US',
    },
  ];

  const features = [
    {
      feature: 'Default search view',
      cian: 'Cards',
      yandex: 'Cards',
      realty: 'Cards',
      vrbo: 'Cards, Map',
      homestay: 'Cards',
      hometogo: 'Cards, Map',
    },
    {
      feature: 'Search option on home page',
      cian: 'Airbnb form',
      yandex: 'Airbnb form',
      realty: 'Airbnb form',
      vrbo: 'Airbnb form',
      homestay: 'Airbnb form',
      hometogo: 'Airbnb form',
    },
    {
      feature: 'Display options for apartments',
      cian: 'Cards, Map',
      yandex: 'Cards, Map',
      realty: 'List, Cards, Map',
      vrbo: 'Cards, Map',
      homestay: 'Cards',
      hometogo: 'Cards, Map',
    },
    {
      feature: 'Filtering options',
      cian: 'Facets, presets',
      yandex: 'Facets, presets',
      realty: 'Presets, advanced search',
      vrbo: 'Facets, presets',
      homestay: 'Facets, presets',
      hometogo: 'Facets, presets',
    },
    {
      feature: 'Comparison of options',
      cian: 'Favorites, Hide',
      yandex: 'Compare, Favorites',
      realty: 'Favorites',
      vrbo: 'Favorites, Notes',
      homestay: 'Favorites',
      hometogo: 'Favorites, Share',
    },
    {
      feature: 'Payment at check-in',
      cian: 'No',
      yandex: 'No',
      realty: 'No',
      vrbo: 'No',
      homestay: 'Yes',
      hometogo: 'No',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Metrics Table */}
      <div className="space-y-6">
        <h3 className="font-display text-display-lg font-semibold text-ink">Website Analytics Benchmark</h3>
        <div className="overflow-x-auto rounded-lg border border-mist bg-white/50 backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-mist bg-ember">
                <th className="px-6 py-3 text-left font-semibold text-white">Service</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Avg. Time</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Depth</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Bounce Rate</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Monthly Visits</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, idx) => {
                const bounceValue = parseFloat(String(c.bounceRate).replace('%', '')) || 0;
                const bounceClass = bounceValue <= 35 ? 'text-green-600 font-medium' : 'text-stone';
                return (
                  <tr key={idx} className="border-b border-mist/40 hover:bg-blue-50/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-ink text-sm">{c.name}</td>
                    <td className="px-6 py-4 text-sm text-ink">{c.avgTime}</td>
                    <td className="px-6 py-4 text-sm text-ink">{c.deepOfVisit}</td>
                    <td className="px-6 py-4">
                      <span className={bounceClass}>{c.bounceRate}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-ink">{c.monthlyVisits}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-stone">
          <div>
            <span className="font-semibold text-ink">Key Insight:</span> Cian.ru dominates with highest monthly traffic (29.40M) and lowest bounce rate (32.53%)
          </div>
        </div>
      </div>

      {/* Features Comparison */}
      <div className="space-y-6">
        <h3 className="font-display text-display-lg font-semibold text-ink">Feature Comparison Across Platforms</h3>
        <div className="overflow-x-auto rounded-lg border border-mist bg-white/50 backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-mist bg-ember">
                  <th className="px-6 py-3 text-left font-semibold text-white min-w-48">Feature</th>
                  <th className="px-6 py-3 text-center font-semibold text-white text-sm">Cian.ru</th>
                  <th className="px-6 py-3 text-center font-semibold text-white text-sm">Yandex</th>
                  <th className="px-6 py-3 text-center font-semibold text-white text-sm">Realt.by</th>
                  <th className="px-6 py-3 text-center font-semibold text-white text-sm">VRBO</th>
                  <th className="px-6 py-3 text-center font-semibold text-white text-sm">Homestay</th>
                  <th className="px-6 py-3 text-center font-semibold text-white text-sm">Hometogo</th>
                </tr>
            </thead>
            <tbody>
              {features.map((f, idx) => (
                  <tr key={idx} className="border-b border-mist/40 hover:bg-white/3 transition-colors">
                    <td className="px-6 py-4 font-semibold text-ink text-sm">{f.feature}</td>
                    <td className="px-6 py-4 text-center text-sm text-ink">{f.cian}</td>
                    <td className="px-6 py-4 text-center text-sm text-ink">{f.yandex}</td>
                    <td className="px-6 py-4 text-center text-sm text-ink">{f.realty}</td>
                    <td className="px-6 py-4 text-center text-sm text-ink">{f.vrbo}</td>
                    <td className="px-6 py-4 text-center text-sm text-ink">{f.homestay}</td>
                    <td className="px-6 py-4 text-center text-sm text-ink">{f.hometogo}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 space-y-2 text-sm text-stone">
          <div>
            <span className="font-semibold text-ink">Differentiation Opportunity:</span> Only Homestay.com offers payment at check-in—a key user pain point
          </div>
          <div>
            <span className="font-semibold text-ink">Map Integration:</span> VRBO and Hometogo lead with map-based search, preferred by 4 of 5 interview participants
          </div>
        </div>
      </div>
    </div>
  );
}
