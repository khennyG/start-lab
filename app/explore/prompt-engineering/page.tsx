export default function PromptEngineeringPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Prompt Engineering</h1>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">Learn structured approaches for designing reliable, explainable prompt patterns that support learning and academic integrity.</p>
      <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
        <li><strong>Define intent precisely.</strong> What transformation or output do you need?</li>
        <li><strong>Constrain format.</strong> Tables, lists, JSON, or bullet logic to reduce ambiguity.</li>
        <li><strong>Iterate with reflection.</strong> Ask the model what assumptions it used.</li>
        <li><strong>Red-team outputs.</strong> Probe for bias, hallucination, and overreach.</li>
        <li><strong>Document and version.</strong> Treat validated prompts like instructional assets.</li>
      </ol>
      <div className="mt-8 p-4 rounded-lg border bg-white/70 backdrop-blur-sm shadow-sm">
        <h2 className="font-semibold text-gray-800 mb-2 text-sm">Pattern Scaffold</h2>
        <pre className="text-[11px] bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto">ROLE | CONTEXT | TASK | STEPS | CONSTRAINTS | OUTPUT FORMAT</pre>
      </div>
    </div>
  );
}
