"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type COSDiscipline =
  | "Mathematics"
  | "Biology"
  | "Physics"
  | "Chemistry and Chemical Biology"
  | "Marine and Environmental Sciences"
  | "Psychology";

type FacultyPrompt = {
  id?: string;
  title: string;
  discipline: COSDiscipline;
  professorName: string;
  promptText: string;
  createdAt?: unknown;
};

export default function FacultyPromptsPage() {
  const [facultyPrompts, setFacultyPrompts] = useState<FacultyPrompt[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [copySuccessId, setCopySuccessId] = useState<string | null>(null);
  const [facultySearch, setFacultySearch] = useState('');
  const [facultyCategory, setFacultyCategory] = useState<'All' | COSDiscipline>('All');
  const [activeFacultyPrompt, setActiveFacultyPrompt] = useState<FacultyPrompt | null>(null);
  const modalCloseBtnRef = useRef<HTMLButtonElement | null>(null);
  const [form, setForm] = useState({
    title: '',
    discipline: 'Mathematics' as COSDiscipline,
    professorName: '',
    promptText: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'prompts'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const prompts: FacultyPrompt[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as FacultyPrompt));
      setFacultyPrompts(prompts);
    });
    return () => unsub();
  }, []);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccessId(id);
      setTimeout(() => setCopySuccessId(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.professorName.trim() || !form.promptText.trim()) {
      setToast('Please fill in all required fields');
      setTimeout(() => setToast(null), 3000);
      return;
    }

    setSubmitting(true);
    try {
      await addDoc(collection(db, 'prompts'), {
        title: form.title.trim(),
        discipline: form.discipline,
        professorName: form.professorName.trim(),
        promptText: form.promptText.trim(),
        createdAt: serverTimestamp()
      });

      setForm({
        title: '',
        discipline: 'Mathematics',
        professorName: '',
        promptText: ''
      });
      setShowForm(false);
      setToast('Thanks! Your prompt has been added to the library.');
      setTimeout(() => setToast(null), 4000);
    } catch {
      setToast('Error submitting prompt. Please try again.');
      setTimeout(() => setToast(null), 3000);
    } finally {
      setSubmitting(false);
    }
  };

  const disciplines = useMemo<COSDiscipline[]>(() => ([
    'Mathematics',
    'Biology',
    'Physics',
    'Chemistry and Chemical Biology',
    'Marine and Environmental Sciences',
    'Psychology'
  ]), []);

  const facultyCategories = useMemo<ReadonlyArray<'All' | COSDiscipline>>(
    () => ['All', ...disciplines],
    [disciplines]
  );

  const filteredFacultyPrompts = useMemo(() => {
    const q = facultySearch.toLowerCase();
    return facultyPrompts.filter(fp => {
      const matchesSearch =
        fp.title.toLowerCase().includes(q) ||
        fp.promptText.toLowerCase().includes(q) ||
        fp.professorName.toLowerCase().includes(q) ||
        fp.discipline.toLowerCase().includes(q);
      const matchesCategory = facultyCategory === 'All' || fp.discipline === facultyCategory;
      return matchesSearch && matchesCategory;
    });
  }, [facultyPrompts, facultySearch, facultyCategory]);

  useEffect(() => {
    if (!activeFacultyPrompt) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveFacultyPrompt(null); };
    window.addEventListener('keydown', onKey);
    setTimeout(() => modalCloseBtnRef.current?.focus(), 0);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeFacultyPrompt]);

  return (
    <div className="max-w-6xl mx-auto py-12 md:py-16 px-5">
      {/* Header */}
      <header className="text-center mb-10 md:mb-14">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-red-700 mb-4">Faculty-Contributed Prompts</h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
          Prompts shared by your colleagues that have worked well in their teaching practice.
        </p>
      </header>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-red-700 mb-2">Faculty-Contributed Prompts</h2>
          <p className="text-gray-600 text-sm">
            Share a prompt that worked in your course so colleagues can reuse it. Include a clear title, discipline, and the full prompt with placeholders, for example [Insert topic] or [Insert level]. Tried something new? Add it here to help others start faster.
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center rounded-md bg-red-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-red-700 transition-colors whitespace-nowrap"
        >
          {showForm ? 'Hide Form' : 'Share Your Prompt'}
        </button>
      </div>

      {/* Submission Form */}
      {showForm && (
        <div className="mb-8 rounded-xl border border-rose-200 bg-rose-50/70 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Share a Prompt That Works</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-md border border-gray-300 bg-white p-3 focus-within:ring-2 focus-within:ring-red-500">
                <label className="block text-sm font-medium text-gray-700 mb-1">Prompt Title</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="e.g., Peer Review Guidelines"
                  className="w-full text-sm focus:outline-none"
                  required
                />
              </div>

              <div className="rounded-md border border-gray-300 bg-white p-3 focus-within:ring-2 focus-within:ring-red-500">
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  value={form.professorName}
                  onChange={(e) => setForm({ ...form, professorName: e.target.value })}
                  placeholder="e.g., Dr. Smith"
                  className="w-full text-sm focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="rounded-md border border-gray-300 bg-white p-3 focus-within:ring-2 focus-within:ring-red-500">
              <label className="block text-sm font-medium text-gray-700 mb-1">Discipline</label>
              <select
                value={form.discipline}
                onChange={(e) => setForm({ ...form, discipline: e.target.value as COSDiscipline })}
                className="w-full text-sm focus:outline-none bg-white"
              >
                {disciplines.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="rounded-md border border-gray-300 bg-white p-3 focus-within:ring-2 focus-within:ring-red-500">
              <label className="block text-sm font-medium text-gray-700 mb-1">Prompt Text</label>
              <textarea
                value={form.promptText}
                onChange={(e) => setForm({ ...form, promptText: e.target.value })}
                placeholder="Share your successful AI prompt here. Include any placeholders like [Insert topic] to make it reusable..."
                className="w-full min-h-[120px] text-sm focus:outline-none resize-y"
                required
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center rounded-md bg-red-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-red-700 disabled:opacity-60 transition-colors"
              >
                {submitting ? 'Sharing...' : 'Share Prompt'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Faculty Prompts Search + Filter */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-xl mb-4">
        <div className="px-5 py-4">
          <div className="relative mb-3">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-3.5-3.5"/></svg>
            </span>
            <input
              type="text"
              placeholder="Search faculty prompts..."
              value={facultySearch}
              onChange={(e) => setFacultySearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2">
            <span className="text-gray-500 flex items-center gap-1 text-sm"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3H2l8 9v7l4 2v-9Z"/></svg>Filter:</span>
            {facultyCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFacultyCategory(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  facultyCategory === c ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Faculty Prompts Grid (Alt-style cards) */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
        {filteredFacultyPrompts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No faculty prompts yet. Be the first to share!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacultyPrompts.map((p) => {
              const snippet = p.promptText.length > 200 ? p.promptText.slice(0, 200) + '…' : p.promptText;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveFacultyPrompt(p)}
                  className="text-left bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 flex flex-col focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label={`Open prompt: ${p.title}`}
                >
                  <div className="p-6 border-b border-gray-100">
                    <div className="mb-2">
                      <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">{p.discipline}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                    <p className="mt-1 text-xs text-gray-500">Shared by {p.professorName}</p>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">{snippet}</p>
                  </div>
                  <div className="p-4 bg-gray-50 border-t border-gray-100">
                    <span className="text-xs text-red-600 font-medium">Click to view</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal */}
      {activeFacultyPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setActiveFacultyPrompt(null)} aria-hidden />
          <div role="dialog" aria-modal="true" aria-labelledby="faculty-prompt-title" className="relative z-10 w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200">
            <div className="p-5 border-b border-gray-100 flex items-start justify-between">
              <div>
                <div className="mb-2"><span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">{activeFacultyPrompt.discipline}</span></div>
                <h3 id="faculty-prompt-title" className="text-2xl font-bold text-gray-900">{activeFacultyPrompt.title}</h3>
                <p className="text-sm text-gray-600">Shared by {activeFacultyPrompt.professorName}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => activeFacultyPrompt.id && copyToClipboard(activeFacultyPrompt.promptText, activeFacultyPrompt.id)}
                  className={`px-3 py-2 rounded-md border text-sm flex items-center gap-2 ${copySuccessId === activeFacultyPrompt.id ? 'text-green-700 border-green-300 bg-green-50' : 'text-gray-700 hover:bg-gray-50'}`}
                  title="Copy prompt"
                >
                  {copySuccessId === activeFacultyPrompt.id ? (
                    <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m20 6-11 11-5-5" /></svg>
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                  )}
                  <span>{copySuccessId === activeFacultyPrompt.id ? 'Copied' : 'Copy'}</span>
                </button>
                <button ref={modalCloseBtnRef} onClick={() => setActiveFacultyPrompt(null)} className="p-2 rounded-md hover:bg-gray-100" aria-label="Close">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-5 max-h-[60vh] overflow-y-auto">
                <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">{activeFacultyPrompt.promptText}</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <button onClick={() => setActiveFacultyPrompt(null)} className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-4 right-4 z-50 rounded-md bg-gray-900 text-white text-sm px-4 py-3 shadow-lg max-w-sm">
          {toast}
        </div>
      )}
    </div>
  );
}
