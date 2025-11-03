"use client";

import { useEffect, useMemo, useState } from "react";
import { Poppins } from 'next/font/google';
import Papa from "papaparse";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

type Row = Record<string, string>;

const poppins = Poppins({ subsets: ['latin'], weight: ['400','600','700','800'] });

// NU palette aligned to Streamlit example
const NU_RED = "#CC0000";
const NU_DARK_RED = "#990000";
const GRAY_DARK = "#4D4D4D";
const GRAY_LIGHT = "#D6D6D6";

// -- Helpers ---------------------------------------------------------------
function countBy<T>(items: T[], keyFn: (i: T) => string): { name: string; value: number }[] {
  const map = new Map<string, number>();
  for (const it of items) {
    const k = keyFn(it).trim();
    if (!k) continue;
    map.set(k, (map.get(k) ?? 0) + 1);
  }
  return Array.from(map, ([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
}

function normalizeToken(t: string): string {
  let x = (t ?? "").trim();
  if (!x) return "";
  // Remove enclosing quotes, brackets, parentheses if wrapping the entire token
  x = x.replace(/^['"]+|['"]+$/g, "");
  x = x.replace(/^[\[\(]+|[\]\)]+$/g, "");
  x = x.replace(/,$/, "");
  if (/^(nan|n\/a|null|none)$/i.test(x)) return "";
  return x;
}

function splitMulti(s: string | undefined | null): string[] {
  if (!s) return [];
  let str = s.trim();
  if (!str) return [];
  // Try parse JSON-style arrays like ["A","B"] or ['A','B']
  if (str.startsWith("[") && str.endsWith("]")) {
    try {
      const arr = JSON.parse(str.replace(/'/g, '"'));
      if (Array.isArray(arr)) return arr.map((v) => normalizeToken(String(v))).filter(Boolean);
    } catch {}
  }
  // Remove wrapping [] or () if present
  if ((str.startsWith("[") && str.endsWith("]")) || (str.startsWith("(") && str.endsWith(")"))) {
    str = str.slice(1, -1);
  }
  // Remove any stray bracket characters globally
  str = str.replace(/[\[\]\(\)]/g, "");
  // Replace " and " with separator
  str = str.replace(/\s+and\s+/gi, ";");
  // Split on ; or ,
  return str
    .split(/[;,]/g)
    .map((x) => normalizeToken(x))
    .filter(Boolean);
}

function percent(part: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((part / total) * 100);
}

function titleCase(s: string): string {
  return s.replace(/_/g, " ").replace(/\w\S*/g, (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase());
}

function isCommentColumn(col: string): boolean {
  const c = col.toLowerCase();
  return c.includes("describe") || c.includes("comment") || c.includes("thought");
}

// Sample fallback rows (used until CSV loads)
const SAMPLE_ROWS: Row[] = [
  { Department: "Biology", Uses_AI: "Yes", Teaches_AI: "No", AI_Tools_List: "ChatGPT, Claude", AI_Use_Cases_List: "Lecture Prep, Assessment Design", Reasons_Not_Using_List: "", Comment: "Trying AI for quiz generation." },
  { Department: "Mathematics", Uses_AI: "Yes", Teaches_AI: "Yes", AI_Tools_List: "Claude, Copilot", AI_Use_Cases_List: "Lecture Prep, Feedback", Reasons_Not_Using_List: "", Thought: "Students like quick feedback." },
  { Department: "Physics", Uses_AI: "No", Teaches_AI: "No", AI_Tools_List: "", AI_Use_Cases_List: "", Reasons_Not_Using_List: "Privacy, Accuracy", Describe: "Waiting for clearer guidance." },
  { Department: "Chemistry and Chemical Biology", Uses_AI: "Yes", Teaches_AI: "No", AI_Tools_List: "ChatGPT", AI_Use_Cases_List: "Lab Design", Reasons_Not_Using_List: "", Comment: "Helpful for pre-labs." },
  { Department: "Marine and Environmental Sciences", Uses_AI: "No Response", Teaches_AI: "No Response", AI_Tools_List: "", AI_Use_Cases_List: "", Reasons_Not_Using_List: "Time", Comment: "Not sure where to start." },
  { Department: "Psychology", Uses_AI: "Yes", Teaches_AI: "Yes", AI_Tools_List: "ChatGPT, Claude", AI_Use_Cases_List: "Rubrics, Feedback", Reasons_Not_Using_List: "", Thought: "Promising for coaching writing." },
];

type ViewTab =
  | 'Overview'
  | 'AI Tools Used'
  | 'AI Use Cases'
  | 'Teaching AI to Students'
  | 'Reasons for Not Using AI'
  | 'Open Comments'
  | 'Question Explorer';

export default function AnalyticsPage() {
  const [rows, setRows] = useState<Row[]>(SAMPLE_ROWS);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState<ViewTab>('Overview');

  // Load CSVs from public/data
  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const dataUrl = "/data/AI_Survey_Cleaned_Hybrid.csv";
        const res = await fetch(dataUrl, { cache: "no-store" });
        if (!res.ok) {
          console.warn("CSV not found, using sample fallback:", dataUrl);
          setLoaded(true);
          return;
        }
        const csvText = await res.text();
        const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true }) as unknown as { data?: Row[] };
        if (!cancelled && parsed.data && parsed.data.length) {
          setRows(parsed.data);
        }
      } catch (e) {
        console.warn("Failed to load CSV, using fallback", e);
      } finally {
        if (!cancelled) setLoaded(true);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  // Aggregations
  const totalResponses = rows.length;

  const usesAICount = useMemo(() => countBy(rows, (r) => (r["Uses_AI"] || "No Response").trim() || "No Response"), [rows]);
  const teachesAICount = useMemo(() => countBy(rows, (r) => (r["Teaches_AI"] || "No Response").trim() || "No Response"), [rows]);
  const deptCount = useMemo(() => countBy(rows, (r) => (r["Department"]?.trim() || "Unspecified")), [rows]);

  const pctUseAI = useMemo(() => {
    const yes = usesAICount.find((d) => d.name.toLowerCase() === "yes")?.value ?? 0;
    return percent(yes, totalResponses);
  }, [usesAICount, totalResponses]);

  const pctTeachAI = useMemo(() => {
    const yes = teachesAICount.find((d) => d.name.toLowerCase() === "yes")?.value ?? 0;
    return percent(yes, totalResponses);
  }, [teachesAICount, totalResponses]);

  const uniqueDepartments = useMemo(() => new Set(rows.map((r) => (r["Department"]?.trim() || "Unspecified"))).size, [rows]);

  // Multi-select expansions
  const toolsCount = useMemo(() => {
    const all: string[] = [];
    for (const r of rows) all.push(...splitMulti(r["AI_Tools_List"]));
    const filtered = all.filter((x) => x && x.toLowerCase() !== 'unspecified');
    return countBy(filtered, (x) => x);
  }, [rows]);

  const useCasesCount = useMemo(() => {
    const all: string[] = [];
    for (const r of rows) all.push(...splitMulti(r["AI_Use_Cases_List"]));
    const filtered = all.filter((x) => x && x.toLowerCase() !== 'unspecified');
    return countBy(filtered, (x) => x);
  }, [rows]);

  // Note: Previously computed aggregated reason counts. Now we present full responses instead.

  // Full, cohesive responses for reasons (no tokenization)
  const reasonsFullList = useMemo(() => {
    const cols = Object.keys(rows[0] || {});
    const rawCol = cols.find(c => /reason/i.test(c) && !/_list$/i.test(c));
    const listCol = cols.find(c => /reason/i.test(c) && /_list$/i.test(c)) || 'Reasons_Not_Using_List';
    const list: string[] = [];
    for (const r of rows) {
      const v = (rawCol ? r[rawCol] : r[listCol]) || '';
      let s = String(v).trim();
      if (!s) continue;
      s = s.replace(/[\[\]\(\)]/g, '');
      if (!rawCol) {
        const tokens = splitMulti(s);
        if (tokens.length) s = tokens.join('; ');
      }
      s = s.replace(/^['"]+|['"]+$/g, '').trim();
      if (s) list.push(s);
    }
    return list;
  }, [rows]);

  const commentColumns = useMemo(() => Object.keys(rows[0] || {}).filter(isCommentColumn), [rows]);
  // (Previously returned first few comment excerpts)

  // Chart data transform helpers
  const pieUsesAI = usesAICount.map((d) => ({ name: titleCase(d.name), value: d.value, fill: NU_RED }));
  const pieTeachesAI = teachesAICount.map((d) => ({ name: titleCase(d.name), value: d.value, fill: NU_RED }));

  // Apply consistent response color mapping for pies
  const pieColorFor = (label: string): string => {
    const key = label.toLowerCase();
    if (key === "yes") return NU_RED;
    if (key === "no") return GRAY_DARK;
    if (key === "no response") return GRAY_LIGHT;
    if (key.includes("prefer")) return "#9E9E9E";
    if (key.includes("unsure")) return NU_DARK_RED;
    // default fallback
    return NU_RED;
  };
  for (const p of pieUsesAI) p.fill = pieColorFor(p.name);
  for (const p of pieTeachesAI) p.fill = pieColorFor(p.name);

  const deptsSorted = [...deptCount].sort((a, b) => b.value - a.value);
  const topTools = toolsCount.slice(0, 12).map((d) => ({ name: d.name, value: d.value }));
  const topUseCases = useCasesCount.slice(0, 12).map((d) => ({ name: d.name, value: d.value }));

  return (
    <div className={`${poppins.className} min-h-screen bg-gray-50`}>
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-6">
        {/* Sidebar (tabs) */}
        <aside className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 h-fit sticky top-6 self-start">
          <h3 className="text-sm font-semibold mb-2 text-gray-800">Explore Options</h3>
          <nav className="space-y-1">
            {(['Overview','AI Tools Used','AI Use Cases','Teaching AI to Students','Reasons for Not Using AI','Open Comments','Question Explorer'] as ViewTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => setView(tab)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition border ${view === tab ? 'bg-gray-100 text-gray-900 border-gray-300' : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'}`}
                style={view === tab ? { borderLeftWidth: 4, borderLeftColor: NU_RED } : undefined}
              >
                {tab}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <section>
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">AI in Teaching & Learning –COS Faculty Survey Dashboard</h1>
            <blockquote className="mt-3 border-l-4 p-3 text-gray-800 bg-gray-50 border-gray-200">
              This dashboard summarizes faculty responses about how they are using (or not using) AI in teaching and learning.
            </blockquote>
          </header>

          {view === 'Overview' && (
            <div className="space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 transition hover:shadow-md">
                  <p className="text-sm text-gray-500">Faculty who use AI</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">{pctUseAI}%</p>
                  <p className="text-xs text-gray-500">Based on {totalResponses} responses</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 transition hover:shadow-md">
                  <p className="text-sm text-gray-500">Faculty who teach AI</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">{pctTeachAI}%</p>
                  <p className="text-xs text-gray-500">Based on {totalResponses} responses</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 transition hover:shadow-md">
                  <p className="text-sm text-gray-500">Departments represented</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">{uniqueDepartments}</p>
                  <p className="text-xs text-gray-500">Unique department values</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* AI Adoption Pie */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">AI Adoption Among Faculty</h3>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={pieUsesAI} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={3} stroke="#FFFFFF" strokeWidth={2}>
                          {pieUsesAI.map((entry, index) => (
                            <Cell key={`cell-u-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Teaching AI Pie */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Faculty Who Teach Students About AI</h3>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={pieTeachesAI} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={3} stroke="#FFFFFF" strokeWidth={2}>
                          {pieTeachesAI.map((entry, index) => (
                            <Cell key={`cell-t-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Responses by Department */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 lg:col-span-2">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Responses by Department</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={deptsSorted}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} angle={-15} textAnchor="end" height={60} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill={NU_RED} radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {view === 'AI Tools Used' && (
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: NU_RED }}>Tools Faculty Use in Teaching</h2>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topTools} layout="vertical" margin={{ left: 40, right: 16 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" width={160} tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Bar dataKey="value" fill={NU_RED} radius={[0, 6, 6, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {view === 'AI Use Cases' && (
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: NU_RED }}>How Faculty Are Using AI in Their Teaching</h2>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topUseCases} layout="vertical" margin={{ left: 40, right: 16 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" width={180} tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Bar dataKey="value" fill={NU_RED} radius={[0, 6, 6, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {view === 'Teaching AI to Students' && (
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: NU_RED }}>Faculty Teaching Students About AI</h2>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={pieTeachesAI} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={3} stroke="#FFFFFF" strokeWidth={2}>
                        {pieTeachesAI.map((entry, index) => (
                          <Cell key={`cell-t2-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {view === 'Reasons for Not Using AI' && (
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: NU_RED }}>Reasons Faculty Are Not Using AI</h2>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
                {reasonsFullList.length === 0 ? (
                  <p className="text-sm text-gray-500">No reasons were provided in the dataset.</p>
                ) : (
                  <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
                    {reasonsFullList.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {view === 'Open Comments' && (
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: NU_RED }}>Open Comments from Faculty</h2>
              {commentColumns.length === 0 ? (
                <div className="text-sm text-gray-500 bg-white border border-gray-200 rounded-xl p-5">No open-ended comment columns detected.</div>
              ) : (
                <div className="space-y-6">
                  {commentColumns.map((col) => {
                    const items = rows.map(r => (r[col] || '').trim()).filter(Boolean).slice(0, 50);
                    return (
                      <div key={col} className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
                        <h4 className="font-semibold mb-3" style={{ color: NU_RED }}>{col}</h4>
                        {items.length ? (
                          <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
                            {items.map((c, idx) => <li key={idx}>{c}</li>)}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-500">No responses for this question.</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {view === 'Question Explorer' && (
            <QuestionExplorer rows={rows} />
          )}

          {/* Footer Note */}
          <footer className="mt-8 text-xs text-gray-500">
            {loaded ? (
              <span>Data source: AI_Survey_Cleaned_Hybrid.csv {" "}
                <span className="text-gray-400">(fallback sample data is used if the CSV is not present)</span>
              </span>
            ) : (
              <span>Loading data&hellip;</span>
            )}
          </footer>
        </section>
      </div>
    </div>
  );
}

// Question Explorer component inspired by Streamlit version
function QuestionExplorer({ rows }: { rows: Row[] }) {
  const columns = useMemo(() => Object.keys(rows[0] || {}), [rows]);
  const isMetadata = (col: string) => {
    const lc = col.toLowerCase();
    if (lc.startsWith('unnamed')) return true;
    return ["timestamp","email","name"].some(k => lc.includes(k)) || lc.endsWith('_list');
  };
  const questionList = useMemo(() => columns.filter(c => !isMetadata(c)), [columns]);
  const [choice, setChoice] = useState<string>(questionList[0] || '');
  const prettyChoice = useMemo(() => {
    const c = choice || '(Select a question)';
    return titleCase(c.replace(/_/g, ' ').trim());
  }, [choice]);

  const sourceCol = useMemo(() => {
    const listCol = `${choice}_List`;
    return columns.includes(listCol) ? listCol : choice;
  }, [choice, columns]);

  const series = useMemo(() => rows.map(r => r[sourceCol]).filter(Boolean) as string[], [rows, sourceCol]);

  // Heuristics
  const isOpenTextByName = useMemo(() => {
    const lc = (choice || '').toLowerCase();
    return (
      lc.includes('describe') ||
      lc.includes('comment') ||
      lc.includes('thought') ||
      lc.includes('why') ||
      lc.includes('explain') ||
      lc.includes('how') ||
      lc.includes('please specify') ||
      lc.includes('other') ||
      lc.includes('feedback') ||
      lc.includes('notes') ||
      lc.includes('reflection')
    );
  }, [choice]);
  const isReasonsByName = useMemo(() => (choice || '').toLowerCase().includes('reason'), [choice]);

  const looksListLike = useMemo(() => {
    const s = series.map(v => String(v).trim());
    const startsBracket = s.filter(v => v.startsWith('[')).length / (s.length || 1);
    const hasDelims = s.filter(v => /;|,/.test(v)).length / (s.length || 1);
    return (startsBracket > 0.3) || (hasDelims > 0.5);
  }, [series]);

  const toCounts = (items: string[]) => {
    const map = new Map<string, number>();
    for (const it of items) map.set(it, (map.get(it) ?? 0) + 1);
    return Array.from(map, ([name, value]) => ({ name, value })).sort((a,b)=>b.value-a.value).slice(0, 25);
  };

  const content = useMemo(() => {
    if (!series.length) return <p className="text-sm text-gray-500">No responses available for this question.</p>;
    // Content-based signal for open-text: long answers or many unique responses
    const avgLen = series.reduce((a,s)=>a+String(s).length,0)/(series.length||1);
    const uniqueCnt = new Set(series.map(s=>String(s))).size;
    const openTextByContent = avgLen > 60 || uniqueCnt > Math.max(30, series.length * 0.5);
    if (isOpenTextByName || openTextByContent) {
      // Show as a simple list of responses for open-text questions
      return (
        <div className="space-y-2">
          <p className="text-sm text-gray-500">Open-ended responses (showing up to 100):</p>
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 max-h-[60vh] overflow-y-auto">
            <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
              {series.map(s => String(s).trim()).filter(Boolean).slice(0,100).map((t,i)=>(<li key={i}>{t}</li>))}
            </ul>
          </div>
        </div>
      );
    }
    if (looksListLike) {
      const flat: string[] = [];
      for (const v of series) {
        const t = String(v);
        const cleaned = t.replace(/^[\[\(]+|[\]\)]+$/g, '');
        if (cleaned.includes(';') || cleaned.includes(',')) flat.push(...cleaned.replace(/,/g,';').split(';').map(x=>normalizeToken(x)).filter(Boolean));
        else flat.push(normalizeToken(cleaned));
      }
      const data = toCounts(flat);
      if (isReasonsByName) {
        // Prefer raw reasons column if available, else join list tokens into a cohesive line
        const rawCol = columns.find(c => /reason/i.test(c) && !/_list$/i.test(c));
        const lines: string[] = [];
        for (const r of rows) {
          const v = (rawCol ? r[rawCol] : r[sourceCol]) || '';
          let s = String(v).trim();
          if (!s) continue;
          s = s.replace(/[\[\]\(\)]/g, '');
          if (!rawCol) {
            const tokens = splitMulti(s);
            if (tokens.length) s = tokens.join('; ');
          }
          s = s.replace(/^['"]+|['"]+$/g, '').trim();
          if (s) lines.push(s);
        }
        return (
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
            {lines.length === 0 ? (
              <p className="text-sm text-gray-500">No responses found.</p>
            ) : (
              <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
                {lines.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            )}
          </div>
        );
      }
      return (
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 40, right: 16 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={220} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill={NU_RED} radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }
    // Try numeric
    const nums = series.map(v => Number(v)).filter(v => !Number.isNaN(v));
    if (nums.length > series.length * 0.5) {
      // Simple histogram via binning
      const bins = 10;
      const min = Math.min(...nums);
      const max = Math.max(...nums);
      const step = (max - min) / bins || 1;
      const hist = new Array(bins).fill(0).map((_,i)=>({ name: `${(min + i*step).toFixed(1)}–${(min + (i+1)*step).toFixed(1)}`, value: 0 }));
      for (const n of nums) {
        const idx = Math.min(bins-1, Math.max(0, Math.floor((n - min)/step)));
        hist[idx].value += 1;
      }
      return (
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={hist}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={0} angle={-15} textAnchor="end" height={60} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill={NU_RED} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }
    // Short categorical
    if (avgLen < 40 && uniqueCnt <= Math.max(30, series.length/2)) {
      const data = toCounts(series.map(s=>String(s)));
      return (
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 40, right: 16 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={220} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill={NU_RED} radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }
    // Long text: list samples
    return (
      <div className="space-y-2">
        <p className="text-sm text-gray-500">Open-ended responses (showing up to 50):</p>
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 max-h-[50vh] overflow-y-auto">
          <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
            {series.slice(0, 50).map((t, i) => (<li key={i}>{String(t)}</li>))}
          </ul>
        </div>
      </div>
    );
  }, [series, looksListLike, isOpenTextByName, isReasonsByName, columns, rows, sourceCol]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2" style={{ color: NU_RED }}>Full Survey Question Explorer</h2>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select a question to view responses</label>
        <select value={choice} onChange={(e)=>setChoice(e.target.value)} className="w-full max-w-lg border border-gray-300 rounded-md px-3 py-2 text-sm">
          {questionList.map(q => <option key={q} value={q}>{q}</option>)}
        </select>
        <div className="mt-5">
          <h3 className="text-base font-semibold text-gray-900 mb-3">{prettyChoice}</h3>
          {content}
        </div>
      </div>
    </div>
  );
}
