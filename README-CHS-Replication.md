# Replicate this Prompt Library for College of Health Sciences (CHS)

Use this exact brief with your AI assistant in a fresh Next.js workspace to recreate this app for CHS with the same UX, styles, and behaviors—only disciplines and prompts change.

---

## One-shot replication brief (paste into your assistant)

You are building a Next.js App Router site that exactly replicates the UX, visual style, and behaviors of my existing College of Science prompt library, but for the College of Health Sciences (CHS). Keep EVERYTHING identical except:
- The Discipline list becomes CHS disciplines
- The ready-made prompt content becomes CHS-specific

What to replicate exactly (acceptance criteria):
- Tech stack: Next.js 15 App Router with TypeScript, React 19, Tailwind v4, Firebase Firestore (modular SDK) for faculty-contributed prompts streaming
- Global look-and-feel: same typography, spacing, and color treatment
  - Primary accent red for buttons/labels: Tailwind `bg-red-600 hover:bg-red-700`, red text accents `text-red-700`
  - Success state for copy buttons: green background state `bg-green-100 text-green-800 border-green-200`
- Prompt Library page layout
  - Header: "Prompt Library" + short faculty-forward intro
  - Tabs: "Ready-Made Prompts" and "Faculty-Contributed Prompts"
  - Ready-made grid: two columns on large screens; cards are content-driven height, single red title (no duplicate badges), description, and a red "Open details" button
  - Faculty grid: accordion items that open on click; the "Share Your Prompt" button is red and reveals a form only when clicked; form fields and focus rings styled identically
- Detail page
  - Tabs for General vs Discipline-specific
  - Discipline selector styled as in the source app
  - Prompt cards with copy button; copy state goes green; content shown as monospaced pre with wrapping
  - Do NOT display any "Adoption notes" or rubric sections; copy only the main prompt text
- Data model and behavior
  - `UseCase` type with `id`, `title`, `category`, `description`, `generalPrompts[]`, `disciplinePrompts` keyed by discipline
  - At least 5 very different, detailed General prompts per use case
  - Each CHS discipline should have multiple tailored prompts per use case (add iteratively)

Project setup requirements:
- Configure Tailwind v4 and PostCSS
- Add Firebase Firestore client and stream the `prompts` collection ordering by `createdAt`
- Provide a `.env.local` template for Firebase keys
- Include a `react-katex` type stub if needed (match the original behavior)

Routes required:
- `/explore/prompts` listing page (Prompt Library)
- `/explore/prompts/[slug]` detail page per use case

Data types:
```ts
export type CHSDiscipline =
  | 'Nursing'
  | 'Pharmacy'
  | 'Public Health'
  | 'Physical Therapy'
  | 'Physician Assistant'
  | 'Nutrition & Dietetics'
  | 'Medical Laboratory Science'
  | 'Speech-Language Pathology';

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
  disciplinePrompts: Partial<Record<CHSDiscipline, { id: string; title: string; approach: string; promptText: string }[]>>;
};
```

Disciplines to use for CHS (editable):
- Nursing
- Pharmacy
- Public Health
- Physical Therapy
- Physician Assistant
- Nutrition & Dietetics
- Medical Laboratory Science
- Speech-Language Pathology

Seed use cases (start with two, mirror COS structure):
1) Redesign an Assignment (CHS variants)
2) Generate Lecture Notes & Misconceptions (CHS variants)

UI details to match:
- Listing cards: 2-col on lg, `text-red-700` titles, content-height cards, red "Open details" button
- Detail cards: index badge, title, approach, copy button (green success state), preformatted text
- Faculty tab: red "Share Your Prompt" expands to a white form; faculty items expand with chevron rotation; copy button same success state

Behavioral details to match:
- Copy actions copy only the main prompt text
- No adoption notes/rubric sections visible
- Discipline selector appears only on the Discipline tab

Deliverables:
- A working Next.js project mirroring all routes, components, and styles
- A `_data.ts` (or `_data.chs.ts`) with CHS disciplines and prompts
- Firebase config file `lib/firebase.ts` ready to accept env vars

---

## Quick-start checklist if forking this repo structure

If you copy this repository as a baseline, change these:
1) Rename the discipline type and everywhere it’s used
   - `COSDiscipline` → `CHSDiscipline`
   - Update discipline arrays and selectors
2) Duplicate `app/explore/prompts/_data.ts` to `_data.chs.ts` and update:
   - `readyUseCases` content to CHS wording and prompts
   - Per-discipline keys to the CHS list above
3) Update any textual references "College of Science" → "College of Health Sciences"
4) Keep UI components identical: `page.tsx`, `[slug]/UseCaseDetailClient.tsx`, `sidebar.tsx`, layout files, and styles
5) Keep Firebase streaming for the faculty tab; you can reuse the same collection name or point to a CHS-specific one

Optional naming:
- Keep slugs identical (`redesign-assignment`, `lecture-notes`, etc.) for parity
- Or prefix CHS if you host both side-by-side

---

## Example: minimal CHS data stub

```ts
// app/explore/prompts/_data.chs.ts
export type CHSDiscipline =
  | 'Nursing'
  | 'Pharmacy'
  | 'Public Health'
  | 'Physical Therapy'
  | 'Physician Assistant'
  | 'Nutrition & Dietetics'
  | 'Medical Laboratory Science'
  | 'Speech-Language Pathology';

export const readyUseCases = [
  {
    id: 'redesign-assignment',
    title: 'Redesign an Assignment',
    category: 'Assignment Design',
    description: 'Transform assignments to foreground clinical reasoning, documentation, and evidence under realistic constraints.',
    generalPrompts: [/* add 5+ CHS prompts */],
    disciplinePrompts: {
      Nursing: [/* variants */],
      Pharmacy: [/* variants */],
      // ...
    },
  },
  {
    id: 'lecture-notes',
    title: 'Generate Lecture Notes & Misconceptions',
    category: 'Instructional Materials',
    description: 'Produce structured notes with common misconceptions, checks for understanding, and practice prompts tailored to CHS contexts.',
    generalPrompts: [/* add 5+ CHS prompts */],
    disciplinePrompts: {/* per-CHS discipline */},
  },
];
```

---

## Handoff
- Share this file with your assistant in the new environment
- Provide your CHS discipline list and course examples, and it can generate prompts tailored accordingly
- We can later automate a script to transform COS → CHS if you prefer
