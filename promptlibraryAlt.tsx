"use client"

import React, { useEffect, useMemo, useRef, useState } from 'react'

// Minimal inline SVG icons to avoid extra deps
function IconSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-3.5-3.5" />
    </svg>
  )
}
function IconCopy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}
function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  )
}
function IconFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 3H2l8 9v7l4 2v-9Z" />
    </svg>
  )
}
// (Removed IconUser; no longer displaying contributor info)

export default function PromptLibraryAltPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [activePrompt, setActivePrompt] = useState<{
    id: number
    title: string
    category: string
    contributor: string
    prompt: string
  } | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const categories = [
    'All',
    'Nursing',
    'Public Health',
    'Pharmacy',
    'Health Policy',
    'Clinical Education',
    'Research',
    'Patient Communication',
  ]

  const prompts = [
    {
      id: 1,
      title: 'Act as a Nursing Clinical Educator',
      category: 'Nursing',
      contributor: 'Faculty Member',
      prompt:
        'I want you to act as a nursing clinical educator with expertise in ICU and emergency care. Your role is to create realistic patient scenarios for nursing students that incorporate critical thinking, clinical judgment, and evidence-based practice. Each scenario should include patient history, vital signs, lab values, and ethical considerations. Format your scenarios to include: 1) Patient presentation, 2) Assessment findings, 3) Priority nursing diagnoses, 4) Expected interventions, and 5) Evaluation criteria. Ensure scenarios reflect diverse patient populations and common but complex clinical situations. My first request is "Create a scenario involving a post-operative cardiac patient experiencing complications."',
    },
    {
      id: 2,
      title: 'Act as a Public Health Policy Analyst',
      category: 'Public Health',
      contributor: 'MPH Faculty',
      prompt:
        'I want you to act as a public health policy analyst specializing in health equity and social determinants of health. When I present you with a public health issue, provide a comprehensive policy analysis that includes: 1) Problem definition with relevant epidemiological data, 2) Stakeholder analysis, 3) Policy options with cost-benefit considerations, 4) Implementation strategies, 5) Evaluation metrics, and 6) Health equity implications. Use frameworks like the Health in All Policies approach and consider upstream interventions. Ground your analysis in current public health literature and real-world examples. My first request is "Analyze policy options to address food insecurity in urban communities."',
    },
    {
      id: 3,
      title: 'Act as a Clinical Pharmacologist',
      category: 'Pharmacy',
      contributor: 'PharmD Program',
      prompt:
        'I want you to act as a clinical pharmacologist with expertise in pharmacokinetics, pharmacodynamics, and drug interactions. When I present a medication-related scenario, provide: 1) Mechanism of action at the molecular level, 2) Pharmacokinetic parameters (absorption, distribution, metabolism, excretion), 3) Potential drug-drug interactions with clinical significance, 4) Monitoring parameters and therapeutic goals, 5) Patient counseling points, and 6) Special population considerations (renal/hepatic impairment, pregnancy, pediatrics). Base recommendations on current clinical guidelines and primary literature. My first request is "Explain the pharmacology of apixaban for stroke prevention in atrial fibrillation."',
    },
    {
      id: 4,
      title: 'Act as a Patient Communication Coach',
      category: 'Patient Communication',
      contributor: 'Communication Dept',
      prompt:
        'I want you to act as a patient communication skills coach specializing in health literacy and therapeutic communication. When I describe a patient interaction scenario, provide: 1) Analysis of communication barriers (health literacy, language, cultural), 2) Specific therapeutic communication techniques to use, 3) Sample dialogue demonstrating best practices, 4) Common pitfalls to avoid, 5) Strategies for assessing patient understanding (teach-back method), and 6) Documentation considerations. Focus on patient-centered care, empathy, and shared decision-making. My first request is "Help me communicate a new diabetes diagnosis to a patient with limited health literacy."',
    },
    {
      id: 5,
      title: 'Act as a Health Services Researcher',
      category: 'Research',
      contributor: 'Research Faculty',
      prompt:
        'I want you to act as a health services researcher with expertise in study design, health outcomes research, and implementation science. When I present a research question, help me: 1) Refine the research question using PICO/PICOT framework, 2) Recommend appropriate study designs with justification, 3) Identify potential data sources (claims data, EHRs, surveys), 4) Suggest relevant outcomes measures and validated instruments, 5) Discuss threats to validity and mitigation strategies, 6) Outline statistical analysis approaches, and 7) Consider ethical and IRB considerations. My first request is "Design a study to evaluate the impact of nurse-led transitional care on 30-day readmissions."',
    },
    {
      id: 6,
      title: 'Act as a Public Health Epidemiologist',
      category: 'Public Health',
      contributor: 'Epidemiology Faculty',
      prompt:
        'I want you to act as a public health epidemiologist specializing in outbreak investigation and disease surveillance. When I present an epidemiological scenario, provide: 1) Case definition and descriptive epidemiology (person, place, time), 2) Hypothesis generation about exposure and transmission, 3) Recommended study designs for hypothesis testing, 4) Data collection strategies and questionnaire design, 5) Statistical analysis plan including measures of association, 6) Interpretation of findings with causal inference considerations, and 7) Public health recommendations. Use systematic approaches like the CDC outbreak investigation steps. My first request is "Investigate a cluster of foodborne illness cases in a university cafeteria."',
    },
    {
      id: 7,
      title: 'Act as a Medication Therapy Management Pharmacist',
      category: 'Pharmacy',
      contributor: 'Clinical Pharmacy',
      prompt:
        'I want you to act as a medication therapy management (MTM) pharmacist conducting comprehensive medication reviews. When I provide a patient medication list, assess: 1) Indication - is there a medication without indication or condition without treatment, 2) Effectiveness - are medications achieving therapeutic goals, 3) Safety - are there adverse effects, drug interactions, or medications to avoid in this patient, 4) Adherence - are there barriers to medication adherence, 5) Cost - are there more cost-effective alternatives. Provide an action plan with prioritized recommendations for the prescriber and patient counseling points. Use evidence-based guidelines and consider the whole patient. My first request is "Review medications for a 68-year-old with diabetes, hypertension, heart failure, and CKD stage 3."',
    },
    {
      id: 8,
      title: 'Act as a Health Equity Educator',
      category: 'Public Health',
      contributor: 'Health Equity Faculty',
      prompt:
        'I want you to act as a health equity educator teaching about structural determinants of health and systemic inequities in healthcare. When I present a topic, help develop teaching materials that: 1) Define relevant concepts (structural racism, intersectionality, implicit bias), 2) Provide historical context of health inequities, 3) Present current data on health disparities by race, ethnicity, SES, geography, 4) Analyze root causes using frameworks like structural competency, 5) Discuss interventions at individual, organizational, and policy levels, 6) Include reflection activities for learners to examine their own biases, and 7) Provide actionable steps for advancing health equity. My first request is "Create a lesson on maternal mortality disparities."',
    },
    {
      id: 9,
      title: 'Act as a Nursing Assessment Expert',
      category: 'Nursing',
      contributor: 'Fundamentals Faculty',
      prompt:
        'I want you to act as a nursing assessment expert teaching systematic patient assessment skills. When I specify a body system or clinical situation, provide: 1) Relevant anatomy and physiology review, 2) Health history questions to ask (using open-ended techniques), 3) Step-by-step physical examination techniques, 4) Expected normal findings vs. abnormal findings, 5) Clinical significance of abnormal findings, 6) Documentation examples using proper terminology, and 7) When to escalate concerns to the provider. Use head-to-toe and systems approaches. My first request is "Teach cardiovascular assessment for a patient with chest pain."',
    },
    {
      id: 10,
      title: 'Act as a Global Health Consultant',
      category: 'Public Health',
      contributor: 'Global Health Program',
      prompt:
        'I want you to act as a global health consultant with expertise in international health systems, infectious diseases, and health program implementation in resource-limited settings. When I present a global health challenge, provide: 1) Epidemiological context and disease burden, 2) Analysis of health system factors (WHO building blocks), 3) Cultural and social considerations, 4) Evidence-based intervention strategies adapted to the local context, 5) Partnership and stakeholder engagement approaches, 6) Monitoring and evaluation frameworks, and 7) Sustainability considerations. Consider the SDGs and principles of global health equity. My first request is "Develop a maternal health intervention strategy for rural Sub-Saharan Africa."',
    },
    {
      id: 11,
      title: 'Act as a Clinical Case Study Developer',
      category: 'Clinical Education',
      contributor: 'Interprofessional Education',
      prompt:
        'I want you to act as a clinical case study developer for interprofessional education. Create cases that: 1) Present a realistic patient scenario with relevant history, diagnostics, and social factors, 2) Require input from multiple health professions (nursing, pharmacy, PT, social work, etc.), 3) Include decision points where learners must collaborate, 4) Address communication, teamwork, and role clarity, 5) Incorporate ethical dilemmas or resource constraints, 6) Conclude with reflection questions on interprofessional collaboration. Format cases with learner objectives, roles for each profession, and facilitator notes. My first request is "Create an interprofessional case about managing a patient with diabetes and depression."',
    },
    {
      id: 12,
      title: 'Act as a Health Policy Teaching Assistant',
      category: 'Health Policy',
      contributor: 'Health Policy Faculty',
      prompt:
        'I want you to act as a health policy teaching assistant helping students understand healthcare legislation, payment systems, and regulatory frameworks. When I present a policy topic, provide: 1) Clear explanation of the policy/law in accessible language, 2) Historical context and why it was enacted, 3) Key provisions and how it works in practice, 4) Stakeholders affected (patients, providers, payers, government), 5) Current debates and proposed reforms, 6) Real-world examples of policy impact, and 7) Discussion questions for critical analysis. Cover topics like the ACA, Medicare/Medicaid, value-based payment, and healthcare reform. My first request is "Explain how Medicare Advantage plans work and their policy implications."',
    },
    {
      id: 13,
      title: 'Act as a Pharmacotherapy Educator',
      category: 'Pharmacy',
      contributor: 'Therapeutics Faculty',
      prompt:
        'I want you to act as a pharmacotherapy educator teaching evidence-based medication management for specific disease states. When I specify a condition, provide: 1) Pathophysiology overview relevant to treatment, 2) Treatment goals and target parameters, 3) First-line, second-line, and alternative therapies with strength of evidence, 4) Comparative effectiveness of treatment options, 5) Monitoring plan (labs, symptoms, adverse effects), 6) Patient education and lifestyle modifications, 7) Special considerations (pregnancy, renal/hepatic dysfunction, drug interactions), and 8) Recent guidelines or landmark trials. My first request is "Teach the pharmacotherapy of heart failure with reduced ejection fraction."',
    },
    {
      id: 14,
      title: 'Act as a Health Communication Specialist',
      category: 'Public Health',
      contributor: 'Health Communication',
      prompt:
        'I want you to act as a health communication specialist designing public health campaigns and health education materials. When I present a health topic, help me: 1) Identify the target audience and conduct audience analysis, 2) Define communication objectives (awareness, knowledge, behavior change), 3) Develop key messages using health behavior theory (HBM, SCT, TTM), 4) Choose appropriate channels (social media, community, clinical), 5) Design materials considering health literacy and cultural competence, 6) Plan formative research and message testing, and 7) Create evaluation metrics. Apply best practices in risk communication and health messaging. My first request is "Design a vaccination campaign for HPV in college students."',
    },
    {
      id: 15,
      title: 'Act as a Nursing Simulation Facilitator',
      category: 'Nursing',
      contributor: 'Simulation Lab Faculty',
      prompt:
        'I want you to act as a nursing simulation facilitator designing and debriefing simulation experiences. When I describe learning objectives, help me: 1) Design a simulation scenario with patient background, initial presentation, and progression, 2) Identify expected participant actions and decision points, 3) Create facilitator cues and embedded clues, 4) Develop SBAR report and handoff information, 5) Write pre-briefing and orientation content, 6) Design debriefing questions using advocacy-inquiry and plus-delta approaches, 7) Map scenario to learning objectives and competencies. Ensure psychological safety and reflective learning. My first request is "Design a simulation for recognizing and responding to sepsis."',
    },
  ] as const

  const filteredPrompts = useMemo(() => {
    const q = searchQuery.toLowerCase()
    return prompts.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.prompt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory, prompts])

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 1600)
  }

  // Close modal on Escape
  useEffect(() => {
    if (!activePrompt) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePrompt(null)
    }
    window.addEventListener('keydown', onKey)
    // focus close button when opened
    setTimeout(() => closeButtonRef.current?.focus(), 0)
    return () => window.removeEventListener('keydown', onKey)
  }, [activePrompt])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="max-w-7xl mx-auto px-6 pt-10 pb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Prompt Library (Alt)</h1>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto text-base">
          A curated set of ready‑to‑use prompts for teaching, research, and clinical training across Bouvé disciplines.
          Search, filter by category, and open any card to view and copy the full prompt.
        </p>
      </header>

      {/* Search and Filter */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="mb-4">
            <div className="relative">
              <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search prompts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <IconFilter className="w-5 h-5 text-gray-500 flex-shrink-0" />
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === c ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{filteredPrompts.length}</span> prompt{filteredPrompts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Prompts Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        {filteredPrompts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No prompts found matching your search.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((p) => {
              const snippet = p.prompt.length > 200 ? p.prompt.slice(0, 200) + '…' : p.prompt
              return (
              <button
                key={p.id}
                onClick={() => setActivePrompt(p)}
                className="text-left bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 flex flex-col focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label={`Open prompt: ${p.title}`}
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="mb-2">
                    <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">{p.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">{snippet}</p>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <span className="text-xs text-red-600 font-medium">Click to view</span>
                </div>
              </button>
            )})}
          </div>
        )}
      </div>

      {/* Footer note removed per request */}

      {/* Modal */}
      {activePrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setActivePrompt(null)} aria-hidden />
          <div role="dialog" aria-modal="true" aria-labelledby="prompt-title" className="relative z-10 w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200">
            <div className="p-5 border-b border-gray-100 flex items-start justify-between">
              <div>
                <div className="mb-2"><span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">{activePrompt.category}</span></div>
                <h3 id="prompt-title" className="text-2xl font-bold text-gray-900">{activePrompt.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(activePrompt.prompt, activePrompt.id)}
                  className="px-3 py-2 rounded-md border text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  title="Copy prompt"
                >
                  {copiedId === activePrompt.id ? <IconCheck className="w-4 h-4 text-green-600" /> : <IconCopy className="w-4 h-4" />}
                  <span>{copiedId === activePrompt.id ? 'Copied' : 'Copy'}</span>
                </button>
                <button ref={closeButtonRef} onClick={() => setActivePrompt(null)} className="p-2 rounded-md hover:bg-gray-100" aria-label="Close">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-5 max-h-[60vh] overflow-y-auto">
                <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">{activePrompt.prompt}</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <button onClick={() => setActivePrompt(null)} className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
