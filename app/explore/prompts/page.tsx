export default function PromptLibraryPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Prompt Library</h1>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">Curated, faculty-tested prompt patterns you can adapt safely for teaching, assessment design, scaffolding, and feedback workflows.</p>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {["Lesson Outline", "Rubric Draft", "Concept Breakdown", "Misconception Detector", "Case Scenario", "Formative Quiz"].map(p => (
          <div key={p} className="p-4 rounded-lg border bg-white/70 backdrop-blur-sm shadow-sm">
            <h2 className="font-semibold text-gray-800 text-sm mb-1">{p}</h2>
            <p className="text-[11px] text-gray-600">Sample framework with role, objective, constraints, and output format.</p>
            <button className="mt-2 text-[11px] text-red-600 hover:underline">View Pattern</button>
          </div>
        ))}
      </div>
    </div>
  );
}
