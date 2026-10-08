// Desenvolvido por Prof. Marcelo Oliveira
/* ═══════════════════════════════════════════════════════
   DevBook — Service Worker (modo offline)
   Estratégia: cache-first para assets do app,
   network-first com fallback para navegação
   ═══════════════════════════════════════════════════════ */

const CACHE = "devbook-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/styles.css",
  "./js/data.js",
  "./js/progress.js",
  "./js/playground.js",
  "./js/flashcards.js",
  "./js/app.js",
  "./assets/icon.svg"
];

/* Instala: pré-cache dos arquivos do app */
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* Ativa: limpa caches antigos */
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* Fetch: cache-first para o app, fallback de rede */
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  /* Requisições de navegação (páginas): network-first com fallback ao cache */
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
    );
    return;
  }

  /* Assets: cache-first */
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok && (url.origin === location.origin || url.hostname.includes("fonts.") || url.hostname.includes("unpkg"))) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    }).catch(() => {
      /* fallback para offline */
      if (e.request.destination === "image")
        return new Response("", { status: 504 });
    })
  );
});

