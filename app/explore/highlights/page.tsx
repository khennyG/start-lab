export default function FacultyHighlightsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Faculty Highlights</h1>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">Spotlight examples of thoughtful, ethical AI augmentation across disciplines. (Content coming soon.)</p>
      <div className="grid gap-6 md:grid-cols-3">
        {[1,2,3].map(i => (
          <div key={i} className="p-4 rounded-lg border bg-white/70 backdrop-blur-sm shadow-sm h-32 flex items-center justify-center text-xs text-gray-500">
            Coming Soon
          </div>
        ))}
      </div>
    </div>
  );
}
