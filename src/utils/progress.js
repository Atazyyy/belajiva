const KEY = "blj-progress-v1";

/* progress = { [courseId]: { done: number[], quiz: number|null } } */

export function loadProgress() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* abaikan */
  }
  return {};
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(progress));
  } catch {
    /* abaikan */
  }
}

export function toggleModule(progress, courseId, idx, total) {
  const cur = progress[courseId] || { done: [], quiz: null };
  const done = cur.done.includes(idx)
    ? cur.done.filter((i) => i !== idx)
    : [...cur.done, idx];
  const next = { ...progress, [courseId]: { ...cur, done } };
  saveProgress(next);
  return next;
}

export function saveQuizScore(progress, courseId, score) {
  const cur = progress[courseId] || { done: [], quiz: null };
  const next = {
    ...progress,
    [courseId]: { ...cur, quiz: Math.max(cur.quiz ?? -1, score) },
  };
  saveProgress(next);
  return next;
}

export function resetProgress() {
  saveProgress({});
  return {};
}
