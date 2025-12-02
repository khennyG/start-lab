export type COSDiscipline =
  | 'Mathematics'
  | 'Biology'
  | 'Physics'
  | 'Chemistry and Chemical Biology'
  | 'Marine and Environmental Sciences'
  | 'Psychology';

export type UseCaseSlug =
  | 'redesign-assignment'
  | 'lecture-notes'
  | 'case-study'
  | 'feedback-rubric'
  | 'scaffold-activity'
  | 'in-class-activity';

export type UseCase = {
  id: UseCaseSlug;
  title: string;
  category: string;
  description: string;
  generalPrompts: { id: string; title: string; approach: string; promptText: string }[];
  disciplinePrompts: Partial<Record<COSDiscipline, { id: string; title: string; approach: string; promptText: string }[]>>;
};

export const readyUseCases: UseCase[] = [
  {
    id: 'redesign-assignment',
    title: 'Redesign Assignments',
    category: 'Assignment Design',
  description: 'Transform traditional assignments to require genuine scientific thinking, reflective practice, and integrity-by-design. Choose one of the templates below to fit your course level and goals.',
    generalPrompts: [
      {
        id: 'ra-tmpl-1',
        title: 'Redesign a Scientific Investigation Assignment for Reflective Practice',
        approach: 'Purpose: Help me transform a generic assignment into an authentic scientific investigation that strengthens reasoning, evidence use, and reflective practice.',
        promptText: `Act as an experienced instructional designer and science educator.\n\nDesign a ready-to-use assignment template for [Insert Discipline] in [Insert Course/Program] for [Insert Student Level] students who have prior knowledge of [Insert Topic or Learning Focus]. (e.g., introductory undergrad, graduate.) This assignment should be [Insert Formative or Summative] and worth [Insert Assessment Weight]. (e.g., 15% of final grade.) Scope/duration: [Insert Assignment Scope/Duration]. (e.g., 2 weeks, one 3-hour lab.)\n\nInputs:\n- Materials: [Insert Assignment/Topic or Docs Attached]\n- AI Use Policy: [Insert AI Use Policy] (e.g., permitted with citation, permitted for planning only, not permitted)\n\nProduce a student-facing prompt faculty can copy and run immediately, with these labeled sections:\n- Assignment Overview\n- Learning Outcomes (3-5)\n- Scenario Brief (setting, data/sources, constraints)\n- Student Task & Deliverables (what to submit)\n- Process Artifacts (e.g., planning notes, calculations/code/notebook, decision log)\n- Success Criteria & Rubric Hooks (criteria phrased for rubric)\n- Debrief Plan (3-5 prompts)\n\nPedagogical and ethical requirements:\n- Elicit scientific reasoning and explicit uncertainty handling\n- Require reproducible documentation and proper citation\n- Embed integrity-by-design (visible process, originality)\n\nTone: academic, supportive, and plain-language for non-AI experts.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.\n\n[Paste syllabus excerpt, assignment draft, or relevant context here]`,
      },
      {
        id: 'ra-tmpl-2',
        title: 'Prompt 2: Redesign a Computational Modeling Assignment for Reflective Practice',
        approach: 'Purpose: Convert a modeling task into an authentic, auditable workflow emphasizing assumptions, validation, and iteration.',
        promptText: `**Prompt 2: Redesign a Computational Modeling Assignment for Reflective Practice**\n\n**Purpose:** Help me transform a generic modeling task into an authentic computational investigation that emphasizes assumptions, validation, and iterative improvement.\n\n**Prompt Text:**\n[1] Role & Context — You are an experienced instructional designer and scientific computing educator. You are helping redesign an assignment into an auditable modeling workflow that rehearses model choice, calibration/validation, and uncertainty communication.\n\n[2] Objective / Task — Produce a fully written assignment prompt with learning outcomes, success criteria, and a debrief plan, aligned to reproducible, ethical scientific computing.\n\n[3] Audience / Course Context — This activity is for [Insert Student Level] learners in [Insert Program/Course], with foundational knowledge of [Insert Topic].\n\n[4] Input Material — Here’s the current assignment or topic focus to redesign: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Assignment Overview\n- Learning Outcomes (3–5)\n- Scenario Brief (system, model class, data/parameters, constraints)\n- Student Task & Deliverables (baseline, calibration, validation, sensitivity)\n- Process Artifacts (notebook checkpoints, assumptions log, versioned results)\n- Success Criteria & Rubric Hooks\n- Debrief Plan (3–5 prompts)\n\n[6] Pedagogical or Ethical Criteria — Elicit explicit assumptions, test against analytic/special cases, include sensitivity analysis, and require reproducible artifacts (notebooks, seeds, environment).\n\n[7] Tone / Style — Academic, supportive, reproducibility-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ra-tmpl-3',
        title: 'Prompt 3: Redesign a Field Study Assignment for Reflective Practice',
        approach: 'Purpose: Turn a generic report into a field investigation emphasizing sampling design, confounds, and uncertainty.',
        promptText: `**Prompt 3: Redesign a Field Study Assignment for Reflective Practice**\n\n**Purpose:** Transform a generic write-up into an authentic field study that strengthens sampling design, confound detection, and uncertainty reasoning.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer with field methods expertise. You are helping redesign an assignment into a realistic field investigation.\n\n[2] Objective / Task — Produce a complete student-facing brief with outcomes, success criteria, and a debrief plan aligned to ethical, safe, and rigorous field practice.\n\n[3] Audience / Course Context — For [Insert Student Level] learners in [Insert Program/Course], with background in [Insert Topic].\n\n[4] Input Material — Current assignment or focus to redesign: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Assignment Overview\n- Learning Outcomes (3–5)\n- Scenario Brief (site, instruments, constraints)\n- Student Task & Deliverables (design, data collection, analysis, interpretation)\n- Process Artifacts (sampling frame, instrument calibration, data dictionary, field notes)\n- Success Criteria & Rubric Hooks\n- Debrief Plan (3–5 prompts)\n\n[6] Pedagogical or Ethical Criteria — Highlight confounds, controls, safety, data management/consent (if applicable), and transparency of uncertainty.\n\n[7] Tone / Style — Academic and practical for fieldwork.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ra-tmpl-4',
        title: 'Prompt 4: Redesign a Data Analysis Assignment for Reflective Practice',
        approach: 'Purpose: Convert a generic analysis into an evidence-traceable assignment with verification and transparency.',
        promptText: `**Prompt 4: Redesign a Data Analysis Assignment for Reflective Practice**\n\n**Purpose:** Transform a generic data analysis task into an assignment that emphasizes traceable evidence, verification, and transparent reasoning.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer and data analysis educator helping redesign an assignment for rigor and transparency.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan aligned to reproducible analysis and academic integrity.\n\n[3] Audience / Course Context — For [Insert Student Level] learners in [Insert Program/Course] with foundational knowledge of [Insert Topic].\n\n[4] Input Material — Current assignment or dataset focus to redesign: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Assignment Overview\n- Learning Outcomes (3–5)\n- Scenario Brief (dataset, provenance, constraints)\n- Student Task & Deliverables (EDA → model/stat → visualization → interpretation)\n- Process Artifacts (notebook, code, data provenance, checkpoints)\n- Success Criteria & Rubric Hooks\n- Debrief Plan (3–5 prompts)\n\n[6] Pedagogical or Ethical Criteria — Require source traceability, verification steps (reproduce a figure/stat), and uncertainty communication; forbid unverifiable, black-box claims.\n\n[7] Tone / Style — Academic, concise, integrity-focused.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ra-tmpl-5',
        title: 'Prompt 5: Redesign a Measurement and Calibration Assignment',
        approach: 'Purpose: Emphasize calibration, error propagation, and validation against analytic/sanity checks.',
        promptText: `**Prompt 5: Redesign a Measurement and Calibration Assignment for Reflective Practice**\n\n**Purpose:** Convert a generic measurement activity into a rigorous calibration-and-uncertainty assignment with validation and reflection.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer with measurement/instrumentation expertise. Redesign for calibration, uncertainty, and validation best practices.\n\n[2] Objective / Task — Produce a student-facing prompt with outcomes, success criteria, and debrief plan focused on measurement quality.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Program/Course]; students know [Insert Topic].\n\n[4] Input Material — Current assignment or measurement focus to redesign: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Assignment Overview\n- Learning Outcomes (3–5)\n- Scenario Brief (instrument, range, calibration data, constraints)\n- Student Task & Deliverables (calibration, uncertainty propagation, validation)\n- Process Artifacts (raw data, calibration table, propagation worksheet, assumptions)\n- Success Criteria & Rubric Hooks\n- Debrief Plan (3–5 prompts)\n\n[6] Pedagogical or Ethical Criteria — Promote safety, proper calibration practice, uncertainty transparency, and decision fitness-for-use.\n\n[7] Tone / Style — Academic and safety-conscious.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ra-tmpl-6',
        title: 'Prompt 6: Redesign a Multi-Framework Scientific Reasoning Assignment',
        approach: 'Purpose: Apply two frameworks to the same problem and reconcile for a justified synthesis.',
        promptText: `**Prompt 6: Redesign a Multi-Framework Scientific Reasoning Assignment**\n\n**Purpose:** Transform a generic analysis into a dual-framework reasoning task that culminates in a justified synthesis.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer helping require two contrasting frameworks (e.g., analytic vs. numerical; kinetic vs. mechanistic) on the same problem.\n\n[2] Objective / Task — Produce a full prompt, outcomes, success criteria, and debrief plan to compare and reconcile frameworks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Program/Course] with background in [Insert Topic].\n\n[4] Input Material — Current assignment or problem: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Assignment Overview\n- Learning Outcomes (3–5)\n- Scenario Brief (problem, data, assumptions)\n- Student Task & Deliverables (apply Framework A; apply Framework B; reconcile; synthesize)\n- Process Artifacts (assumptions log, comparison table)\n- Success Criteria & Rubric Hooks\n- Debrief Plan (3–5 prompts)\n\n[6] Pedagogical or Ethical Criteria — Ensure correct application of each framework, explicit assumptions/limits, and fair reconciliation leading to a defensible synthesis.\n\n[7] Tone / Style — Academic and comparative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ra-tmpl-7',
        title: 'Prompt 7: Redesign a Science Communication Assignment (Expert ↔ Stakeholder)',
        approach: 'Purpose: Translate one analysis into two audience-appropriate artifacts with reflection on choices.',
        promptText: `**Prompt 7: Redesign a Science Communication Assignment (Expert ↔ Stakeholder)**\n\n**Purpose:** Convert a generic write-up into dual-audience communication: technical memo and stakeholder brief.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer and science communication coach. Redesign for accurate, audience-fit communication.\n\n[2] Objective / Task — Produce a full brief with outcomes, success criteria, and debrief plan, requiring two artifacts from the same analysis.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Program/Course], with background in [Insert Topic].\n\n[4] Input Material — Current assignment or analysis to redesign: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Assignment Overview\n- Learning Outcomes (3–5)\n- Scenario Brief (audience, decision context, constraints)\n- Student Task & Deliverables (expert memo; stakeholder brief)\n- Process Artifacts (assumption log, uncertainty note, translation rationale)\n- Success Criteria & Rubric Hooks\n- Debrief Plan (3–5 prompts)\n\n[6] Pedagogical or Ethical Criteria — Maintain accuracy, communicate uncertainty, and avoid overclaiming; ensure inclusive, plain language for non-experts.\n\n[7] Tone / Style — Academic and audience-aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ra-tmpl-8',
        title: 'Prompt 8: Redesign an Ethics-in-Science Assignment',
        approach: 'Purpose: Integrate ethics, safety, and integrity-by-design into scientific decision-making.',
        promptText: `**Prompt 8: Redesign an Ethics-in-Science Assignment**\n\n**Purpose:** Turn a generic policy/ethics note into a consequential assignment that blends scientific choices with ethical, safety, or equity considerations.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer emphasizing responsible conduct of research (RCR) and safety.\n\n[2] Objective / Task — Produce a full assignment prompt with outcomes, success criteria, and debrief plan connecting scientific design to ethical/safety trade-offs.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Program/Course]; students know [Insert Topic].\n\n[4] Input Material — Current assignment or scenario: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Assignment Overview\n- Learning Outcomes (3–5)\n- Scenario Brief (stakeholders, risks, constraints)\n- Student Task & Deliverables (options analysis, safeguards, recommendation)\n- Process Artifacts (risk log, consent/data plan if applicable, citations)\n- Success Criteria & Rubric Hooks\n- Debrief Plan (3–5 prompts)\n\n[6] Pedagogical or Ethical Criteria — Make value trade-offs explicit; ensure safety/ethics compliance; require transparent reasoning and integrity safeguards.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ra-tmpl-9',
        title: 'Prompt 9: Redesign a Replication and Robustness Assignment',
        approach: 'Purpose: Focus on replication, robustness checks, and transparent reporting.',
        promptText: `**Prompt 9: Redesign a Replication and Robustness Assignment**\n\n**Purpose:** Transform a generic literature summary into a replication-and-robustness assignment with transparent reporting.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer focused on replicability and robustness.\n\n[2] Objective / Task — Produce a full assignment with outcomes, success criteria, and debrief plan centered on replication and sensitivity.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Program/Course], with background in [Insert Topic].\n\n[4] Input Material — Target paper/dataset/protocol to replicate: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Assignment Overview\n- Learning Outcomes (3–5)\n- Scenario Brief (study/system, data, constraints)\n- Student Task & Deliverables (replication plan, results, robustness checks, comparison)\n- Process Artifacts (prereg notes, deviations log, environment)\n- Success Criteria & Rubric Hooks\n- Debrief Plan (3–5 prompts)\n\n[6] Pedagogical or Ethical Criteria — Encourage honest reporting of deviations, uncertainty, and negative findings; reward careful replication design and robustness.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ra-tmpl-10',
        title: 'Prompt 10: Redesign an Interdisciplinary Team Science Assignment',
        approach: 'Purpose: Coordinate roles, evidence, and integration across multiple scientific subfields.',
        promptText: `**Prompt 10: Redesign an Interdisciplinary Team Science Assignment**\n\n**Purpose:** Convert a generic group project into an interdisciplinary team science assignment emphasizing integration and process evidence.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer focused on team science and integration across subfields.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan enabling role clarity, integration, and conflict resolution.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Program/Course], with mixed backgrounds in [Insert Topics].\n\n[4] Input Material — Current group assignment to redesign: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Assignment Overview\n- Learning Outcomes (3–5)\n- Scenario Brief (problem, subfields involved, constraints)\n- Student Task & Deliverables (role plans, integration milestones, final product)\n- Process Artifacts (decision log, version control, integration tests)\n- Success Criteria & Rubric Hooks\n- Debrief Plan (3–5 prompts)\n\n[6] Pedagogical or Ethical Criteria — Require transparent division of labor, authentic process artifacts, and integration evidence; support equitable collaboration and credit.\n\n[7] Tone / Style — Academic, collaborative, inclusive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
    ],
    disciplinePrompts: {
      Mathematics: [
        {
          id: 'ra-tmpl-math-1',
          title: 'Redesign a Proof/Modeling Assignment for Reflective Practice (Mathematics)',
          approach: 'Purpose: Emphasize proof strategy/modeling choices, counterexamples, and revision.',
            promptText: `Act as an experienced instructional designer and mathematics educator.\n\nDesign a ready-to-use assignment template that strengthens proof strategy or modeling choices, counterexample thinking, and reflective practice for [Insert Student Level] students in [Insert Course/Program] with background in [Insert Topic or Learning Focus]. (e.g., introductory undergrad, graduate.) This assignment should be [Insert Formative or Summative] and worth [Insert Assessment Weight]. (e.g., 15% of final grade.) Scope/duration: [Insert Assignment Scope/Duration]. (e.g., 2 weeks, one 3-hour lab.)\n\nInputs:\n- Materials: [Insert Assignment/Topic or Docs Attached]\n- AI Use Policy: [Insert AI Use Policy] (e.g., permitted with citation, permitted for planning only, not permitted)\n\nProduce a student-facing prompt faculty can copy and run immediately, with these labeled sections:\n- Assignment Overview\n- Learning Outcomes (3-5)\n- Scenario Brief (problem class, given/assumed conditions, constraints)\n- Student Task & Deliverables (what to submit)\n- Process Artifacts (scratch work, rejected lemmas, counterexample attempts, parameter sweeps)\n- Success Criteria & Rubric Hooks (criteria phrased for rubric)\n- Debrief Plan (3-5 prompts)\n\nPedagogical and ethical requirements:\n- Make reasoning visible beyond final forms\n- Encourage near-miss counterexamples or sensitivity checks\n- Reward revision quality, originality, and proper citation\n\nTone: academic, precise, and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.\n\n[Paste syllabus excerpt, assignment draft, or relevant context here]`,
        },
        {
          id: 'ra-tmpl-math-2',
          title: 'Redesign a Computational Modeling & Sensitivity Assignment (Mathematics)',
          approach: 'Purpose: Stress modeling choices, calibration, validation, and sensitivity analysis in math contexts.',
          promptText: `**Redesign a Computational Modeling & Sensitivity Assignment (Mathematics)**\n\n**Purpose:** Transform a generic calculation task into an authentic computational modeling assignment with calibration, validation, and sensitivity analysis.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer guiding reproducible mathematical modeling.\n\n[2] Objective / Task — Produce a complete prompt with outcomes, success criteria, and debrief plan focused on modeling assumptions and sensitivity.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course], background in [Insert Topic].\n\n[4] Input Material — Current assignment/system to redesign: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (model class, parameters, constraints); Student Task & Deliverables (baseline → calibrate → validate → sensitivity); Process Artifacts (notebook, assumptions log, versioned runs); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Make assumptions explicit; test against analytic/special cases; require sensitivity and uncertainty notes; ensure reproducibility.\n\n[7] Tone / Style — Academic and reproducibility-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-math-3',
          title: 'Redesign a Data Analysis with Proof Hooks Assignment (Mathematics)',
          approach: 'Purpose: Link empirical patterns to formal arguments or counterexamples.',
          promptText: `**Redesign a Data Analysis with Proof Hooks Assignment (Mathematics)**\n\n**Purpose:** Convert a generic data task into an assignment that connects empirical analysis to formal justification (proof/counterexample) where appropriate.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer integrating empirical exploration with mathematical justification.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan emphasizing evidence traceability and proof hooks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Current assignment/dataset focus: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (data/structure/constraints); Student Task & Deliverables (EDA → conjecture → justification via proof/counterexample); Process Artifacts (notebook, conjecture log, rejected attempts); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Require provenance and transparency; emphasize proper citation; reward honest reporting of failed proof paths.\n\n[7] Tone / Style — Academic, precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-math-4',
          title: 'Redesign a Multi-Representation Reasoning Assignment (Mathematics)',
          approach: 'Purpose: Require analytic, geometric, and numerical representations of the same problem and reconcile.',
          promptText: `**Redesign a Multi-Representation Reasoning Assignment (Mathematics)**\n\n**Purpose:** Transform a generic problem into a task that uses analytic, geometric/visual, and numerical representations, culminating in a reconciled synthesis.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer encouraging transfer across representations.\n\n[2] Objective / Task — Produce a complete prompt, outcomes, success criteria, and debrief plan to compare and reconcile representations.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Current problem/topic: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief; Student Task & Deliverables (analytic → visual → numerical; reconcile); Process Artifacts (assumptions log, comparison table); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Ensure correct translation between representations; make assumptions explicit; discuss limits.\n\n[7] Tone / Style — Academic and comparative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-math-5',
          title: 'Redesign a Dual-Audience Communication Assignment (Mathematics)',
          approach: 'Purpose: Produce a technical note and a lay summary from the same analysis.',
          promptText: `**Redesign a Dual-Audience Communication Assignment (Mathematics)**\n\n**Purpose:** Convert a generic write-up into two audience-appropriate artifacts with transparent reasoning and uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer focusing on mathematical communication.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan requiring dual-audience outputs.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Current assignment/analysis: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (audience and constraints); Student Task & Deliverables (technical memo; lay summary); Process Artifacts (translation rationale, uncertainty notes); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Maintain accuracy; communicate uncertainty; avoid overclaiming.\n\n[7] Tone / Style — Academic and audience-aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-math-6',
          title: 'Redesign an Integrity-by-Design Assignment (Mathematics)',
          approach: 'Purpose: Require process artifacts, originality, and citation to support integrity and learning.',
          promptText: `**Redesign an Integrity-by-Design Assignment (Mathematics)**\n\n**Purpose:** Turn a generic problem set into an assignment that foregrounds originality, process evidence, and proper citation.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer embedding integrity-by-design in mathematics.\n\n[2] Objective / Task — Produce a complete prompt, outcomes, success criteria, and debrief plan emphasizing visible process.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Current assignment to redesign: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief; Student Task & Deliverables; Process Artifacts (scratch logs, alternative attempts, sources cited); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Require auditable process, cite sources, and discourage black-box outputs.\n\n[7] Tone / Style — Academic and integrity-focused.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Biology: [
        {
          id: 'ra-tmpl-bio-1',
          title: 'Redesign a Wet Lab/Experimental Design Assignment (Biology)',
          approach: 'Purpose: Emphasize controls, reproducibility, and uncertainty-aware interpretation.',
          promptText: `**Redesign a Wet Lab/Experimental Design Assignment for Reflective Practice (Biology)**\n\n**Purpose:** Transform a generic lab write-up into an authentic experimental design task with controls, reproducibility, and reflective reasoning.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer and biology educator redesigning for experimental reasoning.\n\n[2] Objective / Task — Produce a full prompt, outcomes, success criteria, and debrief plan consistent with ethical, reproducible biology.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course], background in [Insert Topic].\n\n[4] Input Material — Current assignment or protocol focus: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (organism/system, constraints); Student Task & Deliverables; Process Artifacts (control rationale, prereg notes, troubleshooting log); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Emphasize control validity, sampling, uncertainty, ethics/safety/IRB (if applicable), and integrity-by-design.\n\n[7] Tone / Style — Academic and safety-conscious.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-bio-2',
          title: 'Redesign a Data Analysis & Reproducibility Assignment (Biology)',
          approach: 'Purpose: Emphasize provenance, verification, and uncertainty communication for biological data.',
          promptText: `**Redesign a Data Analysis & Reproducibility Assignment (Biology)**\n\n**Purpose:** Convert a generic analysis into a transparent, reproducible workflow with verification and uncertainty notes.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer integrating reproducible practices.\n\n[2] Objective / Task — Produce a complete prompt with outcomes, success criteria, and debrief plan centered on reproducibility.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Current dataset/analysis to redesign: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (dataset provenance, constraints); Student Task & Deliverables (EDA → analysis → verification → interpretation); Process Artifacts (notebook, environment, seeds); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Require data provenance, verification (reproduce a figure/stat), and uncertainty communication.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-bio-3',
          title: 'Redesign a Field Study Sampling Design Assignment (Biology)',
          approach: 'Purpose: Focus on sampling frame, confounds, controls, and uncertainty.',
          promptText: `**Redesign a Field Study Sampling Design Assignment (Biology)**\n\n**Purpose:** Transform a generic report into a robust field sampling design with confound control and uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer with field biology experience.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan for field rigor.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Current assignment/site focus: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (site, species/system, constraints); Student Task & Deliverables; Process Artifacts (sampling frame, calibration, field notes); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Address confounds, safety, consent if applicable, and data ethics.\n\n[7] Tone / Style — Academic and practical.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-bio-4',
          title: 'Redesign a Computational Modeling Assignment (Biology)',
          approach: 'Purpose: Emphasize assumptions, calibration/validation and uncertainty in biological models.',
          promptText: `**Redesign a Computational Modeling Assignment (Biology)**\n\n**Purpose:** Convert a generic modeling task into an auditable biological modeling workflow.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer for computational biology.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan for reproducible modeling.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Current assignment/model: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (system, model class, data/parameters); Student Task & Deliverables (baseline, calibration, validation, sensitivity); Process Artifacts; Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Explicit assumptions; test against special cases; uncertainty and documentation.\n\n[7] Tone / Style — Academic and reproducibility-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-bio-5',
          title: 'Redesign a Science Communication Assignment (Biology)',
          approach: 'Purpose: Produce expert memo and stakeholder brief from the same biological analysis.',
          promptText: `**Redesign a Science Communication Assignment (Biology)**\n\n**Purpose:** Translate one analysis into two audience-appropriate artifacts with uncertainty notes.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer for science communication.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan requiring two outputs.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Current assignment/analysis: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (audience/decision context); Student Task & Deliverables (technical memo; stakeholder brief); Process Artifacts; Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Accuracy, uncertainty communication, inclusive language for non-experts.\n\n[7] Tone / Style — Academic and audience-aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-bio-6',
          title: 'Redesign an Ethics/IRB & Integrity Assignment (Biology)',
          approach: 'Purpose: Link scientific design choices to ethics, consent, safety, and integrity-by-design.',
          promptText: `**Redesign an Ethics/IRB & Integrity Assignment (Biology)**\n\n**Purpose:** Turn a generic policy note into a consequential assignment that blends scientific choices with ethics/IRB/safety.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer emphasizing responsible conduct of research.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Scenario or protocol: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (stakeholders, risks, constraints); Student Task & Deliverables (options, safeguards, recommendation); Process Artifacts (risk log, consent/data plan, citations); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Make value trade-offs explicit; comply with safety/IRB; require transparent reasoning.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      'Chemistry and Chemical Biology': [
        {
          id: 'ra-tmpl-chem-1',
          title: 'Redesign a Mechanism/Kinetics Assignment (Chemistry & Chemical Biology)',
          approach: 'Purpose: Chain-of-evidence reasoning, uncertainty, and safety-forward design.',
          promptText: `**Redesign a Mechanism/Kinetics Assignment for Reflective Practice (Chemistry & Chemical Biology)**\n\n**Purpose:** Convert a generic worksheet into an authentic mechanism/kinetics investigation emphasizing evidence chains and uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer and chemistry educator.\n\n[2] Objective / Task — Produce a full prompt, outcomes, success criteria, and debrief plan aligned to safe, evidence-based chemical reasoning.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course], background in [Insert Topic].\n\n[4] Input Material — Current assignment or reaction/system: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (species, conditions, constraints); Student Task & Deliverables; Process Artifacts (spectra tables/kinetics fits, alternatives ruled out, uncertainty notes); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Require traceable evidence, alternative mechanisms or orders considered, safety and waste notes, and defensible conclusions.\n\n[7] Tone / Style — Academic and safety-aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-chem-2',
          title: 'Redesign an Analytical Chemistry Data Analysis Assignment',
          approach: 'Purpose: Emphasize calibration curves, detection limits, and uncertainty communication.',
          promptText: `**Redesign an Analytical Chemistry Data Analysis Assignment**\n\n**Purpose:** Transform a generic analysis into an integrity-focused analytical chemistry assignment with calibration and uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer for analytical chemistry.\n\n[2] Objective / Task — Produce a full prompt, outcomes, success criteria, and debrief plan for reproducible analysis.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Dataset/assay summary: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (assay, calibration, constraints); Student Task & Deliverables (calibration curve, LoD/LoQ, verification, interpretation); Process Artifacts; Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Transparency of data processing, validation, and reporting.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-chem-3',
          title: 'Redesign a Synthesis Planning & Safety Assignment',
          approach: 'Purpose: Integrate route selection, safety, waste, and evidence of choice.',
          promptText: `**Redesign a Synthesis Planning & Safety Assignment**\n\n**Purpose:** Convert a generic procedure into a synthesis planning task with safety-first reasoning and evidence.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer emphasizing safe, efficient synthesis.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan blending safety and rigor.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Target molecule/procedure: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (target, reagents, constraints); Student Task & Deliverables (route candidates, risk assessment, choice and justification); Process Artifacts (safety notes, waste plan, data sheets); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Safety, waste minimization, and defensible route selection with citations.\n\n[7] Tone / Style — Academic and safety-forward.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-chem-4',
          title: 'Redesign a Computational Chemistry Modeling Assignment',
          approach: 'Purpose: Emphasize model choice, calibration/validation, and reporting limitations.',
          promptText: `**Redesign a Computational Chemistry Modeling Assignment**\n\n**Purpose:** Turn a generic modeling task into an auditable workflow with validation against reference data.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer for computational chemistry.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — System/model focus: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (system, model, parameters); Student Task & Deliverables (baseline, calibration, validation, sensitivity); Process Artifacts; Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Document assumptions; compare to reference/experimental data; report limits.\n\n[7] Tone / Style — Academic and reproducibility-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-chem-5',
          title: 'Redesign a Dual-Audience Communication Assignment (Chemistry)',
          approach: 'Purpose: Technical memo + stakeholder brief for a chemical analysis or model.',
          promptText: `**Redesign a Dual-Audience Communication Assignment (Chemistry)**\n\n**Purpose:** Translate one chemical analysis into expert and stakeholder outputs with uncertainty notes.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer for scientific communication.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan requiring two artifacts.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Analysis/model summary: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (audience/decision context); Student Task & Deliverables (technical memo; stakeholder brief); Process Artifacts; Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Accuracy; uncertainty; inclusive language.\n\n[7] Tone / Style — Academic and audience-aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-chem-6',
          title: 'Redesign a Replication & Robustness Assignment (Chemistry)',
          approach: 'Purpose: Focus on replicating results and running robustness checks with transparent reporting.',
          promptText: `**Redesign a Replication & Robustness Assignment (Chemistry)**\n\n**Purpose:** Transform a literature summary into replication and robustness work with transparent reporting.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer for replicable chemistry.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan for replication.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Target protocol/dataset: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief; Student Task & Deliverables (replication plan, results, robustness checks, comparison); Process Artifacts (prereg notes, deviations log, environment); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Honest reporting of deviations, uncertainty, and negative findings.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Physics: [
        {
          id: 'ra-tmpl-phys-1',
          title: 'Redesign a Modeling & Measurement Assignment (Physics)',
          approach: 'Purpose: Emphasize model choice, calibration/validation, and uncertainty.',
          promptText: `**Redesign a Modeling & Measurement Assignment for Reflective Practice (Physics)**\n\n**Purpose:** Transform a generic problem set into an authentic modeling/measurement assignment with calibration, validation, and reflection.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer and physics educator designing for physical insight and validation.\n\n[2] Objective / Task — Produce a full prompt, outcomes, success criteria, and debrief plan aligned to rigorous modeling and measurement.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course], background in [Insert Topic].\n\n[4] Input Material — Current assignment or system: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (system, parameters, constraints); Student Task & Deliverables; Process Artifacts (sanity checks, calibration table, residuals/uncertainty analysis); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Highlight assumptions/limits, validation against analytic/special cases, and uncertainty reasoning.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-phys-2',
          title: 'Redesign an Experimental Design & Error Analysis Assignment (Physics)',
          approach: 'Purpose: Emphasize measurement design, error sources, propagation, and validation.',
          promptText: `**Redesign an Experimental Design & Error Analysis Assignment (Physics)**\n\n**Purpose:** Convert a generic lab to an assignment centered on error analysis and validation.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer guiding rigorous experimental physics.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Current lab/system: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (apparatus, range, constraints); Student Task & Deliverables (design, measurement, error propagation, validation); Process Artifacts (raw data, calibration, uncertainty tables); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Safety, proper calibration, and honest uncertainty reporting.\n\n[7] Tone / Style — Academic and safety-aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-phys-3',
          title: 'Redesign a Computational Simulation & Validation Assignment (Physics)',
          approach: 'Purpose: Emphasize simulation design, stability, and validation against analytic cases.',
          promptText: `**Redesign a Computational Simulation & Validation Assignment (Physics)**\n\n**Purpose:** Turn a generic simulation into a validated, auditable study.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer for computational physics.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Current simulation/system: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (system, model, discretization); Student Task & Deliverables (baseline, validation vs. analytic, sensitivity/stability); Process Artifacts; Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Reproducibility, honest limits, and uncertainty notes.\n\n[7] Tone / Style — Academic and reproducibility-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-phys-4',
          title: 'Redesign a Multi-Framework Methods Assignment (Physics)',
          approach: 'Purpose: Compare energy vs. momentum approaches (or other frameworks) and reconcile.',
          promptText: `**Redesign a Multi-Framework Methods Assignment (Physics)**\n\n**Purpose:** Transform a generic problem into a comparison of two physics methods leading to a justified synthesis.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer promoting method comparison.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Problem/system: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief; Student Task & Deliverables (apply Method A; apply Method B; reconcile); Process Artifacts; Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Correct application and explicit limits for each framework.\n\n[7] Tone / Style — Academic and comparative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-phys-5',
          title: 'Redesign a Dual-Audience Communication Assignment (Physics)',
          approach: 'Purpose: Technical memo and stakeholder brief from the same physics analysis.',
          promptText: `**Redesign a Dual-Audience Communication Assignment (Physics)**\n\n**Purpose:** Translate a single physics analysis into two audience-appropriate outputs.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer emphasizing communication.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan requiring two artifacts.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Analysis summary: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (audience and context); Student Task & Deliverables (expert memo; stakeholder brief); Process Artifacts; Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Accuracy; uncertainty; plain language for non-experts.\n\n[7] Tone / Style — Academic and audience-aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-phys-6',
          title: 'Redesign an Ethics & Safety in Lab Practices Assignment (Physics)',
          approach: 'Purpose: Link experimental design to safety, integrity, and responsible reporting.',
          promptText: `**Redesign an Ethics & Safety in Lab Practices Assignment (Physics)**\n\n**Purpose:** Convert a generic safety note into a consequential assignment integrated with experimental design.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer emphasizing responsible physics practice.\n\n[2] Objective / Task — Produce a full prompt, outcomes, success criteria, and debrief plan linking design to safety/integrity.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Lab context/scenario: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (risks/constraints); Student Task & Deliverables (options, safeguards, recommendation); Process Artifacts (risk log, calibration evidence, citations); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Safety compliance, integrity-by-design, and transparent limits.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      'Marine and Environmental Sciences': [
        {
          id: 'ra-tmpl-mes-1',
          title: 'Redesign a Field Sampling & Analysis Assignment (Marine & Environmental Sciences)',
          approach: 'Purpose: Emphasize sampling design, confounds, uncertainty, and policy relevance.',
          promptText: `**Redesign a Field Sampling & Analysis Assignment for Reflective Practice (Marine & Environmental Sciences)**\n\n**Purpose:** Convert a generic report into a field sampling/analysis assignment that foregrounds confounds, uncertainty, and policy-relevant reasoning.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer with environmental field methods expertise.\n\n[2] Objective / Task — Produce a full prompt, outcomes, success criteria, and debrief plan aligned to ethical, rigorous field practice.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course], background in [Insert Topic].\n\n[4] Input Material — Current assignment or field focus: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (site, data, constraints); Student Task & Deliverables; Process Artifacts (sampling frame, instrument calibration, data provenance, uncertainty visualization); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Address confounds, safety, consent/data ethics (if applicable), and uncertainty communication with integrity-by-design.\n\n[7] Tone / Style — Academic and practical.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-mes-2',
          title: 'Redesign a Time-Series Environmental Data Analysis Assignment',
          approach: 'Purpose: Emphasize provenance, verification, seasonality, and uncertainty communication.',
          promptText: `**Redesign a Time-Series Environmental Data Analysis Assignment**\n\n**Purpose:** Transform a generic data task into a transparent environmental time-series analysis with verification.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer for environmental analytics.\n\n[2] Objective / Task — Produce a full prompt, outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Dataset/variables: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (dataset, provenance, constraints); Student Task & Deliverables (EDA, seasonal decomposition, verification, interpretation); Process Artifacts; Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Source traceability; uncertainty notes; avoid overclaiming.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-mes-3',
          title: 'Redesign a Remote Sensing/Spatial Analysis Assignment',
          approach: 'Purpose: Emphasize sampling/validation, uncertainty, and policy-relevant communication.',
          promptText: `**Redesign a Remote Sensing/Spatial Analysis Assignment**\n\n**Purpose:** Convert a generic map exercise into an assignment with sampling/validation and uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer for spatial analysis.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Imagery/layers/topic: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (AOI, sensors, constraints); Student Task & Deliverables (processing, validation/sampling, uncertainty); Process Artifacts; Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Transparency in processing and validation; uncertainty communication.\n\n[7] Tone / Style — Academic and practical.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-mes-4',
          title: 'Redesign an Environmental Systems Modeling Assignment',
          approach: 'Purpose: Emphasize model choice, calibration/validation, sensitivity, and limits.',
          promptText: `**Redesign an Environmental Systems Modeling Assignment**\n\n**Purpose:** Turn a generic model into an auditable, validated system model with uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer for environmental modeling.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — System/model: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (system, model, parameters); Student Task & Deliverables (calibration, validation vs. reference, sensitivity); Process Artifacts; Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Reproducibility, explicit assumptions, uncertainty.\n\n[7] Tone / Style — Academic and reproducibility-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-mes-5',
          title: 'Redesign a Policy Stakeholder Communication Assignment',
          approach: 'Purpose: Produce a technical memo and stakeholder brief with actionable recommendations.',
          promptText: `**Redesign a Policy Stakeholder Communication Assignment**\n\n**Purpose:** Translate one environmental analysis into technical and policy-facing outputs.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer for science-policy communication.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan requiring two outputs.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Analysis summary: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (audience, policy context); Student Task & Deliverables (technical memo; policy brief with recommendations); Process Artifacts; Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Accuracy; uncertainty; inclusive/accessible language.\n\n[7] Tone / Style — Academic and audience-aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-mes-6',
          title: 'Redesign an Ethics/Consent/Data Governance Assignment (MES)',
          approach: 'Purpose: Integrate consent, data governance, equity, and integrity-by-design into field/data work.',
          promptText: `**Redesign an Ethics/Consent/Data Governance Assignment (MES)**\n\n**Purpose:** Convert a generic ethics note into a practical assignment linked to environmental data/fieldwork.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer emphasizing responsible environmental work.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Scenario/data context: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (stakeholders, consent, data governance); Student Task & Deliverables (options, safeguards, recommendation); Process Artifacts; Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Consent, privacy, equity, transparency.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Psychology: [
        {
          id: 'ra-tmpl-psy-1',
          title: 'Redesign a Measurement & Scale Development Assignment (Psychology)',
          approach: 'Purpose: Emphasize validity, reliability, item analysis, and transparent reporting.',
          promptText: `**Redesign a Measurement & Scale Development Assignment (Psychology)**\n\n**Purpose:** Transform a generic questionnaire task into a measurement assignment emphasizing validity/reliability and transparency.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer focusing on measurement quality.\n\n[2] Objective / Task — Produce a full prompt, outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Current measure/construct: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (construct, population, constraints); Student Task & Deliverables (item analysis, reliability, validity evidence, revision); Process Artifacts (prereg notes if applicable, assumptions, code/notebook); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Emphasize construct clarity, fairness, and transparent limitations.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-psy-2',
          title: 'Redesign an Experimental/Quasi-Experimental Design Assignment (Psychology)',
          approach: 'Purpose: Choose a feasible design under constraints and justify threats/mitigations.',
          promptText: `**Redesign an Experimental/Quasi-Experimental Design Assignment (Psychology)**\n\n**Purpose:** Convert a generic design prompt into a constrained, defensible experimental or quasi-experimental assignment.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer focusing on causal inference.\n\n[2] Objective / Task — Produce a full prompt, outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Study objective/constraints: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (population, constraints); Student Task & Deliverables (compare designs, choose, justify threats/mitigations); Process Artifacts (design table, assumptions log); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Ethics/feasibility; honesty about unobserved confounding.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-psy-3',
          title: 'Redesign a Replication & Robustness Assignment (Psychology)',
          approach: 'Purpose: Emphasize replication planning, robustness checks, and transparent reporting.',
          promptText: `**Redesign a Replication & Robustness Assignment (Psychology)**\n\n**Purpose:** Transform a literature summary into a replication-and-robustness assignment with open reporting.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer for replicable psychology.\n\n[2] Objective / Task — Produce a full prompt, outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Target paper/dataset: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief; Student Task & Deliverables (replication plan, robustness checks, comparison); Process Artifacts (prereg notes, deviations log, environment); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Honest reporting of deviations and uncertainty.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-psy-4',
          title: 'Redesign an Ethics/Consent & Risk Assignment (Psychology)',
          approach: 'Purpose: Integrate consent quality, risk/benefit, and safeguards into study design.',
          promptText: `**Redesign an Ethics/Consent & Risk Assignment (Psychology)**\n\n**Purpose:** Convert a generic ethics note into a consequential assignment linked to study design.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer emphasizing RCR and participant protection.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Study context/consent materials: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (stakeholders, risks, constraints); Student Task & Deliverables (consent quality, risk/benefit, safeguards, recommendation); Process Artifacts (checklist, mitigation table, citations); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Fairness, privacy, and transparency.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-psy-5',
          title: 'Redesign an Intervention Design & Evaluation Assignment (Psychology)',
          approach: 'Purpose: Propose intervention with feasible evaluation and measurement plan under constraints.',
          promptText: `**Redesign an Intervention Design & Evaluation Assignment (Psychology)**\n\n**Purpose:** Transform a generic project into a realistic intervention with evaluation and measurement under constraints.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer focused on applied evaluation.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Population/setting and constraints: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (population, setting, constraints); Student Task & Deliverables (theory of change, design, measures, evaluation plan); Process Artifacts (feasibility/ethics notes); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Feasibility, fairness, and transparent limitations.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ra-tmpl-psy-6',
          title: 'Redesign a Data Analysis & Reproducibility Assignment (Psychology)',
          approach: 'Purpose: Emphasize transparent workflow, preregistration (if applicable), and uncertainty-aware reporting.',
          promptText: `**Redesign a Data Analysis & Reproducibility Assignment (Psychology)**\n\n**Purpose:** Convert a generic analysis into a reproducible, auditable workflow with responsible reporting.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer for reproducible psychology.\n\n[2] Objective / Task — Produce a full prompt with outcomes, success criteria, and debrief plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Dataset/analysis focus: [Paste Text Here].\n\n[5] Output Format — Sections: Assignment Overview; Learning Outcomes; Scenario Brief (dataset, provenance, constraints); Student Task & Deliverables (EDA → modeling → checks → interpretation); Process Artifacts (notebook, environment, prereg/dev log); Success Criteria & Rubric Hooks; Debrief Plan.\n\n[6] Pedagogical or Ethical Criteria — Clear provenance, honest uncertainty, no overclaiming.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
    },
  },
  {
    id: 'in-class-activity',
    title: 'Build In-Class Activities',
    category: 'Instructional Activities',
    description:
      'Design active-learning activities that fit your discipline and class time. Use structured prompts, quick checks, and integrity-by-design to make thinking visible while keeping load reasonable.',
    generalPrompts: [
      {
        id: 'ica-1',
        title: 'Think–Pair–Share (with Evidence Hooks)',
        approach: 'Purpose: Structure a short TPS cycle with prompts, timing, and quick checks.',
        promptText:
          `**Think–Pair–Share (with Evidence Hooks)**\n\n**Purpose:** Structure a short TPS cycle with prompts, timing, and quick checks.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructor designing a Think–Pair–Share for [Insert Topic].\n\n[2] Objective / Task — Create one strong prompt, a pair prompt, and a share-out scaffold with criteria.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; class time: [Insert Minutes].\n\n[4] Input Material — Core concept + common misconception: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Prompt (individual) with 2-minute constraint\n- Pair Prompt (compare/contrast + evidence cues)\n- Share-Out Scaffold (3 criteria; board structure)\n- Quick Checks (2 items with answers)\n\n[6] Pedagogical or Ethical Criteria — Inclusion, fairness, and evidence-based discourse.\n\n[7] Tone / Style — Academic and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ica-2',
        title: 'Minute Paper + Misconception Check',
        approach: 'Purpose: Close a micro-lecture with a focused reflection and a targeted check.',
        promptText:
          `**Minute Paper + Misconception Check**\n\n**Purpose:** Close a micro-lecture with a focused reflection and a targeted check.\n\n**Prompt Text:**\n[1] Role & Context — You are planning a 1–2 minute wrap-up.\n\n[2] Objective / Task — Draft a minute-paper prompt and one misconception-targeted item with an answer.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Concept focus and typical confusion: [Paste Text Here].\n\n[5] Output Format — Sections: minute paper prompt; misconception check (with answer); how to collect; how to respond next class.\n\n[6] Pedagogical or Ethical Criteria — Keep concise and equitable; provide quick feedback loop.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ica-3',
        title: 'Jigsaw (Expert → Teach → Synthesize)',
        approach: 'Purpose: Divide subtopics, assign expert roles, and synthesize.',
        promptText:
          `**Jigsaw (Expert → Teach → Synthesize)**\n\n**Purpose:** Divide subtopics, assign expert roles, and synthesize.\n\n**Prompt Text:**\n[1] Role & Context — You are designing a short jigsaw activity.\n\n[2] Objective / Task — Define 3–4 subtopics, expert prompts, and a synthesis product.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; group size: [Insert].\n\n[4] Input Material — Topic decomposition: [Paste Text Here].\n\n[5] Output Format — Sections: subtopics; expert prompts; teach-back structure; synthesis deliverable; quick checks.\n\n[6] Pedagogical or Ethical Criteria — Ensure equitable roles and accessible materials.\n\n[7] Tone / Style — Academic and facilitative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ica-4',
        title: 'Gallery Walk (Artifacts + Criteria)',
        approach: 'Purpose: Students post small artifacts and rotate with criteria-based feedback.',
        promptText:
          `**Gallery Walk (Artifacts + Criteria)**\n\n**Purpose:** Students post small artifacts and rotate with criteria-based feedback.\n\n**Prompt Text:**\n[1] Role & Context — You are designing a 10–20 minute gallery walk.\n\n[2] Objective / Task — Define artifact format, rotation schedule, and criteria cards.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; room constraints: [Insert].\n\n[4] Input Material — Task statement and rubric hooks: [Paste Text Here].\n\n[5] Output Format — Sections: artifact spec; rotation; criteria card; exit ticket with answers.\n\n[6] Pedagogical or Ethical Criteria — Fair, actionable, and respectful feedback; include integrity notes.\n\n[7] Tone / Style — Academic and constructive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ica-5',
        title: 'Clicker/Concept Tests + Peer Instruction',
        approach: 'Purpose: Pose conceptual items, discuss, revote, and debrief.',
        promptText:
          `**Clicker/Concept Tests + Peer Instruction**\n\n**Purpose:** Pose conceptual items, discuss, revote, and debrief.\n\n**Prompt Text:**\n[1] Role & Context — You are creating a concept test cycle.\n\n[2] Objective / Task — Write 2 items (one anchor, one transfer), include mapped distractors.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Concept + pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections: Items (with answers + distractor rationales); discuss prompts; debrief notes.\n\n[6] Pedagogical or Ethical Criteria — Avoid trickery; use inclusive contexts; emphasize reasoning.\n\n[7] Tone / Style — Academic and diagnostic.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ica-6',
        title: 'Structured Debate / Fishbowl',
        approach: 'Purpose: Orchestrate a short, evidence-backed debate with roles and rubrics.',
        promptText:
          `**Structured Debate / Fishbowl**\n\n**Purpose:** Orchestrate an evidence-backed debate with roles and rubrics.\n\n**Prompt Text:**\n[1] Role & Context — You are staging a short debate/fishbowl.\n\n[2] Objective / Task — Define motion, roles, evidence rules, and a brief reflection.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; time: [Insert Minutes].\n\n[4] Input Material — Topic and legitimate positions: [Paste Text Here].\n\n[5] Output Format — Sections: motion; roles; evidence rules; audience prompts; reflection question.\n\n[6] Pedagogical or Ethical Criteria — Respectful discourse; fairness; cite evidence.\n\n[7] Tone / Style — Academic and inclusive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ica-7',
        title: 'Live Coding/Derivation with Pause Points',
        approach: 'Purpose: Plan a live derivation or coding demo with timed checks.',
        promptText:
          `**Live Coding/Derivation with Pause Points**\n\n**Purpose:** Plan a live derivation/coding demo with timed checks.\n\n**Prompt Text:**\n[1] Role & Context — You are preparing a short live demo.\n\n[2] Objective / Task — Outline steps, pause points, and 2 quick checks with answers.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Derivation/code snippet and risks: [Paste Text Here].\n\n[5] Output Format — Sections: step outline; pause prompts; checks with answers; what to show if time slips.\n\n[6] Pedagogical or Ethical Criteria — Transparency, inclusive pacing, and fallback plans.\n\n[7] Tone / Style — Academic and practical.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ica-8',
        title: 'Station Rotation (3 Short Tasks)',
        approach: 'Purpose: Design 3 fast stations that tackle distinct skills/views.',
        promptText:
          `**Station Rotation (3 Short Tasks)**\n\n**Purpose:** Design 3 fast stations that tackle distinct skills/views.\n\n**Prompt Text:**\n[1] Role & Context — You are arranging 3 short stations.\n\n[2] Objective / Task — Define tasks, artifacts, and rotation timing.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; class size: [Insert].\n\n[4] Input Material — Skills/perspectives to cover: [Paste Text Here].\n\n[5] Output Format — Sections: Station A; Station B; Station C; integrity notes; exit ticket with answers.\n\n[6] Pedagogical or Ethical Criteria — Maintain flow, equity, and visible process.\n\n[7] Tone / Style — Academic and organized.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ica-9',
        title: 'Case Snapshots (Lightning Rounds)',
        approach: 'Purpose: Short case vignettes with 1–2 key questions and a rapid share-out.',
        promptText:
          `**Case Snapshots (Lightning Rounds)**\n\n**Purpose:** Short case vignettes with 1–2 key questions and rapid share-outs.\n\n**Prompt Text:**\n[1] Role & Context — You are building 2–3 lightning case vignettes.\n\n[2] Objective / Task — Write vignettes, 1–2 questions each, and a quick share plan.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Case setting and goal: [Paste Text Here].\n\n[5] Output Format — Sections: Vignettes; questions; share plan; checks with answers.\n\n[6] Pedagogical or Ethical Criteria — Realistic, respectful scenarios; uncertainty visible.\n\n[7] Tone / Style — Academic and applied.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ica-10',
        title: 'Muddiest Point → Triage Plan',
        approach: 'Purpose: Collect muddiest points, cluster fast, and triage with next steps.',
        promptText:
          `**Muddiest Point → Triage Plan**\n\n**Purpose:** Collect muddiest points, cluster quickly, and triage next steps.\n\n**Prompt Text:**\n[1] Role & Context — You will run a muddiest-point poll mid or end of class.\n\n[2] Objective / Task — Draft a prompt, a clustering scheme, and next-step responses.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; modality: [Insert].\n\n[4] Input Material — Current unit overview: [Paste Text Here].\n\n[5] Output Format — Sections: prompt; clustering labels; triage plan; message back to students.\n\n[6] Pedagogical or Ethical Criteria — Encourage honest reporting; respond equitably.\n\n[7] Tone / Style — Academic and empathetic.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
    ],
    disciplinePrompts: {
      Mathematics: [
        {
          id: 'ica-math-1',
          title: 'Proof Critique TPS (Math)',
          approach: 'Purpose: Think–pair–share around a short proof or counterexample search.',
          promptText:
            `**Proof Critique TPS (Mathematics)**\n\n**Purpose:** Run a focused TPS on a short proof sketch or counterexample idea.\n\n**Prompt Text:**\n[1] Role & Context — You are facilitating a proof critique on [Insert Topic].\n\n[2] Objective / Task — Draft an individual prompt, pair comparison prompts, and share criteria.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Short proof sketch or conjecture: [Paste Text Here].\n\n[5] Output Format — Sections: individual; pair; share criteria; quick checks (answers).\n\n[6] Pedagogical or Ethical Criteria — Emphasize reasoning clarity and respectful critique.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-math-2',
          title: 'Problem-Solving Stations (Math)',
          approach: 'Purpose: Three short stations: concept, computation, and communication.',
          promptText:
            `**Problem-Solving Stations (Mathematics)**\n\n**Purpose:** Rotate through concept, computation, and communication tasks.\n\n**Prompt Text:**\n[1] Role & Context — You are designing 3 math stations.\n\n[2] Objective / Task — Define tasks, artifacts, rotation, and checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Target skills and pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections: Station A/B/C; integrity notes; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Reasoning transparency; avoid trick items.\n\n[7] Tone / Style — Academic and structured.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-math-3',
          title: 'Worked → Faded In‑Class (Math)',
          approach: 'Purpose: Live worked example, then partial, then unguided with keys.',
          promptText:
            `**Worked → Faded In‑Class (Mathematics)**\n\n**Purpose:** Live worked example → partial → unguided sequence with checks.\n\n**Prompt Text:**\n[1] Role & Context — You are staging a faded sequence.\n\n[2] Objective / Task — Script key steps, pauses, and quick checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Problem and pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections: A worked; B partial; C unguided + key; pitfalls; checks with answers.\n\n[6] Pedagogical or Ethical Criteria — Emphasize verification and reasoning.\n\n[7] Tone / Style — Academic and coaching-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-math-4',
          title: 'Concept Tests + Peer Instruction (Math)',
          approach: 'Purpose: Two concept items with mapped distractors and debrief.',
          promptText:
            `**Concept Tests + Peer Instruction (Mathematics)**\n\n**Purpose:** Run two concept tests with peer discussion and debrief.\n\n**Prompt Text:**\n[1] Role & Context — You are building two concept questions.\n\n[2] Objective / Task — Write items, distractor rationales, and debrief prompts.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Concept + pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections: Items with answers/rationales; discuss prompts; debrief notes.\n\n[6] Pedagogical or Ethical Criteria — Fairness, inclusion, clarity.\n\n[7] Tone / Style — Academic and diagnostic.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-math-5',
          title: 'Modeling Demo + Pause Checks (Math)',
          approach: 'Purpose: Live modeling choice with explicit assumptions and checks.',
          promptText:
            `**Modeling Demo + Pause Checks (Mathematics)**\n\n**Purpose:** Demonstrate a modeling choice with assumptions and validation checks.\n\n**Prompt Text:**\n[1] Role & Context — You are planning a short demo.\n\n[2] Objective / Task — Outline model setup, check against a special case, and include one sensitivity note.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Model and context: [Paste Text Here].\n\n[5] Output Format — Sections: setup; check; sensitivity; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Honest limits; reproducibility cues.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-math-6',
          title: 'Integrity-by-Design In‑Class (Math)',
          approach: 'Purpose: Make process evidence visible during an in-class task.',
          promptText:
            `**Integrity-by-Design In‑Class (Mathematics)**\n\n**Purpose:** Require small artifacts (scratch, attempts, citations) during class.\n\n**Prompt Text:**\n[1] Role & Context — You are embedding integrity in an activity.\n\n[2] Objective / Task — Specify artifacts to capture, how to share, and a quick audit note.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Task summary: [Paste Text Here].\n\n[5] Output Format — Sections: artifacts; sharing; audit; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Privacy boundaries; fairness; learning focus.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Biology: [
        {
          id: 'ica-bio-1',
          title: 'Pre‑Lab Clickers + Pair Checks (Bio)',
          approach: 'Purpose: Surface misconceptions before lab with quick discussion.',
          promptText:
            `**Pre‑Lab Clickers + Pair Checks (Biology)**\n\n**Purpose:** Surface misconceptions and align safety/controls.\n\n**Prompt Text:**\n[1] Role & Context — You are planning a pre‑lab concept check.\n\n[2] Objective / Task — Write 2 clicker items with mapped distractors and pair prompts.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Lab topic/pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections: items with answers/rationales; pair prompts; debrief notes.\n\n[6] Pedagogical or Ethical Criteria — Safety and inclusion; fair items.\n\n[7] Tone / Style — Academic and diagnostic.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-bio-2',
          title: 'Troubleshooting Stations (Bio)',
          approach: 'Purpose: Rotate through common failure modes with checks and fixes.',
          promptText:
            `**Troubleshooting Stations (Biology)**\n\n**Purpose:** Practice checks and fixes for typical wet‑lab issues.\n\n**Prompt Text:**\n[1] Role & Context — You are preparing 3 troubleshooting stations.\n\n[2] Objective / Task — Describe issue → check → fix for each station with safety notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Procedure and failures: [Paste Text Here].\n\n[5] Output Format — Sections: Station A/B/C; safety/ethics; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Safety first; documentation and integrity.\n\n[7] Tone / Style — Academic and safety‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-bio-3',
          title: 'Data Interpretation TPS (Bio)',
          approach: 'Purpose: Think–pair–share on a small figure/table with uncertainty notes.',
          promptText:
            `**Data Interpretation TPS (Biology)**\n\n**Purpose:** Interpret a small figure/table with uncertainty and controls.\n\n**Prompt Text:**\n[1] Role & Context — You are staging a data TPS.\n\n[2] Objective / Task — Draft the individual, pair, and share prompts; include uncertainty.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Figure/table: [Paste Text Here].\n\n[5] Output Format — Sections: individual; pair; share; quick checks with answers.\n\n[6] Pedagogical or Ethical Criteria — Avoid overclaiming; use inclusive framing.\n\n[7] Tone / Style — Academic and applied.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-bio-4',
          title: 'Concept Map Gallery (Bio)',
          approach: 'Purpose: Build and compare concept maps to reduce fragmentation.',
          promptText:
            `**Concept Map Gallery (Biology)**\n\n**Purpose:** Students draw mini concept maps and compare.\n\n**Prompt Text:**\n[1] Role & Context — You are planning a concept map gallery.\n\n[2] Objective / Task — Define map nodes/links scope, gallery rotation, and critique prompts.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Core concepts: [Paste Text Here].\n\n[5] Output Format — Sections: spec; rotation; critique prompts; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Precision and inclusion.\n\n[7] Tone / Style — Academic and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-bio-5',
          title: 'Ethics/Fairness Roleplay (Bio)',
          approach: 'Purpose: Short roleplay on consent, privacy, or responsible reporting.',
          promptText:
            `**Ethics/Fairness Roleplay (Biology)**\n\n**Purpose:** Explore consent/privacy/reporting via a short roleplay.\n\n**Prompt Text:**\n[1] Role & Context — You are staging a 10–15 minute roleplay.\n\n[2] Objective / Task — Define roles, scenario, prompts, and a debrief question.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Scenario context: [Paste Text Here].\n\n[5] Output Format — Sections: roles; scenario; prompts; debrief; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Respectful framing; equity and feasibility.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-bio-6',
          title: 'Integrity Artifacts In‑Class (Bio)',
          approach: 'Purpose: Capture process artifacts during activity to support integrity and feedback.',
          promptText:
            `**Integrity Artifacts In‑Class (Biology)**\n\n**Purpose:** Require small auditable artifacts during activity for learning and integrity.\n\n**Prompt Text:**\n[1] Role & Context — You are embedding process evidence.\n\n[2] Objective / Task — Specify artifacts, sampling checks, and privacy boundaries.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Activity context: [Paste Text Here].\n\n[5] Output Format — Sections: artifacts; sampling; privacy; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Support learning, not surveillance.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      'Chemistry and Chemical Biology': [
        {
          id: 'ica-chem-1',
          title: 'Mechanism Whiteboard Walk (Chem)',
          approach: 'Purpose: Whiteboard mechanism alternatives and evidence.',
          promptText:
            `**Mechanism Whiteboard Walk (Chemistry)**\n\n**Purpose:** Compare mechanism alternatives with evidence notes.\n\n**Prompt Text:**\n[1] Role & Context — You are staging a short whiteboard walk.\n\n[2] Objective / Task — Provide prompt, evidence criteria, and safety/assumption notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Reaction/system: [Paste Text Here].\n\n[5] Output Format — Sections: prompt; evidence notes; safety/assumptions; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Safety; uncertainty transparency.\n\n[7] Tone / Style — Academic and safety‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-chem-2',
          title: 'Spectra Stations (Chem)',
          approach: 'Purpose: Rotate through IR/NMR features and candidate mapping.',
          promptText:
            `**Spectra Stations (Chemistry)**\n\n**Purpose:** Practice feature logging and candidate mapping.\n\n**Prompt Text:**\n[1] Role & Context — You are planning spectra stations.\n\n[2] Objective / Task — Define features → candidates → uncertainty prompts.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Spectra snippets: [Paste Text Here].\n\n[5] Output Format — Sections: Station A/B/C; uncertainty notes; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Clarity and uncertainty communication.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-chem-3',
          title: 'Kinetics Lightning Fit (Chem)',
          approach: 'Purpose: Quick initial-rates fit, assumptions note, validation check.',
          promptText:
            `**Kinetics Lightning Fit (Chemistry)**\n\n**Purpose:** Practice initial rates, simple fit, and one validation check.\n\n**Prompt Text:**\n[1] Role & Context — You are designing a quick fit activity.\n\n[2] Objective / Task — Provide data, fit step outline, assumptions, and validation.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Small data table: [Paste Text Here].\n\n[5] Output Format — Sections: data; fit outline; assumptions; validation; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Emphasize assumptions and limits.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-chem-4',
          title: 'Safety Micro‑Lab (Chem)',
          approach: 'Purpose: Micro procedure with hazard→control mapping and waste notes.',
          promptText:
            `**Safety Micro‑Lab (Chemistry)**\n\n**Purpose:** Practice stepwise procedure with hazard→control and disposal.\n\n**Prompt Text:**\n[1] Role & Context — You are staging a short safety-first micro‑lab.\n\n[2] Objective / Task — Provide steps, hazard→control table, and waste notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Procedure excerpt and hazards: [Paste Text Here].\n\n[5] Output Format — Sections: steps; hazard→control; disposal; debrief; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Safety and responsible conduct.\n\n[7] Tone / Style — Academic and safety‑conscious.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-chem-5',
          title: 'Mechanism Debate (Chem)',
          approach: 'Purpose: Structured debate on competing mechanisms with evidence rules.',
          promptText:
            `**Mechanism Debate (Chemistry)**\n\n**Purpose:** Contrast mechanisms and weigh evidence.\n\n**Prompt Text:**\n[1] Role & Context — You are organizing a short debate.\n\n[2] Objective / Task — Define motion, roles, evidence rules, and debrief.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Mechanism options: [Paste Text Here].\n\n[5] Output Format — Sections: motion; roles; evidence rules; debrief; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Safety and uncertainty acknowledged.\n\n[7] Tone / Style — Academic and inclusive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-chem-6',
          title: 'Integrity Artifacts In‑Class (Chem)',
          approach: 'Purpose: Capture spectra logs/fits/alternatives during activity.',
          promptText:
            `**Integrity Artifacts In‑Class (Chemistry)**\n\n**Purpose:** Capture small artifacts (features logs, fit snapshots, rejected alternatives).\n\n**Prompt Text:**\n[1] Role & Context — You are embedding integrity into an in‑class task.\n\n[2] Objective / Task — Specify artifacts, sampling checks, and safety/ethics notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Task context: [Paste Text Here].\n\n[5] Output Format — Sections: artifacts; sampling; safety/ethics; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Transparency without excess burden.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Physics: [
        {
          id: 'ica-phys-1',
          title: 'Demo Analysis TPS (Phys)',
          approach: 'Purpose: Analyze a live demo with assumptions/limits.',
          promptText:
            `**Demo Analysis TPS (Physics)**\n\n**Purpose:** Analyze a short demo focusing on assumptions and limits.\n\n**Prompt Text:**\n[1] Role & Context — You are planning a demo TPS.\n\n[2] Objective / Task — Draft individual, pair, and share prompts with checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Demo description: [Paste Text Here].\n\n[5] Output Format — Sections: individual; pair; share; checks with answers.\n\n[6] Pedagogical or Ethical Criteria — Units, limits, validation cues.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-phys-2',
          title: 'Quick Calibration/Uncertainty Lab (Phys)',
          approach: 'Purpose: Short calibration table, error propagation, suitability call.',
          promptText:
            `**Quick Calibration/Uncertainty Lab (Physics)**\n\n**Purpose:** Practice calibration and uncertainty in a short format.\n\n**Prompt Text:**\n[1] Role & Context — You are designing a micro lab.\n\n[2] Objective / Task — Provide calibration table skeleton, one propagation, and suitability note.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Instrument/context: [Paste Text Here].\n\n[5] Output Format — Sections: calibration; propagation; error sources; suitability; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Safety and honest uncertainty.\n\n[7] Tone / Style — Academic and safety‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-phys-3',
          title: 'Simulation Tuning with Checks (Phys)',
          approach: 'Purpose: Quick simulation with stability and validation checks.',
          promptText:
            `**Simulation Tuning with Checks (Physics)**\n\n**Purpose:** Tune a small simulation and check stability/validation.\n\n**Prompt Text:**\n[1] Role & Context — You are preparing a tiny simulation task.\n\n[2] Objective / Task — Outline parameters, stability/step checks, and a validation note.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — System and params: [Paste Text Here].\n\n[5] Output Format — Sections: setup; stability; validation; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Reproducibility; honest limits.\n\n[7] Tone / Style — Academic and reproducibility‑minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-phys-4',
          title: 'Error Analysis In‑Class (Phys)',
          approach: 'Purpose: Design → propagate → validate on a micro example.',
          promptText:
            `**Error Analysis In‑Class (Physics)**\n\n**Purpose:** Practice quick design, propagation, and validation.\n\n**Prompt Text:**\n[1] Role & Context — You are planning a short error analysis activity.\n\n[2] Objective / Task — Provide design notes, one propagation, and a validation step.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Apparatus/range: [Paste Text Here].\n\n[5] Output Format — Sections: design; propagation; validation; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Safety, units, and limits.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-phys-5',
          title: 'Concept Tests + Peer Instruction (Phys)',
          approach: 'Purpose: Two clicker items with mapped distractors and debrief.',
          promptText:
            `**Concept Tests + Peer Instruction (Physics)**\n\n**Purpose:** Pose two concept items and debrief.\n\n**Prompt Text:**\n[1] Role & Context — You are writing two concept items.\n\n[2] Objective / Task — Provide items, answers, distractor rationales, and debrief prompts.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Concept/pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections: items; rationales; debrief; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Fairness and inclusion.\n\n[7] Tone / Style — Academic and diagnostic.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-phys-6',
          title: 'Integrity Artifacts In‑Class (Phys)',
          approach: 'Purpose: Capture process artifacts in labs/simulations.',
          promptText:
            `**Integrity Artifacts In‑Class (Physics)**\n\n**Purpose:** Require process artifacts (logs, screenshots, notes) during class.\n\n**Prompt Text:**\n[1] Role & Context — You are embedding integrity‑by‑design.\n\n[2] Objective / Task — Specify artifacts and sampling/audit approach with privacy notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Lab/simulation context: [Paste Text Here].\n\n[5] Output Format — Sections: artifacts; sampling; privacy/ethics; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Fairness, privacy, and feasibility.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      'Marine and Environmental Sciences': [
        {
          id: 'ica-mes-1',
          title: 'Sampling Design Jigsaw (MES)',
          approach: 'Purpose: Subteams design frame/controls; teach-back and synthesize.',
          promptText:
            `**Sampling Design Jigsaw (MES)**\n\n**Purpose:** Subteams create parts of a sampling plan and synthesize.\n\n**Prompt Text:**\n[1] Role & Context — You are staging a jigsaw for sampling design.\n\n[2] Objective / Task — Define subtopics (frame, confounds, safety/consent), expert prompts, and synthesis.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Phenomenon/site: [Paste Text Here].\n\n[5] Output Format — Sections: subtopics; prompts; teach‑back; synthesis; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Safety, consent/data ethics, feasibility.\n\n[7] Tone / Style — Academic and practical.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-mes-2',
          title: 'Spatial/GIS Stations (MES)',
          approach: 'Purpose: Processing, validation, and uncertainty stations.',
          promptText:
            `**Spatial/GIS Stations (MES)**\n\n**Purpose:** Practice processing steps, validation sampling, and uncertainty notes.\n\n**Prompt Text:**\n[1] Role & Context — You are planning GIS stations.\n\n[2] Objective / Task — Define 3 stations with tasks and artifacts.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — AOI/layers and task: [Paste Text Here].\n\n[5] Output Format — Sections: Station A/B/C; artifacts; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Transparency and fairness.\n\n[7] Tone / Style — Academic and applied.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-mes-3',
          title: 'Time‑Series Lightning Analysis (MES)',
          approach: 'Purpose: EDA → decompose → quick verification → interpretation.',
          promptText:
            `**Time‑Series Lightning Analysis (MES)**\n\n**Purpose:** Practice quick EDA, decomposition cue, verification, and interpretation.\n\n**Prompt Text:**\n[1] Role & Context — You are planning a short time‑series activity.\n\n[2] Objective / Task — Provide EDA cue, decomposition step, one verification, and interpretation note.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Dataset: [Paste Text Here].\n\n[5] Output Format — Sections: EDA; decompose; verify; interpret; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Provenance and uncertainty.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-mes-4',
          title: 'Policy Brief Roleplay (MES)',
          approach: 'Purpose: Expert memo → policy brief translation with audience prompts.',
          promptText:
            `**Policy Brief Roleplay (MES)**\n\n**Purpose:** Practice translating an expert memo to a policy brief.\n\n**Prompt Text:**\n[1] Role & Context — You are staging a short roleplay.\n\n[2] Objective / Task — Provide expert memo cues, policy brief checklist, and translation rationale.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; audience: [Insert].\n\n[4] Input Material — Analysis/risk finding: [Paste Text Here].\n\n[5] Output Format — Sections: expert memo; policy brief; translation rationale; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Accuracy; uncertainty; equity.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-mes-5',
          title: 'Consent/Data Governance Scenario (MES)',
          approach: 'Purpose: Small‑group scenario work with safeguards and consent quality.',
          promptText:
            `**Consent/Data Governance Scenario (MES)**\n\n**Purpose:** Explore consent and data governance via scenario prompts.\n\n**Prompt Text:**\n[1] Role & Context — You are planning a short scenario activity.\n\n[2] Objective / Task — Provide checklist, safeguards, and decision notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Scenario context: [Paste Text Here].\n\n[5] Output Format — Sections: checklist; safeguards; decision notes; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Equity, privacy, feasibility.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-mes-6',
          title: 'Pre‑Work + In‑Class Link (MES)',
          approach: 'Purpose: Short pre‑work linked to an in‑class task and check.',
          promptText:
            `**Pre‑Work + In‑Class Link (MES)**\n\n**Purpose:** Connect concise pre‑work to a class activity and check.\n\n**Prompt Text:**\n[1] Role & Context — You are planning pre‑work plus in‑class link.\n\n[2] Objective / Task — Provide pre‑work outline, prompts, checks, and activity tie‑in.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic/goals: [Paste Text Here].\n\n[5] Output Format — Sections: pre‑work; checks; in‑class link; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Accessibility and inclusion.\n\n[7] Tone / Style — Academic and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Psychology: [
        {
          id: 'ica-psy-1',
          title: 'Experiment Critique TPS (Psych)',
          approach: 'Purpose: Think–pair–share on threats and mitigations.',
          promptText:
            `**Experiment Critique TPS (Psychology)**\n\n**Purpose:** Critique threats and mitigations via TPS.\n\n**Prompt Text:**\n[1] Role & Context — You are staging a brief design critique.\n\n[2] Objective / Task — Provide individual, pair, and share prompts with checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Study sketch: [Paste Text Here].\n\n[5] Output Format — Sections: individual; pair; share; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Fairness; privacy; feasibility.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-psy-2',
          title: 'Measurement Item Workshop (Psych)',
          approach: 'Purpose: Draft, critique, and improve items with fairness lens.',
          promptText:
            `**Measurement Item Workshop (Psychology)**\n\n**Purpose:** Draft and refine items with validity/fairness in mind.\n\n**Prompt Text:**\n[1] Role & Context — You are running an item workshop.\n\n[2] Objective / Task — Provide prompts to draft, critique, and revise items; add quick checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Construct/population: [Paste Text Here].\n\n[5] Output Format — Sections: draft; critique prompts; revision; checks.\n\n[6] Pedagogical or Ethical Criteria — Fairness and transparent limitations.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-psy-3',
          title: 'Design Under Constraints (Psych)',
          approach: 'Purpose: Choose feasible design and list mitigations in-class.',
          promptText:
            `**Design Under Constraints (Psychology)**\n\n**Purpose:** Pick a feasible design and specify mitigations.\n\n**Prompt Text:**\n[1] Role & Context — You are facilitating a design selection task.\n\n[2] Objective / Task — Compare designs, choose, and list mitigations; add unobserved confounding note.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Constraints/objective: [Paste Text Here].\n\n[5] Output Format — Sections: comparison; choice; mitigations; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Ethics and feasibility.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-psy-4',
          title: 'Analysis Checks Lightning Lab (Psych)',
          approach: 'Purpose: EDA → modeling → checks → interpretation mini-flow.',
          promptText:
            `**Analysis Checks Lightning Lab (Psychology)**\n\n**Purpose:** Practice EDA, modeling, checks, and interpretation in brief.\n\n**Prompt Text:**\n[1] Role & Context — You are planning a short analysis activity.\n\n[2] Objective / Task — Provide steps and artifacts to capture.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Dataset: [Paste Text Here].\n\n[5] Output Format — Sections: EDA; modeling; checks; interpretation; artifacts; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Fairness, privacy, honest limits.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-psy-5',
          title: 'Ethics/Consent Roleplay (Psych)',
          approach: 'Purpose: Review consent quality, risks/benefits, safeguards via roleplay.',
          promptText:
            `**Ethics/Consent Roleplay (Psychology)**\n\n**Purpose:** Practice ethics review in a short roleplay.\n\n**Prompt Text:**\n[1] Role & Context — You are staging consent/risk roleplay.\n\n[2] Objective / Task — Provide consent checklist, risks/benefits, and safeguards.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Study context: [Paste Text Here].\n\n[5] Output Format — Sections: checklist; risks/benefits; safeguards; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Fairness, privacy, feasibility.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ica-psy-6',
          title: 'Dual‑Audience Share‑outs (Psych)',
          approach: 'Purpose: Share the same analysis to expert and stakeholder audiences.',
          promptText:
            `**Dual‑Audience Share‑outs (Psychology)**\n\n**Purpose:** Contrast expert vs. stakeholder share‑outs of the same result.\n\n**Prompt Text:**\n[1] Role & Context — You are planning fast dual‑audience communication.\n\n[2] Objective / Task — Provide expert/stakeholder prompts and translation rationale.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; audience: [Insert].\n\n[4] Input Material — Analysis/findings: [Paste Text Here].\n\n[5] Output Format — Sections: expert memo cues; stakeholder brief cues; translation rationale; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Accuracy; privacy; inclusive language.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
    },
  },
  {
    id: 'feedback-rubric',
    title: 'Use AI for Feedback & Rubrics',
    category: 'Assessment & Feedback',
    description:
      'Leverage AI to draft rubrics, generate calibrated exemplars, create comment banks, and structure fair, actionable feedback. Incorporate guardrails to reduce bias and support integrity-by-design.',
    generalPrompts: [
      {
        id: 'fr-1',
        title: 'Rubric from Outcomes (Criteria → Performance Levels)',
        approach: 'Purpose: Generate a rubric aligned to outcomes with clear performance descriptors.',
        promptText:
          `**Rubric from Outcomes (Criteria → Performance Levels)**\n\n**Purpose:** Generate a rubric aligned to outcomes with performance descriptors.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructor drafting a rubric.\n\n[2] Objective / Task — Convert outcomes into 4–6 criteria with 3–4 levels and plain-language descriptors.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; assignment type: [Insert].\n\n[4] Input Material — Outcomes and constraints: [Paste Text Here].\n\n[5] Output Format — Sections: criteria table; performance descriptors; rubric hooks; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Alignment, clarity, fairness, and inclusivity.\n\n[7] Tone / Style — Academic and clear.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'fr-2',
        title: 'Exemplars: Good vs. Non‑Example (Annotated)',
        approach: 'Purpose: Provide a concise exemplar and non‑example with rubric‑aligned annotations.',
        promptText:
          `**Exemplars: Good vs. Non‑Example (Annotated)**\n\n**Purpose:** Provide a good example and a non‑example annotated against the rubric.\n\n**Prompt Text:**\n[1] Role & Context — You are preparing exemplars for students.\n\n[2] Objective / Task — Draft a concise good example and a contrasting non‑example with annotations.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; artifact: [Insert].\n\n[4] Input Material — Rubric or criteria: [Paste Text Here].\n\n[5] Output Format — Sections: template; good example (+ why it meets criteria); non‑example (+ issues); quick checks.\n\n[6] Pedagogical or Ethical Criteria — Fairness; avoid stigmatizing non‑examples.\n\n[7] Tone / Style — Academic and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'fr-3',
        title: 'Calibration Set Builder (Anchor Papers/Artifacts)',
        approach: 'Purpose: Create 3–5 anchor artifacts with rubric‑mapped rationales for calibration.',
        promptText:
          `**Calibration Set Builder (Anchor Artifacts)**\n\n**Purpose:** Create 3–5 anchor artifacts with rubric‑mapped rationales.\n\n**Prompt Text:**\n[1] Role & Context — You are preparing a calibration set.\n\n[2] Objective / Task — Provide brief artifacts or excerpts, scores, and rationale per criterion.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; artifact: [Insert].\n\n[4] Input Material — Rubric or criteria: [Paste Text Here].\n\n[5] Output Format — Sections: anchors (A/B/C…); score tables; rationale; discussion prompts.\n\n[6] Pedagogical or Ethical Criteria — Transparency; fairness; bias‑aware notes.\n\n[7] Tone / Style — Academic and constructive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'fr-4',
        title: 'Comment Bank Generator (Criterion‑Aligned)',
        approach: 'Purpose: Draft supportive comments mapped to rubric criteria and performance levels.',
        promptText:
          `**Comment Bank Generator (Criterion‑Aligned)**\n\n**Purpose:** Draft supportive, specific comments aligned to rubric criteria/levels.\n\n**Prompt Text:**\n[1] Role & Context — You are creating a reusable comment bank.\n\n[2] Objective / Task — For each criterion×level, write 2–3 comments (constructive, specific, fair).\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; artifact: [Insert].\n\n[4] Input Material — Rubric and any pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections: comment tables; usage tips; integrity note (originality/citations).\n\n[6] Pedagogical or Ethical Criteria — Avoid bias; be actionable; respect privacy.\n\n[7] Tone / Style — Academic and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'fr-5',
        title: 'AI Feedback Guardrails (Prompt + Policy)',
        approach: 'Purpose: Create a safe, course‑specific AI feedback prompt with do/don’t and attribution rules.',
        promptText:
          `**AI Feedback Guardrails (Prompt + Policy)**\n\n**Purpose:** Draft a safe AI prompt and usage policy for formative feedback.\n\n**Prompt Text:**\n[1] Role & Context — You are writing guardrails for AI feedback.\n\n[2] Objective / Task — Create a feedback prompt, scope/limits, and an attribution rule.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; allowed use: [Insert].\n\n[4] Input Material — Rubric and course policy: [Paste Text Here].\n\n[5] Output Format — Sections: prompt; do/don’t; privacy/ethics; attribution; examples.\n\n[6] Pedagogical or Ethical Criteria — Fairness, privacy, transparency; discourage overreliance.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'fr-6',
        title: 'Self & Peer Assessment Scaffold',
        approach: 'Purpose: Provide checklists and prompts to support fair self/peer review.',
        promptText:
          `**Self & Peer Assessment Scaffold**\n\n**Purpose:** Support fair, criterion‑aligned self/peer review.\n\n**Prompt Text:**\n[1] Role & Context — You are designing a self/peer assessment set.\n\n[2] Objective / Task — Draft checklists, prompts, and a reflection form linked to criteria.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; artifact: [Insert].\n\n[4] Input Material — Rubric/criteria: [Paste Text Here].\n\n[5] Output Format — Sections: self checklist; peer checklist; reflection; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Fairness; civility; bias mitigation.\n\n[7] Tone / Style — Academic and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'fr-7',
        title: 'Feedback → Revision Plan Mapper',
        approach: 'Purpose: Turn feedback into a concrete revision log with priorities and evidence.',
        promptText:
          `**Feedback → Revision Plan Mapper**\n\n**Purpose:** Convert feedback into a prioritized revision plan with evidence.\n\n**Prompt Text:**\n[1] Role & Context — You are creating a revision planner.\n\n[2] Objective / Task — Provide a table: issue → change → evidence → priority.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; artifact: [Insert].\n\n[4] Input Material — Feedback summary and rubric: [Paste Text Here].\n\n[5] Output Format — Sections: plan table; success criteria; integrity note (originality/citation).\n\n[6] Pedagogical or Ethical Criteria — Actionable and fair; avoids punitive tone.\n\n[7] Tone / Style — Academic and constructive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'fr-8',
        title: 'Rubric → Student Checklist (Plain Language)',
        approach: 'Purpose: Translate rubric into a plain‑language checklist for students.',
        promptText:
          `**Rubric → Student Checklist (Plain Language)**\n\n**Purpose:** Translate rubric into a concise student checklist.\n\n**Prompt Text:**\n[1] Role & Context — You are creating a student‑facing checklist.\n\n[2] Objective / Task — Produce 5–8 checks tied to rubric criteria, in plain language.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; artifact: [Insert].\n\n[4] Input Material — Rubric: [Paste Text Here].\n\n[5] Output Format — Sections: checklist; mapping back to criteria; quick self‑check.\n\n[6] Pedagogical or Ethical Criteria — Accessible; non‑stigmatizing; integrity‑aware.\n\n[7] Tone / Style — Academic and clear.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'fr-9',
        title: 'Bias‑Aware Moderation Checklist',
        approach: 'Purpose: Provide checks to detect/mitigate bias in feedback and scoring.',
        promptText:
          `**Bias‑Aware Moderation Checklist**\n\n**Purpose:** Reduce bias in feedback and scoring through moderation checks.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting a moderation checklist.\n\n[2] Objective / Task — Provide checks across criteria, language, and scoring consistency.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Rubric and sample comments: [Paste Text Here].\n\n[5] Output Format — Sections: bias checks; examples; remediation steps; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Fairness, transparency, inclusion.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'fr-10',
        title: 'Rubric Alignment Audit (Objectives ↔ Criteria ↔ Evidence)',
        approach: 'Purpose: Audit alignment among objectives, criteria, and evidence artifacts.',
        promptText:
          `**Rubric Alignment Audit (Objectives ↔ Criteria ↔ Evidence)**\n\n**Purpose:** Audit alignment among objectives, criteria, and artifacts.\n\n**Prompt Text:**\n[1] Role & Context — You are auditing rubric alignment.\n\n[2] Objective / Task — Provide a table mapping objectives → criteria → evidence; note gaps.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; assignment: [Insert].\n\n[4] Input Material — Objectives, rubric, sample artifacts: [Paste Text Here].\n\n[5] Output Format — Sections: alignment table; gap analysis; recommendations.\n\n[6] Pedagogical or Ethical Criteria — Validity; fairness; transparency.\n\n[7] Tone / Style — Academic and structured.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
    ],
    disciplinePrompts: {
      Mathematics: [
        {
          id: 'fr-math-1',
          title: 'Proof Rubric (Clarity, Correctness, Structure, Insight)',
          approach: 'Purpose: Create a proof rubric and exemplar comments for each level.',
          promptText:
            `**Proof Rubric (Mathematics)**\n\n**Purpose:** Draft a proof rubric with criterion‑aligned comments.\n\n**Prompt Text:**\n[1] Role & Context — You are preparing a proof rubric.\n\n[2] Objective / Task — Define criteria and level descriptors; create a comment bank.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Learning outcomes and proof norms: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comment bank; bias‑aware moderation checks.\n\n[6] Pedagogical or Ethical Criteria — Precision; fairness; originality.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-math-2',
          title: 'Modeling/Computation Rubric (Setup, Validation, Uncertainty)',
          approach: 'Purpose: Build rubric and comment bank for modeling/computation tasks.',
          promptText:
            `**Modeling/Computation Rubric (Mathematics)**\n\n**Purpose:** Rubric for setup, validation, and uncertainty communication.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting a modeling rubric.\n\n[2] Objective / Task — Produce criteria, descriptors, and comments for each level.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes and model norms: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comment bank; revision plan hooks.\n\n[6] Pedagogical or Ethical Criteria — Reproducibility and integrity.\n\n[7] Tone / Style — Academic and reproducibility‑minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-math-3',
          title: 'Communication Rubric (Technical Memo ↔ Lay Summary)',
          approach: 'Purpose: Rubric for dual‑audience communication and translation rationale.',
          promptText:
            `**Communication Rubric (Mathematics)**\n\n**Purpose:** Rubric for expert memo and lay summary with translation notes.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting a communication rubric.\n\n[2] Objective / Task — Criteria and comments for accuracy, clarity, and audience fit.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/contexts: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; example comments; bias‑aware checks.\n\n[6] Pedagogical or Ethical Criteria — Accuracy and inclusive language.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-math-4',
          title: 'Problem Set Feedback Bank (Math)',
          approach: 'Purpose: Build reusable, criterion‑aligned comments for common slips.',
          promptText:
            `**Problem Set Feedback Bank (Mathematics)**\n\n**Purpose:** Create comment bank for common slips and strengths.\n\n**Prompt Text:**\n[1] Role & Context — You are building a feedback bank.\n\n[2] Objective / Task — For each criterion, add comments for each level and a revision hook.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Rubric/pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections: comments by criterion/level; revision hooks; guardrails for tone.\n\n[6] Pedagogical or Ethical Criteria — Fairness; specificity; constructive tone.\n\n[7] Tone / Style — Academic and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-math-5',
          title: 'Bias‑Aware Moderation (Math)',
          approach: 'Purpose: Checklist to spot bias in comments/scoring for math artifacts.',
          promptText:
            `**Bias‑Aware Moderation (Mathematics)**\n\n**Purpose:** Checklist to mitigate bias in feedback/scoring.\n\n**Prompt Text:**\n[1] Role & Context — You are writing moderation checks.\n\n[2] Objective / Task — Provide checks, examples, and remediation steps.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Rubric/comments: [Paste Text Here].\n\n[5] Output Format — Sections: checks; examples; remediation; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Fairness and transparency.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-math-6',
          title: 'Revision Plan Template (Math)',
          approach: 'Purpose: Map math feedback to prioritized revisions and evidence.',
          promptText:
            `**Revision Plan Template (Mathematics)**\n\n**Purpose:** Template to translate feedback into revisions with evidence.\n\n**Prompt Text:**\n[1] Role & Context — You are writing a revision plan template.\n\n[2] Objective / Task — Provide table and success criteria with example entries.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Sample feedback/rubric: [Paste Text Here].\n\n[5] Output Format — Sections: plan; example entries; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Actionable, fair, original work.\n\n[7] Tone / Style — Academic and constructive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Biology: [
        {
          id: 'fr-bio-1',
          title: 'Lab Report Rubric (Bio)',
          approach: 'Purpose: Rubric criteria for methods, data integrity, interpretation, and ethics.',
          promptText:
            `**Lab Report Rubric (Biology)**\n\n**Purpose:** Draft a lab report rubric and comment bank.\n\n**Prompt Text:**\n[1] Role & Context — You are creating a lab report rubric.\n\n[2] Objective / Task — Criteria/levels and comments for methods, integrity, and interpretation.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes and lab norms: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; bias‑aware checks; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Safety/ethics; provenance; fairness.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-bio-2',
          title: 'Experimental Plan Rubric (Bio)',
          approach: 'Purpose: Criteria for controls, confounds, feasibility, and safety.',
          promptText:
            `**Experimental Plan Rubric (Biology)**\n\n**Purpose:** Rubric for plan quality (controls, confounds, feasibility, safety).\n\n**Prompt Text:**\n[1] Role & Context — You are drafting a plan rubric.\n\n[2] Objective / Task — Provide criteria/levels and comment bank.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes and constraints: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; moderation checks.\n\n[6] Pedagogical or Ethical Criteria — Ethics; feasibility; integrity.\n\n[7] Tone / Style — Academic and safety‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-bio-3',
          title: 'Data Analysis Rubric (Bio)',
          approach: 'Purpose: Criteria for provenance, verification, and uncertainty communication.',
          promptText:
            `**Data Analysis Rubric (Biology)**\n\n**Purpose:** Rubric for provenance, verification, interpretation, and uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are crafting an analysis rubric.\n\n[2] Objective / Task — Define criteria/levels and comment bank.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/dataset: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; alignment audit.\n\n[6] Pedagogical or Ethical Criteria — Transparency and fairness.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-bio-4',
          title: 'Communication Rubric (Bio: Expert ↔ Stakeholder)',
          approach: 'Purpose: Dual‑audience rubric and comment bank for biological findings.',
          promptText:
            `**Communication Rubric (Biology: Expert ↔ Stakeholder)**\n\n**Purpose:** Rubric for expert memo and stakeholder brief.\n\n**Prompt Text:**\n[1] Role & Context — You are preparing a communication rubric.\n\n[2] Objective / Task — Provide criteria, descriptors, and comments with translation rationale.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; audience: [Insert].\n\n[4] Input Material — Findings/analysis: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; bias‑aware checks.\n\n[6] Pedagogical or Ethical Criteria — Accuracy; privacy; ethics.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-bio-5',
          title: 'Moderation Checklist (Bio)',
          approach: 'Purpose: Spot bias in lab/analysis feedback and scoring.',
          promptText:
            `**Moderation Checklist (Biology)**\n\n**Purpose:** Identify/mitigate bias in comments/scoring.\n\n**Prompt Text:**\n[1] Role & Context — You are writing moderation checks.\n\n[2] Objective / Task — Provide checks and remediation steps with examples.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Rubric/comments: [Paste Text Here].\n\n[5] Output Format — Sections: checks; examples; remediation; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Fairness and transparency.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-bio-6',
          title: 'Revision Plan Template (Bio)',
          approach: 'Purpose: Map biology feedback to revisions and evidence artifacts.',
          promptText:
            `**Revision Plan Template (Biology)**\n\n**Purpose:** Template to translate feedback into revisions with evidence.\n\n**Prompt Text:**\n[1] Role & Context — You are writing a revision planner.\n\n[2] Objective / Task — Provide a table template and example entries.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Feedback/rubric: [Paste Text Here].\n\n[5] Output Format — Sections: plan; example entries; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Honesty; fairness; original work.\n\n[7] Tone / Style — Academic and constructive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      'Chemistry and Chemical Biology': [
        {
          id: 'fr-chem-1',
          title: 'Mechanism/Kinetics Rubric (Chem)',
          approach: 'Purpose: Criteria for evidence mapping, assumptions, and safety notes.',
          promptText:
            `**Mechanism/Kinetics Rubric (Chemistry)**\n\n**Purpose:** Rubric for evidence mapping, assumptions, and safety.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting a rubric.\n\n[2] Objective / Task — Criteria/levels and comment bank mapping to evidence chains.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/norms: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; moderation checks.\n\n[6] Pedagogical or Ethical Criteria — Safety; uncertainty; integrity.\n\n[7] Tone / Style — Academic and safety‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-chem-2',
          title: 'Analytical Chemistry Rubric (Chem)',
          approach: 'Purpose: Criteria for calibration, LoD/LoQ, and uncertainty reporting.',
          promptText:
            `**Analytical Chemistry Rubric (Chemistry)**\n\n**Purpose:** Rubric for calibration, LoD/LoQ, and uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting an analytical rubric.\n\n[2] Objective / Task — Criteria/levels and comment bank.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/dataset: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; alignment audit.\n\n[6] Pedagogical or Ethical Criteria — Transparency and safety.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-chem-3',
          title: 'Synthesis Planning Rubric (Chem)',
          approach: 'Purpose: Criteria for route candidates, risk assessment, and evidence of choice.',
          promptText:
            `**Synthesis Planning Rubric (Chemistry)**\n\n**Purpose:** Rubric for route selection, safety, and justification.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting a synthesis planning rubric.\n\n[2] Objective / Task — Criteria/levels and comments; include waste/safety notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/constraints: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; moderation checks.\n\n[6] Pedagogical or Ethical Criteria — Safety; waste; transparency.\n\n[7] Tone / Style — Academic and safety‑forward.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-chem-4',
          title: 'Communication Rubric (Chem: Expert ↔ Stakeholder)',
          approach: 'Purpose: Dual‑audience criteria and comment bank.',
          promptText:
            `**Communication Rubric (Chemistry: Expert ↔ Stakeholder)**\n\n**Purpose:** Rubric for expert memo and stakeholder brief with translation rationale.\n\n**Prompt Text:**\n[1] Role & Context — You are preparing a communication rubric.\n\n[2] Objective / Task — Criteria/levels and comments; ensure inclusive language.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; audience: [Insert].\n\n[4] Input Material — Findings/analysis: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; bias‑aware checks.\n\n[6] Pedagogical or Ethical Criteria — Accuracy; uncertainty; inclusion.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-chem-5',
          title: 'Moderation Checklist (Chem)',
          approach: 'Purpose: Detect and mitigate bias in chemistry feedback and scoring.',
          promptText:
            `**Moderation Checklist (Chemistry)**\n\n**Purpose:** Checklist to mitigate bias and sustain quality.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting moderation checks.\n\n[2] Objective / Task — Provide checks, examples, and remediation steps.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Rubric/comments: [Paste Text Here].\n\n[5] Output Format — Sections: checks; examples; remediation; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Fairness and transparency.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-chem-6',
          title: 'Revision Plan Template (Chem)',
          approach: 'Purpose: Map feedback to revisions and evidence for chemical analysis/reporting.',
          promptText:
            `**Revision Plan Template (Chemistry)**\n\n**Purpose:** Template to translate feedback into revision actions with evidence.\n\n**Prompt Text:**\n[1] Role & Context — You are writing a revision plan template.\n\n[2] Objective / Task — Provide table, example entries, and success criteria.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Feedback/rubric: [Paste Text Here].\n\n[5] Output Format — Sections: plan; examples; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Safety, transparency, originality.\n\n[7] Tone / Style — Academic and constructive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Physics: [
        {
          id: 'fr-phys-1',
          title: 'Modeling/Measurement Rubric (Phys)',
          approach: 'Purpose: Criteria for model choice, calibration/validation, and uncertainty.',
          promptText:
            `**Modeling/Measurement Rubric (Physics)**\n\n**Purpose:** Rubric for model choice, calibration/validation, and uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting a modeling/measurement rubric.\n\n[2] Objective / Task — Criteria/levels and comment bank.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/norms: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; alignment audit.\n\n[6] Pedagogical or Ethical Criteria — Safety; units/limits; validation.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-phys-2',
          title: 'Experimental Design & Error Rubric (Phys)',
          approach: 'Purpose: Criteria for measurement design, error propagation, and validation.',
          promptText:
            `**Experimental Design & Error Rubric (Physics)**\n\n**Purpose:** Rubric for design quality, error analysis, and validation.\n\n**Prompt Text:**\n[1] Role & Context — You are crafting a lab rubric.\n\n[2] Objective / Task — Criteria/levels and comment bank; safety notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/apparatus: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; moderation checks.\n\n[6] Pedagogical or Ethical Criteria — Safety and honest uncertainty.\n\n[7] Tone / Style — Academic and safety‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-phys-3',
          title: 'Simulation Study Rubric (Phys)',
          approach: 'Purpose: Criteria for setup, stability checks, validation, and reporting.',
          promptText:
            `**Simulation Study Rubric (Physics)**\n\n**Purpose:** Rubric for setup, stability, validation, and reporting.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting a simulation rubric.\n\n[2] Objective / Task — Criteria/levels and comments; reproducibility notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/analytic references: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; alignment audit.\n\n[6] Pedagogical or Ethical Criteria — Reproducibility and honest limits.\n\n[7] Tone / Style — Academic and reproducibility‑minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-phys-4',
          title: 'Communication Rubric (Phys: Expert ↔ Stakeholder)',
          approach: 'Purpose: Dual‑audience criteria and comments for physics outputs.',
          promptText:
            `**Communication Rubric (Physics: Expert ↔ Stakeholder)**\n\n**Purpose:** Rubric for expert vs. stakeholder communication.\n\n**Prompt Text:**\n[1] Role & Context — You are preparing a communication rubric.\n\n[2] Objective / Task — Criteria/levels and comments; uncertainty and inclusive language notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; audience: [Insert].\n\n[4] Input Material — Findings/analysis: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; bias‑aware checks.\n\n[6] Pedagogical or Ethical Criteria — Accuracy and inclusion.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-phys-5',
          title: 'Moderation Checklist (Phys)',
          approach: 'Purpose: Bias‑aware checks for physics feedback/scoring.',
          promptText:
            `**Moderation Checklist (Physics)**\n\n**Purpose:** Checklist to mitigate bias and sustain quality.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting moderation checks.\n\n[2] Objective / Task — Provide checks, examples, and remediation steps.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Rubric/comments: [Paste Text Here].\n\n[5] Output Format — Sections: checks; examples; remediation; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Fairness and transparency.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-phys-6',
          title: 'Revision Plan Template (Phys)',
          approach: 'Purpose: Map physics feedback to revisions and evidence.',
          promptText:
            `**Revision Plan Template (Physics)**\n\n**Purpose:** Template to turn feedback into revisions with evidence.\n\n**Prompt Text:**\n[1] Role & Context — You are writing a revision planner.\n\n[2] Objective / Task — Provide table, examples, and success criteria.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Feedback/rubric: [Paste Text Here].\n\n[5] Output Format — Sections: plan; examples; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Safety; units/limits; honest uncertainty.\n\n[7] Tone / Style — Academic and constructive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      'Marine and Environmental Sciences': [
        {
          id: 'fr-mes-1',
          title: 'Field Sampling Rubric (MES)',
          approach: 'Purpose: Criteria for sampling frame, confounds, safety/consent, and uncertainty.',
          promptText:
            `**Field Sampling Rubric (MES)**\n\n**Purpose:** Rubric for frame quality, confound control, safety/consent, uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting a field sampling rubric.\n\n[2] Objective / Task — Criteria/levels and comment bank.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/site constraints: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; moderation checks.\n\n[6] Pedagogical or Ethical Criteria — Safety; consent/data ethics; equity.\n\n[7] Tone / Style — Academic and practical.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-mes-2',
          title: 'Spatial/Remote Sensing Rubric (MES)',
          approach: 'Purpose: Criteria for processing, validation, and uncertainty.',
          promptText:
            `**Spatial/Remote Sensing Rubric (MES)**\n\n**Purpose:** Rubric for processing steps, validation sampling, and uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are crafting a spatial rubric.\n\n[2] Objective / Task — Criteria/levels and comments; alignment audit.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/AOI: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; audit.\n\n[6] Pedagogical or Ethical Criteria — Transparency and fairness.\n\n[7] Tone / Style — Academic and applied.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-mes-3',
          title: 'Time‑Series Analysis Rubric (MES)',
          approach: 'Purpose: Criteria for EDA, decomposition, verification, and interpretation.',
          promptText:
            `**Time‑Series Analysis Rubric (MES)**\n\n**Purpose:** Rubric for EDA/decomposition/verification/interpretation.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting a time‑series rubric.\n\n[2] Objective / Task — Criteria/levels and comment bank.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/dataset: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; alignment audit.\n\n[6] Pedagogical or Ethical Criteria — Provenance; uncertainty.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-mes-4',
          title: 'Policy Brief Rubric (MES)',
          approach: 'Purpose: Criteria for expert memo → policy brief translation with equity lenses.',
          promptText:
            `**Policy Brief Rubric (MES)**\n\n**Purpose:** Rubric for expert memo and policy brief with translation rationale.\n\n**Prompt Text:**\n[1] Role & Context — You are crafting a policy communication rubric.\n\n[2] Objective / Task — Criteria/levels and comments; equity/impacts notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; audience: [Insert].\n\n[4] Input Material — Findings/analysis: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; moderation checks.\n\n[6] Pedagogical or Ethical Criteria — Accuracy; uncertainty; equity.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-mes-5',
          title: 'Moderation Checklist (MES)',
          approach: 'Purpose: Bias‑aware checks for environmental work feedback/scoring.',
          promptText:
            `**Moderation Checklist (MES)**\n\n**Purpose:** Checklist to mitigate bias and sustain quality.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting moderation checks.\n\n[2] Objective / Task — Provide checks, examples, and remediation steps.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Rubric/comments: [Paste Text Here].\n\n[5] Output Format — Sections: checks; examples; remediation; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Equity and transparency.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-mes-6',
          title: 'Revision Plan Template (MES)',
          approach: 'Purpose: Map feedback to revisions and evidence in environmental contexts.',
          promptText:
            `**Revision Plan Template (MES)**\n\n**Purpose:** Convert feedback into a prioritized revision plan with evidence.\n\n**Prompt Text:**\n[1] Role & Context — You are writing a revision planner.\n\n[2] Objective / Task — Provide a plan table, examples, and success criteria.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Feedback/rubric: [Paste Text Here].\n\n[5] Output Format — Sections: plan; examples; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Fairness and feasibility.\n\n[7] Tone / Style — Academic and constructive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Psychology: [
        {
          id: 'fr-psy-1',
          title: 'Measurement/Scale Rubric (Psych)',
          approach: 'Purpose: Criteria for item analysis, reliability, validity evidence.',
          promptText:
            `**Measurement/Scale Rubric (Psychology)**\n\n**Purpose:** Rubric for scale development quality.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting a measurement rubric.\n\n[2] Objective / Task — Criteria/levels and comment bank for items, reliability, validity.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/construct: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; moderation checks.\n\n[6] Pedagogical or Ethical Criteria — Fairness and transparency.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-psy-2',
          title: 'Design Rubric (Psych: Causal Inference)',
          approach: 'Purpose: Criteria for feasible design, threats, and mitigations.',
          promptText:
            `**Design Rubric (Psychology: Causal Inference)**\n\n**Purpose:** Rubric for design choice and mitigations under constraints.\n\n**Prompt Text:**\n[1] Role & Context — You are preparing a design rubric.\n\n[2] Objective / Task — Criteria/levels and comments for threats/mitigations.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/constraints: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; alignment audit.\n\n[6] Pedagogical or Ethical Criteria — Ethics; feasibility; transparency.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-psy-3',
          title: 'Analysis Rubric (Psych)',
          approach: 'Purpose: Criteria for EDA, modeling, checks, interpretation; privacy/ethics aware.',
          promptText:
            `**Analysis Rubric (Psychology)**\n\n**Purpose:** Rubric for analysis steps and interpretation with fairness.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting an analysis rubric.\n\n[2] Objective / Task — Criteria/levels and comment bank.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/dataset: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; alignment audit.\n\n[6] Pedagogical or Ethical Criteria — Privacy; fairness; honest limits.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-psy-4',
          title: 'Ethics/Consent Rubric (Psych)',
          approach: 'Purpose: Criteria for consent quality, risk/benefit, and safeguards.',
          promptText:
            `**Ethics/Consent Rubric (Psychology)**\n\n**Purpose:** Rubric for consent quality, risk/benefit, safeguards.\n\n**Prompt Text:**\n[1] Role & Context — You are preparing an ethics rubric.\n\n[2] Objective / Task — Criteria/levels and comment bank; include fairness/privacy.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Outcomes/context: [Paste Text Here].\n\n[5] Output Format — Sections: rubric; comments; moderation checks.\n\n[6] Pedagogical or Ethical Criteria — Equity, privacy, feasibility.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-psy-5',
          title: 'Moderation Checklist (Psych)',
          approach: 'Purpose: Bias‑aware checks to moderate feedback/scoring.',
          promptText:
            `**Moderation Checklist (Psychology)**\n\n**Purpose:** Checklist to mitigate bias and sustain quality.\n\n**Prompt Text:**\n[1] Role & Context — You are drafting moderation checks.\n\n[2] Objective / Task — Provide checks, examples, remediation steps.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Rubric/comments: [Paste Text Here].\n\n[5] Output Format — Sections: checks; examples; remediation; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Fairness and transparency.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'fr-psy-6',
          title: 'Revision Plan Template (Psych)',
          approach: 'Purpose: Map feedback to revisions and evidence for psychology artifacts.',
          promptText:
            `**Revision Plan Template (Psychology)**\n\n**Purpose:** Template to convert feedback into revisions with evidence.\n\n**Prompt Text:**\n[1] Role & Context — You are writing a revision plan template.\n\n[2] Objective / Task — Provide plan table, examples, and success criteria.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Feedback/rubric: [Paste Text Here].\n\n[5] Output Format — Sections: plan; example entries; integrity note.\n\n[6] Pedagogical or Ethical Criteria — Fairness; privacy; feasibility.\n\n[7] Tone / Style — Academic and constructive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
    },
  },
  {
    id: 'scaffold-activity',
    title: 'Scaffold Student Work',
    category: 'Instructional Activities',
    description:
      'Provide structured supports that guide students through complex tasks in manageable steps. Use checkpoints, templates, and reflective prompts to make thinking visible, promote integrity-by-design, and reduce cognitive load while preserving rigor.',
    generalPrompts: [
      {
        id: 'sa-1',
        title: 'Milestone Scaffold: Plan → Draft → Revise',
        approach: 'Purpose: Break a complex task into milestones with criteria and artifacts at each step.',
        promptText:
          `**Milestone Scaffold: Plan → Draft → Revise**\n\n**Purpose:** Break a complex task into milestones with criteria and artifacts at each step.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer scaffolding a multi‑step assignment for [Insert Domain/Task].\n\n[2] Objective / Task — Define three milestones (Plan → Draft → Revise) with deliverables, success criteria, and feedback hooks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Assignment goal and constraints: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Milestone 1: Plan (deliverables, criteria, process artifacts)\n- Milestone 2: Draft (deliverables, criteria, peer/AI feedback plan)\n- Milestone 3: Revise (revision log, improvement targets)\n- Integrity-by-Design: visible process, citations, originality checks\n- Exit Ticket (3 items with answers)\n\n[6] Pedagogical or Ethical Criteria — Reduce cognitive load; keep rigor; make thinking visible; support integrity.\n\n[7] Tone / Style — Academic and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'sa-2',
        title: 'Template + Example + Non-Example',
        approach: 'Purpose: Provide a template with a good example and a non-example to sharpen expectations.',
        promptText:
          `**Template + Example + Non-Example**\n\n**Purpose:** Provide a template and paired example/non‑example to clarify expectations.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructional designer creating a scaffold for a specific deliverable.\n\n[2] Objective / Task — Produce a student‑facing template, a concise good example, and a contrasting non‑example with annotations.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Deliverable type and outcomes: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Template (with labeled placeholders)\n- Good Example (annotated why it meets criteria)\n- Non‑Example (annotated issues)\n- Success Criteria (3–5 bullets)\n- Quick Checks (3 items with answers)\n\n[6] Pedagogical or Ethical Criteria — Be precise and fair; avoid stigmatizing non‑examples; emphasize uncertainty where relevant.\n\n[7] Tone / Style — Academic and clear.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'sa-3',
        title: 'Guided Problem Decomposition',
        approach: 'Purpose: Scaffold breaking a complex problem into subproblems with checks.',
        promptText:
          `**Guided Problem Decomposition**\n\n**Purpose:** Scaffold breaking a complex problem into subproblems with checks.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructor creating a decomposition scaffold for a challenging task.\n\n[2] Objective / Task — Identify subproblems, specify inputs/outputs for each, and add verification checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Problem statement: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Subproblem List (2–5) with inputs/outputs\n- Dependencies Map (simple text graph)\n- Checks for Each Subproblem (sanity/edge cases)\n- Integration Plan (order, risks, fallbacks)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Emphasize verification and boundaries; avoid overclaiming.\n\n[7] Tone / Style — Academic and structured.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'sa-4',
        title: 'Think‑Aloud + Self‑Explanation Prompts',
        approach: 'Purpose: Scaffold metacognition via think‑aloud checkpoints and self‑explanations.',
        promptText:
          `**Think‑Aloud + Self‑Explanation Prompts**\n\n**Purpose:** Scaffold metacognition via think‑aloud checkpoints and self‑explanations.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructor building a metacognitive scaffold.\n\n[2] Objective / Task — Insert 3–4 checkpoints with think‑aloud and self‑explanation prompts tied to criteria.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Task description and common pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Checkpoint Schedule (timing and purpose)\n- Think‑Aloud Prompts (2–3)\n- Self‑Explanation Prompts (2–3)\n- Evidence to Capture (notes/screen/audio; integrity considerations)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Encourage transparency; protect privacy; be inclusive.\n\n[7] Tone / Style — Academic and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'sa-5',
        title: 'Peer/AI Feedback Scaffold (Rubric Hooks)',
        approach: 'Purpose: Structure feedback with rubric‑aligned prompts and revision logs.',
        promptText:
          `**Peer/AI Feedback Scaffold (Rubric Hooks)**\n\n**Purpose:** Structure feedback with rubric‑aligned prompts and revision logs.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructor scaffolding effective feedback.\n\n[2] Objective / Task — Provide rubric hooks, targeted feedback prompts, and a revision log template.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Rubric criteria or outcomes: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Rubric Hooks (criteria with short descriptors)\n- Feedback Prompts (3–5 targeted questions)\n- Feedback Quality Checklist (fair, specific, actionable)\n- Revision Log Template (change → rationale → evidence)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Ensure fairness; discourage bias; promote integrity.\n\n[7] Tone / Style — Academic and constructive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'sa-6',
        title: 'Process Evidence Scaffold (Integrity‑by‑Design)',
        approach: 'Purpose: Require auditable process artifacts to support integrity and learning.',
        promptText:
          `**Process Evidence Scaffold (Integrity‑by‑Design)**\n\n**Purpose:** Require auditable process artifacts to support integrity and learning.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructor embedding integrity‑by‑design.\n\n[2] Objective / Task — Specify process artifacts to submit and how they will be checked.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Task and typical artifacts: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Required Artifacts (planning notes, logs, versions)\n- Audit Plan (spot checks, reproducibility, citation trail)\n- Privacy/Ethics Notes (what not to capture)\n- Success Criteria (3–5 bullets)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Support learning and integrity without surveillance creep.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'sa-7',
        title: 'Checkpoints + Timeboxing Plan',
        approach: 'Purpose: Add timed checkpoints with outputs to prevent last‑minute work.',
        promptText:
          `**Checkpoints + Timeboxing Plan**\n\n**Purpose:** Add timed checkpoints with outputs to prevent last‑minute work.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructor adding timeboxing to an assignment.\n\n[2] Objective / Task — Define 3–4 checkpoints with time budgets, outputs, and risk notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Assignment timeline and risks: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Checkpoint Table (deadline, time budget, output, risks)\n- Risk Mitigation (slips, blockers)\n- Communication Plan (what to submit; when/how)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Keep load reasonable; support equity (non‑punitive early help).\n\n[7] Tone / Style — Academic and practical.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'sa-8',
        title: 'Guided Reading/Pre‑Work Scaffold',
        approach: 'Purpose: Prepare students with a structured pre‑work set to reduce in‑class load.',
        promptText:
          `**Guided Reading/Pre‑Work Scaffold**\n\n**Purpose:** Prepare students with structured pre‑work to reduce in‑class load.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructor creating a guided pre‑work scaffold.\n\n[2] Objective / Task — Provide a short reading/preview task with prompts and checks for understanding.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and goals: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Pre‑Work Outline (15–30 minutes)\n- Prompts (3–5) focusing on threshold ideas\n- Checks for Understanding (3 items with answers)\n- How Pre‑Work Connects to Class Activities\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Keep concise; ensure accessibility and inclusion.\n\n[7] Tone / Style — Academic and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'sa-9',
        title: 'Dual‑Audience Deliverables Scaffold',
        approach: 'Purpose: Require technical and stakeholder outputs from the same analysis with guidance.',
        promptText:
          `**Dual‑Audience Deliverables Scaffold**\n\n**Purpose:** Require technical and stakeholder outputs from the same analysis with guidance.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructor scaffolding dual‑audience communication.\n\n[2] Objective / Task — Provide prompts and checklists for an expert memo and a stakeholder brief.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; stakeholder type: [Insert].\n\n[4] Input Material — Analysis/model summary: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Expert Memo Checklist (assumptions, uncertainty, methods)\n- Stakeholder Brief Checklist (plain language, implications, actions)\n- Translation Rationale Log\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Maintain accuracy; include uncertainty; ensure inclusive language.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'sa-10',
        title: 'Error/Edge‑Case Handling Scaffold',
        approach: 'Purpose: Scaffold anticipating and handling errors or edge cases in student work.',
        promptText:
          `**Error/Edge‑Case Handling Scaffold**\n\n**Purpose:** Scaffold anticipating and handling errors or edge cases.\n\n**Prompt Text:**\n[1] Role & Context — You are an instructor adding error/edge‑case scaffolds.\n\n[2] Objective / Task — Enumerate likely errors/edge cases and provide checks or fallback strategies.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Task summary and known pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Likely Errors/Edge Cases (list with brief fixes)\n- Checks (unit/sanity/logic) per case\n- Fallback Strategies (if check fails)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Promote safe debugging and honest reporting.\n\n[7] Tone / Style — Academic and practical.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
    ],
    disciplinePrompts: {
      Mathematics: [
        {
          id: 'sa-math-1',
          title: 'Proof Strategy Scaffold (Plan → Attempt → Revise)',
          approach: 'Purpose: Scaffold proof planning, attempts, counterexamples, and revision.',
          promptText:
            `**Proof Strategy Scaffold (Mathematics)**\n\n**Purpose:** Scaffold proof planning, attempts, counterexamples, and revision.\n\n**Prompt Text:**\n[1] Role & Context — You are a mathematics educator supporting proof construction.\n\n[2] Objective / Task — Provide plan → attempt → revise milestones with artifacts and checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Conjecture/topic: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Plan (lemma inventory, strategy, known results)\n- Attempt (scratch work, failed angles, partial results)\n- Revise (counterexample search or strategy refinement)\n- Integrity Artifacts (attempt log, citations)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Reward transparent process and justified choices.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-math-2',
          title: 'Modeling Workflow Scaffold (Setup → Calibrate → Validate)',
          approach: 'Purpose: Scaffold a math modeling workflow with checkpoints and artifacts.',
          promptText:
            `**Modeling Workflow Scaffold (Mathematics)**\n\n**Purpose:** Scaffold a modeling workflow with checkpoints and artifacts.\n\n**Prompt Text:**\n[1] Role & Context — You are a mathematics educator scaffolding modeling tasks.\n\n[2] Objective / Task — Specify setup, calibration, and validation steps with evidence.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — System/model class and data: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Setup (assumptions, equations, parameters)\n- Calibrate (fit steps, sensitivity)\n- Validate (analytic/special cases; residuals)\n- Process Artifacts (notebook, runs, seeds)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Emphasize honesty about limits and reproducibility.\n\n[7] Tone / Style — Academic and reproducibility‑minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-math-3',
          title: 'Problem Decomposition Scaffold (Proof/Computation)',
          approach: 'Purpose: Decompose a problem into lemmas or computational subproblems.',
          promptText:
            `**Problem Decomposition Scaffold (Mathematics)**\n\n**Purpose:** Decompose a problem into lemmas or computational subproblems.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding decomposition for a math task.\n\n[2] Objective / Task — List subproblems/lemmas, dependencies, and checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Problem statement: [Paste Text Here].\n\n[5] Output Format — Sections: Subproblem list; dependency map; checks; integration; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Encourage verification and bounds.\n\n[7] Tone / Style — Academic and structured.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-math-4',
          title: 'Worked → Partially Worked → Unguided (Math)',
          approach: 'Purpose: Provide a faded guidance scaffold for a target skill.',
          promptText:
            `**Worked → Partially Worked → Unguided (Mathematics)**\n\n**Purpose:** Provide a faded guidance scaffold for a target skill.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding a faded sequence.\n\n[2] Objective / Task — Provide Problem A (worked), B (partial), C (unguided) with keys and pitfalls.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Skill/pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections: A worked; B partial + solution; C unguided + key + hints; pitfalls; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Emphasize reasoning and checks.\n\n[7] Tone / Style — Academic and coaching‑minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-math-5',
          title: 'Integrity Artifacts Scaffold (Math)',
          approach: 'Purpose: Require scratch logs, alternate attempts, and citation trails.',
          promptText:
            `**Integrity Artifacts Scaffold (Mathematics)**\n\n**Purpose:** Require scratch logs, alternate attempts, and citation trails.\n\n**Prompt Text:**\n[1] Role & Context — You are embedding integrity artifacts in math work.\n\n[2] Objective / Task — Specify artifacts to submit and how they will be sampled/checked.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Problem set/project: [Paste Text Here].\n\n[5] Output Format — Sections: artifacts; sampling/audit; success criteria; privacy/ethics; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Encourage originality and transparency.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-math-6',
          title: 'Communication Scaffold (Technical ↔ Lay Summary)',
          approach: 'Purpose: Scaffold dual‑audience communication for math results.',
          promptText:
            `**Communication Scaffold (Mathematics: Technical ↔ Lay)**\n\n**Purpose:** Scaffold dual‑audience communication for math results.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding expert memo and lay summary.\n\n[2] Objective / Task — Provide checklists for each audience and a translation rationale.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Result/analysis summary: [Paste Text Here].\n\n[5] Output Format — Sections: expert memo checklist; lay summary checklist; translation rationale; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Maintain accuracy; note uncertainty; ensure inclusive language.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Biology: [
        {
          id: 'sa-bio-1',
          title: 'Experimental Plan Scaffold (Controls/Confounds)',
          approach: 'Purpose: Scaffold planning with controls, confounds, and feasibility.',
          promptText:
            `**Experimental Plan Scaffold (Biology)**\n\n**Purpose:** Scaffold planning with controls, confounds, and feasibility.\n\n**Prompt Text:**\n[1] Role & Context — You are a biology educator supporting experiment planning.\n\n[2] Objective / Task — Specify controls, confounds, measurements, and feasibility notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — System/assay and constraints: [Paste Text Here].\n\n[5] Output Format — Sections: plan; controls/confounds; measurement plan; feasibility/safety/ethics; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Ensure ethical, safe, and feasible design.\n\n[7] Tone / Style — Academic and safety‑conscious.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-bio-2',
          title: 'Lab Notebook Scaffold (Process Evidence)',
          approach: 'Purpose: Scaffold high‑quality lab documentation with checkpoints.',
          promptText:
            `**Lab Notebook Scaffold (Biology)**\n\n**Purpose:** Scaffold high‑quality lab documentation with checkpoints.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding lab notebook practices.\n\n[2] Objective / Task — Define notebook sections, checkpoint submissions, and quality checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Lab sequence and risks: [Paste Text Here].\n\n[5] Output Format — Sections: required entries; checkpoints; quality checklist; integrity notes; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Promote reproducibility and integrity; protect privacy.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-bio-3',
          title: 'Data Analysis Scaffold (EDA → Analysis → Verification)',
          approach: 'Purpose: Scaffold a data analysis workflow with verification and transparency.',
          promptText:
            `**Data Analysis Scaffold (Biology)**\n\n**Purpose:** Scaffold a data analysis workflow with verification and transparency.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding analysis steps for biological data.\n\n[2] Objective / Task — Sequence EDA → analysis → verification → interpretation with artifacts.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Dataset/variables and goals: [Paste Text Here].\n\n[5] Output Format — Sections: EDA; analysis; verification (reproduce figure/stat); interpretation; artifacts; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Ensure provenance and uncertainty communication.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-bio-4',
          title: 'Troubleshooting Scaffold (Wet Lab)',
          approach: 'Purpose: Scaffold troubleshooting steps with safety and documentation.',
          promptText:
            `**Troubleshooting Scaffold (Biology: Wet Lab)**\n\n**Purpose:** Scaffold troubleshooting with safety and documentation.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding a troubleshooting protocol.\n\n[2] Objective / Task — Provide a decision tree (likely issues → checks → fixes) with safety notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Assay/procedure and typical failures: [Paste Text Here].\n\n[5] Output Format — Sections: decision tree (text); checks; fixes; safety/ethics; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Ensure safety; encourage documentation and integrity.\n\n[7] Tone / Style — Academic and safety‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-bio-5',
          title: 'Communication Scaffold (Expert Memo ↔ Stakeholder Brief)',
          approach: 'Purpose: Scaffold dual‑audience communication for biology outcomes.',
          promptText:
            `**Communication Scaffold (Biology: Expert ↔ Stakeholder)**\n\n**Purpose:** Scaffold dual‑audience communication for biology outcomes.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding communication tasks.\n\n[2] Objective / Task — Provide checklists and translation notes for two audiences.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; audience: [Insert].\n\n[4] Input Material — Analysis/findings: [Paste Text Here].\n\n[5] Output Format — Sections: expert memo checklist; stakeholder brief checklist; translation rationale; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Maintain accuracy and respect privacy/ethics.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-bio-6',
          title: 'Ethics/IRB Scaffold (Consent/Data Governance)',
          approach: 'Purpose: Scaffold ethics, consent, and data governance decisions.',
          promptText:
            `**Ethics/IRB Scaffold (Biology)**\n\n**Purpose:** Scaffold ethics, consent, and data governance decisions.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding responsible conduct of research.\n\n[2] Objective / Task — Provide a checklist and decision aids for consent/data governance.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Scenario/data context: [Paste Text Here].\n\n[5] Output Format — Sections: consent/data checklist; safeguards; decision notes; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Emphasize fairness, privacy, and feasibility.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      'Chemistry and Chemical Biology': [
        {
          id: 'sa-chem-1',
          title: 'Mechanism Reasoning Scaffold (Evidence Map)',
          approach: 'Purpose: Scaffold evidence mapping for mechanism choices.',
          promptText:
            `**Mechanism Reasoning Scaffold (Chemistry)**\n\n**Purpose:** Scaffold evidence mapping for mechanism choices.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding mechanism reasoning with evidence.\n\n[2] Objective / Task — Create for/against evidence bullets and a discriminating experiment sketch.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Reaction class/exhibits: [Paste Text Here].\n\n[5] Output Format — Sections: evidence map; choice + justification; discriminating experiment; safety/assumptions; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Emphasize safety and uncertainty; avoid overclaiming.\n\n[7] Tone / Style — Academic and safety‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-chem-2',
          title: 'Spectroscopy Interpretation Scaffold',
          approach: 'Purpose: Scaffold stepwise interpretation with uncertainty notes.',
          promptText:
            `**Spectroscopy Interpretation Scaffold (Chemistry)**\n\n**Purpose:** Scaffold stepwise interpretation with uncertainty notes.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding spectra interpretation.\n\n[2] Objective / Task — Provide a template for features → hypotheses → checks → conclusion.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Spectra types and constraints: [Paste Text Here].\n\n[5] Output Format — Sections: feature log; candidate table; uncertainty notes; needed data; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Transparency and accessibility of representations.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-chem-3',
          title: 'Kinetics Workflow Scaffold (Initial Rates → Fit → Validate)',
          approach: 'Purpose: Scaffold deriving a rate law with validation.',
          promptText:
            `**Kinetics Workflow Scaffold (Chemistry)**\n\n**Purpose:** Scaffold deriving a rate law with validation.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding kinetics analysis.\n\n[2] Objective / Task — Guide initial rates, candidate orders, linearization/fit, and validation.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Small data table: [Paste Text Here].\n\n[5] Output Format — Sections: initial rates; linearization/fit; assumptions; validation; limitations; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Emphasize assumptions and data quality.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-chem-4',
          title: 'Safety/Procedure Scaffold (Controls/Disposal)',
          approach: 'Purpose: Scaffold safe procedure steps with controls and disposal.',
          promptText:
            `**Safety/Procedure Scaffold (Chemistry)**\n\n**Purpose:** Scaffold safe procedure steps with controls and disposal.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding a lab procedure with safety first.\n\n[2] Objective / Task — Provide stepwise procedure with hazard → control mapping and waste notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Procedure excerpt/hazards: [Paste Text Here].\n\n[5] Output Format — Sections: steps; hazard→control table; waste/disposal; ethics; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Comply with lab norms; emphasize responsible conduct.\n\n[7] Tone / Style — Academic and safety‑conscious.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-chem-5',
          title: 'Dual‑Audience Communication Scaffold (Chem)',
          approach: 'Purpose: Scaffold expert vs. stakeholder memos from same chemical analysis.',
          promptText:
            `**Dual‑Audience Communication Scaffold (Chemistry)**\n\n**Purpose:** Scaffold expert vs. stakeholder memos from the same analysis.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding translation across audiences.\n\n[2] Objective / Task — Provide checklists and translation notes for both memos.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; audience: [Insert].\n\n[4] Input Material — Analysis/model: [Paste Text Here].\n\n[5] Output Format — Sections: expert memo checklist; stakeholder memo checklist; translation rationale; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Accuracy; uncertainty; inclusive language.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-chem-6',
          title: 'Integrity Artifact Scaffold (Spectra/Kinetics Notebook)',
          approach: 'Purpose: Require spectra logs, fits, and alternates considered.',
          promptText:
            `**Integrity Artifact Scaffold (Chemistry)**\n\n**Purpose:** Require spectra logs, fits, and alternatives considered.\n\n**Prompt Text:**\n[1] Role & Context — You are embedding integrity‑by‑design into chemical analysis.\n\n[2] Objective / Task — Specify artifacts and checks for spectra/kinetics work.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Lab/computation context: [Paste Text Here].\n\n[5] Output Format — Sections: artifacts; audit checks; safety/ethics; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Promote transparency and safety.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Physics: [
        {
          id: 'sa-phys-1',
          title: 'Modeling Scaffold (Assumptions/BCs/Validation)',
          approach: 'Purpose: Scaffold model setup with assumptions, boundary conditions, and validation.',
          promptText:
            `**Modeling Scaffold (Physics)**\n\n**Purpose:** Scaffold model setup with assumptions, boundary conditions, and validation.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding physics modeling.\n\n[2] Objective / Task — Specify model choice, assumptions, BCs, sanity checks, and validation.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — System and constraints: [Paste Text Here].\n\n[5] Output Format — Sections: model; assumptions; BCs/parameters; sanity check; validation; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Emphasize units, limits, and safety.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-phys-2',
          title: 'Measurement Scaffold (Calibration/Uncertainty)',
          approach: 'Purpose: Scaffold calibration, uncertainty propagation, and suitability decisions.',
          promptText:
            `**Measurement Scaffold (Physics)**\n\n**Purpose:** Scaffold calibration, uncertainty propagation, and suitability decisions.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding measurement practice.\n\n[2] Objective / Task — Provide a calibration table, one propagation example, and a suitability decision.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Instrument/context: [Paste Text Here].\n\n[5] Output Format — Sections: calibration data; propagation example; error sources; suitability decision; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Honest uncertainty reporting; safety and proper practice.\n\n[7] Tone / Style — Academic and safety‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-phys-3',
          title: 'Simulation Scaffold (Setup → Stability → Validation)',
          approach: 'Purpose: Scaffold simulation design and checks.',
          promptText:
            `**Simulation Scaffold (Physics)**\n\n**Purpose:** Scaffold simulation design and checks.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding a small simulation study.\n\n[2] Objective / Task — Outline setup, stability checks, and validation comparisons with thresholds.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — System/parameters: [Paste Text Here].\n\n[5] Output Format — Sections: setup; stability; validation; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Reproducibility and honest limits.\n\n[7] Tone / Style — Academic and reproducibility‑minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-phys-4',
          title: 'Error Analysis Scaffold (Design → Propagate → Validate)',
          approach: 'Purpose: Scaffold error analysis in experiments.',
          promptText:
            `**Error Analysis Scaffold (Physics)**\n\n**Purpose:** Scaffold error analysis in experiments.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding experimental error analysis.\n\n[2] Objective / Task — Plan measurement design, propagate uncertainty, validate against expectations.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Apparatus/range/constraints: [Paste Text Here].\n\n[5] Output Format — Sections: design; propagation; validation; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Safety and transparent uncertainty.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-phys-5',
          title: 'Communication Scaffold (Expert ↔ Stakeholder)',
          approach: 'Purpose: Scaffold technical vs. plain‑language memos for physics contexts.',
          promptText:
            `**Communication Scaffold (Physics)**\n\n**Purpose:** Scaffold technical vs. plain‑language memos for physics contexts.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding dual‑audience communication.\n\n[2] Objective / Task — Provide checklists for both audiences and a contrast note.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; audience: [Insert].\n\n[4] Input Material — Analysis/result: [Paste Text Here].\n\n[5] Output Format — Sections: expert memo; stakeholder memo; contrast note; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Accuracy; uncertainty; inclusive language.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-phys-6',
          title: 'Integrity Scaffold (Process Artifacts in Labs/Simulations)',
          approach: 'Purpose: Require artifacts that make process transparent in physics work.',
          promptText:
            `**Integrity Scaffold (Physics)**\n\n**Purpose:** Require artifacts that make process transparent in labs/simulations.\n\n**Prompt Text:**\n[1] Role & Context — You are embedding integrity‑by‑design.\n\n[2] Objective / Task — Specify artifacts and sampling checks for labs/simulations.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Lab/simulation context: [Paste Text Here].\n\n[5] Output Format — Sections: artifacts; sampling/audit; privacy/ethics; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Promote trust and fairness.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      'Marine and Environmental Sciences': [
        {
          id: 'sa-mes-1',
          title: 'Field Sampling Scaffold (Design/Confounds/Safety)',
          approach: 'Purpose: Scaffold field sampling design with confound checks and safety.',
          promptText:
            `**Field Sampling Scaffold (MES)**\n\n**Purpose:** Scaffold field sampling design with confound checks and safety.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding a field campaign.\n\n[2] Objective / Task — Specify sampling frame, confounds/controls, and safety/consent.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Site/phenomenon and constraints: [Paste Text Here].\n\n[5] Output Format — Sections: sampling frame; confounds/controls; safety/consent; uncertainty notes; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Safety, consent/data ethics, and feasibility.\n\n[7] Tone / Style — Academic and practical.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-mes-2',
          title: 'Remote Sensing/Spatial Workflow Scaffold',
          approach: 'Purpose: Scaffold spatial analysis with validation and uncertainty.',
          promptText:
            `**Remote Sensing/Spatial Workflow Scaffold (MES)**\n\n**Purpose:** Scaffold spatial analysis with validation and uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding spatial workflows.\n\n[2] Objective / Task — Define processing steps, validation sampling, and uncertainty notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — AOI/layers and goals: [Paste Text Here].\n\n[5] Output Format — Sections: processing; validation; uncertainty; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Transparency and fairness.\n\n[7] Tone / Style — Academic and applied.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-mes-3',
          title: 'Time‑Series Analysis Scaffold (EDA → Decompose → Verify)',
          approach: 'Purpose: Scaffold environmental time‑series analysis with verification.',
          promptText:
            `**Time‑Series Analysis Scaffold (MES)**\n\n**Purpose:** Scaffold environmental time‑series analysis with verification.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding time‑series analysis.\n\n[2] Objective / Task — EDA → decomposition → verification → interpretation with artifacts.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Dataset/variables: [Paste Text Here].\n\n[5] Output Format — Sections: EDA; decomposition; verification; interpretation; artifacts; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Provenance and uncertainty communication.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-mes-4',
          title: 'Policy Brief Scaffold (Technical → Plain Language)',
          approach: 'Purpose: Scaffold conversion of technical analysis into a policy brief.',
          promptText:
            `**Policy Brief Scaffold (MES)**\n\n**Purpose:** Scaffold conversion of technical analysis into a policy brief.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding science‑policy communication.\n\n[2] Objective / Task — Provide expert memo and policy brief checklists with translation rationale.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; audience: [Insert].\n\n[4] Input Material — Analysis/risk finding: [Paste Text Here].\n\n[5] Output Format — Sections: expert memo; policy brief; translation rationale; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Accuracy; uncertainty; equity in impacts.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-mes-5',
          title: 'Integrity/Consent Scaffold (Community Data)',
          approach: 'Purpose: Scaffold consent, data governance, and equity in community data work.',
          promptText:
            `**Integrity/Consent Scaffold (MES)**\n\n**Purpose:** Scaffold consent, data governance, and equity in community data work.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding responsible community data practice.\n\n[2] Objective / Task — Provide consent/data governance checklist and safeguards.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Community context/data: [Paste Text Here].\n\n[5] Output Format — Sections: checklist; safeguards; decision notes; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Equity, privacy, and feasibility.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-mes-6',
          title: 'Pre‑Work/Guided Reading Scaffold (MES)',
          approach: 'Purpose: Scaffold pre‑class preparation targeting threshold concepts.',
          promptText:
            `**Pre‑Work/Guided Reading Scaffold (MES)**\n\n**Purpose:** Scaffold pre‑class preparation targeting threshold concepts.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding pre‑work for an MES topic.\n\n[2] Objective / Task — Provide 15–30 minute pre‑work with prompts and checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic/goals: [Paste Text Here].\n\n[5] Output Format — Sections: pre‑work outline; prompts; checks for understanding; link to in‑class; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Accessibility and inclusion.\n\n[7] Tone / Style — Academic and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Psychology: [
        {
          id: 'sa-psy-1',
          title: 'Measurement Scaffold (Item Analysis → Reliability → Validity)',
          approach: 'Purpose: Scaffold measure development with evidence plan.',
          promptText:
            `**Measurement Scaffold (Psychology)**\n\n**Purpose:** Scaffold measure development with evidence plan.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding measurement development.\n\n[2] Objective / Task — Sequence item analysis → reliability → validity evidence, with artifacts.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Construct/population and items: [Paste Text Here].\n\n[5] Output Format — Sections: item analysis; reliability; validity; artifacts; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Fairness and transparency.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-psy-2',
          title: 'Design Scaffold (Causal Inference Under Constraints)',
          approach: 'Purpose: Scaffold choosing a feasible causal design with mitigations.',
          promptText:
            `**Design Scaffold (Psychology)**\n\n**Purpose:** Scaffold choosing a feasible causal design with mitigations.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding causal design choice.\n\n[2] Objective / Task — Compare RCT/quasi/observational, select one, and list mitigations.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Constraints and objective: [Paste Text Here].\n\n[5] Output Format — Sections: comparison; choice; unobserved confounding note; mitigations; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Ethics and feasibility; protect participants.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-psy-3',
          title: 'Analysis Scaffold (EDA → Modeling → Checks)',
          approach: 'Purpose: Scaffold transparent analysis with checks and interpretation.',
          promptText:
            `**Analysis Scaffold (Psychology)**\n\n**Purpose:** Scaffold transparent analysis with checks and interpretation.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding analysis steps.\n\n[2] Objective / Task — EDA → modeling → checks → interpretation with artifacts and uncertainty.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Dataset/variables: [Paste Text Here].\n\n[5] Output Format — Sections: EDA; modeling; checks; interpretation; artifacts; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Fairness, privacy, honest limits.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-psy-4',
          title: 'Ethics/Consent Scaffold (Risk/Benefit + Safeguards)',
          approach: 'Purpose: Scaffold consent quality review and safeguards.',
          promptText:
            `**Ethics/Consent Scaffold (Psychology)**\n\n**Purpose:** Scaffold consent quality review and safeguards.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding ethics review.\n\n[2] Objective / Task — Provide consent checklist, risks/benefits table, and safeguards.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Study context and materials: [Paste Text Here].\n\n[5] Output Format — Sections: consent checklist; risks/benefits/mitigations; recommendation; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Fairness, privacy, feasibility.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-psy-5',
          title: 'Communication Scaffold (Expert Memo ↔ Stakeholder Brief)',
          approach: 'Purpose: Scaffold dual‑audience outputs from the same psychology analysis.',
          promptText:
            `**Communication Scaffold (Psychology: Expert ↔ Stakeholder)**\n\n**Purpose:** Scaffold dual‑audience outputs from the same analysis.\n\n**Prompt Text:**\n[1] Role & Context — You are scaffolding communication for two audiences.\n\n[2] Objective / Task — Provide checklists and translation rationale.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; audience: [Insert].\n\n[4] Input Material — Analysis/findings: [Paste Text Here].\n\n[5] Output Format — Sections: expert memo; stakeholder brief; translation rationale; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Accuracy; privacy; inclusive language.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'sa-psy-6',
          title: 'Integrity/Process Evidence Scaffold (Psych)',
          approach: 'Purpose: Require artifacts that make analysis/design process visible.',
          promptText:
            `**Integrity/Process Evidence Scaffold (Psychology)**\n\n**Purpose:** Require artifacts that make analysis/design process visible.\n\n**Prompt Text:**\n[1] Role & Context — You are embedding integrity artifacts in psychology work.\n\n[2] Objective / Task — Specify artifacts and audit checks (e.g., prereg/dev logs).\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Study/analysis context: [Paste Text Here].\n\n[5] Output Format — Sections: artifacts; audit plan; privacy/ethics; exit ticket.\n\n[6] Pedagogical or Ethical Criteria — Fairness, privacy, and feasibility.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
    },
  },
  {
    id: 'lecture-notes',
    title: 'Generate Lecture Notes & Misconceptions',
    category: 'Instructional Materials',
    description:
      'Produce structured lecture notes that surface threshold concepts and likely misconceptions, include formative checks, and offer brief practice prompts. Designed to be clear, adaptable, and aligned to learning goals.',
    generalPrompts: [
      {
        id: 'ln-1',
        title: 'Prompt 1: Comprehensive Lecture Notes with Key Concepts and Misconceptions',
        approach: 'Purpose: Help me generate lecture notes that clarify core ideas, address misconceptions, and support active learning.',
        promptText: `**Prompt 1: Comprehensive Lecture Notes with Key Concepts and Misconceptions**\n\n**Purpose:** Help me generate lecture notes that clarify core ideas, address misconceptions, and support active learning.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert science educator preparing lecture notes for [Insert Topic].\n\n[2] Objective / Task — Your goal is to produce a set of lecture notes that include: key concepts, worked examples, common misconceptions, and formative questions.\n\n[3] Audience / Course Context — These notes are for [Insert Student Level] students in [Insert Course/Program].\n\n[4] Input Material — Here is the current topic or outline: [Paste Text Here].\n\n[5] Output Format — Present your response in clearly labeled sections:\n- Overview\n- Key Concepts (with concise explanations)\n- Worked Examples (step-by-step)\n- Common Misconceptions (with corrections)\n- Formative Questions (3–5)\n- Practice Questions (with answer keys)\n\n[6] Pedagogical or Ethical Criteria — Ensure clarity, accuracy, and support for higher-order thinking. Address equity and inclusivity in examples.\n\n[7] Tone / Style — Academic, supportive, and accessible for faculty use.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ln-2',
        title: 'Prompt 2: Misconceptions-First + Refutation',
        approach: 'Purpose: Start with common misconceptions and explicitly refute with minimal working examples.',
        promptText: `**Prompt 2: Misconceptions-First + Refutation**\n\n**Purpose:** Create lecture notes that begin with common misconceptions, then refute each with concise explanations and minimal examples.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert science educator preparing misconception-first notes.\n\n[2] Objective / Task — Produce a structured set of notes that surfaces 4–6 misconceptions and provides tight refutations with minimal examples.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course/Program].\n\n[4] Input Material — Topic focus and any known misconceptions: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Overview (why misconceptions persist)\n- Misconception List (each with 1–2 sentence refutation + 1-minute example)\n- Checks for Understanding (3 items with rationales)\n- Short Synthesis (ties corrections to goals)\n\n[6] Pedagogical or Ethical Criteria — Use plain language without oversimplifying; emphasize evidence and fairness in examples.\n\n[7] Tone / Style — Academic and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ln-3',
        title: 'Prompt 3: Worked Example + Faded Guidance',
        approach: 'Purpose: Provide a fully guided example, then a partially guided one, then an unguided prompt.',
        promptText: `**Prompt 3: Worked Example + Faded Guidance**\n\n**Purpose:** Create notes featuring a fully worked example, a partially worked variant, and an unguided prompt with a key.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert educator designing a faded guidance sequence.\n\n[2] Objective / Task — Produce three problems (fully worked → partially worked → unguided) with commentary and keys.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course/Program].\n\n[4] Input Material — Topic/skill and common pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Problem A: Fully Worked (step-by-step + “why this step?” comments)\n- Problem B: Partially Worked (hide 40–60% of steps) + full solution\n- Problem C: Unguided Prompt + answer key + 2–3 hints\n- Pitfalls List (what to watch for and how to check)\n\n[6] Pedagogical or Ethical Criteria — Emphasize reasoning, verification, and honest limits; promote inclusive examples.\n\n[7] Tone / Style — Academic and coaching-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ln-4',
        title: 'Prompt 4: Socratic Questions + Pause Points',
        approach: 'Purpose: Scaffold an interactive mini-lecture with purposeful questions and timed pauses.',
        promptText: `**Prompt 4: Socratic Questions + Pause Points**\n\n**Purpose:** Build an interactive outline with Socratic questions and timeboxed pauses.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert educator designing an interactive mini-lecture.\n\n[2] Objective / Task — Produce an outline with timed sections, Socratic questions, and quick pair/think activities.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course/Program].\n\n[4] Input Material — Topic and time available: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Outline (Intro → Core → Synthesis) with minute estimates\n- Socratic Questions (6–10) at key junctures\n- Pair/Think Activities (2 items, 2–4 minutes each)\n- Exit Ticket (3 questions with answers)\n\n[6] Pedagogical or Ethical Criteria — Questions should surface reasoning, uncertainty, and assumptions; ensure inclusion.\n\n[7] Tone / Style — Academic and facilitative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ln-5',
        title: 'Prompt 5: Retrieval + Interleaving Mini-Deck',
        approach: 'Purpose: Prepare a short retrieval practice and interleaving set to promote durable learning.',
        promptText: `**Prompt 5: Retrieval + Interleaving Mini-Deck**\n\n**Purpose:** Produce a compact deck of retrieval/interleaving items for spaced practice.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert educator building durable learning supports.\n\n[2] Objective / Task — Create a small deck mixing 2–3 closely related subtopics with concise answers.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course/Program].\n\n[4] Input Material — Topic cluster (2–3 subtopics): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Retrieval Items (8–12) with concise answers and subtopic labels\n- Connection Items (3) that link two subtopics\n- Study Guidance (short note on spacing/interleaving)\n\n[6] Pedagogical or Ethical Criteria — Ensure coverage balance and clarity; avoid trick items.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ln-6',
        title: 'Prompt 6: Objectives → Evidence → Activities (Backward Design)',
        approach: 'Purpose: Align notes to clear objectives with evidence of understanding and purposeful activities.',
        promptText: `**Prompt 6: Objectives → Evidence → Activities (Backward Design)**\n\n**Purpose:** Align notes to explicit learning objectives using backward design.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert educator applying backward design.\n\n[2] Objective / Task — Produce notes tied to objectives, acceptable evidence, and activity prompts.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course/Program].\n\n[4] Input Material — Objectives (3–5 measurable verbs) and background: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Objectives Table (objective → acceptable evidence)\n- Notes Outline tied to each objective (with one misconception + corrective cue)\n- Checks for Understanding (3, placed early/mid/end, with rationales)\n- Brief Practice Prompts (2 items with solution keys)\n- Synthesis (“If you remember one thing…” 4–6 sentences)\n\n[6] Pedagogical or Ethical Criteria — Ensure alignment, transparency, and inclusion.\n\n[7] Tone / Style — Academic and structured.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ln-7',
        title: 'Prompt 7: Misconception Diagnostics (MCQ + Rationales)',
        approach: 'Purpose: Include targeted diagnostic items with distractors mapped to misconceptions.',
        promptText: `**Prompt 7: Misconception Diagnostics (MCQ + Rationales)**\n\n**Purpose:** Embed diagnostic MCQs where distractors map to specific misconceptions.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert educator designing diagnostic checks.\n\n[2] Objective / Task — Produce a short notes set plus 4 MCQs with rationale-tagged distractors.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course/Program].\n\n[4] Input Material — Topic and misconception list (4–6): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Brief Notes (bullets) for the core idea\n- MCQs (4 items: 1 correct + 3 mapped distractors with 1-line rationale)\n- Minimal Working Examples (2) for edge cases\n- Coaching Tips (why slips happen, how to preempt)\n\n[6] Pedagogical or Ethical Criteria — Keep distractors plausible but fair; avoid stereotypes.\n\n[7] Tone / Style — Academic and diagnostic.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ln-8',
        title: 'Prompt 8: Dual-Format Handout (Text + Visual)',
        approach: 'Purpose: Provide accessible text bullets plus an ASCII/outline visual with alt text.',
        promptText: `**Prompt 8: Dual-Format Handout (Text + Visual)**\n\n**Purpose:** Provide synchronized text bullets and a simple visual outline with alt text.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert educator creating accessible dual-format notes.\n\n[2] Objective / Task — Produce concise bullets and a visual (ASCII/tree/table) with alt text.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course/Program]; accessibility matters.\n\n[4] Input Material — Topic and any accessibility considerations: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Text Bullets (1–2 lines each, core flow)\n- Visual Outline (ASCII/tree/table mirroring bullets)\n- Alt Text (2–4 sentences)\n- Checks for Understanding (3 items with answers)\n\n[6] Pedagogical or Ethical Criteria — Ensure readability, alt text clarity, and inclusive examples.\n\n[7] Tone / Style — Academic and accessible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ln-9',
        title: 'Prompt 9: Case-Linked Mini-Lecture',
        approach: 'Purpose: Anchor notes in a short case vignette with embedded misconceptions and checks.',
        promptText: `**Prompt 9: Case-Linked Mini-Lecture**\n\n**Purpose:** Create a case-anchored mini-lecture that exposes misconceptions and prompts checks.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert educator using a short case vignette.\n\n[2] Objective / Task — Produce a vignette, an outline that references it, and targeted checks/misconceptions.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course/Program].\n\n[4] Input Material — Topic and case setting: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Vignette (4–6 sentences)\n- Notes Outline (intro → analysis → synthesis) referencing vignette\n- Misconceptions (3 items with refutations + 1-minute example each)\n- Checks for Understanding (3 items with answers + rationales)\n\n[6] Pedagogical or Ethical Criteria — Keep cases realistic; ensure respectful framing.\n\n[7] Tone / Style — Academic and applied.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'ln-10',
        title: 'Prompt 10: Glossary + Examples/Non-Examples',
        approach: 'Purpose: Provide a precise glossary with paired examples and non-examples to sharpen boundaries.',
        promptText: `**Prompt 10: Glossary + Examples/Non-Examples**\n\n**Purpose:** Produce a glossary-centered set of notes with examples and non-examples.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert educator clarifying terminology.\n\n[2] Objective / Task — Create a glossary where each term has an example and non-example with justification.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course/Program].\n\n[4] Input Material — Topic and list of 6–10 terms: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Glossary Entries (term → concise definition → example → non-example with 1-sentence justification)\n- Quick Checks (3 items with answers)\n- Short Summary (how terms connect to learning goals)\n\n[6] Pedagogical or Ethical Criteria — Use precise language; examples should be fair and inclusive.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
    ],
    disciplinePrompts: {
      Mathematics: [
        {
          id: 'ln-math-1',
          title: 'Mathematics: Concept Map Lecture Notes',
          approach: 'Purpose: Map definitions, theorems, and examples to reduce fragmentation.',
          promptText: `**Mathematics: Concept Map Lecture Notes**\n\n**Purpose:** Produce lecture notes that connect formal definitions, theorems, and examples via a concept map.\n\n**Prompt Text:**\n[1] Role & Context — You are a mathematics educator preparing concept-map notes for [Insert Topic].\n\n[2] Objective / Task — Create notes that reduce fragmentation by linking key ideas and typical confusions.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course] (e.g., Calculus I, Linear Algebra, Real Analysis).\n\n[4] Input Material — Topic and fragile points (e.g., limits vs. continuity; basis vs. spanning): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Overview (goal + why mapping helps)\n- Concept Map (text outline) with 8–10 nodes and labeled links (implies/requires/counterexample to)\n- Node Notes (2 lines each), 1 misconception per node, and 1 quick check (answer)\n- Practice (2 problems with brief solution outlines)\n- Synthesis (4–6 sentences tying back to goals)\n\n[6] Pedagogical or Ethical Criteria — Precision, transparency of assumptions, and inclusive examples.\n\n[7] Tone / Style — Academic, precise, supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-math-2',
          title: 'Mathematics: Worked Example + Faded',
          approach: 'Purpose: Fully worked → partially worked → unguided in a math context.',
          promptText: `**Mathematics: Worked Example + Faded**\n\n**Purpose:** Build a three-step sequence aligning with a specific mathematical skill.\n\n**Prompt Text:**\n[1] Role & Context — You are a math educator preparing a faded guidance sequence.\n\n[2] Objective / Task — Create Problem A (fully worked), Problem B (partially worked), and Problem C (unguided with full key).\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic/skill and pitfalls (sign errors, misuse of definitions, hidden assumptions): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Problem A: Fully Worked (step-by-step + commentary)\n- Problem B: Partially Worked (~50% hidden) + full solution\n- Problem C: Unguided + complete key + 2–3 hints\n- Pitfalls List (what to watch for and how to check)\n\n[6] Pedagogical or Ethical Criteria — Emphasize reasoning and verification; discourage black-box solutions.\n\n[7] Tone / Style — Academic and coaching-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-math-3',
          title: 'Mathematics: Misconceptions + Refutation',
          approach: 'Purpose: Refute common misunderstandings with minimal counterexamples.',
          promptText: `**Mathematics: Misconceptions + Refutation**\n\n**Purpose:** Surface 5–6 typical misunderstandings and refute each with a minimal counterexample or short proof.\n\n**Prompt Text:**\n[1] Role & Context — You are a math educator preparing misconception-first notes.\n\n[2] Objective / Task — Provide precise refutations with compact examples/counterexamples.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic focus: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Misconceptions (5–6) with refutations and minimal examples\n- Checks for Understanding (3 items with rationales)\n- Short Synthesis (links to learning goals)\n\n[6] Pedagogical or Ethical Criteria — Precision, fairness, and clarity.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-math-4',
          title: 'Mathematics: Socratic + Pause Points',
          approach: 'Purpose: Prompt reasoning at key steps of a proof or derivation.',
          promptText: `**Mathematics: Socratic + Pause Points**\n\n**Purpose:** Create an interactive mini-lecture that surfaces reasoning at pivotal steps.\n\n**Prompt Text:**\n[1] Role & Context — You are a math educator designing Socratic prompts.\n\n[2] Objective / Task — Produce a timeboxed outline, targeted questions, and quick pair tasks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and time available: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Outline (intro → core → synthesis) with minute estimates\n- Socratic Questions (6–8) stating the target idea behind each\n- Pair/Think Activities (2 items, 2–4 minutes) with expected outcomes\n- Exit Ticket (3 items with answers)\n\n[6] Pedagogical or Ethical Criteria — Encourage reasoning transparency and inclusion.\n\n[7] Tone / Style — Academic and facilitative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-math-5',
          title: 'Mathematics: Retrieval + Interleaving',
          approach: 'Purpose: Interleave related subtopics (e.g., derivatives/integrals/series).',
          promptText: `**Mathematics: Retrieval + Interleaving**\n\n**Purpose:** Build a retrieval/interleaving set that mixes closely related mathematical subtopics.\n\n**Prompt Text:**\n[1] Role & Context — You are a math educator building a mini-deck.\n\n[2] Objective / Task — Create 10 retrieval items, label subtopics, and include 3 connection items.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Subtopics to interleave: [Insert].\n\n[5] Output Format — Sections:\n- Retrieval Items (10) with concise solutions and subtopic labels\n- Connection Items (3) linking two subtopics\n- Brief Study Guidance (spacing/interleaving)\n\n[6] Pedagogical or Ethical Criteria — Balance coverage; clarity over trickiness.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-math-6',
          title: 'Mathematics: Objectives → Evidence → Activities (Backward Design)',
          approach: 'Purpose: Align notes to objectives with acceptable evidence and targeted activities.',
          promptText: `**Mathematics: Objectives → Evidence → Activities (Backward Design)**\n\n**Purpose:** Align notes to explicit mathematical objectives using backward design.\n\n**Prompt Text:**\n[1] Role & Context — You are a math educator applying backward design.\n\n[2] Objective / Task — Produce objectives table, notes per objective (with misconception + corrective cue), and checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Objectives (3–5 measurable) and background: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Objectives Table (objective → acceptable evidence)\n- Notes Outline tied to objectives (with misconception + corrective cue)\n- Checks for Understanding (3, with rationales)\n- Practice Prompts (2 with solution keys)\n\n[6] Pedagogical or Ethical Criteria — Ensure alignment and transparency; inclusive examples.\n\n[7] Tone / Style — Academic and structured.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Biology: [
        {
          id: 'ln-bio-1',
          title: 'Lecture Notes: Threshold Concepts (Bio)',
          approach: 'Purpose: Emphasize regulation/causality across scales.',
          promptText:
            `**Lecture Notes: Threshold Concepts (Biology)**\n\n**Purpose:** Emphasize regulation, causality, uncertainty, and cross-scale reasoning.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert biology educator preparing lecture notes for [Insert Topic].\n\n[2] Objective / Task — Produce notes that foreground threshold concepts and reduce fragmented understanding.\n\n[3] Audience / Course Context — These notes are for [Insert Student Level] students in [Insert Course].\n\n[4] Input Material — Topic and goals (3–5): [Paste Text Here].\n\n[5] Output Format — Present your response in clearly labeled sections:\n- Overview (what the topic is and why it matters)\n- Threshold Concepts (feedback, regulation, stochasticity, scaling) with concise explanations\n- Misconceptions (with brief refutations)\n- Worked Example (short, step-by-step where appropriate)\n- Formative Questions (3–5 with brief rationales)\n- Practice Questions (2 with answer keys)\n\n[6] Pedagogical or Ethical Criteria — Ensure accuracy, clarity, and cross-scale connections; include inclusive examples and uncertainty cues.\n\n[7] Tone / Style — Academic, supportive, and accessible for faculty use.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-bio-2',
          title: 'Lecture Notes: Worked Example + Faded (Bio)',
          approach: 'Purpose: Walk through an analysis/design example with fading.',
          promptText:
            `**Lecture Notes: Worked Example + Faded (Biology)**\n\n**Purpose:** Walk through a biological analysis/design example with fading.\n\n**Prompt Text:**\n[1] Role & Context — You are a biology educator creating a faded guidance sequence.\n\n[2] Objective / Task — Provide a fully worked example, a partially worked variant, and an unguided prompt with a key.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic/skill and common pitfalls (controls, confounds, sampling): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Problem A: Fully Worked (step-by-step with commentary on choices/assumptions)\n- Problem B: Partially Worked (hide 40–60% of steps) + complete solution\n- Problem C: Unguided Prompt + answer key + 2–3 hints\n- Pitfalls List tailored to the topic\n\n[6] Pedagogical or Ethical Criteria — Emphasize proper controls, uncertainty, and responsible interpretation.\n\n[7] Tone / Style — Academic and coaching-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-bio-3',
          title: 'Lecture Notes: Misconceptions + Refutation (Bio)',
          approach: 'Purpose: Counter common biological misunderstandings.',
          promptText:
            `**Lecture Notes: Misconceptions + Refutation (Biology)**\n\n**Purpose:** Counter common misunderstandings with concise refutations and minimal evidence.\n\n**Prompt Text:**\n[1] Role & Context — You are a biology educator preparing misconception-first notes.\n\n[2] Objective / Task — List 5–6 misconceptions and provide concise refutations with minimal working examples.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and known misconceptions: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Overview (why misconceptions persist)\n- Misconceptions (5–6) with brief refutations and examples\n- Checks for Understanding (3 with answers + rationales)\n- Short Synthesis (ties corrections to goals)\n\n[6] Pedagogical or Ethical Criteria — Use inclusive examples; avoid overclaiming.\n\n[7] Tone / Style — Academic and supportive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-bio-4',
          title: 'Lecture Notes: Socratic + Pause Points (Bio)',
          approach: 'Purpose: Engage with question prompts at analytic junctures.',
          promptText:
            `**Lecture Notes: Socratic + Pause Points (Biology)**\n\n**Purpose:** Engage learners with purposeful questions and timed pauses at analytic junctures.\n\n**Prompt Text:**\n[1] Role & Context — You are a biology educator designing an interactive mini-lecture.\n\n[2] Objective / Task — Produce a 3-part outline, 6–8 Socratic questions, and 2 pair activities.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and time available: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Outline (intro → core → synthesis) with minute estimates\n- Socratic Questions (6–8) surfacing assumptions, controls, and inference limits\n- Pair Activities (2, 2–4 minutes) with expected outcomes\n- Exit Ticket (3 questions with answers)\n\n[6] Pedagogical or Ethical Criteria — Encourage transparency and inclusion; highlight uncertainty appropriately.\n\n[7] Tone / Style — Academic and facilitative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-bio-5',
          title: 'Lecture Notes: Retrieval + Interleaving (Bio)',
          approach: 'Purpose: Mix scales (molecular → organismal) to build transfer.',
          promptText:
            `**Lecture Notes: Retrieval + Interleaving (Biology)**\n\n**Purpose:** Create a mixed-scale retrieval set to promote transfer.\n\n**Prompt Text:**\n[1] Role & Context — You are a biology educator preparing a retrieval/interleaving mini-deck.\n\n[2] Objective / Task — Build 10 retrieval items across scales plus 3 connection items.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Subtopics/scales to interleave (e.g., molecular/cellular/organismal): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Retrieval Items (10) with concise answers; label each item’s scale/subtopic\n- Connection Items (3) linking two scales with explanations\n- Brief Study Guidance on spacing and interleaving\n\n[6] Pedagogical or Ethical Criteria — Clarity over trickiness; equity in contexts/examples.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-bio-6',
          title: 'Biology: Objectives → Evidence → Activities (Backward Design)',
          approach: 'Purpose: Align notes to objectives with acceptable evidence and targeted activities in biology contexts.',
          promptText:
            `**Biology: Objectives → Evidence → Activities (Backward Design)**\n\n**Purpose:** Align notes to explicit learning objectives using backward design in biology.\n\n**Prompt Text:**\n[1] Role & Context — You are a biology educator applying backward design.\n\n[2] Objective / Task — Produce an objectives table, notes tied to each objective (with one misconception + corrective cue), and checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Objectives (3–5 measurable verbs) and background: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Objectives Table (objective → acceptable evidence)\n- Notes Outline per objective (with misconception + corrective cue)\n- Checks for Understanding (3 with rationales)\n- Practice Prompts (2 with solution keys)\n- Synthesis (4–6 sentences)\n\n[6] Pedagogical or Ethical Criteria — Ensure alignment, ethical considerations (consent/safety when relevant), and inclusion.\n\n[7] Tone / Style — Academic and structured.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      'Chemistry and Chemical Biology': [
        {
          id: 'ln-chem-1',
          title: 'Lecture Notes: Concept Map (Chem)',
          approach: 'Purpose: Connect mechanisms/data/assumptions for coherence.',
          promptText:
            `**Lecture Notes: Concept Map (Chemistry & Chemical Biology)**\n\n**Purpose:** Link mechanism steps, analytical data, and assumptions coherently.\n\n**Prompt Text:**\n[1] Role & Context — You are a chemistry educator preparing a concept-map lecture handout for [Insert Topic].\n\n[2] Objective / Task — Produce notes that connect mechanisms, spectra/kinetics evidence, and assumptions.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and goals (3–5): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Overview (why this mechanism/data linkage matters)\n- Concept Map (text outline) with 8–10 nodes and labeled links (evidence, mechanistic dependency)\n- Node Notes (2 lines), 1 misconception per node, and 1 quick check (answer)\n- Practice (2 prompts with brief keyed solutions)\n- Safety/Assumptions note (when relevant)\n\n[6] Pedagogical or Ethical Criteria — Transparency about evidence quality, safety, and uncertainty.\n\n[7] Tone / Style — Academic and safety-aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-chem-2',
          title: 'Lecture Notes: Worked Example + Faded (Chem)',
          approach: 'Purpose: From fully worked mechanism/fit to unguided.',
          promptText:
            `**Lecture Notes: Worked Example + Faded (Chemistry & Chemical Biology)**\n\n**Purpose:** Move from fully worked mechanism/fit to unguided, with safety and assumptions called out.\n\n**Prompt Text:**\n[1] Role & Context — You are a chemistry educator creating a faded guidance sequence.\n\n[2] Objective / Task — Provide a fully worked example, a partially worked variant, and an unguided prompt with a key.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic/skill and constraints (safety/assumptions): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Problem A: Fully Worked (choice points, evidence, assumptions)\n- Problem B: Partially Worked (hide 40–60% of steps) + full solution\n- Problem C: Unguided Prompt + answer key + 2–3 hints\n- Pitfalls List (arrow-pushing errors, overfitting, etc.)\n\n[6] Pedagogical or Ethical Criteria — Emphasize safety, transparency, and validation.\n\n[7] Tone / Style — Academic and coaching-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-chem-3',
          title: 'Lecture Notes: Misconceptions + Refutation (Chem)',
          approach: 'Purpose: Refute typical errors in interpretation/stoichiometry.',
          promptText:
            `**Lecture Notes: Misconceptions + Refutation (Chemistry & Chemical Biology)**\n\n**Purpose:** Refute common interpretation/stoichiometry errors with minimal data-driven examples.\n\n**Prompt Text:**\n[1] Role & Context — You are a chemistry educator preparing misconception-first notes.\n\n[2] Objective / Task — List 5–6 misconceptions and provide concise refutations with tight examples.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and known pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Misconceptions (5–6) with refutations and minimal examples\n- Checks for Understanding (3 with answers + rationales)\n- Short Synthesis linking corrections to core goals\n\n[6] Pedagogical or Ethical Criteria — Accuracy, fairness, transparent uncertainty.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-chem-4',
          title: 'Lecture Notes: Socratic + Pause Points (Chem)',
          approach: 'Purpose: Prompt reasoning about mechanism/evidence.',
          promptText:
            `**Lecture Notes: Socratic + Pause Points (Chemistry & Chemical Biology)**\n\n**Purpose:** Prompt evidence-based reasoning at mechanism/evidence junctures.\n\n**Prompt Text:**\n[1] Role & Context — You are a chemistry educator designing an interactive mini-lecture.\n\n[2] Objective / Task — Provide a timeboxed outline, 6–8 Socratic questions, and 2 pair tasks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and time available: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Outline (intro → core → synthesis) with minute estimates\n- Socratic Questions (6–8) probing mechanistic alternatives, evidence quality, and uncertainty\n- Pair Tasks (2, 2–4 minutes) with expected outcomes\n- Exit Ticket (3 questions with answers)\n\n[6] Pedagogical or Ethical Criteria — Safety-aware, transparent about limits and uncertainty.\n\n[7] Tone / Style — Academic and facilitative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-chem-5',
          title: 'Lecture Notes: Retrieval + Interleaving (Chem)',
          approach: 'Purpose: Mix mechanisms, spectra, and kinetics to build fluency.',
          promptText:
            `**Lecture Notes: Retrieval + Interleaving (Chemistry & Chemical Biology)**\n\n**Purpose:** Mix mechanisms, spectra, and kinetics to build fluency.\n\n**Prompt Text:**\n[1] Role & Context — You are a chemistry educator preparing a retrieval/interleaving mini-deck.\n\n[2] Objective / Task — Create 10 retrieval items and 3 connection items across strands.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Subtopics to interleave (Mechanism/Spectra/Kinetics specifics): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Retrieval Items (10) with concise answers; label each by strand\n- Connection Items (3) linking two strands with brief explanations\n- Study Guidance on interleaving these strands effectively\n\n[6] Pedagogical or Ethical Criteria — Balance coverage and difficulty fairly; use inclusive examples.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-chem-6',
          title: 'Chemistry: Objectives → Evidence → Activities (Backward Design)',
          approach: 'Purpose: Align notes to objectives with acceptable evidence and targeted activities in chemistry.',
          promptText:
            `**Chemistry: Objectives → Evidence → Activities (Backward Design)**\n\n**Purpose:** Align notes to explicit chemistry learning objectives using backward design.\n\n**Prompt Text:**\n[1] Role & Context — You are a chemistry educator applying backward design.\n\n[2] Objective / Task — Produce objectives table, notes per objective (with misconception + corrective cue), and checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Objectives (3–5 measurable verbs) and background: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Objectives Table (objective → acceptable evidence)\n- Notes Outline tied to objectives (with misconception + corrective cue)\n- Checks for Understanding (3 with rationales)\n- Practice Prompts (2 with keys)\n- Synthesis (4–6 sentences)\n\n[6] Pedagogical or Ethical Criteria — Ensure safety/ethics when relevant; transparent assumptions; inclusive examples.\n\n[7] Tone / Style — Academic and structured.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Physics: [
        {
          id: 'ln-phys-1',
          title: 'Lecture Notes: Threshold Concepts (Phys)',
          approach: 'Purpose: Emphasize modeling, limits, and validation.',
          promptText:
            `**Lecture Notes: Threshold Concepts (Physics)**\n\n**Purpose:** Emphasize modeling choices, limits, and validation/measurement.\n\n**Prompt Text:**\n[1] Role & Context — You are a physics educator preparing threshold-concept notes for [Insert Topic].\n\n[2] Objective / Task — Produce notes that highlight modeling assumptions, limits, and validation approaches.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and learning goals (3–5): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Concept Outline (modeling assumptions, limits, validation checks)\n- Misconceptions (5) with brief refutations (e.g., idealizations taken as literal)\n- Checks for Understanding (3 with answers and rationales)\n- Practice (2 prompts with brief solution outlines)\n\n[6] Pedagogical or Ethical Criteria — Emphasize units, limits, validation, and uncertainty; avoid overclaiming.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-phys-2',
          title: 'Lecture Notes: Worked Example + Faded (Phys)',
          approach: 'Purpose: Move from fully guided derivation/simulation to unguided.',
          promptText:
            `**Lecture Notes: Worked Example + Faded (Physics)**\n\n**Purpose:** Move from fully guided derivation/simulation to unguided, with checks.\n\n**Prompt Text:**\n[1] Role & Context — You are a physics educator creating a faded guidance sequence.\n\n[2] Objective / Task — Provide a fully worked example, a partially worked variant, and an unguided prompt with a key.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic/skill and pitfalls (units, boundaries, hidden assumptions): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Problem A: Fully Worked (step-by-step + commentary on checks)\n- Problem B: Partially Worked (~50% hidden) + full solution\n- Problem C: Unguided Prompt + answer key + 2–3 hints\n- Pitfalls/QA Checklist (units, limits, boundary conditions)\n\n[6] Pedagogical or Ethical Criteria — Emphasize validation and uncertainty; avoid overclaiming.\n\n[7] Tone / Style — Academic and coaching-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-phys-3',
          title: 'Lecture Notes: Misconceptions + Refutation (Phys)',
          approach: 'Purpose: Counter typical misreadings of models/results.',
          promptText:
            `**Lecture Notes: Misconceptions + Refutation (Physics)**\n\n**Purpose:** Counter typical misreadings of models/results with minimal examples.\n\n**Prompt Text:**\n[1] Role & Context — You are a physics educator preparing misconception-first notes.\n\n[2] Objective / Task — List 5–6 misconceptions and provide concise refutations with minimal working examples.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and known pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Misconceptions (5–6) with refutations and minimal examples\n- Checks for Understanding (3 items with answers and rationales)\n- Short Synthesis (how refutations improve model use/interpretation)\n\n[6] Pedagogical or Ethical Criteria — Emphasize units, limits, and fair examples.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-phys-4',
          title: 'Lecture Notes: Socratic + Pause Points (Phys)',
          approach: 'Purpose: Prompt reasoning at modeling junctures.',
          promptText:
            `**Lecture Notes: Socratic + Pause Points (Physics)**\n\n**Purpose:** Prompt reasoning about modeling choices, assumptions, and validation.\n\n**Prompt Text:**\n[1] Role & Context — You are a physics educator designing an interactive mini-lecture.\n\n[2] Objective / Task — Provide a timeboxed outline, 6–8 Socratic questions, and 2 pair tasks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and time available: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Outline (intro → core → synthesis) with minute estimates\n- Socratic Questions (6–8) on assumptions, limits, and validation\n- Pair Tasks (2, 2–4 minutes) with expected outcomes\n- Exit Ticket (3 questions with answers)\n\n[6] Pedagogical or Ethical Criteria — Encourage transparency, safety, and inclusion; handle uncertainty explicitly.\n\n[7] Tone / Style — Academic and facilitative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-phys-5',
          title: 'Lecture Notes: Retrieval + Interleaving (Phys)',
          approach: 'Purpose: Mix analytic/numeric/physical intuition for durable learning.',
          promptText:
            `**Lecture Notes: Retrieval + Interleaving (Physics)**\n\n**Purpose:** Mix analytic methods, numerical approaches, and physical intuition for durable learning.\n\n**Prompt Text:**\n[1] Role & Context — You are a physics educator preparing a retrieval/interleaving mini-deck.\n\n[2] Objective / Task — Create 10 retrieval items and 3 connection items across strands.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Subtopics to interleave (Analytic/Numeric/Intuition specifics): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Retrieval Items (10) with concise answers; label each by strand\n- Connection Items (3) linking two strands with brief explanations\n- Study Guidance on interleaving/spacing for physics problem-solving\n\n[6] Pedagogical or Ethical Criteria — Balance difficulty and coverage; avoid trick items.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-phys-6',
          title: 'Physics: Objectives → Evidence → Activities (Backward Design)',
          approach: 'Purpose: Align notes to objectives with acceptable evidence and targeted activities in physics.',
          promptText:
            `**Physics: Objectives → Evidence → Activities (Backward Design)**\n\n**Purpose:** Align notes to explicit physics objectives using backward design.\n\n**Prompt Text:**\n[1] Role & Context — You are a physics educator applying backward design.\n\n[2] Objective / Task — Produce objectives table, notes per objective (with misconception + corrective cue), and checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Objectives (3–5) and background: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Objectives Table (objective → acceptable evidence)\n- Notes per Objective (with misconception + corrective cue)\n- Checks for Understanding (3 with rationales)\n- Practice Prompts (2 with solution keys)\n- Synthesis (4–6 sentences)\n\n[6] Pedagogical or Ethical Criteria — Emphasize validation, units/limits, and inclusion; avoid overclaiming.\n\n[7] Tone / Style — Academic and structured.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      'Marine and Environmental Sciences': [
        {
          id: 'ln-mes-1',
          title: 'Lecture Notes: Concept Map (MES)',
          approach: 'Purpose: Link sampling, uncertainty, and policy relevance.',
          promptText:
            `**Lecture Notes: Concept Map (Marine & Environmental Sciences)**\n\n**Purpose:** Link sampling design, uncertainty, confounds, and policy relevance.\n\n**Prompt Text:**\n[1] Role & Context — You are an MES educator preparing a concept-map lecture handout for [Insert Topic].\n\n[2] Objective / Task — Produce notes that connect sampling design, confounds, uncertainty, and policy links.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and goals (3–5): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Overview (why design/uncertainty/policy linkage matters)\n- Concept Map (text outline) with 8–10 nodes (design, confounds, uncertainty, policy links)\n- Node Notes (2 lines), 1 misconception per node, and 1 quick check (answer)\n- Practice (2 prompts: design critique or small analysis) with solution outlines\n- Policy/Ethics note (when applicable)\n\n[6] Pedagogical or Ethical Criteria — Include uncertainty and consent/data ethics where relevant; ensure fairness.\n\n[7] Tone / Style — Academic and applied.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-mes-2',
          title: 'Lecture Notes: Worked Example + Faded (MES)',
          approach: 'Purpose: Design/analysis example from fully worked to unguided.',
          promptText:
            `**Lecture Notes: Worked Example + Faded (Marine & Environmental Sciences)**\n\n**Purpose:** Move from fully worked design/analysis to unguided with checks.\n\n**Prompt Text:**\n[1] Role & Context — You are an MES educator creating a faded guidance sequence.\n\n[2] Objective / Task — Provide a fully worked example, a partially worked variant, and an unguided prompt with a key.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic/skill and constraints (seasonality, access, instrumentation): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Problem A: Fully Worked (commentary, assumptions)\n- Problem B: Partially Worked (~50% hidden) + full solution\n- Problem C: Unguided Prompt + answer key + 2–3 hints\n- Pitfalls List (confounds, uncertainty quantification, policy misreads)\n\n[6] Pedagogical or Ethical Criteria — Emphasize uncertainty, ethics, and responsible interpretation.\n\n[7] Tone / Style — Academic and coaching-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-mes-3',
          title: 'Lecture Notes: Misconceptions + Refutation (MES)',
          approach: 'Purpose: Counter errors about uncertainty, confounds, and causality.',
          promptText:
            `**Lecture Notes: Misconceptions + Refutation (Marine & Environmental Sciences)**\n\n**Purpose:** Address misconceptions about uncertainty, confounds, and causality with minimal examples.\n\n**Prompt Text:**\n[1] Role & Context — You are an MES educator preparing misconception-first notes.\n\n[2] Objective / Task — List 5–6 misconceptions and provide concise refutations with minimal examples.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and known pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Misconceptions (5–6) with refutations and minimal evidence/examples\n- Checks for Understanding (3 with answers and rationales)\n- Short Synthesis (how corrections inform design/analysis choices)\n\n[6] Pedagogical or Ethical Criteria — Ensure fairness; highlight uncertainty honestly.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-mes-4',
          title: 'Lecture Notes: Socratic + Pause Points (MES)',
          approach: 'Purpose: Engage reasoning on design/analysis choices.',
          promptText:
            `**Lecture Notes: Socratic + Pause Points (Marine & Environmental Sciences)**\n\n**Purpose:** Engage reasoning on design/analysis choices, confounds, and policy interpretation.\n\n**Prompt Text:**\n[1] Role & Context — You are an MES educator designing an interactive mini-lecture.\n\n[2] Objective / Task — Provide a timeboxed outline, 6–8 Socratic questions, and 2 pair tasks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and time available: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Outline (intro → core → synthesis) with minute estimates\n- Socratic Questions (6–8) probing confounds, uncertainty, and policy interpretation\n- Pair Tasks (2, 2–4 minutes) with expected outcomes\n- Exit Ticket (3 questions with answers)\n\n[6] Pedagogical or Ethical Criteria — Transparency about limits; inclusion; responsible framing.\n\n[7] Tone / Style — Academic and facilitative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-mes-5',
          title: 'Lecture Notes: Retrieval + Interleaving (MES)',
          approach: 'Purpose: Mix subtopics (sampling, models, policy) to build transfer.',
          promptText:
            `**Lecture Notes: Retrieval + Interleaving (Marine & Environmental Sciences)**\n\n**Purpose:** Interleave sampling, models, and policy reasoning to build transfer.\n\n**Prompt Text:**\n[1] Role & Context — You are an MES educator preparing a retrieval/interleaving mini-deck.\n\n[2] Objective / Task — Create 10 retrieval items and 3 connection items across strands.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Subtopics to interleave (Sampling/Model/Policy specifics): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Retrieval Items (10) with concise answers; label each by strand\n- Connection Items (3) linking two strands with brief explanations\n- Study Guidance on how to interleave effectively\n\n[6] Pedagogical or Ethical Criteria — Balance coverage and difficulty; avoid trick items.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-mes-6',
          title: 'MES: Objectives → Evidence → Activities (Backward Design)',
          approach: 'Purpose: Align notes to objectives with acceptable evidence and targeted activities in environmental contexts.',
          promptText:
            `**Marine & Environmental Sciences: Objectives → Evidence → Activities (Backward Design)**\n\n**Purpose:** Align notes to explicit MES objectives using backward design.\n\n**Prompt Text:**\n[1] Role & Context — You are an environmental sciences educator applying backward design.\n\n[2] Objective / Task — Produce objectives table, notes per objective (with misconception + corrective cue), and checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Objectives (3–5) and background: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Objectives Table (objective → acceptable evidence)\n- Notes per Objective (with misconception + corrective cue)\n- Checks for Understanding (3 with rationales)\n- Practice Prompts (2 with keys)\n- Synthesis (4–6 sentences)\n\n[6] Pedagogical or Ethical Criteria — Include consent/data ethics where relevant; emphasize uncertainty and policy relevance.\n\n[7] Tone / Style — Academic and structured.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Psychology: [
        {
          id: 'ln-psy-1',
          title: 'Lecture Notes: Threshold Concepts (Psy)',
          approach: 'Purpose: Emphasize validity, reliability, and inference.',
          promptText:
            `**Lecture Notes: Threshold Concepts (Psychology)**\n\n**Purpose:** Emphasize construct validity, reliability, and inference quality.\n\n**Prompt Text:**\n[1] Role & Context — You are a psychology educator preparing threshold-concept notes for [Insert Topic].\n\n[2] Objective / Task — Produce notes that highlight validity, reliability, and inference quality.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and learning goals (3–5): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Concept Outline (concise definitions and why each matters)\n- Misconceptions (5) with refutations (e.g., p<.05 guarantees truth)\n- Checks for Understanding (3 with answers and rationales)\n- Practice (2 prompts with solution outlines)\n\n[6] Pedagogical or Ethical Criteria — Emphasize fairness, privacy, and honest uncertainty.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-psy-2',
          title: 'Lecture Notes: Worked Example + Faded (Psy)',
          approach: 'Purpose: From fully worked analysis to unguided with key.',
          promptText:
            `**Lecture Notes: Worked Example + Faded (Psychology)**\n\n**Purpose:** Move from fully worked analysis to unguided, with ethical constraints in view.\n\n**Prompt Text:**\n[1] Role & Context — You are a psychology educator creating a faded guidance sequence.\n\n[2] Objective / Task — Provide a fully worked analysis, a partially worked variant, and an unguided prompt with a key.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic/skill and constraints (ethics, privacy, data limitations): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Problem A: Fully Worked (choices, assumptions, caveats)\n- Problem B: Partially Worked (~50% hidden) + full solution\n- Problem C: Unguided Prompt + answer key + 2–3 hints\n- Pitfalls List (interpretation errors, construct drift, overfitting)\n\n[6] Pedagogical or Ethical Criteria — Emphasize fairness, privacy, and responsible interpretation.\n\n[7] Tone / Style — Academic and coaching-minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-psy-3',
          title: 'Lecture Notes: Misconceptions + Refutation (Psy)',
          approach: 'Purpose: Counter misinterpretations (p-values, priors, causality).',
          promptText:
            `**Lecture Notes: Misconceptions + Refutation (Psychology)**\n\n**Purpose:** Counter misinterpretations (p-values, priors, causality) with minimal examples.\n\n**Prompt Text:**\n[1] Role & Context — You are a psychology educator preparing misconception-first notes.\n\n[2] Objective / Task — List 5–6 misconceptions and provide concise refutations with minimal examples.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and known pitfalls: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Misconceptions (5–6) with refutations and minimal examples\n- Checks for Understanding (3 with answers and rationales)\n- Short Synthesis (connect to responsible inference and reporting)\n\n[6] Pedagogical or Ethical Criteria — Emphasize fairness and honest limits; avoid stigmatizing examples.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-psy-4',
          title: 'Lecture Notes: Socratic + Pause Points (Psy)',
          approach: 'Purpose: Invite reasoning about measurement and analysis choices.',
          promptText:
            `**Lecture Notes: Socratic + Pause Points (Psychology)**\n\n**Purpose:** Invite reasoning about measurement and analysis choices.\n\n**Prompt Text:**\n[1] Role & Context — You are a psychology educator designing an interactive mini-lecture.\n\n[2] Objective / Task — Provide a timeboxed outline, 6–8 Socratic questions, and 2 pair tasks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and time available: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Outline (intro → core → synthesis) with minute estimates\n- Socratic Questions (6–8) targeting measurement validity, reliability, and inference\n- Pair Tasks (2, 2–4 minutes) with expected outcomes\n- Exit Ticket (3 questions with answers)\n\n[6] Pedagogical or Ethical Criteria — Emphasize fairness, privacy, and inclusive examples.\n\n[7] Tone / Style — Academic and facilitative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-psy-5',
          title: 'Lecture Notes: Retrieval + Interleaving (Psy)',
          approach: 'Purpose: Mix constructs, designs, and analysis to improve transfer.',
          promptText:
            `**Lecture Notes: Retrieval + Interleaving (Psychology)**\n\n**Purpose:** Interleave constructs, designs, and analysis decisions to improve transfer.\n\n**Prompt Text:**\n[1] Role & Context — You are a psychology educator preparing a retrieval/interleaving mini-deck.\n\n[2] Objective / Task — Create 10 retrieval items and 3 connection items across strands.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Subtopics to interleave (Constructs/Designs/Analysis specifics): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Retrieval Items (10) with concise answers; label each by strand\n- Connection Items (3) linking two strands with brief explanations\n- Study Guidance on interleaving for durable understanding\n\n[6] Pedagogical or Ethical Criteria — Balance coverage; use fair, non-stereotyped examples.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'ln-psy-6',
          title: 'Psychology: Objectives → Evidence → Activities (Backward Design)',
          approach: 'Purpose: Align notes to objectives with acceptable evidence and targeted activities in psychology.',
          promptText:
            `**Psychology: Objectives → Evidence → Activities (Backward Design)**\n\n**Purpose:** Align notes to explicit psychology learning objectives using backward design.\n\n**Prompt Text:**\n[1] Role & Context — You are a psychology educator applying backward design.\n\n[2] Objective / Task — Produce objectives table, notes per objective (with misconception + corrective cue), and checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Objectives (3–5 measurable) and background: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Objectives Table (objective → acceptable evidence)\n- Notes Outline per objective (with misconception + corrective cue)\n- Checks for Understanding (3 with rationales)\n- Practice Prompts (2 with keys)\n- Synthesis (4–6 sentences)\n\n[6] Pedagogical or Ethical Criteria — Emphasize fairness, privacy, and honest limits.\n\n[7] Tone / Style — Academic and structured.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
    },
  },
  {
    id: 'case-study',
    title: 'Create Case Studies & Scenarios',
    category: 'Instructional Materials',
    description:
      'Create realistic case studies and scenarios with exhibits, evolving information, and decision points. Each prompt yields clear deliverables, checks for understanding, and a debrief for transfer.',
    generalPrompts: [
      {
        id: 'cs-1',
        title: 'Case Packet: Narrative + Exhibits + Decision',
        approach: 'Purpose: Build a classic case packet with a central decision, grounded exhibits, and a tight facilitator guide.',
        promptText:
          `**Case Packet: Narrative + Exhibits + Decision**\n\n**Purpose:** Build a classic case packet with a central decision, grounded exhibits, and a tight facilitator guide.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert case writer preparing a realistic decision case for [Insert Domain/Topic].\n\n[2] Objective / Task — Produce a coherent packet with narrative, exhibits, guiding questions, facilitation notes, and an exit ticket.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]. The decision-maker role is [Insert Role].\n\n[4] Input Material — Domain/topic, constraints (time/resources/ethics), any seed data: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative (500–800 words) that culminates in a clear decision question\n- Exhibits (3–5): tables/charts/memos/transcripts with 1-line captions; referenced in-text; include alt text\n- Guiding Questions (4) that increase in depth/rigor\n- Facilitator Guide: likely misconceptions, 3 progressive hints, key takeaways\n- Exit Ticket (3 items with model answers)\n\n[6] Pedagogical or Ethical Criteria — Ensure exhibits are reproducible/sourced or labeled as sample; avoid bias; respect ethics/privacy.\n\n[7] Tone / Style — Academic and realistic; concise and accessible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'cs-2',
        title: 'Time-Released Scenario (T1 → T2 → T3)',
        approach: 'Purpose: Reveal information in stages, require stance updates, and surface uncertainty management.',
        promptText:
          `**Time-Released Scenario (T1 → T2 → T3)**\n\n**Purpose:** Reveal information in stages, require stance updates, and surface uncertainty management.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert scenario designer planning a staged-release case for [Insert Topic/Domain].\n\n[2] Objective / Task — Provide three timepoints (T1/T2/T3) with evolving info that necessitates stance updates.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; releases every [Insert Pace].\n\n[4] Input Material — Topic, constraints, and any seed data: [Paste Text Here].\n\n[5] Output Format — Sections:\n- T1: Initial Brief (context + guiding question)\n- T2: Update (new data/complication) + prompt to revise stance\n- T3: Update (constraint/contradiction) + prompt to finalize decision\n- Instructor Notes: debrief guidance (why updates occur; reasoning under uncertainty)\n- Checks (3 items with answers: one per timepoint)\n\n[6] Pedagogical or Ethical Criteria — Keep updates plausible; avoid hindsight bias; include uncertainty rationale.\n\n[7] Tone / Style — Academic and crisp; reveal only what’s needed per timepoint.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'cs-3',
        title: 'Ethical Dilemma Matrix (Options × Stakeholders × Values)',
        approach: 'Purpose: Make value trade-offs explicit and structured with risks and mitigations.',
        promptText:
          `**Ethical Dilemma Matrix (Options × Stakeholders × Values)**\n\n**Purpose:** Make value trade-offs explicit and structured with risks and mitigations.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert case designer constructing an ethics dilemma vignette.\n\n[2] Objective / Task — Produce a vignette and an options × stakeholders × values matrix with risks/mitigations.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Domain/topic, stakeholders, known constraints: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Vignette (300–500 words) culminating in an ethical choice\n- Matrix: 3 Options × Stakeholders × 2–3 Core Values\n- Risks and Mitigations per option\n- Discussion Prompts (target value conflicts and compromises)\n- Exit Ticket: position + justification (rubric bullets)\n\n[6] Pedagogical or Ethical Criteria — Ensure fairness; avoid stereotyping; keep risks/benefits balanced with realistic mitigations.\n\n[7] Tone / Style — Academic and respectful; precise about values and impacts.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'cs-4',
        title: 'Quantitative Case: Data Analysis + Sensitivity',
        approach: 'Purpose: Center evidence via computation and sensitivity analysis with transparent reasoning.',
        promptText:
          `**Quantitative Case: Data Analysis + Sensitivity**\n\n**Purpose:** Center evidence via computation and sensitivity analysis with transparent reasoning.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert case designer preparing a quantitative decision case.\n\n[2] Objective / Task — Provide data exhibits, analysis tasks, and sensitivity checks with solution outlines.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Dataset link/description and decision goal: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative (250–400 words) describing the decision context\n- Data Exhibits: small table/summary stats/graph (with alt text)\n- Tasks: compute/estimate X; compare models/assumptions Y; run sensitivity on Z\n- Solution Outlines explaining reasoning (not just numbers)\n- Debrief notes on uncertainty/limitations and “what data next?”\n\n[6] Pedagogical or Ethical Criteria — Keep data traceable; show intermediate steps; mark illustrative numbers as sample.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'cs-5',
        title: 'Red Team / Blue Team + Reconciliation',
        approach: 'Purpose: Build argumentation by pairing solution and critique with a reconciliation step.',
        promptText:
          `**Red Team / Blue Team + Reconciliation**\n\n**Purpose:** Build argumentation by pairing solution and critique with a reconciliation step.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert facilitator designing adversarial collaboration in a case.\n\n[2] Objective / Task — Provide Blue Team (solution) and Red Team (critique) briefs and a reconciliation step.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; teams of [Insert Team Size].\n\n[4] Input Material — Topic/domain and any seed exhibits: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Case Narrative with decision question\n- Blue Team Brief (proposed solution; assumptions; evidence)\n- Red Team Brief (risks; counter-evidence; alternatives)\n- Reconciliation: what changes after critique; final position and why\n- Rubric Bullets: evidence quality, fairness to counter-arguments, improvement\n\n[6] Pedagogical or Ethical Criteria — Encourage fair, steel‑man critiques; avoid strawmen; cite evidence.\n\n[7] Tone / Style — Academic and even‑handed.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'cs-6',
        title: 'Multi-Framework Analysis (Apply A vs. B to Case)',
        approach: 'Purpose: Apply two theories/frameworks to the same case, reconcile differences, and justify a decision.',
        promptText:
          `**Multi-Framework Analysis (Apply A vs. B to Case)**\n\n**Purpose:** Apply two theories/frameworks to the same case, reconcile differences, and justify a decision.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert case designer comparing frameworks on the same vignette.\n\n[2] Objective / Task — Provide prompts for Framework A and Framework B, then synthesize and decide.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Case domain and frameworks A & B: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Case Vignette (300–500 words)\n- Analysis Prompts for Framework A and for Framework B (assumptions/criteria)\n- Synthesis: compare assumptions, conflicts, agreements; justify a decision\n- Worked Outline (non-solution) to model structure\n- Exit Ticket (3 questions with answers)\n\n[6] Pedagogical or Ethical Criteria — Treat frameworks accurately; disclose limits; avoid false dichotomies.\n\n[7] Tone / Style — Academic and comparative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'cs-7',
        title: 'Role-Play Simulation: Brief + Prompts + Debrief',
        approach: 'Purpose: Assign roles with objectives, conflicts, and a guided debrief that surfaces reasoning.',
        promptText:
          `**Role-Play Simulation: Brief + Prompts + Debrief**\n\n**Purpose:** Assign roles with objectives, conflicts, and a guided debrief that surfaces reasoning.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert facilitator designing a short role‑play case.\n\n[2] Objective / Task — Provide role briefs, a meeting agenda, and a structured debrief plus student reflection.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; roles 3–5.\n\n[4] Input Material — Scenario theme and role list: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Role Briefs (one page each: objectives, constraints, 3–5 talking points)\n- Meeting Agenda (timeboxed) with prompts\n- Debrief Guide (surface reasoning, correct misconceptions, transfer questions)\n- Reflection Prompt (short)\n\n[6] Pedagogical or Ethical Criteria — Ensure respectful framing; avoid stereotyping; keep conflicts realistic.\n\n[7] Tone / Style — Academic and facilitative; clear and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'cs-8',
        title: 'Counterfactual Branching Case',
        approach: 'Purpose: Explore outcomes under altered constraints/assumptions and compare decisions.',
        promptText:
          `**Counterfactual Branching Case**\n\n**Purpose:** Explore outcomes under altered constraints/assumptions and compare decisions.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert case writer building a base case plus a counterfactual branch.\n\n[2] Objective / Task — Present a base decision, alter one critical constraint, and compare recommendations.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Base scenario and candidate counterfactuals: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Base Case Vignette + Decision Question\n- Counterfactual Branch (what changes and why it matters)\n- Comparison Table (feasibility, risks, cost/benefit, ethics)\n- Debrief Note on sensitivity/robustness\n- Checks (3 short items with answers)\n\n[6] Pedagogical or Ethical Criteria — Keep branches comparable; disclose uncertainty; avoid hindsight bias.\n\n[7] Tone / Style — Academic and structured.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'cs-9',
        title: 'Failure Analysis Case: Postmortem + Fixes',
        approach: 'Purpose: Analyze a failure using structured root-cause tools and propose realistic fixes.',
        promptText:
          `**Failure Analysis Case: Postmortem + Fixes**\n\n**Purpose:** Analyze a failure using structured root-cause tools and propose realistic fixes.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert facilitator preparing a postmortem case.\n\n[2] Objective / Task — Provide an incident report, root-cause prompts, corrective plan, and monitoring metrics.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Failure domain and any seed artifacts: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Incident Report (200–350 words)\n- Root‑Cause Analysis (Five Whys or fishbone) with prompts\n- Corrective Action Plan (short/medium/long term)\n- Metrics to Monitor and risk of recurrence\n- Debrief prompts for transfer\n\n[6] Pedagogical or Ethical Criteria — Avoid blame language; focus on systems; ensure feasibility and safety.\n\n[7] Tone / Style — Academic and constructive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
      {
        id: 'cs-10',
        title: 'Multi-Audience Case Memos (Expert + Stakeholder)',
        approach: 'Purpose: Translate the same analysis for two audiences with accurate tone and content.',
        promptText:
          `**Multi-Audience Case Memos (Expert + Stakeholder)**\n\n**Purpose:** Translate the same analysis for two audiences with accurate tone and content.\n\n**Prompt Text:**\n[1] Role & Context — You are an expert communicator designing dual-audience case memos.\n\n[2] Objective / Task — Provide a case with exhibits and prompts for expert and stakeholder memos plus reflection.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; stakeholder type: [Insert].\n\n[4] Input Material — Case domain and exhibits: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Case Narrative and Exhibits\n- Expert Memo Prompts (assumptions, uncertainty, methods, limits)\n- Stakeholder Memo Prompts (plain language implications, trade‑offs, actions)\n- Reflection comparing choices across audiences\n- Rubric bullets (accuracy, clarity, audience fit)\n\n[6] Pedagogical or Ethical Criteria — Maintain accuracy and uncertainty; avoid overclaiming; ensure inclusive language for non‑experts.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
      },
    ],
    disciplinePrompts: {
      Mathematics: [
        {
          id: 'cs-math-1',
          title: 'Modeling Case: Data-Constrained Optimization',
          approach: 'Purpose: Use a small real dataset to build and justify an optimization model.',
          promptText:
            `**Modeling Case: Data-Constrained Optimization (Mathematics)**\n\n**Purpose:** Use a small real dataset to build and justify an optimization model.\n\n**Prompt Text:**\n[1] Role & Context — You are a mathematics educator designing a modeling case in optimization.\n\n[2] Objective / Task — Define variables, objective, and constraints; solve baseline; run two sensitivity checks.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Scenario (campus scheduling/routing/resource allocation) and tiny dataset/parameters: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative with decision question\n- Exhibits: tiny dataset/parameters (units and bounds)\n- Tasks: model definition; baseline solution; 2 sensitivity checks\n- Justification Memo (assumptions, limits)\n- Debrief prompts (model fit vs. reality)\n\n[6] Pedagogical or Ethical Criteria — Ensure clarity of assumptions and feasibility; avoid opaque black‑box claims.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-math-2',
          title: 'Inference Case: Estimation vs. Decision Thresholds',
          approach: 'Purpose: Link estimation uncertainty to downstream decisions.',
          promptText:
            `**Inference Case: Estimation vs. Decision Thresholds (Mathematics)**\n\n**Purpose:** Link estimation uncertainty to downstream decisions.\n\n**Prompt Text:**\n[1] Role & Context — You are a mathematics educator preparing an estimation‑to‑decision case.\n\n[2] Objective / Task — Compute an estimate/interval, choose an action against thresholds, and test sensitivity.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Setting (quality control/risk) and metric/thresholds: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative + summary stats/interval exhibits\n- Task: compute estimate/interval; choose action with justification\n- Sensitivity: threshold shifts and sample size\n- Exit Ticket (numeric + conceptual items with answers)\n\n[6] Pedagogical or Ethical Criteria — Emphasize correct interpretation of intervals and consequences of actions.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-math-3',
          title: 'Proof-in-Context Case: Counterexample or Lemma Choice',
          approach: 'Purpose: Decide whether to pursue a proof strategy or search for a counterexample.',
          promptText:
            `**Proof-in-Context Case: Counterexample or Lemma Choice (Mathematics)**\n\n**Purpose:** Decide whether to pursue a proof strategy or search for a counterexample.\n\n**Prompt Text:**\n[1] Role & Context — You are a mathematics educator scaffolding strategy selection.\n\n[2] Objective / Task — Present a conjecture with lemmas/edges; justify proof vs. counterexample; outline approach.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic area and known results: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Conjecture and Related Lemmas (bulleted)\n- Known Results and Edge Conditions (exhibit)\n- Tasks: propose strategy; justify; if counterexample, outline construction\n- Debrief: why slips occur; transfer to similar problems\n\n[6] Pedagogical or Ethical Criteria — Encourage transparency in failed paths; reward justified choices.\n\n[7] Tone / Style — Academic and reflective.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-math-4',
          title: 'Approximation Case: Trade-offs (Bias/Variance/Cost)',
          approach: 'Purpose: Compare approximation choices under constraints.',
          promptText:
            `**Approximation Case: Trade-offs (Bias/Variance/Cost) (Mathematics)**\n\n**Purpose:** Compare approximation choices under constraints.\n\n**Prompt Text:**\n[1] Role & Context — You are a mathematics educator structuring method trade‑offs.\n\n[2] Objective / Task — Compute/estimate error metrics, choose a method, justify trade‑offs, and test sensitivity.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Methods to compare and constraints: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative with tiny numeric exhibits\n- Tasks: error metrics; method choice; justification\n- Sensitivity: how choice changes as constraints shift\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Be explicit about cost/benefit; avoid overfitting expensive methods to trivial gains.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-math-5',
          title: 'Algorithmic Fairness Case (Quant framing)',
          approach: 'Purpose: Evaluate fairness metrics and trade-offs on a small example.',
          promptText:
            `**Algorithmic Fairness Case (Mathematics)**\n\n**Purpose:** Evaluate fairness metrics and trade-offs on a small example.\n\n**Prompt Text:**\n[1] Role & Context — You are a mathematics educator crafting a fairness metrics case.\n\n[2] Objective / Task — Compute 2–3 fairness metrics, interpret, discuss incompatibilities, and choose a priority.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Small confusion‑matrix‑like exhibit: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Case Vignette\n- Metrics: formulas, values, and 1–2 line interpretations\n- Comparison Table across metrics\n- Discussion: incompatibilities; choose metric priority for context\n- Debrief: quantitative vs. normative choices\n\n[6] Pedagogical or Ethical Criteria — Surface value trade‑offs openly; avoid biased examples.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-math-6',
          title: 'Multi-Audience Case Memos (Math: Expert + Stakeholder)',
          approach: 'Purpose: Translate a quantitative analysis for expert and stakeholder audiences.',
          promptText:
            `**Multi-Audience Case Memos (Mathematics)**\n\n**Purpose:** Translate the same quantitative analysis for expert and stakeholder audiences.\n\n**Prompt Text:**\n[1] Role & Context — You are a mathematics educator preparing dual‑audience memos for a quantitative decision.\n\n[2] Objective / Task — Provide expert and stakeholder prompts grounded in the same case and exhibits.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Case domain and numeric exhibits: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Case Narrative and Exhibits (small tables/figures with alt text)\n- Expert Memo Prompts (assumptions, uncertainty, methods, limits)\n- Stakeholder Memo Prompts (plain‑language implications, trade‑offs, actions)\n- Reflection comparing choices across audiences\n- Rubric bullets (accuracy, clarity, audience fit)\n\n[6] Pedagogical or Ethical Criteria — Maintain accuracy and uncertainty; avoid overclaiming; ensure inclusive language.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Biology: [
        {
          id: 'cs-bio-1',
          title: 'Clinical/Experimental Case: Confounds + Redesign',
          approach: 'Purpose: Identify confounds and redesign to address them.',
          promptText:
            `**Clinical/Experimental Case: Confounds + Redesign (Biology)**\n\n**Purpose:** Identify confounds and redesign to address them.\n\n**Prompt Text:**\n[1] Role & Context — You are a biology educator preparing a results‑interpretation case.\n\n[2] Objective / Task — Surface plausible confounds and propose a feasible redesign (sampling, controls, analysis).\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Topic and exhibit (mini dataset/figure): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Case Narrative with result summary\n- Confounds (bulleted) with brief mechanisms\n- Controls/Measurement changes matched to each confound\n- Redesign Plan (sampling, controls, analysis)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Ensure ethical controls; feasibility; clarity of mechanisms.\n\n[7] Tone / Style — Academic and practical.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-bio-2',
          title: 'Field Scenario: Sampling Design under Constraints',
          approach: 'Purpose: Choose a feasible sampling design with trade-offs.',
          promptText:
            `**Field Scenario: Sampling Design under Constraints (Biology)**\n\n**Purpose:** Choose a feasible sampling design with trade‑offs.\n\n**Prompt Text:**\n[1] Role & Context — You are a biology educator creating a field sampling case.\n\n[2] Objective / Task — Compare two candidate designs, justify the choice, and plan risk/mitigation.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Setting and constraints: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Vignette with objective and constraints\n- Comparison Table (cost/coverage/precision)\n- Justified Choice with assumptions and violation effects\n- Risk/Mitigation plan for confounds and bias\n- Short Checks with answers\n\n[6] Pedagogical or Ethical Criteria — Address safety/consent when relevant; ensure feasible logistics.\n\n[7] Tone / Style — Academic and practical.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-bio-3',
          title: 'Interpretation Case: Conflicting Evidence',
          approach: 'Purpose: Reconcile conflicting results across methods or scales.',
          promptText:
            `**Interpretation Case: Conflicting Evidence (Biology)**\n\n**Purpose:** Reconcile conflicting results across methods or scales.\n\n**Prompt Text:**\n[1] Role & Context — You are a biology educator preparing a conflicting‑evidence case.\n\n[2] Objective / Task — Present side‑by‑side observations, propose explanations, and design a follow‑up test.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Two data sources/exhibits: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Case Narrative + exhibits\n- Conflicting Observations (side‑by‑side bullets)\n- Reconciliation Hypotheses (2–3) with quick pros/cons\n- Follow‑Up Test (feasible and decision‑relevant)\n- Brief Debrief on measurement limits and inference\n\n[6] Pedagogical or Ethical Criteria — Avoid overclaiming; ensure feasible and ethical follow‑ups.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-bio-4',
          title: 'Ethics Case: Data/Consent/Privacy',
          approach: 'Purpose: Evaluate ethical implications and propose safeguards.',
          promptText:
            `**Ethics Case: Data/Consent/Privacy (Biology)**\n\n**Purpose:** Evaluate ethical implications and propose safeguards.\n\n**Prompt Text:**\n[1] Role & Context — You are a biology educator designing an ethics case (human/animal/field).\n\n[2] Objective / Task — Provide an options analysis and a recommended plan with safeguards.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Scenario and constraints (consent/privacy/risks): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Vignette with stakeholders and risks\n- Options Analysis (benefits/risks/safeguards) in a table\n- Recommended Plan with rationale\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Respect consent/privacy; ensure feasible safeguards; note regulatory/IRB implications when relevant.\n\n[7] Tone / Style — Academic and respectful.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-bio-5',
          title: 'Intervention Case: Design + Evaluation',
          approach: 'Purpose: Propose an intervention and evaluation plan.',
          promptText:
            `**Intervention Case: Design + Evaluation (Biology)**\n\n**Purpose:** Propose an intervention and evaluation plan.\n\n**Prompt Text:**\n[1] Role & Context — You are a biology educator designing an intervention case.\n\n[2] Objective / Task — Provide a design with controls/outcomes and an evaluation plan with feasible metrics.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Target and constraints: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Case Narrative and constraints\n- Intervention Design (controls, outcomes)\n- Evaluation Plan (metrics, power/feasibility)\n- Risks/Ethics note + mitigation\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Ensure ethical feasibility; avoid overclaiming; include uncertainty.\n\n[7] Tone / Style — Academic and pragmatic.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-bio-6',
          title: 'Multi-Framework Analysis (Bio: Mechanism vs. Data-Driven)',
          approach: 'Purpose: Apply mechanism-first vs. data-first reasoning to the same case and reconcile.',
          promptText:
            `**Multi-Framework Analysis (Biology: Mechanism vs. Data-Driven)**\n\n**Purpose:** Apply mechanism‑first vs. data‑first reasoning to the same case and reconcile.\n\n**Prompt Text:**\n[1] Role & Context — You are a biology educator comparing frameworks on one vignette.\n\n[2] Objective / Task — Analyze via mechanism‑first and data‑first prompts; synthesize and decide.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Case domain and exhibits: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Case Vignette (300–500 words)\n- Framework A: Mechanism‑First prompts (assumptions/criteria)\n- Framework B: Data‑First prompts (assumptions/criteria)\n- Synthesis: compare conflicts/agreements; justify a decision\n- Exit Ticket (3 questions with answers)\n\n[6] Pedagogical or Ethical Criteria — Represent both frameworks fairly; disclose limits; avoid cherry‑picking.\n\n[7] Tone / Style — Academic and comparative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      'Chemistry and Chemical Biology': [
        {
          id: 'cs-chem-1',
          title: 'Mechanism Case: Competing Pathways',
          approach: 'Purpose: Evaluate mechanistic alternatives with evidence.',
          promptText:
            `**Mechanism Case: Competing Pathways (Chemistry & Chemical Biology)**\n\n**Purpose:** Evaluate mechanistic alternatives with evidence.\n\n**Prompt Text:**\n[1] Role & Context — You are a chemistry educator preparing a mechanism‑comparison case.\n\n[2] Objective / Task — Compare mechanisms A vs. B with evidence; justify a choice; propose a discriminating experiment.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Reaction class/context and seed exhibits: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative and exhibits (spectra/kinetics/observations; include alt text)\n- Evidence Mapping: bullets for/against each mechanism\n- Choice and Justification\n- Discriminating Experiment (concrete and safe)\n- Safety/Assumptions note\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Emphasize safety and uncertainty; avoid overclaiming.\n\n[7] Tone / Style — Academic and safety‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-chem-2',
          title: 'Spectroscopy Case: Identification + Uncertainty',
          approach: 'Purpose: Identify a compound from spectra and discuss uncertainty.',
          promptText:
            `**Spectroscopy Case: Identification + Uncertainty (Chemistry & Chemical Biology)**\n\n**Purpose:** Identify a compound from spectra and discuss uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are a chemistry educator designing a spectra‑driven identification case.\n\n[2] Objective / Task — Present candidate identification(s) with justification and uncertainty; propose needed data.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Spectra types and any constraints: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Exhibits (spectrum snippets/summary with alt text)\n- Candidate Identification(s) with 3–5 bullet justification\n- Candidate vs. Evidence table\n- Additional Data to reduce uncertainty\n- Brief Debrief on error sources\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Be transparent about uncertainty; keep representations accessible.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-chem-3',
          title: 'Kinetics Case: Rate Law from Data',
          approach: 'Purpose: Derive a rate law and test assumptions.',
          promptText:
            `**Kinetics Case: Rate Law from Data (Chemistry & Chemical Biology)**\n\n**Purpose:** Derive a rate law and test assumptions.\n\n**Prompt Text:**\n[1] Role & Context — You are a chemistry educator preparing a small‑data kinetics case.\n\n[2] Objective / Task — Infer order(s), sketch a mechanism, and validate via linearization/fitting with limitations.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Data exhibit (rates/concentration/time): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative + data exhibit (tiny table; one worked linearization)\n- Tasks: infer order(s); mechanism sketch; validation approach\n- Sensitivity/limitations notes\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Emphasize assumption checks; note data quality.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-chem-4',
          title: 'Safety/Ethics Case: Procedure and Controls',
          approach: 'Purpose: Evaluate safety controls and ethical handling.',
          promptText:
            `**Safety/Ethics Case: Procedure and Controls (Chemistry & Chemical Biology)**\n\n**Purpose:** Evaluate safety controls and ethical handling.\n\n**Prompt Text:**\n[1] Role & Context — You are a chemistry educator designing a lab safety/ethics case.\n\n[2] Objective / Task — Analyze hazards, propose controls, and address ethical handling/waste.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Process hazards/ethical issues and procedure excerpt: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Vignette with procedure excerpt\n- Hazard analysis and control plan (match controls to hazards)\n- Ethical considerations and mitigation (include waste/disposal if relevant)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Comply with lab safety norms; emphasize responsible conduct.\n\n[7] Tone / Style — Academic and safety‑conscious.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-chem-5',
          title: 'Green Chemistry Case: Trade-offs',
          approach: 'Purpose: Compare greener alternatives under performance constraints.',
          promptText:
            `**Green Chemistry Case: Trade-offs (Chemistry & Chemical Biology)**\n\n**Purpose:** Compare greener alternatives under performance constraints.\n\n**Prompt Text:**\n[1] Role & Context — You are a chemistry educator preparing a green alternatives case.\n\n[2] Objective / Task — Provide options analysis and a justified choice with trade‑offs and measurement notes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Process/target and alternatives: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative + exhibits (efficiency, waste, safety)\n- Options table (performance/safety/environment)\n- Choice with justification\n- Debrief on trade‑offs and measurement uncertainty\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Be honest about environmental impacts; avoid green‑washing.\n\n[7] Tone / Style — Academic and balanced.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-chem-6',
          title: 'Multi-Framework Analysis (Chem: Mechanism vs. Kinetics Fit)',
          approach: 'Purpose: Apply mechanism justification vs. kinetics fit perspectives and reconcile.',
          promptText:
            `**Multi-Framework Analysis (Chemistry: Mechanism vs. Kinetics Fit)**\n\n**Purpose:** Apply mechanism‑first vs. kinetics‑fit perspectives to the same case and reconcile.\n\n**Prompt Text:**\n[1] Role & Context — You are a chemistry educator comparing frameworks on one vignette.\n\n[2] Objective / Task — Analyze via mechanism justification and via kinetics fitting; synthesize and decide.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Case domain and exhibits (spectra/rates): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Case Vignette (300–500 words)\n- Framework A: Mechanism‑First prompts (assumptions/criteria)\n- Framework B: Kinetics‑Fit prompts (assumptions/criteria)\n- Synthesis: compare conflicts/agreements; justify a decision\n- Exit Ticket (3 questions with answers)\n\n[6] Pedagogical or Ethical Criteria — Treat both frameworks fairly; include uncertainty; ensure safety notes as needed.\n\n[7] Tone / Style — Academic and comparative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Physics: [
        {
          id: 'cs-phys-1',
          title: 'Modeling Case: Assumptions and Limits',
          approach: 'Purpose: Choose and justify a model with explicit limits.',
          promptText:
            `**Modeling Case: Assumptions and Limits (Physics)**\n\n**Purpose:** Choose and justify a model with explicit limits.\n\n**Prompt Text:**\n[1] Role & Context — You are a physics educator building a modeling case focused on assumptions and validity limits.\n\n[2] Objective / Task — Select a model, justify assumptions and boundary conditions, run a quick check, and note failure regimes.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Physical system and constraints: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Vignette and Exhibits (concise figures/tables with alt text)\n- Model Choice with Assumptions (bullets; mark critical vs. simplifying)\n- Boundary Conditions and Parameter Values (table)\n- Quick Calculation or Simulation Outline (sanity check)\n- Validation Plan (measurable tests)\n- Debrief: Where the Model Fails and Why\n- Exit Ticket (3 items with answers)\n\n[6] Pedagogical or Ethical Criteria — Emphasize units, limits, and validation against analytic/special cases.\n\n[7] Tone / Style — Academic and precise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-phys-2',
          title: 'Measurement Case: Calibration + Uncertainty',
          approach: 'Purpose: Calibrate an instrument and quantify uncertainty.',
          promptText:
            `**Measurement Case: Calibration + Uncertainty (Physics)**\n\n**Purpose:** Calibrate an instrument and quantify uncertainty.\n\n**Prompt Text:**\n[1] Role & Context — You are a physics educator designing a calibration and uncertainty case.\n\n[2] Objective / Task — Build a calibration curve, compute uncertainty, discuss error sources, and decide suitability for downstream use.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Instrument/context and seed data: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative with Calibration Data\n- Calibration Table (true vs. measured) and curve/fit notes\n- Uncertainty Propagation (one worked example)\n- Error Sources (repeatability vs. reproducibility)\n- Suitability Decision for downstream measurement\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Emphasize proper calibration practice and honest uncertainty reporting.\n\n[7] Tone / Style — Academic and safety‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-phys-3',
          title: 'Conflict Case: Theory vs. Data',
          approach: 'Purpose: Reconcile a discrepancy between model prediction and observed data.',
          promptText:
            `**Conflict Case: Theory vs. Data (Physics)**\n\n**Purpose:** Reconcile a discrepancy between model prediction and observed data.\n\n**Prompt Text:**\n[1] Role & Context — You are a physics educator preparing a conflict‑resolution case.\n\n[2] Objective / Task — Present prediction vs. observation, propose hypotheses, design tests, and choose a next step.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — System and measurements: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative + Exhibits (prediction vs. observation table/figure with alt text)\n- Discrepancy Hypotheses (2–3) with diagnostic tests\n- Next Step Choice with feasibility/diagnostic justification\n- Debrief: model revision vs. measurement error\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Keep tests feasible/safe; avoid hindsight bias; be transparent about uncertainty.\n\n[7] Tone / Style — Academic and concise.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-phys-4',
          title: 'Simulation Case: Setup + Validation',
          approach: 'Purpose: Design a minimal simulation and define validation checks.',
          promptText:
            `**Simulation Case: Setup + Validation (Physics)**\n\n**Purpose:** Design a minimal simulation and define validation checks.\n\n**Prompt Text:**\n[1] Role & Context — You are a physics educator planning a minimal simulation study.\n\n[2] Objective / Task — Specify simulation setup, sanity checks, and validation comparisons with thresholds.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — System, parameters, and constraints: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Vignette (goals/constraints)\n- Simulation Setup (parameter table with defaults)\n- Sanity Checks (expected pattern)\n- Validation Plan (comparisons and pass/fail thresholds)\n- Exit Ticket (3 items with answers)\n\n[6] Pedagogical or Ethical Criteria — Emphasize stability, reproducibility, and honest limits.\n\n[7] Tone / Style — Academic and reproducibility‑minded.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-phys-5',
          title: 'Safety/Ethics Case: Risk/Benefit + Communication',
          approach: 'Purpose: Evaluate safety/ethics and communicate decisions clearly.',
          promptText:
            `**Safety/Ethics Case: Risk/Benefit + Communication (Physics)**\n\n**Purpose:** Evaluate safety/ethics and communicate decisions clearly.\n\n**Prompt Text:**\n[1] Role & Context — You are a physics educator designing a risk/benefit communication case.\n\n[2] Objective / Task — Summarize risks/benefits/uncertainty, and craft both a stakeholder memo and an expert note.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; scenario type: [Insert].\n\n[4] Input Material — Scenario (lab/field/industry) and constraints: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative and Stakeholders\n- Options Table (risk/benefit/uncertainty)\n- Stakeholder Memo (plain language)\n- Expert Note (technical emphasis)\n- Contrast Note (2–3 sentences on differences)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Keep communication fair, accurate, and accessible; avoid overclaiming.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-phys-6',
          title: 'Multi-Framework Analysis (Phys: Energy vs. Momentum, Analytic vs. Numeric)',
          approach: 'Purpose: Apply two physics frameworks to one case and reconcile differences.',
          promptText:
            `**Multi-Framework Analysis (Physics: Energy vs. Momentum, Analytic vs. Numeric)**\n\n**Purpose:** Apply two physics frameworks to one case and reconcile differences.\n\n**Prompt Text:**\n[1] Role & Context — You are a physics educator comparing frameworks on a single vignette.\n\n[2] Objective / Task — Analyze via Framework A and Framework B, then synthesize and justify a decision.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Case domain and exhibits (figures/tables): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Case Vignette (300–500 words)\n- Framework A Prompts (e.g., Energy method or Analytic approach)\n- Framework B Prompts (e.g., Momentum method or Numeric approach)\n- Synthesis: conflicts/agreements and justified choice\n- Exit Ticket (3 questions with answers)\n\n[6] Pedagogical or Ethical Criteria — Apply each framework correctly; disclose limits; keep units/assumptions explicit.\n\n[7] Tone / Style — Academic and comparative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      'Marine and Environmental Sciences': [
        {
          id: 'cs-mes-1',
          title: 'Fisheries Management Case: Quotas under Uncertainty',
          approach: 'Purpose: Set quotas with limited data and stakeholder pressures.',
          promptText:
            `**Fisheries Management Case: Quotas under Uncertainty (Marine & Environmental Sciences)**\n\n**Purpose:** Set quotas with limited data and stakeholder pressures.\n\n**Prompt Text:**\n[1] Role & Context — You are an MES educator building a quota‑setting case.\n\n[2] Objective / Task — Compare options, weigh stakeholder impacts, recommend a quota, and define monitoring triggers.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Species/region and data sketch: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative and Exhibits (time series with uncertainty band; alt text)\n- Stakeholder Positions (bullets)\n- Options with Risks/Benefits by stakeholder\n- Recommended Quota with justification\n- Monitoring Plan (2–3 metrics and triggers)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Be transparent about uncertainty; include equity and feasibility.\n\n[7] Tone / Style — Academic and practical.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-mes-2',
          title: 'Water Quality Case: Sampling + Policy Trigger',
          approach: 'Purpose: Choose sampling plan and define policy trigger thresholds.',
          promptText:
            `**Water Quality Case: Sampling + Policy Trigger (Marine & Environmental Sciences)**\n\n**Purpose:** Choose a sampling plan and define policy trigger thresholds.\n\n**Prompt Text:**\n[1] Role & Context — You are an MES educator linking sampling design to policy action.\n\n[2] Objective / Task — Compare two sampling designs, select thresholds, and plan mitigation/communication.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Setting/contaminant and constraints: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Vignette with constraints\n- Comparison Table (design × cost × detection power × policy alignment)\n- Trigger Thresholds with rationale\n- Mitigation and Communication Plan\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Ensure feasibility, fairness, and transparency about uncertainty.\n\n[7] Tone / Style — Academic and accessible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-mes-3',
          title: 'Climate Adaptation Case: Options + Trade-offs',
          approach: 'Purpose: Evaluate adaptation options with multi-criteria analysis.',
          promptText:
            `**Climate Adaptation Case: Options + Trade-offs (Marine & Environmental Sciences)**\n\n**Purpose:** Evaluate adaptation options with multi‑criteria analysis.\n\n**Prompt Text:**\n[1] Role & Context — You are an MES educator designing a multi‑criteria adaptation case.\n\n[2] Objective / Task — Score options with weights, recommend one, and surface uncertainty/equity considerations.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Location/hazard and seed exhibits: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative and Exhibits (risk maps/costs; alt text)\n- Criteria Table with Weights and Scores\n- Recommendation with justification\n- Uncertainty Note (which criteria are most uncertain and why)\n- Equity Considerations (short bullet)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Avoid overclaiming; include equity and feasibility.\n\n[7] Tone / Style — Academic and structured.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-mes-4',
          title: 'EIA Case: Impact Pathways + Monitoring',
          approach: 'Purpose: Outline impact pathways and monitoring for a project.',
          promptText:
            `**EIA Case: Impact Pathways + Monitoring (Marine & Environmental Sciences)**\n\n**Purpose:** Outline impact pathways and monitoring for a project.\n\n**Prompt Text:**\n[1] Role & Context — You are an MES educator crafting an Environmental Impact Assessment (EIA) case.\n\n[2] Objective / Task — Articulate impact pathways and define a monitoring plan with thresholds.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Project type and constraints: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Vignette and Stakeholders\n- Impact Pathways (indented list: source → pathway → receptor)\n- Monitoring Plan (metrics, frequency, thresholds)\n- Adaptive Management Note (1 line)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Ensure measurability, consent/data ethics when relevant, and transparency.\n\n[7] Tone / Style — Academic and applied.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-mes-5',
          title: 'Policy Communication Case: Technical → Plain Language',
          approach: 'Purpose: Translate technical risk into an action-oriented brief.',
          promptText:
            `**Policy Communication Case: Technical → Plain Language (Marine & Environmental Sciences)**\n\n**Purpose:** Translate technical risk into an action‑oriented brief.\n\n**Prompt Text:**\n[1] Role & Context — You are an MES educator guiding science‑policy communication.\n\n[2] Objective / Task — Create an expert note and a policy brief from the same analysis, plus a reflection.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course]; audience: [Insert].\n\n[4] Input Material — Risk finding and exhibits: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative + Exhibits\n- Expert Note (assumptions/uncertainty)\n- Policy Brief (plain language actions)\n- Do/Don’t (2–3 bullets for conversion)\n- Reflection on trade‑offs\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Maintain accuracy; avoid overclaiming; ensure inclusive language.\n\n[7] Tone / Style — Academic and audience‑aware.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-mes-6',
          title: 'Multi-Framework Analysis (MES: Empirical vs. Mechanistic Model)',
          approach: 'Purpose: Apply empirical vs. mechanistic modeling perspectives and reconcile.',
          promptText:
            `**Multi-Framework Analysis (MES: Empirical vs. Mechanistic Model)**\n\n**Purpose:** Apply empirical vs. mechanistic modeling to the same case and reconcile.\n\n**Prompt Text:**\n[1] Role & Context — You are an MES educator comparing frameworks on a single vignette.\n\n[2] Objective / Task — Analyze via an empirical model and a mechanistic model; synthesize and decide.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Case domain and exhibits (spatial/time‑series): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Case Vignette (300–500 words)\n- Framework A: Empirical prompts (assumptions/criteria)\n- Framework B: Mechanistic prompts (assumptions/criteria)\n- Synthesis: conflicts/agreements; justified recommendation\n- Exit Ticket (3 questions with answers)\n\n[6] Pedagogical or Ethical Criteria — Be explicit about data limits and mechanism plausibility; include equity where relevant.\n\n[7] Tone / Style — Academic and comparative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
      Psychology: [
        {
          id: 'cs-psy-1',
          title: 'Measurement Validity Case: Redesign + Evidence',
          approach: 'Purpose: Diagnose validity problems and propose fixes.',
          promptText:
            `**Measurement Validity Case: Redesign + Evidence (Psychology)**\n\n**Purpose:** Diagnose validity problems and propose fixes.\n\n**Prompt Text:**\n[1] Role & Context — You are a psychology educator preparing a measurement validity case.\n\n[2] Objective / Task — Identify threats, propose redesign, and specify evidence needed post‑redesign.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Construct/measure context and excerpts: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative + Measure Excerpts\n- Threats → Redesign Mapping (small table)\n- Evidence Plan (known‑groups, convergent, etc.)\n- Feasibility/Ethics Constraints\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Emphasize fairness and clarity; avoid stigmatizing examples.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-psy-2',
          title: 'Design Case: Causal Inference Under Constraints',
          approach: 'Purpose: Choose feasible design to support causal claims.',
          promptText:
            `**Design Case: Causal Inference Under Constraints (Psychology)**\n\n**Purpose:** Choose a feasible design to support causal claims.\n\n**Prompt Text:**\n[1] Role & Context — You are a psychology educator designing a constrained causal inference case.\n\n[2] Objective / Task — Compare RCT vs. quasi‑experimental vs. observational designs, choose one, and justify risks/mitigations.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Constraints (ethics/resources/access) and objective: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Vignette and Constraints\n- Comparison Table (designs)\n- Choice and Justification\n- Unobserved Confounding Handling (1 line)\n- Mitigations (practical and ethical)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Be honest about limits; ensure participant protection.\n\n[7] Tone / Style — Academic and transparent.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-psy-3',
          title: 'Replication/Generalization Case',
          approach: 'Purpose: Assess replicability and generalization and plan a follow-up.',
          promptText:
            `**Replication/Generalization Case (Psychology)**\n\n**Purpose:** Assess replicability and generalization and plan a follow‑up.\n\n**Prompt Text:**\n[1] Role & Context — You are a psychology educator preparing a replication/generalization case.\n\n[2] Objective / Task — Evaluate replication risks, draft a replication plan, and analyze generalization.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Domain finding summary and excerpt: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative + Study Excerpt\n- Threats → Design Choices Table\n- Short Prereg‑style Plan Outline\n- Generalization Analysis (to whom/where/when)\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Encourage transparency and honest limits; avoid overclaiming.\n\n[7] Tone / Style — Academic and constructive.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-psy-4',
          title: 'Ethics Case: Consent + Risk/Benefit',
          approach: 'Purpose: Evaluate consent quality and risk/benefit in study design.',
          promptText:
            `**Ethics Case: Consent + Risk/Benefit (Psychology)**\n\n**Purpose:** Evaluate consent quality and risk/benefit in study design.\n\n**Prompt Text:**\n[1] Role & Context — You are a psychology educator designing an ethics case.\n\n[2] Objective / Task — Analyze consent quality, summarize risks/benefits, and propose safeguards with a recommendation.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Study context and consent materials: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Vignette with Consent Excerpt\n- Consent Quality Checklist\n- Risks/Benefits/Mitigations Table\n- Final Recommendation with safeguards\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Ensure fairness, privacy, and feasibility.\n\n[7] Tone / Style — Academic and responsible.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-psy-5',
          title: 'Intervention Case: Design + Evaluation',
          approach: 'Purpose: Propose an intervention and evaluation plan suited to constraints.',
          promptText:
            `**Intervention Case: Design + Evaluation (Psychology)**\n\n**Purpose:** Propose an intervention and evaluation plan suited to constraints.\n\n**Prompt Text:**\n[1] Role & Context — You are a psychology educator creating an intervention/evaluation case.\n\n[2] Objective / Task — Specify a theory of change, design and measures, and review feasibility/ethics.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Population/setting and constraints: [Paste Text Here].\n\n[5] Output Format — Sections:\n- Narrative and Objectives\n- Theory of Change (bullets)\n- Intervention Design (controls, outcomes)\n- Measurement Plan (match measures to objectives in a small table)\n- Feasibility/Ethics Review and mitigation\n- Exit Ticket with answers\n\n[6] Pedagogical or Ethical Criteria — Be realistic; ensure fairness and participant protection.\n\n[7] Tone / Style — Academic and pragmatic.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
        {
          id: 'cs-psy-6',
          title: 'Multi-Framework Analysis (Psych: Theory-Driven vs. Data-Driven)',
          approach: 'Purpose: Apply theory-driven vs. data-driven approaches to the same case and reconcile.',
          promptText:
            `**Multi-Framework Analysis (Psychology: Theory‑Driven vs. Data‑Driven)**\n\n**Purpose:** Apply theory‑driven vs. data‑driven approaches to the same case and reconcile.\n\n**Prompt Text:**\n[1] Role & Context — You are a psychology educator comparing frameworks on one vignette.\n\n[2] Objective / Task — Analyze via a theory‑driven lens and a data‑driven lens; synthesize and decide.\n\n[3] Audience / Course Context — For [Insert Student Level] in [Insert Course].\n\n[4] Input Material — Case domain and exhibits (study materials/data): [Paste Text Here].\n\n[5] Output Format — Sections:\n- Case Vignette (300–500 words)\n- Framework A: Theory‑Driven prompts (assumptions/criteria)\n- Framework B: Data‑Driven prompts (assumptions/criteria)\n- Synthesis: conflicts/agreements; justified recommendation\n- Exit Ticket (3 questions with answers)\n\n[6] Pedagogical or Ethical Criteria — Ensure fairness, privacy, and honest limits; avoid cherry‑picking.\n\n[7] Tone / Style — Academic and comparative.\n\nBefore producing the final version, ask me three clarification questions to confirm understanding. Then summarize my answers back to me in 3 bullets. Only after that, present the final output in clearly labeled sections.`,
        },
      ],
    },
  },
];
 
