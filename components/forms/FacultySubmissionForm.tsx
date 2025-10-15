"use client";
import { useEffect, useMemo, useState } from 'react';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export type Discipline =
  | 'Mathematics'
  | 'Biology'
  | 'Physics'
  | 'Chemistry and Chemical Biology'
  | 'Marine and Environmental Sciences'
  | 'Psychology';

interface SubmissionDoc {
  id?: string;
  professorName: string;
  course: string;
  discipline: Discipline;
  oldAssignment: string;
  newAssignment: string;
  timestamp?: Timestamp;
}

export default function FacultySubmissionForm({
  selectedDiscipline,
}: {
  selectedDiscipline: Discipline;
}) {
  const [form, setForm] = useState<SubmissionDoc>({
    professorName: '',
    course: '',
    discipline: selectedDiscipline,
    oldAssignment: '',
    newAssignment: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submissions, setSubmissions] = useState<SubmissionDoc[]>([]);

  // Keep dropdown in sync when user changes filter on parent
  useEffect(() => {
    setForm(prev => ({ ...prev, discipline: selectedDiscipline }));
  }, [selectedDiscipline]);

  // Subscribe to real-time updates ordered by most recent
  useEffect(() => {
    const q = query(collection(db, 'redesignAssignments'), orderBy('timestamp', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      const items: SubmissionDoc[] = [];
      snap.forEach(doc => {
        const data = doc.data() as Omit<SubmissionDoc, 'id'>;
        items.push({ id: doc.id, ...data });
      });
      setSubmissions(items);
    }, (err) => setError(err.message));
    return () => unsub();
  }, []);

  const grouped = useMemo(() => {
    return submissions.reduce<Record<Discipline, SubmissionDoc[]>>((acc, cur) => {
      const key = cur.discipline as Discipline;
      (acc[key] ||= []).push(cur);
      return acc;
    }, {
      Mathematics: [], Biology: [], Physics: [], 'Chemistry and Chemical Biology': [], 'Marine and Environmental Sciences': [], Psychology: []
    });
  }, [submissions]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const payload = {
        professorName: form.professorName.trim(),
        course: form.course.trim(),
        discipline: form.discipline,
        oldAssignment: form.oldAssignment.trim(),
        newAssignment: form.newAssignment.trim(),
        timestamp: serverTimestamp(),
      };
      if (!payload.professorName || !payload.course || !payload.oldAssignment || !payload.newAssignment) {
        throw new Error('Please fill in all required fields.');
      }
      await addDoc(collection(db, 'redesignAssignments'), payload);
      // Clear only text fields; keep discipline synced with parent
      setForm(f => ({ ...f, professorName: '', course: '', oldAssignment: '', newAssignment: '' }));
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Submission failed';
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  }

  const DISCIPLINES: Discipline[] = [
    'Mathematics',
    'Biology',
    'Physics',
    'Chemistry and Chemical Biology',
    'Marine and Environmental Sciences',
    'Psychology',
  ];

  const currentList = grouped[selectedDiscipline] || [];

  return (
    <div className="space-y-6">
      {/* Submission Form */}
      <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="mb-3 text-center">
          <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#e85c4a] opacity-90">Faculty Submission</span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <label className="text-[12px] font-medium text-gray-700 flex flex-col gap-1">
            Professor Name
            <input
              type="text"
              value={form.professorName}
              onChange={e => setForm({ ...form, professorName: e.target.value })}
              className="rounded-md border border-gray-300 px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#e85c4a]"
              placeholder="e.g., Dr. Ana Silva"
              required
            />
          </label>
          <label className="text-[12px] font-medium text-gray-700 flex flex-col gap-1">
            Course Title or Code
            <input
              type="text"
              value={form.course}
              onChange={e => setForm({ ...form, course: e.target.value })}
              className="rounded-md border border-gray-300 px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#e85c4a]"
              placeholder="e.g., MATH 234"
              required
            />
          </label>
          <label className="text-[12px] font-medium text-gray-700 flex flex-col gap-1">
            Discipline
            <select
              value={form.discipline}
              onChange={e => setForm({ ...form, discipline: e.target.value as Discipline })}
              className="rounded-md border border-gray-300 px-3 py-2 text-[13px] bg-white focus:outline-none focus:ring-2 focus:ring-[#e85c4a]"
            >
              {DISCIPLINES.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>
          <div className="md:col-span-2 grid gap-3">
            <label className="text-[12px] font-medium text-gray-700 flex flex-col gap-1">
              Old Assignment
              <textarea
                value={form.oldAssignment}
                onChange={e => setForm({ ...form, oldAssignment: e.target.value })}
                className="min-h-[90px] rounded-md border border-gray-300 px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#e85c4a]"
                placeholder="Describe the original assignment..."
                required
              />
            </label>
            <label className="text-[12px] font-medium text-gray-700 flex flex-col gap-1">
              Redesigned Assignment
              <textarea
                value={form.newAssignment}
                onChange={e => setForm({ ...form, newAssignment: e.target.value })}
                className="min-h-[90px] rounded-md border border-gray-300 px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#e85c4a]"
                placeholder="Explain the AI-enhanced redesign..."
                required
              />
            </label>
          </div>
        </div>
        {error && <p className="mt-3 text-[12px] text-red-600">{error}</p>}
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center rounded-md bg-[#e85c4a] px-4 py-2 text-[13px] font-medium text-white shadow-sm transition hover:shadow focus:outline-none focus:ring-2 focus:ring-[#e85c4a] disabled:opacity-60"
          >
            {submitting ? 'Submitting…' : 'Submit'}
          </button>
        </div>
      </form>

      {/* Submissions summary and list */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold tracking-tight text-[#e85c4a]">
            {currentList.length} faculty submission{currentList.length === 1 ? '' : 's'} in {selectedDiscipline}
          </h4>
        </div>
        <ul className="space-y-4">
          {currentList.map((ex) => (
            <li key={ex.id} className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
              <div className="px-5 pb-5 pt-4 space-y-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-red-600 mb-2 flex items-center gap-2">🔴 <span>Old Assignment</span></p>
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-[13px] leading-relaxed text-red-800 whitespace-pre-wrap">
                    {ex.oldAssignment}
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-green-600 mb-2 flex items-center gap-2">🟢 <span>Redesigned Assignment</span></p>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-[13px] leading-relaxed text-green-800 whitespace-pre-wrap">
                    {ex.newAssignment}
                  </div>
                </div>
                <div className="text-[11px] text-gray-500">
                  <span>Submitted by {ex.professorName} · {ex.course}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
