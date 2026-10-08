# 📚 DevBook — Livro Didático de Programação

Plataforma de estudos **Full Stack** para iniciantes absolutos — do zero ao deploy — feita com **HTML, CSS e JavaScript puros** (zero frameworks, zero build). Funciona offline como PWA.

## 🎯 Recursos

- **11 capítulos** em 5 partes: HTML · CSS · JavaScript · JS Assíncrono · Git/GitHub · React · Hooks · Node.js/Express · SQL · TypeScript · Deploy
- **Code Playground** integrado — editor com `Tab` e `Ctrl+Enter`, preview ao vivo em iframe sandboxado e console capturado (`console.log/error` + erros globais)
- **Quiz por capítulo** — feedback explicativo e XP por acerto (15 XP cada)
- **Flashcards com repetição espaçada** — algoritmo de caixas de Leitner (1-2-4-8-15 dias), avaliação por clique ou teclado (`Espaço` revela, `1-4` avalia)
- **Gamificação** — XP, 10 níveis (Iniciante → Mestre do Código), 9 conquistas, sequência diária (streak 🔥)
- **Progresso salvo** em `localStorage` — capítulos concluídos, quizzes e revisões
- **Busca** no sumário, **tema claro/escuro** (`T`), atalhos de teclado (`F` = revisar, `Esc` = fechar)
- **PWA offline** — service worker com cache dos assets, instalável pelo navegador

## ▶️ Como rodar

```bash
node server.js 8080     # → http://localhost:8080
# ou
python -m http.server 8080
```

> O `server.js` envia `Cache-Control: no-store` — ideal para desenvolvimento.

## 🧱 Estrutura

```
devbook/
├── index.html          # SPA única (layout, modais, PWA bar)
├── manifest.json       # manifest do PWA
├── sw.js               # service worker (offline)
├── server.js           # servidor de dev sem dependências
├── css/styles.css      # design system completo (temas dark/light)
├── js/
│   ├── data.js         # currículo: capítulos, quizzes, flashcards, badges
│   ├── progress.js     # XP, níveis, streak, Leitner, conquistas
│   ├── playground.js   # editor + preview + console
│   ├── flashcards.js   # modal de revisão espaçada
│   └── app.js          # roteamento por hash, renderização, busca, tema
└── assets/icon.svg     # ícone do app
```

## ➕ Como adicionar um capítulo

Edite `js/data.js` e acrescente um objeto em `CURRICULUM` com `id`, `part`, `title`, `sections`, `playground`, `quiz` e `flashcards`. O sumário, a home, o progresso e os flashcards se atualizam sozinhos.

---

🔗 Repositório completo (Guia de História + DevBook): [guia-docente-historia-e-tecnologia](https://github.com/marcelooliveira8052668-cyber/guia-docente-historia-e-tecnologia)
