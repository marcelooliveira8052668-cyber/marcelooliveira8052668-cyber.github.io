// Desenvolvido por Prof. Marcelo Oliveira
/* ═══════════════════════════════════════════════════════
   DevBook — App principal
   Roteamento por hash · renderização · busca · tema · PWA
   ═══════════════════════════════════════════════════════ */

(() => {
  "use strict";

  const view = document.getElementById("view");
  const tocNav = document.getElementById("tocNav");
  const chapterNav = document.getElementById("chapterNav");
  const breadcrumb = document.getElementById("breadcrumb");

  /* ═══════════ TEMA ═══════════ */
  const Theme = {
    get() { return document.documentElement.dataset.theme; },
    set(t) {
      document.documentElement.dataset.theme = t;
      localStorage.setItem("devbook_theme", t);
      document.getElementById("btnTheme").textContent = t === "dark" ? "☀️" : "🌙";
      document.querySelector('meta[name="theme-color"]').content = t === "dark" ? "#0b1220" : "#f3f6fb";
    },
    toggle() { this.set(this.get() === "dark" ? "light" : "dark"); }
  };
  Theme.set(localStorage.getItem("devbook_theme") || "dark");

  /* ═══════════ HELPERS ═══════════ */
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const byId = id => CURRICULUM.find(c => c.id === id);
  const idxOf = id => CURRICULUM.findIndex(c => c.id === id);

  /* ═══════════ TOC (sumário lateral) ═══════════ */
  let searchQuery = "";

  function renderTOC() {
    const parts = [];
    CURRICULUM.forEach(ch => {
      if (!parts.includes(ch.part)) parts.push(ch.part);
    });

    let html = "";
    parts.forEach(part => {
      html += `<div class="toc-part">${esc(part)}</div>`;
      CURRICULUM.filter(c => c.part === part).forEach(ch => {
        if (searchQuery) {
          const hay = (ch.title + " " + ch.desc + " " + ch.tags.join(" ")).toLowerCase();
          if (!hay.includes(searchQuery)) return;
        }
        const done = Progress.isDone(ch.id);
        const active = currentRoute()?.type === "chapter" && currentRoute().id === ch.id;
        html += `
          <button class="toc-item${done ? " done" : ""}${active ? " active" : ""}" data-goto="${ch.id}">
            <span class="toc-check">${done ? "✔" : "○"}</span>
            <span>${esc(ch.icon)} ${esc(ch.title)}</span>
          </button>`;
      });
    });

    if (!html) html = `<div style="padding:16px 10px;color:var(--text-3);font-size:.82rem">Nada encontrado para “${esc(searchQuery)}”.</div>`;
    tocNav.innerHTML = html;
    tocNav.querySelectorAll("[data-goto]").forEach(b => {
      b.addEventListener("click", () => {
        location.hash = "#/capitulo/" + b.dataset.goto;
        closeSidebar();
      });
    });
  }

  /* ═══════════ ROTEAMENTO ═══════════ */
  function currentRoute() {
    const h = location.hash.replace(/^#\//, "");
    if (h.startsWith("capitulo/")) return { type: "chapter", id: h.slice(9) };
    return { type: "home" };
  }

  function route() {
    const r = currentRoute();
    if (r.type === "chapter" && byId(r.id)) renderChapter(byId(r.id));
    else renderHome();
    renderTOC();
    updateTotalProgress();
    view.focus();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  /* ═══════════ HOME ═══════════ */
  function renderHome() {
    chapterNav.classList.add("hidden");
    breadcrumb.innerHTML = "<strong>DevBook</strong> · Full Stack do Zero";

    const done = Progress.doneCount;
    const total = CURRICULUM.length;
    const dueFlash = Flashcards.dueCount();
    const lv = Progress.levelInfo();

    /* retoma de onde parou */
    const nextCh = CURRICULUM.find(c => !Progress.isDone(c.id)) || CURRICULUM[0];

    const parts = [];
    CURRICULUM.forEach(ch => { if (!parts.includes(ch.part)) parts.push(ch.part); });

    let html = `
      <section class="hero">
        <span class="kicker">📚 Livro didático interativo</span>
        <h1>Programação <em>Full Stack</em> do zero ao deploy</h1>
        <p>HTML, CSS, JavaScript, React, Node.js e SQL — com playground de código ao vivo, quizzes, flashcards com repetição espaçada e gamificação para manter você estudando todo dia.</p>
        <div class="hero-actions">
          <button class="btn-primary" data-action="continue">▶ ${done > 0 ? "Continuar estudos" : "Começar agora"}</button>
          <button class="btn-ghost" data-action="flash">🃏 Revisar flashcards ${dueFlash ? `(${dueFlash})` : ""}</button>
          <button class="btn-ghost" data-action="badges">🏅 Conquistas</button>
        </div>
      </section>

      <div class="stat-grid">
        <div class="stat-card"><div class="big">${done}/${total}</div><div class="lbl">Capítulos</div></div>
        <div class="stat-card"><div class="big">${Progress.totalXP}</div><div class="lbl">XP total</div></div>
        <div class="stat-card"><div class="big">🔥 ${Progress.state.streak}</div><div class="lbl">Dias seguidos</div></div>
        <div class="stat-card"><div class="big">${Progress.state.badges.length}/${BADGES.length}</div><div class="lbl">Conquistas</div></div>
        <div class="stat-card"><div class="big">Nv ${lv.n}</div><div class="lbl">${lv.name}</div></div>
      </div>`;

    parts.forEach((part, pi) => {
      const chs = CURRICULUM.filter(c => c.part === part);
      html += `
        <section class="part-block">
          <div class="part-head">
            <div class="part-num">${pi + 1}</div>
            <div>
              <h2>${esc(part.replace(/^Parte \d+ — /, ""))}</h2>
              <div class="part-sub">${chs.length} capítulos</div>
            </div>
          </div>
          <div class="chapter-grid">
            ${chs.map(ch => chapterCard(ch)).join("")}
          </div>
        </section>`;
    });

    view.innerHTML = html;

    view.querySelector('[data-action="continue"]').onclick = () => {
      location.hash = "#/capitulo/" + nextCh.id;
    };
    view.querySelector('[data-action="flash"]').onclick = () => Flashcards.open();
    view.querySelector('[data-action="badges"]').onclick = openBadges;
    view.querySelectorAll("[data-chapter]").forEach(el => {
      el.addEventListener("click", () => { location.hash = "#/capitulo/" + el.dataset.chapter; });
    });
  }

  function chapterCard(ch) {
    const done = Progress.isDone(ch.id);
    const lvl = { easy: ["Fácil", "easy"], medium: ["Médio", "medium"], hard: ["Avançado", "hard"] }[ch.level] || ["", "easy"];
    return `
      <button class="chapter-card${done ? " done" : ""}" data-chapter="${ch.id}">
        <span class="cc-icon">${ch.icon}</span>
        <span class="cc-title">${esc(ch.title)}</span>
        <span class="cc-desc">${esc(ch.desc)}</span>
        <span class="cc-meta">
          <span class="cc-badge ${lvl[1]}">${lvl[0]}</span>
          <span>⏱ ${ch.minutes} min</span>
          <span class="cc-status">${done ? "✔ Concluído" : "▶ Ler"}</span>
        </span>
      </button>`;
  }

  /* ═══════════ CAPÍTULO ═══════════ */
  function renderChapter(ch) {
    const i = idxOf(ch.id);
    const prev = CURRICULUM[i - 1];
    const next = CURRICULUM[i + 1];
    const done = Progress.isDone(ch.id);

    breadcrumb.innerHTML = `<span>${esc(ch.part)}</span> / <strong>${esc(ch.title)}</strong>`;

    /* HTML do conteúdo */
    let sectionsHtml = "";
    (ch.sections || []).forEach(s => {
      sectionsHtml += `<h2>${esc(s.h)}</h2>${s.html}`;
    });

    /* Playground */
    let pgHtml = "";
    if (ch.playground) {
      sectionsHtml += `<h2>🛠️ Experimente no playground</h2>
        <p>Edite o código abaixo e clique em <strong>▶ Rodar</strong> para ver o resultado ao vivo. O console também aparece aqui.</p>`;
      pgHtml = `<div id="playgroundMount"></div>`;
    }

    /* Quiz */
    let quizHtml = "";
    if (ch.quiz && ch.quiz.length) {
      quizHtml = `
        <section class="quiz-box" id="quizSection">
          <h3>🎯 Teste seus conhecimentos</h3>
          <p style="color:var(--text-2);font-size:.88rem;margin-bottom:16px">Cada acerto vale 15 XP.</p>
          ${ch.quiz.map((q, qi) => `
            <div class="quiz-item" data-qi="${qi}" style="margin-bottom:26px">
              <p class="quiz-q"><strong>${qi + 1}.</strong> ${esc(q.q)}</p>
              <div class="quiz-opts">
                ${q.opts.map((o, oi) => `<button class="quiz-opt" data-opt="${oi}">${String.fromCharCode(65 + oi)}) ${esc(o)}</button>`).join("")}
              </div>
              <div class="quiz-feedback" data-feedback></div>
            </div>`).join("")}
        </section>`;
    }

    /* Síntese + flashcards teaser */
    const summaryHtml = `
      <section class="summary-box">
        <h3>📌 Síntese do capítulo</h3>
        <ul>
          ${(ch.flashcards || []).map(f => `<li><strong>${esc(f.q)}</strong></li>`).join("")}
        </ul>
        <button class="btn-ghost small" style="margin-top:14px;width:auto;display:inline-flex" data-action="review-chapter-flash">
          🃏 Revisar os ${ch.flashcards.length} flashcards deste capítulo
        </button>
      </section>`;

    view.innerHTML = `
      <header class="ch-head">
        <div class="ch-part">${esc(ch.part)}</div>
        <h1>${ch.icon} ${esc(ch.title)}</h1>
        <p class="ch-lead">${esc(ch.lead)}</p>
        <div class="ch-tags">${ch.tags.map(t => `<span class="ch-tag">${esc(t)}</span>`).join("")}
          <span class="ch-tag">⏱ ${ch.minutes} min</span>
        </div>
      </header>

      <article class="content">
        ${sectionsHtml}
        ${pgHtml}
        ${quizHtml}
        ${summaryHtml}
      </article>`;

    /* Playground */
    if (ch.playground) {
      const mount = document.getElementById("playgroundMount");
      mount.appendChild(Playground.create(ch.playground));
    }

    /* Quiz logic */
    if (ch.quiz && ch.quiz.length) initQuiz(ch);

    /* Revisar flashcards do capítulo */
    const revBtn = view.querySelector('[data-action="review-chapter-flash"]');
    if (revBtn) revBtn.onclick = () => Flashcards.open();

    /* Nav inferior */
    chapterNav.classList.remove("hidden");
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");
    const btnComplete = document.getElementById("btnComplete");

    btnPrev.disabled = !prev;
    btnPrev.querySelector("span").textContent = prev ? prev.title : "Início";
    btnPrev.onclick = () => { if (prev) location.hash = "#/capitulo/" + prev.id; else location.hash = ""; };

    btnNext.disabled = !next;
    btnNext.querySelector("span").textContent = next ? next.title : "Fim do livro";
    btnNext.onclick = () => { if (next) location.hash = "#/capitulo/" + next.id; };

    updateCompleteBtn(btnComplete, ch);
    btnComplete.onclick = () => {
      if (Progress.isDone(ch.id)) {
        location.hash = next ? "#/capitulo/" + next.id : "";
        return;
      }
      Progress.completeChapter(ch.id);
      updateCompleteBtn(btnComplete, ch);
      renderTOC();
      updateTotalProgress();
    };
  }

  function updateCompleteBtn(btn, ch) {
    if (Progress.isDone(ch.id)) {
      btn.textContent = "✓ Concluído — próximo →";
      btn.classList.add("done");
    } else {
      btn.textContent = "✓ Concluir capítulo";
      btn.classList.remove("done");
    }
  }

  /* ═══════════ QUIZ ═══════════ */
  function initQuiz(ch) {
    const box = document.getElementById("quizSection");
    const answered = {};
    let correct = 0;

    box.querySelectorAll(".quiz-item").forEach(item => {
      const qi = Number(item.dataset.qi);
      const q = ch.quiz[qi];
      const fb = item.querySelector("[data-feedback]");

      item.querySelectorAll(".quiz-opt").forEach(opt => {
        opt.addEventListener("click", () => {
          if (answered[qi] !== undefined) return;
          answered[qi] = Number(opt.dataset.opt);

          const isRight = answered[qi] === q.answer;
          if (isRight) correct++;

          item.querySelectorAll(".quiz-opt").forEach((o, oi) => {
            o.disabled = true;
            if (oi === q.answer) o.classList.add("correct");
            else if (oi === answered[qi]) o.classList.add("wrong");
          });

          fb.className = "quiz-feedback show " + (isRight ? "ok" : "no");
          fb.innerHTML = `<strong>${isRight ? "✔ Correto!" : "✘ Incorreto."}</strong> ${esc(q.feedback)}`;

          /* Quando responder todas → salva */
          if (Object.keys(answered).length === ch.quiz.length) {
            Progress.saveQuiz(ch.id, correct, ch.quiz.length);
            if (correct === ch.quiz.length) toast("🎯 Quiz perfeito! +XP bônus", "success");
          }
        });
      });
    });
  }

  /* ═══════════ PROGRESSO TOTAL ═══════════ */
  function updateTotalProgress() {
    const pct = Math.round((Progress.doneCount / CURRICULUM.length) * 100);
    const ring = document.getElementById("totalRing");
    const label = document.getElementById("totalPct");
    if (ring) ring.style.strokeDashoffset = 100 - pct;
    if (label) label.textContent = pct + "%";
  }

  /* ═══════════ MODAL DE CONQUISTAS ═══════════ */
  function openBadges() {
    const body = document.getElementById("badgeBody");
    const snap = {
      xp: Progress.totalXP,
      chaptersDone: Progress.doneCount,
      streak: Progress.state.streak,
      perfectQuizzes: Progress.state.perfectQuizzes,
      flashReviews: Progress.state.flashReviews
    };
    body.innerHTML = `<div class="badge-grid">${BADGES.map(b => {
      const unlocked = b.check(snap);
      return `<div class="badge-item${unlocked ? "" : " locked"}">
        <span class="b-ico">${b.ico}</span>
        <div class="b-name">${esc(b.name)}</div>
        <div class="b-desc">${esc(b.desc)}</div>
      </div>`;
    }).join("")}</div>`;
    document.getElementById("badgeModal").classList.remove("hidden");
  }

  /* ═══════════ SIDEBAR MOBILE ═══════════ */
  function openSidebar() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("sidebarBackdrop").classList.add("show");
  }
  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarBackdrop").classList.remove("show");
  }

  /* ═══════════ PWA ═══════════ */
  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById("pwaBar").classList.remove("hidden");
  });
  document.getElementById("btnInstall").onclick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    document.getElementById("pwaBar").classList.add("hidden");
  };
  document.getElementById("btnDismissPwa").onclick = () =>
    document.getElementById("pwaBar").classList.add("hidden");

  window.addEventListener("online", () => document.getElementById("offlineBadge").classList.add("hidden"));
  window.addEventListener("offline", () => document.getElementById("offlineBadge").classList.remove("hidden"));
  if (!navigator.onLine) document.getElementById("offlineBadge").classList.remove("hidden");

  /* ═══════════ EVENTOS GLOBAIS ═══════════ */
  document.getElementById("btnTheme").onclick = () => Theme.toggle();
  document.getElementById("btnFlashcards").onclick = () => Flashcards.open();
  document.getElementById("btnResetProgress").onclick = () => {
    Progress.reset();
    route();
  };
  document.getElementById("btnOpenSidebar").onclick = openSidebar;
  document.getElementById("btnCloseSidebar").onclick = closeSidebar;
  document.getElementById("sidebarBackdrop").onclick = closeSidebar;

  document.getElementById("searchInput").addEventListener("input", e => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderTOC();
  });

  /* Fechar modais */
  document.querySelectorAll("[data-close-modal]").forEach(b => {
    b.addEventListener("click", () => b.closest(".modal").classList.add("hidden"));
  });
  document.querySelectorAll(".modal").forEach(m => {
    m.addEventListener("click", e => { if (e.target === m) m.classList.add("hidden"); });
  });

  /* Atalhos de teclado */
  document.addEventListener("keydown", e => {
    if (document.activeElement && ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (e.key === "t" || e.key === "T") Theme.toggle();
    if (e.key === "f" || e.key === "F") Flashcards.open();
    if (e.key === "Escape") {
      document.querySelectorAll(".modal").forEach(m => m.classList.add("hidden"));
      closeSidebar();
    }
  });

  window.addEventListener("hashchange", route);

  /* ═══════════ BOOT ═══════════ */
  Progress.renderProfile();
  Progress.checkBadges();
  route();
})();

