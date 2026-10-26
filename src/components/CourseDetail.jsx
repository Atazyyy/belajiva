import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Check,
  ChevronLeft,
  Clock,
  PlayCircle,
  RotateCcw,
  Timer,
} from "lucide-react";
import { courseById, totalMenit } from "../data/courses";

const COLOR_MAP = {
  violet: "bg-violet-500",
  fuchsia: "bg-fuchsia-500",
  amber: "bg-amber-500",
  sky: "bg-sky-500",
  emerald: "bg-emerald-500",
};

function Quiz({ course, bestScore, onScore }) {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const submit = () => {
    if (Object.keys(answers).length < course.quiz.length)
      return setResult({ error: "Jawab semua soal dulu ya." });
    const score = course.quiz.reduce(
      (a, q, i) => a + (answers[i] === q.answer ? 1 : 0),
      0
    );
    setResult({ score });
    onScore(score);
  };

  if (result && result.score !== undefined) {
    const perfect = result.score === course.quiz.length;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-rule bg-card p-6 text-center"
      >
        <Award className={"mx-auto h-12 w-12 " + (perfect ? "text-amber-500" : "text-grape")} />
        <p className="mt-3 text-xl font-extrabold text-ink3">
          Skor kamu: {result.score}/{course.quiz.length}
        </p>
        <p className="mt-1 text-sm text-fog">
          {perfect
            ? "Sempurna! Materi ini sudah kamu kuasai."
            : "Bagus! Cek ulang modul terkait, lalu coba lagi untuk skor sempurna."}
        </p>
        <button
          onClick={() => {
            setAnswers({});
            setResult(null);
          }}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-rule px-4 py-2 text-xs font-bold text-fog transition hover:text-ink3"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Ulangi kuis
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-rule bg-card p-6">
      <p className="inline-flex items-center gap-2 text-sm font-extrabold text-ink3">
        <Timer className="h-4 w-4 text-grape" /> Kuis Akhir
        {bestScore !== null && (
          <span className="rounded-full bg-grape/10 px-2.5 py-0.5 text-[10px] font-extrabold text-grape">
            skor terbaik: {bestScore}/{course.quiz.length}
          </span>
        )}
      </p>
      <div className="mt-4 space-y-5">
        {course.quiz.map((q, i) => (
          <div key={i}>
            <p className="text-sm font-bold text-ink3">
              {i + 1}. {q.q}
            </p>
            <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {q.options.map((opt, oi) => (
                <button
                  key={oi}
                  onClick={() => setAnswers({ ...answers, [i]: oi })}
                  className={
                    "rounded-xl border px-3.5 py-2.5 text-left text-xs font-semibold transition " +
                    (answers[i] === oi
                      ? "border-grape bg-grape/10 text-ink3"
                      : "border-rule bg-cloud text-fog hover:border-grape/40")
                  }
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {result?.error && (
        <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-700">
          {result.error}
        </p>
      )}
      <button
        onClick={submit}
        className="mt-5 w-full rounded-xl bg-grape px-4 py-3 text-sm font-extrabold text-white transition hover:brightness-110"
      >
        Kirim Jawaban
      </button>
    </div>
  );
}

export default function CourseDetail({ courseId, progress, onToggle, onScore, onBack, onReset }) {
  const course = courseById(courseId);
  const state = progress[courseId] || { done: [], quiz: null };
  const pct = Math.round((state.done.length / course.modules.length) * 100);
  const complete = pct === 100 && (state.quiz ?? 0) >= 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-5"
    >
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm font-bold text-fog transition hover:text-ink3"
      >
        <ChevronLeft className="h-4 w-4" /> Semua kursus
      </button>

      <div className={"rounded-3xl p-6 text-white " + COLOR_MAP[course.color]}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-white/70">
              {course.level} · Mentor {course.mentor}
            </p>
            <h2 className="mt-1 text-2xl font-extrabold">{course.title}</h2>
            <p className="mt-2 max-w-lg text-sm text-white/85">{course.desc}</p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-white/15 px-4 py-3 backdrop-blur">
            <span className="text-3xl font-extrabold">{pct}%</span>
            <span className="text-xs font-bold text-white/80">
              selesai
              <br />
              ({state.done.length}/{course.modules.length} modul)
            </span>
          </div>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/25">
          <div className="h-full rounded-full bg-white transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {complete && (
        <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <Award className="h-6 w-6 text-amber-500" />
          <p className="text-sm font-bold text-amber-700">
            Selamat — semua modul selesai & kuis lolos. Materi ini siap kamu
            terapkan di usahamu!
          </p>
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-rule bg-card p-5">
          <div className="flex items-center justify-between">
            <p className="inline-flex items-center gap-2 text-sm font-extrabold text-ink3">
              <BookOpen className="h-4 w-4 text-grape" /> Modul
            </p>
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1 rounded-full border border-rule px-3 py-1 text-[10px] font-bold text-fog transition hover:text-ink3"
            >
              <RotateCcw className="h-3 w-3" /> Reset progres semua kursus
            </button>
          </div>
          <ul className="mt-3 space-y-2">
            {course.modules.map((m, i) => {
              const done = state.done.includes(i);
              return (
                <li key={i}>
                  <button
                    onClick={() => onToggle(courseId, i)}
                    className={
                      "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition " +
                      (done
                        ? "border-grape/40 bg-grape/5"
                        : "border-rule bg-cloud hover:border-grape/40")
                    }
                  >
                    <span
                      className={
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold " +
                        (done ? "bg-grape text-white" : "bg-white text-fog border border-rule")
                      }
                    >
                      {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                    </span>
                    <span
                      className={
                        "flex-1 text-xs font-bold " +
                        (done ? "text-ink3 line-through opacity-60" : "text-ink3")
                      }
                    >
                      {m.title}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-bold text-fog">
                      <Clock className="h-3 w-3" /> {m.menit}m
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-center text-[11px] text-fog">
            Klik modul untuk menandai selesai — progres tersimpan otomatis.
          </p>
        </div>

        <div>
          <Quiz course={course} bestScore={state.quiz} onScore={onScore} />
          <div className="mt-4 rounded-2xl border border-rule bg-card p-5">
            <p className="inline-flex items-center gap-2 text-sm font-extrabold text-ink3">
              <PlayCircle className="h-4 w-4 text-grape" /> Info kursus
            </p>
            <ul className="mt-3 space-y-1.5 text-xs font-semibold text-fog">
              <li>• Total {course.modules.length} modul · {totalMenit(course)} menit</li>
              <li>• Kuis {course.quiz.length} soal — lulus minimal 2 benar</li>
              <li>• Semua materi video-friendly (rundown siap produksi)</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
