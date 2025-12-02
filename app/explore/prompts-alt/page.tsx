"use client"

import React, { useEffect, useMemo, useRef, useState } from 'react'

// Inline icons (no external deps)
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

export default function PromptsAltSciencePage() {
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

	// College of Science categories (aligned to COS disciplines)
	const categories = [
		'All',
		'Biology',
		'Chemistry and Chemical Biology',
		'Physics',
		'Mathematics',
		'Marine and Environmental Sciences',
		'Psychology',
	]

	// College of Science prompts (filtered to COS disciplines only)
	const prompts = React.useMemo(() => ([
		{
			id: 1,
			title: 'Act as a Biology Lab Instructor',
			category: 'Biology',
			contributor: 'Biology Faculty',
			prompt:
				'You are a [biology lab instructor] designing an inquiry-based lab for [first-year undergraduates] on [enzyme kinetics]. Provide: 1) [Learning objectives] aligned to Bloom levels, 2) [Pre-lab reading] and [safety notes], 3) [Materials] and [experimental setup] for testing [temperature] and [pH] effects on [catalase activity], 4) Step-by-step procedure with [control] and at least [two experimental conditions], 5) [Data table templates] and [graphing instructions] (rate vs. [substrate concentration]), 6) [Guiding questions] for analysis and [sources of error], 7) A short [post-lab assessment] (3 questions) with [answer key].'
		},
		{
			id: 2,
			title: 'Act as a Chemistry Problem Author',
			category: 'Chemistry and Chemical Biology',
			contributor: 'Chemistry Faculty',
			prompt:
				'You are an [introductory chemistry problem author]. Create a [multi-part stoichiometry problem] involving [limiting reagents] and [percent yield] for the reaction between [aluminum] and [copper(II) sulfate]. Include: 1) [Problem context] and [balanced equation], 2) [Three sub-questions] escalating in difficulty, 3) [Complete solutions] with [units] and [significant figures], 4) A [common-mistakes section] explaining typical errors and how to avoid them.'
		},
		{
			id: 3,
			title: 'Act as a Physics Concept Coach',
			category: 'Physics',
			contributor: 'Physics Faculty',
			prompt:
				'You are a [physics concept coach]. Develop a conceptual tutorial on [energy conservation vs. non-conservative work] for [algebra-based physics]. Provide: 1) [Intuitive explanation] with [everyday analogies], 2) A [worked example] ([block-spring with friction]), 3) [Three practice problems] (qualitative + quantitative) with [solutions], 4) A [quick diagnostic] to detect the misconception [“energy is used up”], and 5) A short [reflection prompt] for students.'
		},
		{
			id: 4,
			title: 'Act as a Mathematics Proof Tutor',
			category: 'Mathematics',
			contributor: 'Math Faculty',
			prompt:
				'You are a [mathematics proof tutor]. Create a guided worksheet to help students prove [that the square root of 2 is irrational]. Include: 1) [Prior knowledge checklist], 2) [Definitions] and [the law of the excluded middle], 3) A [scaffolded proof by contradiction] with [hints], 4) A [common pitfalls] section, 5) An extension: generalize to [√p for prime p] (optional challenge).'
		},
		{
			id: 7,
			title: 'Act as a Marine & Environmental Science Case Writer',
			category: 'Marine and Environmental Sciences',
			contributor: 'EnvSci Faculty',
			prompt:
				'You are a [marine & environmental science case writer]. Create a case study on [coastal erosion management] for a [small town]. Include: 1) [Background] and [local data] ([rates of erosion], [habitat impacts]), 2) [Stakeholders] and [constraints] ([budget], [regulations]), 3) [Three intervention options] ([hard]/[soft]/[managed retreat]) with [pros/cons], 4) [Cost-benefit summary table], 5) [Discussion questions] and a short [decision memo template].'
		},
		{
			id: 9,
			title: 'Act as an Organic Chemistry Tutor',
			category: 'Chemistry and Chemical Biology',
			contributor: 'Chemistry Faculty',
			prompt:
				'You are an [organic chemistry tutor]. Develop a mechanism walkthrough for [E1 vs. E2 eliminations]. Include: 1) [Decision tree] based on [substrate], [base], [solvent], [temperature], 2) [Detailed arrow-pushing] for [representative examples], 3) [Common pitfalls] ([rearrangements], [Zaitsev vs. Hofmann]), 4) [Three practice problems] with [solutions].'
		},
		{
			id: 10,
			title: 'Act as a Scientific Writing Coach',
			category: 'Biology',
			contributor: 'Writing Across STEM',
			prompt:
				'You are a [scientific writing coach]. Provide a [revision checklist] for the [Introduction] and [Discussion] sections of a [biology lab report] on [enzyme activity]. Include: 1) How to [motivate the question] using [literature], 2) [Claims‑evidence‑reasoning alignment], 3) Integrating [figures/tables], 4) [Common phrasing issues] and how to fix them, 5) A short [model paragraph] annotated for [clarity].'
		},
		{
			id: 11,
			title: 'Act as a Quantum Mechanics Instructor',
			category: 'Physics',
			contributor: 'Physics Faculty',
			prompt:
				'You are a [quantum mechanics instructor]. Create a [problem set] on the [particle in a 1D infinite potential well]. Provide: 1) A [derivation outline] ([boundary conditions] → [eigenfunctions]), 2) [Three problems] ([energy levels], [expectation values], [superposition]), 3) [Detailed solutions], 4) A [conceptual checkpoint] addressing the [“electron‑in‑orbit” misconception].'
		},
		{
			id: 12,
			title: 'Act as a Discrete Math Coach',
			category: 'Mathematics',
			contributor: 'Math Faculty',
			prompt:
				'You are a [discrete mathematics coach]. Design a [mini‑lesson] on [graphs and connectivity]. Include: 1) [Definitions] ([walk], [path], [cycle], [connected]), 2) [Examples] and [non‑examples], 3) [Two proofs] (one by [contrapositive]) about [connectivity], 4) An [algorithmic exercise] ([BFS/DFS]) with [pseudocode], 5) A short [reflection question] linking to [real‑world networks].'
		},
		{
			id: 14,
			title: 'Act as a Numerical Methods Instructor',
			category: 'Mathematics',
			contributor: 'Applied Math Faculty',
			prompt:
				'You are a [numerical methods instructor]. Create a [worksheet] comparing [bisection], [Newton‑Raphson], and [secant] methods. Provide: 1) [Convergence conditions], 2) [Error bounds/estimates], 3) A [worked example] for each, 4) [Pseudocode], 5) When each method is [preferable in practice].'
		},
		// New COS prompts (20)
		{
			id: 15,
			title: 'Act as a Field Ecology Planner',
			category: 'Biology',
			contributor: 'Biology Faculty',
			prompt:
				'You are a [field ecology planner]. Design a [sampling plan] to estimate [plant species richness] across a [coastal dune gradient]. Include: 1) [Hypothesis] and [response variables], 2) [Stratified random sampling layout] with [plot size/spacing], 3) [Minimum sample size] justified via [pilot data] or [power reasoning], 4) [Data sheet template], 5) Brief [QA/QC] and [bias mitigation steps], 6) [Analysis outline] ([Shannon index], [rarefaction], [ANOVA/Kruskal‑Wallis]), 7) [Safety] and [permit considerations].'
		},
		{
			id: 16,
			title: 'Act as a Genetics Lab Designer (CRISPR)',
			category: 'Biology',
			contributor: 'Molecular Biology Faculty',
			prompt:
				'You are designing a [CRISPR‑based knockout experiment] in [yeast] to study [gene X] involved in [galactose metabolism]. Provide: 1) [gRNA selection criteria] and [two candidate sequences], 2) [Donor template design] (with [homology arms]) for [HDR] vs. [NHEJ] strategy, 3) [Transformation workflow] and [controls], 4) [Genotyping plan] ([PCR], [Sanger]), 5) [Phenotypic assay] and [expected outcomes], 6) [Troubleshooting tips] for [off‑targets] and [low editing efficiency].'
		},
		{
			id: 17,
			title: 'Act as a Microbiology Case Study Author (Antibiotic Resistance)',
			category: 'Biology',
			contributor: 'Microbiology Faculty',
			prompt:
				'Author a [short case study] on an outbreak of [carbapenem‑resistant Enterobacteriaceae] in a [hospital ward]. Include: 1) [Background] and [transmission routes], 2) [Lab diagnostics decision tree] ([culture] → [MALDI‑TOF] → [MIC]), 3) [Infection control options] and [trade‑offs], 4) [Three discussion questions] and an [answer key], 5) A short [communication plan] for [non‑technical stakeholders].'
		},
		{
			id: 18,
			title: 'Act as a Bioinformatics Workflow Coach (RNA-seq)',
			category: 'Biology',
			contributor: 'Bioinformatics Core',
			prompt:
				'Outline an [RNA‑seq analysis workflow] for [differential expression] between [treated] and [control] cell lines. Include: 1) [QC] ([FastQC], [trimming]) and [alignment vs. pseudoalignment rationale], 2) [Count matrix generation], 3) [Normalization] and [differential testing] ([DESeq2]/[edgeR]) with [assumptions], 4) [Multiple testing correction] and [volcano plot], 5) [Functional enrichment] ([GO]/[KEGG]) with [caveats], 6) [Reproducible report checklist].'
		},
		{
			id: 19,
			title: 'Act as a Thermochemistry Lab Coordinator (Calorimetry)',
			category: 'Chemistry and Chemical Biology',
			contributor: 'Chemistry Lab Coordinator',
			prompt:
				'Design a [constant‑pressure calorimetry lab] to determine the [enthalpy of neutralization] for a [strong acid‑strong base reaction]. Include: 1) [Learning objectives] and [safety], 2) [Equipment] and [calibration steps], 3) [Procedure] with [replicate trials] and [heat loss corrections], 4) [Data tables] and [sample calculations] with [units] and [sig figs], 5) [Error analysis] ([systematic] vs [random]), 6) [Pre‑lab] and [post‑lab questions] with [keys].'
		},
		{
			id: 20,
			title: 'Act as an Acid-Base Titration Coach',
			category: 'Chemistry and Chemical Biology',
			contributor: 'Chemistry Faculty',
			prompt:
				'Create a [tutorial] to interpret [titration curves] for [monoprotic] and [diprotic acids]. Provide: 1) [Key equations and concepts] ([buffer region], [equivalence], [Henderson‑Hasselbalch]), 2) [Example curves] with [annotations], 3) [Practice problems] ([strong/weak combinations]) with [solutions], 4) [Common pitfalls] ([indicator choice], [dilution effects]) and how to avoid them.'
		},
		{
			id: 21,
			title: 'Act as a Spectroscopy Analyst (UV-Vis)',
			category: 'Chemistry and Chemical Biology',
			contributor: 'Analytical Chemistry Faculty',
			prompt:
				'Prepare a [Beer‑Lambert calibration activity] to quantify [food dye concentration]. Include: 1) [Wavelength selection] and [baseline correction], 2) [Standards preparation] and [linear range check], 3) [Data recording template], 4) [Linear regression] with [residual checks], 5) [Unknown sample calculation] with [uncertainty], 6) [Two sources of systematic error] and [mitigation].'
		},
		{
			id: 22,
			title: 'Act as a Chemical Kinetics Coach (Arrhenius)',
			category: 'Chemistry and Chemical Biology',
			contributor: 'Physical Chemistry Faculty',
			prompt:
				'Create a [guided problem set] using [temperature‑dependent rate data] to extract [activation energy] via the [Arrhenius equation]. Include: 1) [Data table], 2) [Linearization steps] and [plot axes], 3) [Worked example] with [units], 4) [Interpretation questions] connecting [mechanism] and [steric/electronic effects], 5) A short [extension to catalysis].'
		},
		{
			id: 23,
			title: 'Act as an Intro Mechanics Lab Designer (Projectile Motion)',
			category: 'Physics',
			contributor: 'Physics Lab Coordinator',
			prompt:
				'Design a [projectile motion lab] using [video analysis]. Include: 1) [Learning objectives] and [safety], 2) [Setup] and [calibration] ([scale bar], [frame rate]), 3) [Data collection plan] with trials at [varying launch angles], 4) [Data extraction] and [uncertainty propagation], 5) [Comparison to model] ([air resistance discussion]), 6) [Post‑lab questions] and [rubric].'
		},
		{
			id: 24,
			title: 'Act as an E&M Tutor (RC Transients)',
			category: 'Physics',
			contributor: 'Physics Faculty',
			prompt:
				'Write a [mini‑lesson] on [RC circuit transients]. Include: 1) [Differential equation] and [solution forms], 2) [Time constant] intuition, 3) [Worked examples] for [charging] and [discharging], 4) [Three practice problems] with [graphs] and [solutions], 5) [Measurement considerations] with [oscilloscopes].'
		},
		{
			id: 25,
			title: 'Act as an Optics Activity Designer (Thin Lenses)',
			category: 'Physics',
			contributor: 'Physics Faculty',
			prompt:
				'Develop a [guided activity] on [thin lens imaging]. Include: 1) [Ray diagram primer], 2) [Lab procedure] to measure [focal length] and [magnification], 3) [Data table template], 4) [Error analysis] ([parallax], [alignment]), 5) [Conceptual questions] distinguishing [real] vs. [virtual images], 6) A short [extension to lens systems].'
		},
		{
			id: 26,
			title: 'Act as a Statistical Physics Concept Coach (Ideal Gas)',
			category: 'Physics',
			contributor: 'Physics Faculty',
			prompt:
				'Create a [conceptual walkthrough] linking [microstates] to the [ideal gas law]. Include: 1) [Assumptions of the model], 2) [Derivation outline] ([equipartition]), 3) [Thought experiments] to build [intuition], 4) [Two quick numerical checks], 5) [Reflection prompts] about when the model breaks down.'
		},
		{
			id: 27,
			title: 'Act as a Linear Algebra Coach (Eigenvalues & PCA)',
			category: 'Mathematics',
			contributor: 'Math Faculty',
			prompt:
				'Create a [worksheet] that builds [intuition] for [eigenvalues/eigenvectors] and connects them to [PCA]. Include: 1) [Geometric interpretation] in [2D] with [sketches], 2) A [small dataset] and [covariance matrix], 3) [Step‑by‑step PCA] by hand for [two components], 4) [Interpretation of loadings] and [variance explained], 5) [Two common pitfalls] and [checks].'
		},
		{
			id: 28,
			title: 'Act as a Calculus Optimization Tutor (Lagrange Multipliers)',
			category: 'Mathematics',
			contributor: 'Math Faculty',
			prompt:
				'Produce a [guided note set] on [constrained optimization] with [Lagrange multipliers]. Include: 1) [Setup] and [intuition], 2) A [worked example] with [one constraint], 3) A [second example] with [two constraints] and [classification of extrema], 4) [Practice problems] with [solutions], 5) [Common mistakes] ([ignoring boundary], [misinterpreting λ]).'
		},
		{
			id: 29,
			title: 'Act as a Probability Coach (Bayes in Medicine)',
			category: 'Mathematics',
			contributor: 'Statistics Faculty',
			prompt:
				'Develop a [Bayes theorem lesson] using a [medical testing scenario]. Include: 1) [Clear definition of events] with a [tree diagram], 2) [Worked example] with [sensitivity/specificity] and [prevalence], 3) [Visual frequency table] method, 4) [Two practice problems] with [solutions], 5) A short section on [base‑rate neglect].'
		},
		{
			id: 30,
			title: 'Act as a Differential Equations Coach (SIR Model)',
			category: 'Mathematics',
			contributor: 'Applied Math Faculty',
			prompt:
				'Create a [mini‑project] around the [SIR epidemic model]. Include: 1) [Model equations] and [parameter meanings], 2) [Qualitative analysis] ([equilibria], [R0]), 3) [Simple numerical simulation steps], 4) How to [fit parameters] from [data], 5) [Reflection] on [assumptions] and [limitations].'
		},
		{
			id: 31,
			title: 'Act as a Climate Data Analyst (Time Series)',
			category: 'Marine and Environmental Sciences',
			contributor: 'Environmental Data Science Faculty',
			prompt:
				'Outline a [lab] analyzing [sea surface temperature anomalies]. Include: 1) [Data sourcing] and [citation] ([NOAA]), 2) [Detrending] and [seasonal decomposition], 3) [Anomaly definition] and [visualization], 4) [Simple change‑point detection], 5) [Interpretation questions] and [uncertainty discussion], 6) [Communication tips] for [non‑experts].'
		},
		{
			id: 32,
			title: 'Act as a Water Quality Study Designer',
			category: 'Marine and Environmental Sciences',
			contributor: 'Environmental Chemistry Faculty',
			prompt:
				'Design a [monitoring plan] to assess [nutrient runoff] into a [freshwater pond]. Include: 1) [Sampling sites] and [frequency] across [seasons], 2) [Field] and [lab methods] ([NO3‑], [PO4^3‑]), 3) [QA/QC] and [chain of custody], 4) [Data management schema], 5) [Visualization] and [threshold criteria], 6) [Policy/management recommendations] format.'
		},
		{
			id: 33,
			title: 'Act as a Psychology Research Methods Coach (Stroop)',
			category: 'Psychology',
			contributor: 'Psychology Faculty',
			prompt:
				'Create a [lab exercise] around the [Stroop effect]. Include: 1) [Operational definitions] of [IV/DV], 2) [Within‑] vs. [between‑subjects] [design choice] with [rationale], 3) [Counterbalancing] and [exclusion criteria], 4) [Data collection template], 5) [Analysis plan] ([paired t‑test] or [repeated‑measures ANOVA]) and [effect size], 6) [Ethics] and [debriefing notes].'
		},
		{
			id: 34,
			title: 'Act as an APA Results Writing Coach (ANOVA)',
			category: 'Psychology',
			contributor: 'Psychology Faculty',
			prompt:
				'Provide a [template] and [examples] for writing [APA‑style results] for a [one‑way ANOVA] with [post‑hoc tests]. Include: 1) [Reporting format] with [exact statistics], 2) [Effect sizes] and [confidence intervals], 3) [Assumption checks] and [alternatives], 4) A short [example paragraph] using [realistic numbers], 5) [Common phrasing] to avoid.'
		},
		{
			id: 35,
			title: 'Act as a Habitat Restoration Planner (Salt Marsh)',
			category: 'Marine and Environmental Sciences',
			contributor: 'Coastal Ecology Faculty',
			prompt:
				'Develop a salt marsh restoration plan for a degraded urban shoreline. Include: 1) Site assessment (salinity, elevation, hydrologic connectivity, invasive species), 2) Reference condition and success criteria, 3) Hydrologic restoration design (culverts/tidal channels) with conceptual drawings, 4) Planting palette and planting scheme with seasonality, 5) Monitoring plan (vegetation cover, nekton use, surface elevation, water quality) and frequency, 6) Adaptive management triggers, 7) Permitting/stakeholder engagement checklist and timeline.'
		},
		{
			id: 36,
			title: 'Act as a Cognitive Psychology Lab Designer (Working Memory Span)',
			category: 'Psychology',
			contributor: 'Cognitive Psychology Faculty',
			prompt:
				'Design a [laboratory experiment] to measure [working memory] using an [operation span task]. Include: 1) [Hypotheses] and [IV/DV definitions] ([load levels]; [accuracy/RT]), 2) [Trial structure] and [stimuli] with [counterbalancing], 3) [Exclusion criteria] and [power/sample size rationale], 4) [Procedure script] and [timing diagram], 5) [Data dictionary] and [analysis plan] ([mixed ANOVA], [effect size]), 6) [Expected patterns] and [interpretation], 7) [Ethics] and [debriefing notes].'
		},
		{
			id: 37,
			title: 'Act as a Clinical Psychology Case Formulation Coach (CBT)',
			category: 'Psychology',
			contributor: 'Clinical Psychology Faculty',
			prompt:
				'Provide a [CBT case formulation] and [treatment plan] using the [five‑areas model] for a [client with depressive symptoms]. Include: 1) [Presenting problems] and [functional analysis], 2) [Precipitating], [perpetuating], and [protective factors], 3) [Measurable goals] and [session structure], 4) [Intervention components] ([behavioral activation], [cognitive restructuring]) with [concrete homework], 5) [Outcome measures] and [progress tracking], 6) [Risk assessment] and [referral/consultation plan].'
		}
	] as const), []);

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

	// Remove bracket placeholders for display and copy
	const cleanBrackets = (text: string) => text.replace(/\[/g, '').replace(/\]/g, '')

	// Format numbered sections to start on new lines for readability
	const formatPromptForDisplay = (text: string) => {
		return cleanBrackets(text)
			// Insert a newline before any numbered point like " 1)" ... " 9)"
			.replace(/\s([1-9]\))/g, '\n$1')
			// Also handle em-dash or repeated spaces before numbers, just in case
			.replace(/\s+([1-9]\))/g, '\n$1');
	}

	const copyToClipboard = (text: string, id: number) => {
		navigator.clipboard.writeText(cleanBrackets(text))
		setCopiedId(id)
		setTimeout(() => setCopiedId(null), 1600)
	}

	useEffect(() => {
		if (!activePrompt) return
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setActivePrompt(null)
		}
		window.addEventListener('keydown', onKey)
		setTimeout(() => closeButtonRef.current?.focus(), 0)
		return () => window.removeEventListener('keydown', onKey)
	}, [activePrompt])

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<header className="max-w-7xl mx-auto px-6 pt-10 pb-6 text-center">
				<h1 className="text-3xl font-bold text-red-700">Quick Prompts</h1>
				<p className="mt-3 text-gray-700 max-w-3xl mx-auto text-base">
					Quick, copy-ready prompts that are shorter and less detailed than the main Prompt Library.
					Search or filter, then open a card to copy the prompt.
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
									<p className="text-sm text-gray-700 leading-relaxed line-clamp-4">{formatPromptForDisplay(snippet)}</p>
								</div>
								<div className="p-4 bg-gray-50 border-t border-gray-100">
									<span className="text-xs text-red-600 font-medium">Click to view</span>
								</div>
							</button>
						)})}
					</div>
				)}
			</div>

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
								<p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">{formatPromptForDisplay(activePrompt.prompt)}</p>
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

