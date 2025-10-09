export default function AnalyticsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Analytics & Insights</h1>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">Future space for tracking adoption, engagement, and learning outcome signals derived from activity with AI-enhanced workflows.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { label: 'Drafts Assisted', value: '—' },
          { label: 'Prompts Saved', value: '—' },
          { label: 'Rubrics Generated', value: '—' },
        ].map(k => (
          <div key={k.label} className="p-4 rounded-lg border bg-white/70 backdrop-blur-sm shadow-sm">
            <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">{k.label}</p>
            <p className="text-xl font-semibold text-gray-800">{k.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-xs text-gray-500 border-t pt-4">
        Dashboards will appear here once data collection modules are integrated.
      </div>
    </div>
  );
}
