"use client";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db as defaultDb } from "@/lib/firebase";

// College disciplines (use the project's disciplines, not healthcare ones)
export type COSDiscipline =
  | "Mathematics"
  | "Biology"
  | "Physics"
  | "Chemistry and Chemical Biology"
  | "Marine and Environmental Sciences"
  | "Psychology";

export type SectionFacultySubmissionsProps = {
  collectionName: string;
  selectedDiscipline: COSDiscipline;
  submitButtonText: string;
  modalTitle: string;
  oldLabel: string;
  newLabel: string;
  titleLabel?: string; // default: "Assignment Title"
  titlePlaceholder?: string;
  db?: ReturnType<typeof getFirestore>; // optional override for testing
};

type SubmissionDoc = {
  id: string;
  title: string;
  professorName: string;
  course: string;
  discipline: COSDiscipline;
  oldAssignment: string;
  newAssignment: string;
  timestamp?: unknown; // may be Timestamp or plain object; robust comparator handles both
};

function hasToMillis(v: unknown): v is { toMillis: () => number } {
  return (
    typeof v === "object" &&
    v !== null &&
    "toMillis" in v &&
    typeof (v as { toMillis: unknown }).toMillis === "function"
  );
}

function isTimestampLike(v: unknown): v is { seconds: number; nanoseconds?: number } {
  return (
    typeof v === "object" &&
    v !== null &&
    "seconds" in v &&
    typeof (v as { seconds: unknown }).seconds === "number"
  );
}

function tsToMillis(ts: unknown | undefined): number {
  if (!ts) return 0;
  if (hasToMillis(ts)) return ts.toMillis();
  if (isTimestampLike(ts)) {
    const base = ts.seconds * 1000;
    const extra = ts.nanoseconds ? Math.floor(ts.nanoseconds / 1e6) : 0;
    return base + extra;
  }
  return 0;
}

