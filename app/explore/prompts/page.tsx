"use client";
import { useMemo } from 'react';
import Link from 'next/link';
import { readyUseCases } from './_data';

export default function PromptLibraryPage() {
  // Ready-made use cases data comes from './_data'

  // Ensure use cases appear in the exact canonical order from the Getting Started tab
  const canonicalOrder = useMemo(() => ([
    'redesign-assignment',
    'lecture-notes',
    'case-study',
    'scaffold-activity',
    'in-class-activity',
    'feedback-rubric',
  ] as const), []);

  const sortedUseCases = useMemo<typeof readyUseCases>(() => {
    const orderIndex = new Map<string, number>(
      canonicalOrder.map((id, idx) => [id, idx])
    );
    return [...readyUseCases].sort((a, b) => {
      const ai = orderIndex.get(a.id) ?? Number.MAX_SAFE_INTEGER;
      const bi = orderIndex.get(b.id) ?? Number.MAX_SAFE_INTEGER;
      if (ai !== bi) return ai - bi;
      // Stable secondary sort by title for any non-canonical extras
      return a.title.localeCompare(b.title);
    });
  }, [canonicalOrder]);

  return (
    <div className="max-w-6xl mx-auto py-12 md:py-16 px-5">
      {/* Prompt Engineering Brief (container) */}
      <div className="mb-8 md:mb-10">
        <div className="max-w-4xl mx-auto rounded-2xl border border-red-600 bg-red-50 p-6 text-left shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-red-700">Prompt Engineering</h2>
          <p className="mt-3 text-base md:text-lg text-gray-800 leading-relaxed">
            Prompt engineering is how you write clear and contextual instructions for AI so the outputs are reliable for teaching. It is important to know because specificity, role clarity, course context, constraints, and integrity guidance improve results and reduce rework. We have curated the prompts below to reflect these standards based on research, so you can copy, adapt, and use them with confidence.
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-1 text-sm md:text-base text-gray-900">
            <li><span className="font-medium">Specific context</span>: discipline, course, topic, scope or duration.</li>
            <li><span className="font-medium">Role</span>: what the AI should act as.</li>
            <li><span className="font-medium">Clear objective</span>: the exact task or transformation.</li>
            <li><span className="font-medium">Learner profile</span>: student level and assumed prior knowledge.</li>
            <li><span className="font-medium">Constraints</span>: time, workload, data sources, and policies.</li>
            <li><span className="font-medium">Assessment hooks</span>: formative or summative, weight, rubric-ready criteria.</li>
            <li><span className="font-medium">Process evidence</span>: artifacts that make thinking visible (logs, drafts, notebooks).</li>
            <li><span className="font-medium">Structured output</span>: labeled sections and deliverables.</li>
            <li><span className="font-medium">Integrity and citation</span>: originality, sources, and transparency.</li>
            <li><span className="font-medium">Clarification step</span>: ask 2-3 questions first, then a 3 bullet summary.</li>
          </ul>
        </div>
      </div>
      {/* Header Section */}
      <header className="text-center mb-10 md:mb-14">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-red-700 mb-4">Prompt Library</h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
          Find ready-to-use AI prompts for all your teaching needs, from redesigning assignments to creating case studies and feedback rubrics. 
          Plus, share your own successful prompts with colleagues across the College of Science. 
          Each prompt is designed to help you integrate AI thoughtfully into your pedagogy while maintaining academic rigor.
        </p>
      </header>
      {/* Ready-Made Prompts Section */}
      <div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-red-700 mb-2">Ready-Made Prompts</h2>
          <p className="text-gray-600 text-sm">
            Ready-made prompts you can use as-is or adapt in minutes, structured, clear, and aligned to your learning goals.
          </p>
        </div>

        <div className="rounded-2xl border border-rose-100 bg-rose-50/70 p-5">
          <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {sortedUseCases.map((uc) => (
              <li key={uc.id} className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="px-6 py-6 space-y-5 h-full flex flex-col justify-between">
                  <div>
                    {/* Show only the use case title (styled in a Northeastern red tone) */}
                    <h3 className="text-base md:text-lg font-semibold text-red-700 tracking-tight">{uc.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-5">{uc.description}</p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/explore/prompts/${uc.id}`}
                      className="inline-flex items-center rounded-md bg-red-600 text-white px-3 py-2 text-xs font-medium shadow-sm hover:bg-red-700 transition-colors"
                    >
                      Open details
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
