// Desenvolvido por Prof. Marcelo Oliveira
/* ═══════════════════════════════════════════════════════
   DevBook — Progresso, XP, streak e conquistas
   Persistência: localStorage
   ═══════════════════════════════════════════════════════ */

const Progress = (() => {
  const KEY = "devbook_progress_v1";

  const defaults = () => ({
    xp: 0,
    chaptersDone: [],        // ids concluídos
    quizzes: {},             // { chapterId: { correct, total } }
    flashReviews: 0,
    perfectQuizzes: 0,
    streak: 0,
    lastStudy: null,         // "YYYY-MM-DD"
    badges: [],              // ids ganhos
    seenFlashcards: {}       // fila de revisão espaçada { idx: { due, box } }
  });

  let state;

  function load() {
    // Tratamento de erro: evita que o site quebre
    try {
      const raw = localStorage.getItem(KEY);
      state = raw ? { ...defaults(), ...JSON.parse(raw) } : defaults();
    } catch { state = defaults(); }
    updateStreak();
  }

  function save() {
    // Le ou grava dados no navegador
    localStorage.setItem(KEY, JSON.stringify(state));
  }

  /* ─── Streak (sequência de dias) ─── */
  function today() { return new Date().toISOString().slice(0, 10); }

  function updateStreak() {
    const t = today();
    // Condicao: o bloco so roda se for verdadeiro
    if (state.lastStudy === t) return;
    const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    state.streak = (state.lastStudy === yesterday) ? state.streak + 1 : 1;
    state.lastStudy = t;
    save();
  }

  /* ─── XP e níveis ─── */
  const LEVELS = [
    { at: 0,    name: "Iniciante" },
    { at: 100,  name: "Aprendiz" },
    { at: 300,  name: "Explorador" },
    { at: 600,  name: "Praticante" },
    { at: 1000, name: "Desenvolvedor" },
    { at: 1500, name: "Pleno" },
    { at: 2200, name: "Avançado" },
    { at: 3000, name: "Senior" },
    { at: 4000, name: "Especialista" },
    { at: 5500, name: "Mestre do Código" }
  ];

  function levelInfo() {
    let idx = 0;
    // Laco de repeticao: repete o bloco enquanto a condicao valer
    for (let i = 0; i < LEVELS.length; i++) if (state.xp >= LEVELS[i].at) idx = i;
    const cur = LEVELS[idx];
    const next = LEVELS[idx + 1] || null;
    const base = cur.at;
    const need = next ? next.at - base : 1;
    const have = state.xp - base;
    return {
      n: idx + 1,
      name: cur.name,
      pct: next ? Math.min(100, Math.round((have / need) * 100)) : 100,
      into: next ? have : need,
      need: next ? need : need
    };
  }

  function addXP(amount, reason) {
    const before = levelInfo().n;
    updateStreak();
    state.xp += amount;
    save();
    checkBadges();
    const after = levelInfo().n;
    // Condicao: o bloco so roda se for verdadeiro
    if (after > before) {
      toast(`🎉 Subiu para o nível ${after} — ${levelInfo().name}!`, "xp");
    } else if (reason) {
      toast(`+${amount} XP — ${reason}`, "xp");
    }
    renderProfile();
  }

  /* ─── Capítulos ─── */
  function isDone(id) { return state.chaptersDone.includes(id); }

  function completeChapter(id) {
    // Condicao: o bloco so roda se for verdadeiro
    if (isDone(id)) return false;
    state.chaptersDone.push(id);
    save();
    addXP(50, "capítulo concluído");
    return true;
  }

  /* ─── Quiz ─── */
  function saveQuiz(id, correct, total) {
    const prev = state.quizzes[id];
    // Condicao: o bloco so roda se for verdadeiro
    if (!prev || correct > prev.correct) {
      state.quizzes[id] = { correct, total };
      // Condicao: o bloco so roda se for verdadeiro
      if (correct === total) state.perfectQuizzes++;
    }
    save();
    const gained = correct * 15;
    // Condicao: o bloco so roda se for verdadeiro
    if (gained > 0) addXP(gained, `quiz: ${correct}/${total}`);
    checkBadges();
  }

  /* ─── Flashcards (repetição espaçada — caixas de Leitner) ─── */
  // box 1=dia, 2=dias, 3=4 dias, 4=8 dias, 5=15 dias
  const LEITNER = [1, 2, 4, 8, 15];

  function flashKey(chapterId, idx) { return chapterId + ":" + idx; }

  function getFlashState(key) {
    const s = state.seenFlashcards[key];
    // Condicao: o bloco so roda se for verdadeiro
    if (!s) return { box: 0, due: 0 }; // box 0 = nunca vista
    return s;
  }

  function flashDue(chapterId, idx) {
    const s = getFlashState(flashKey(chapterId, idx));
    // Condicao: o bloco so roda se for verdadeiro
    if (s.box === 0) return true;
    return Date.now() >= s.due;
  }

  function reviewFlash(chapterId, idx, quality) {
    // quality: 0=again, 1=hard, 2=good, 3=easy
    const key = flashKey(chapterId, idx);
    const s = getFlashState(key);
    let box = s.box;
    // Condicao: o bloco so roda se for verdadeiro
    if (quality === 0) box = 0;
    else if (quality === 1) box = Math.max(1, box);
    else box = Math.min(5, box + 1);

    const days = LEITNER[Math.max(0, box - 1)] || 1;
    state.seenFlashcards[key] = {
      box,
      due: Date.now() + days * 864e5
    };
    state.flashReviews++;
    save();
    addXP(quality >= 2 ? 5 : 2, "revisão de flashcard");
    checkBadges();
  }

  /* ─── Conquistas ─── */
  function checkBadges() {
    const snapshot = {
      xp: state.xp,
      chaptersDone: state.chaptersDone.length,
      streak: state.streak,
      perfectQuizzes: state.perfectQuizzes,
      flashReviews: state.flashReviews
    };
    BADGES.forEach(b => {
      // Condicao: o bloco so roda se for verdadeiro
      if (!state.badges.includes(b.id) && b.check(snapshot)) {
        state.badges.push(b.id);
        save();
        toast(`🏅 Conquista desbloqueada: ${b.name}!`, "success");
      }
    });
  }

  /* ─── Reset ─── */
  function reset() {
    // Condicao: o bloco so roda se for verdadeiro
    if (!confirm("Zerar todo o progresso, XP e conquistas?")) return;
    state = defaults();
    save();
    renderProfile();
    toast("Progresso zerado.", "danger");
  }

  /* ─── Perfil na UI ─── */
  function renderProfile() {
    const lv = levelInfo();
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set("levelEl", `Nível ${lv.n} — ${lv.name}`);
    set("xpText", `${lv.into} / ${lv.need} XP`);
    set("streakEl", state.streak);
    set("badgesEl", state.badges.length);
    set("chaptersDoneEl", state.chaptersDone.length);

    const fill = document.getElementById("xpFill");
    // Condicao: o bloco so roda se for verdadeiro
    if (fill) fill.style.width = lv.pct + "%";

    const avatar = document.getElementById("avatarEl");
    // Condicao: o bloco so roda se for verdadeiro
    if (avatar) avatar.textContent = lv.n >= 8 ? "🧑‍🚀" : lv.n >= 5 ? "🧑‍💻" : "🌱";
  }

  load();

  return {
    get state() { return state; },
    levelInfo, addXP,
    isDone, completeChapter,
    saveQuiz, quizzes: () => state.quizzes,
    flashDue, reviewFlash,
    checkBadges, reset, renderProfile,
    get doneCount() { return state.chaptersDone.length; },
    get totalXP() { return state.xp; }
  };
})();

/* ─── Toast helper (usado pelo Progress) ─── */
// Mostra uma notificacao temporaria na tela
function toast(msg, type = "info") {
  const zone = document.getElementById("toastZone");
  // Condicao: o bloco so roda se for verdadeiro
  if (!zone) return;
  const el = document.createElement("div");
  el.className = "toast " + type;
  el.textContent = msg;
  zone.appendChild(el);
  setTimeout(() => {
    el.classList.add("out");
    setTimeout(() => el.remove(), 320);
  }, 3400);
}

