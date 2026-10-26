import { useState } from "react";
import { BookOpen, Clock, GraduationCap, RotateCcw, Users } from "lucide-react";
import Reveal from "./components/Reveal";
import CourseDetail from "./components/CourseDetail";
import { COURSES, totalMenit } from "./data/courses";
import {
  loadProgress,
  resetProgress,
  saveQuizScore,
  toggleModule,
} from "./utils/progress";

const COLOR_MAP = {
  violet: "from-violet-500 to-violet-400",
  fuchsia: "from-fuchsia-500 to-fuchsia-400",
  amber: "from-amber-500 to-amber-400",
  sky: "from-sky-500 to-sky-400",
  emerald: "from-emerald-500 to-emerald-400",
};

export default function App() {
  const [progress, setProgress] = useState(() => loadProgress());
  const [openCourse, setOpenCourse] = useState(null);

  const totalModules = COURSES.reduce((a, c) => a + c.modules.length, 0);
  const doneModules = COURSES.reduce(
    (a, c) => a + (progress[c.id]?.done.length || 0),
    0
  );
  const overall = Math.round((doneModules / totalModules) * 100);

  return (
    <div className="min-h-screen bg-cloud font-sans text-ink3 antialiased">
      <header className="border-b border-rule bg-card">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3.5 md:px-8">
          <p className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-grape text-white">
              <GraduationCap className="h-4.5 w-4.5" />
            </span>
            Bela<span className="text-grape">jiva</span>
          </p>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <div className="h-2 w-32 overflow-hidden rounded-full bg-rule">
                <div
                  className="h-full rounded-full bg-grape transition-all"
                  style={{ width: `${overall}%` }}
                />
              </div>
              <span className="text-xs font-extrabold text-fog">
                progres total {overall}%
              </span>
            </div>
            <button
              onClick={() => setProgress(resetProgress())}
              className="inline-flex items-center gap-1.5 rounded-full border border-rule px-3.5 py-1.5 text-xs font-bold text-fog transition hover:text-ink3"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        {openCourse ? (
          <CourseDetail
            courseId={openCourse}
            progress={progress}
            onToggle={(cid, idx) =>
              setProgress(toggleModule(progress, cid, idx))
            }
            onScore={(score) => setProgress(saveQuizScore(progress, openCourse, score))}
            onBack={() => setOpenCourse(null)}
            onReset={() => setProgress(resetProgress())}
          />
        ) : (
          <>
            <Reveal>
              <p className="text-xs font-extrabold uppercase tracking-widest text-grape">
                Kursus Singkat Skill Usaha
              </p>
              <h1 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                Belajar pelan-papan,{" "}
                <span className="text-grape">langsung bisa dipakai</span>.
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-fog">
                Setiap kursus 4 modul singkat (8–12 menit) plus kuis 3 soal.
                Tandai modul yang sudah selesai — progres kamu tersimpan di
                browser.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: BookOpen, label: "Kursus aktif", value: COURSES.length },
                { icon: Clock, label: "Total modul singkat", value: totalModules },
                {
                  icon: Users,
                  label: "Modul selesai kamu",
                  value: `${doneModules}/${totalModules}`,
                },
              ].map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div className="flex items-center gap-3 rounded-2xl border border-rule bg-card p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-grape/10 text-grape">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xl font-extrabold text-ink3">{s.value}</p>
                      <p className="text-[11px] font-bold text-fog">{s.label}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {COURSES.map((c, i) => {
                const st = progress[c.id] || { done: [], quiz: null };
                const pct = Math.round((st.done.length / c.modules.length) * 100);
                return (
                  <Reveal key={c.id} delay={(i % 3) * 0.08} className="h-full">
                    <button
                      onClick={() => setOpenCourse(c.id)}
                      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-rule bg-card text-left shadow-sm transition hover:shadow-lg"
                    >
                      <div
                        className={`flex h-28 items-end bg-gradient-to-br ${COLOR_MAP[c.color]} p-4`}
                      >
                        <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-extrabold text-white backdrop-blur">
                          {c.level} · {c.modules.length} modul
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-extrabold leading-snug text-ink3">
                          {c.title}
                        </h3>
                        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-fog">
                          {c.desc}
                        </p>
                        <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-fog">
                          <span>Mentor {c.mentor}</span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {totalMenit(c)} menit
                          </span>
                        </div>
                        <div className="mt-4 border-t border-rule pt-4">
                          <div className="flex items-center justify-between text-[11px] font-extrabold">
                            <span className="text-fog">
                              {pct === 0
                                ? "Belum dimulai"
                                : pct === 100
                                  ? "Selesai 🎉"
                                  : `${pct}% berjalan`}
                            </span>
                            <span className="text-grape">
                              {pct === 0 ? "Mulai Belajar →" : "Lanjut Belajar →"}
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-rule">
                            <div
                              className="h-full rounded-full bg-grape transition-all"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </>
        )}
      </main>

      <footer className="border-t border-rule bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-fog sm:flex-row sm:items-center md:px-8">
          <p>© 2026 Belajiva · Kursus & mentor fiktif (concept demo).</p>
          <p>
            Dibuat oleh{" "}
            <a
              href="https://github.com/Atazyyy"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-ink3"
            >
              Agni Miftah Fauzi
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
