export default function ArtifactsPage() {
  const artifacts = [
    {
      name: 'Visual Review Prompt Builder',
      subtitle: 'Generate study visuals for any topic',
      link: 'https://claude.ai/artifacts/63dbd677-c750-4f07-af38-078c2af8d5b8',
    },
    {
      name: 'BioQuest Quizzer',
      subtitle: 'Practice questions for Biology',
      link: 'https://claude.ai/artifacts/5025721b-9d84-4134-a23e-66b9f30e94e4',
    },
    {
      name: 'MathQuest Quizzer',
      subtitle: 'Practice questions for Calculus I & II',
      link: 'https://claude.ai/artifacts/70cd6a35-de92-410f-990d-fc676d4f1811',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 pt-10 pb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-red-700">
          Artifacts
        </h1>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto text-base">
          AI-powered tools built with Claude. Click to explore.
        </p>
      </header>

      {/* Cards */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {artifacts.map((artifact) => (
            <a
              key={artifact.name}
              href={artifact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 will-change-transform border-l-4 border-l-[#CC0000] block px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{artifact.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{artifact.subtitle}</p>
                </div>
                <svg className="w-4 h-4 mt-1 shrink-0 text-gray-400 group-hover:text-red-600 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