export default function SectionFacultySubmissions({
  collectionName,
  selectedDiscipline,
  submitButtonText,
  modalTitle,
  oldLabel,
  newLabel,
  titleLabel = "Assignment Title",
  titlePlaceholder = "e.g., Optimization Project",
  db = defaultDb,
}: SectionFacultySubmissionsProps) {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    professorName: "",
    course: "",
    discipline: selectedDiscipline,
    oldAssignment: "",
    newAssignment: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [streamError, setStreamError] = useState<string | null>(null);
  const [items, setItems] = useState<SubmissionDoc[]>([]);
  const [listOpen, setListOpen] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [expandLatest, setExpandLatest] = useState(false);

  // Keep form discipline in sync
  useEffect(() => {
    setForm((f) => ({ ...f, discipline: selectedDiscipline }));
  }, [selectedDiscipline]);

  // Live stream filtered by discipline; sort newest-first on client
  useEffect(() => {
    setStreamError(null);
    const qy = query(
      collection(db, collectionName),
      where("discipline", "==", selectedDiscipline)
    );
    const unsub = onSnapshot(
      qy,
      (snap) => {
        const docs: SubmissionDoc[] = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<SubmissionDoc, "id">),
        }));
        docs.sort((a, b) => tsToMillis(b.timestamp) - tsToMillis(a.timestamp));
        setItems(docs);
        if (expandLatest && docs.length > 0) {
          setExpandedId(docs[0].id);
          setExpandLatest(false);
        }
      },
      (err) => setStreamError(err.message || "Stream failed")
    );
    return () => unsub();
  }, [db, collectionName, selectedDiscipline, expandLatest]);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.title.trim()) e.title = "Title is required";
    if (!form.professorName.trim()) e.professorName = "Professor name is required";
    if (!form.course.trim()) e.course = "Course is required";
    if (!form.oldAssignment.trim()) e.oldAssignment = "Old assignment is required";
    if (!form.newAssignment.trim()) e.newAssignment = "Redesigned assignment is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    try {
      await addDoc(collection(db, collectionName), {
        title: form.title.trim(),
        professorName: form.professorName.trim(),
        course: form.course.trim(),
        discipline: form.discipline,
        oldAssignment: form.oldAssignment.trim(),
        newAssignment: form.newAssignment.trim(),
        timestamp: serverTimestamp(),
      });
      setShowModal(false);
      setShowToast("Thanks! Your submission was posted.");
      setExpandLatest(true);
      setTimeout(() => setShowToast(null), 3500);
      setForm({
        title: "",
        professorName: "",
        course: "",
        discipline: selectedDiscipline,
        oldAssignment: "",
        newAssignment: "",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission failed";
      setShowToast(`Error: ${msg}`);
      setTimeout(() => setShowToast(null), 4000);
    }
  }

  return (
    <div className="space-y-4">
      {/* Trigger + stream error indicator */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="inline-flex items-center rounded-md bg-[#e85c4a] text-white px-3 py-2 text-[13px] font-medium shadow-sm hover:shadow focus:outline-none"
        >
          {submitButtonText}
        </button>
        {streamError && (
          <div className="ml-3 text-[12px] text-red-600">{streamError}</div>
        )}
      </div>

      {/* Collapsible list card */}
      <div className="border border-gray-200 rounded-xl bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setListOpen((v) => !v)}
          className="w-full flex items-center justify-between text-left px-4 py-3 focus:outline-none"
        >
          <span className="text-sm font-semibold tracking-tight text-[#e85c4a]">Faculty Submissions</span>
          <svg className={`w-5 h-5 text-[#e85c4a] transition-transform ${listOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
        </button>
        <div className={`transition-all duration-500 ease-out ${listOpen ? "max-h-[1200px]" : "max-h-0"} overflow-hidden`}>
          <div className="px-4 pb-4">
            {items.length === 0 ? (
              <div className="text-[13px] text-gray-500 italic">No submissions yet for {selectedDiscipline}.</div>
            ) : (
              <ul className="space-y-4">
                {items.map((it) => {
                  const open = expandedId === it.id;
                  return (
                    <li key={it.id} className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setExpandedId(open ? null : it.id)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none"
                      >
                        <span className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-[#e85c4a] shadow shadow-[#e85c4a]/40" />
                          <span className="font-medium text-[13px] md:text-sm text-[#3a3f44] tracking-tight">
                            {it.title || "Untitled submission"}
                          </span>
                        </span>
                        <svg className={`w-5 h-5 text-[#e85c4a] transition-transform duration-300 ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                      </button>
                      <div className={`transition-all duration-500 ease-out ${open ? "max-h-[900px]" : "max-h-0"} overflow-hidden`} aria-hidden={!open}>
                        {open && (
                          <div className="px-5 pb-5 pt-0 space-y-5">
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-red-600 mb-2 flex items-center gap-2">🔴 <span>{oldLabel}</span></p>
                              <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-[13px] leading-relaxed text-red-800 whitespace-pre-wrap">
                                {it.oldAssignment}
                              </div>
                            </div>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-green-600 mb-2 flex items-center gap-2">🟢 <span>{newLabel}</span></p>
                              <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-[13px] leading-relaxed text-green-800 whitespace-pre-wrap">
                                {it.newAssignment}
                              </div>
                            </div>
                            <div className="text-[11px] text-gray-500">
                              <span>Submitted by {it.professorName} · {it.course}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={() => setShowModal(false)} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white shadow-xl">
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <h3 className="text-sm font-semibold tracking-tight text-gray-800">{modalTitle}</h3>
                <button onClick={() => setShowModal(false)} className="p-1 rounded hover:bg-gray-100 focus:outline-none">
                  <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="px-5 py-4 space-y-3">
                <div className={`rounded-md border ${errors.title ? "border-red-300" : "border-gray-300"} bg-white p-3 focus-within:ring-2 focus-within:ring-[#e85c4a]`}>
                  <label className="block text-[12px] font-medium text-gray-700 mb-1">{titleLabel}</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder={titlePlaceholder}
                    className="w-full text-[13px] focus:outline-none"
                    required
                  />
                  {errors.title && <p className="mt-1 text-[11px] text-red-600">{errors.title}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className={`rounded-md border ${errors.professorName ? "border-red-300" : "border-gray-300"} bg-white p-3 focus-within:ring-2 focus-within:ring-[#e85c4a]`}>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Professor Name</label>
                    <input
                      type="text"
                      value={form.professorName}
                      onChange={(e) => setForm({ ...form, professorName: e.target.value })}
                      placeholder="e.g., Dr. Ana Silva"
                      className="w-full text-[13px] focus:outline-none"
                      required
                    />
                    {errors.professorName && <p className="mt-1 text-[11px] text-red-600">{errors.professorName}</p>}
                  </div>
                  <div className={`rounded-md border ${errors.course ? "border-red-300" : "border-gray-300"} bg-white p-3 focus-within:ring-2 focus-within:ring-[#e85c4a]`}>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Course Title or Code</label>
                    <input
                      type="text"
                      value={form.course}
                      onChange={(e) => setForm({ ...form, course: e.target.value })}
                      placeholder="e.g., MATH 234"
                      className="w-full text-[13px] focus:outline-none"
                      required
                    />
                    {errors.course && <p className="mt-1 text-[11px] text-red-600">{errors.course}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="rounded-md border border-gray-300 bg-white p-3 focus-within:ring-2 focus-within:ring-[#e85c4a]">
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Discipline</label>
                    <select
                      value={form.discipline}
                      onChange={(e) => setForm({ ...form, discipline: e.target.value as COSDiscipline })}
                      className="w-full text-[13px] focus:outline-none bg-white"
                    >
                      {([
                        "Mathematics",
                        "Biology",
                        "Physics",
                        "Chemistry and Chemical Biology",
                        "Marine and Environmental Sciences",
                        "Psychology",
                      ] as COSDiscipline[]).map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={`rounded-md border ${errors.oldAssignment ? "border-red-300" : "border-gray-300"} bg-white p-3 focus-within:ring-2 focus-within:ring-[#e85c4a]`}>
                  <label className="block text-[12px] font-medium text-gray-700 mb-1">{oldLabel}</label>
                  <textarea
                    value={form.oldAssignment}
                    onChange={(e) => setForm({ ...form, oldAssignment: e.target.value })}
                    placeholder="Describe the original assignment..."
                    className="w-full min-h-[90px] text-[13px] focus:outline-none"
                    required
                  />
                  {errors.oldAssignment && <p className="mt-1 text-[11px] text-red-600">{errors.oldAssignment}</p>}
                </div>

                <div className={`rounded-md border ${errors.newAssignment ? "border-red-300" : "border-gray-300"} bg-white p-3 focus-within:ring-2 focus-within:ring-[#e85c4a]`}>
                  <label className="block text-[12px] font-medium text-gray-700 mb-1">{newLabel}</label>
                  <textarea
                    value={form.newAssignment}
                    onChange={(e) => setForm({ ...form, newAssignment: e.target.value })}
                    placeholder="Explain the redesigned version..."
                    className="w-full min-h-[90px] text-[13px] focus:outline-none"
                    required
                  />
                  {errors.newAssignment && <p className="mt-1 text-[11px] text-red-600">{errors.newAssignment}</p>}
                </div>

                <div className="pt-1 flex justify-end">
                  <button type="submit" className="inline-flex items-center rounded-md bg-[#e85c4a] text-white px-3 py-2 text-[13px] font-medium shadow-sm hover:shadow focus:outline-none">
                    Post submission
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50 rounded-md bg-gray-900 text-white text-[12px] px-3 py-2 shadow-lg">
          {showToast}
        </div>
      )}
    </div>
  );
}
