/* ==========================================
   PORTFÓLIO PROF. MARCELO OLIVEIRA
   Cards + Visualizador de Código
   ========================================== */

const AUTOR = "Prof. Marcelo Oliveira";
const USER_GITHUB = "marcelooliveira8052668-cyber";

/* Projetos cujas fotos nao sao exibidas por conterem dados de
   clientes reais (telefone, endereço, nome do estabelecimento).
   O card recebe uma capa gerada com título, categoria e ícone. */
const SEM_FOTO = {
  "Gran-Forno-FINAL": { icone: "🍕", tom: "laranja" },
  "Gran-Forno-site": { icone: "🍕", tom: "laranja" },
};

/* Lista de projetos com descrição e categoria */
const PROJETOS = [
  { nome: "Codigo-Loja-Online", titulo: "Loja Online Completa", desc: "E-commerce completo com 50 produtos, carrinho futurista, cupons, formas de pagamento, entrega por Shopee/Mercado Livre e avaliações reais de clientes.", cat: "E-commerce", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "checkout-cyber-metal", titulo: "Checkout Cyber Metal", desc: "Sistema de checkout completo em React + Vite, com carrinho, validação de pagamento e fluxo de finalização de pedido.", cat: "E-commerce", tags: ["React", "Vite", "JavaScript"] },
  { nome: "hamburgueria", titulo: "Hamburgueria Online", desc: "Cardápio digital completo com catálogo de lanches, bebidas, filtros e botão de adicionar ao carrinho.", cat: "E-commerce", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "Gran-Forno-FINAL", titulo: "Lanchonete", desc: "Site completo de lanchonete com catálogo, galeria de fotos, vídeos, cardápio e pedido pelo WhatsApp.", cat: "E-commerce", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "Gran-Forno-site", titulo: "Lanchonete — Versão Anterior", desc: "Primeira versão do site da lanchonete com cardápio artesanal e formulário de pedido.", cat: "E-commerce", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "Lojas-On-line", titulo: "Lojas On-line", desc: "Modelo de loja online com listagem de produtos e estrutura pronta para expansão.", cat: "E-commerce", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "comandas", titulo: "Comanda Fácil", desc: "Sistema de comandas para restaurantes com tela de login e controle de pedidos.", cat: "Sistema", tags: ["HTML", "CSS"] },
  { nome: "NF-Control", titulo: "NF Control", desc: "Sistema web de controle e gestão de notas fiscais.", cat: "Sistema", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "LMS-SENAI-Project", titulo: "LMS SENAI", desc: "Plataforma de gestão de aprendizagem (Learning Management System) desenvolvida como projeto do SENAI.", cat: "SENAI", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "Plataforma_Corporativa_SENAI", titulo: "Plataforma Corporativa SENAI", desc: "Plataforma corporativa completa para uso institucional, com módulos e painel administrativo.", cat: "SENAI", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "projeto-01", titulo: "Projeto SENAI 01", desc: "Projeto prático de front-end desenvolvimento como exercício acadêmico do SENAI.", cat: "SENAI", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "devbook", titulo: "DevBook", desc: "Rede social de estudo com posts, amigos, curtidas e interações — estilo Twitter para programadores.", cat: "Social", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "tutor-IA", titulo: "Tutor IA", desc: "Tutor virtual com inteligência artificial para ajudar nos estudos e tirar dúvidas de programação.", cat: "Educação", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "english-platform", titulo: "GlobalTalk Lab", desc: "Plataforma de inglês com lições, exercícios, vocabulário e Pronúncia por áudio nativo.", cat: "Educação", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "ingl-s-iniciantes", titulo: "Inglês para Iniciantes", desc: "Curso interativo de inglês para iniciantes com vocabulário do dia a dia, flashcards e áudio.", cat: "Educação", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "livro-digital-historia", titulo: "História em Foco", desc: "Livro digital interativo de História Geral com 93 capítulos, busca e navegação por linha do tempo.", cat: "Educação", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "SkillMatch-web", titulo: "SkillMatch Web", desc: "Plataforma que conecta profissionais a oportunidades de trabalho porSkills e experiências.", cat: "Sistema", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "skillmatch-js", titulo: "SkillMatch JS", desc: "Versão do SkillMatch feita com JavaScript puro, sem frameworks.", cat: "Sistema", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "gerador-de-sites", titulo: "Gerador de Sites", desc: "Ferramenta online que gera sites completos a partir de um editor visual, com publicação imediata.", cat: "Ferramenta", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "gerador-portfolio", titulo: "Gerador de Portfólio", desc: "Gerador automático de portfólio: o usuário preenche os campos e o site fica pronto para publicar.", cat: "Ferramenta", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "planejamento-de-viagem", titulo: "Planejamento de Viagem", desc: "Aplicativo para planejar viagens: roteiros, custos, checklist e organização do roteiro.", cat: "Ferramenta", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "viagem-pro", titulo: "Viagem Pro", desc: "Site de agência de viagens com pacotes turísticos, destinos e formulário de reserva.", cat: "Site", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "imobiliaria", titulo: "Aurora Imóveis", desc: "Site imobiliário completo com listagem de imóveis, filtros por tipo e galeria de ambientes.", cat: "Site", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "casamentos", titulo: "Marcelo Photography", desc: "Site de fotografia para casamentos com portfólio, depoimentos, pacotes e pedido de orçamento.", cat: "Site", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "Site-para-Advogado", titulo: "Site para Advogado", desc: "Site institucional para escritório de advocacia com áreas de atuação e atendimento.", cat: "Site", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "Salao-de-beleza", titulo: "Salão de Beleza", desc: "Site para salão de beleza com serviços, preços e agendamento de horários.", cat: "Site", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "barbearia", titulo: "Future Cut", desc: "Site de barbearia com cortes, pacotes de beleza, galeria e agendamento pelo WhatsApp.", cat: "Site", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "Construmais_Modelo_Comercial", titulo: "Construmais", desc: "Modelo comercial completo para construtora com catálogo de materiais, carrinho e cálculo de frete por CEP.", cat: "Site", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "Curr-culo-futurista-", titulo: "Currículo Futurista", desc: "Currículo digital com design moderno, linha do tempo da trajetória e competências.", cat: "Site", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "Calculadora-iphone", titulo: "Calculadora iPhone", desc: "Calculadora funcional com visual idêntico ao iPhone, feita com HTML, CSS e JavaScript puros.", cat: "App Web", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "pacman", titulo: "Pac-Man", desc: "Jogo clássico Pac-Man recreated em JavaScript puro, com labirinto, pontuação e controle de vidas.", cat: "Jogo", tags: ["HTML", "CSS", "JavaScript"] },
  { nome: "jogo-velha", titulo: "Jogo da Velha", desc: "Jogo da Velha clássico com modo para dois jogadores e modo contra o computador.", cat: "Jogo", tags: ["HTML", "CSS", "JavaScript"] },
];

/* Arquivos de entrada de cada projeto (para o visualizador) */
const ENTRADAS = {
  "checkout-cyber-metal": ["checkout-react/index.html", "checkout-react/src/App.jsx", "checkout-react/src/App.css", "checkout-react/src/Carrinho.jsx"],
  "pacman": ["pacman.html", "pacman.js", "pacman.css"],
  "LMS-SENAI-Project": ["public/index.html"],
  "barbearia": ["barbearia.html"],
};

/* Arquivos extras para mostrar o código (além da entrada) */
const EXTRAS = {
  "Codigo-Loja-Online": ["index.html", "style.css", "script.js"],
  "devbook": ["index.html", "app.js"],
  "tutor-IA": ["index.html"],
  "NF-Control": ["index.html"],
};

/* ---------- Montar os cards ---------- */
function temFoto(nome) {
  return PROJETOS.some(p => p.nome === nome);
}

function slug(nome) {
  return nome + ".jpg";
}

function renderizarCards(filtroAtivo = "Todos") {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  const lista = filtroAtivo === "Todos"
    ? PROJETOS
    : PROJETOS.filter(p => p.cat === filtroAtivo);

  lista.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    const urlGh = `https://github.com/${USER_GITHUB}/${p.nome}`;
    const semFoto = SEM_FOTO[p.nome];
    const capa = semFoto
      ? `<div class="card__capa capa--${semFoto.tom}">
           <span class="capa__icone">${semFoto.icone}</span>
           <strong class="capa__titulo">${p.titulo}</strong>
           <small class="capa__obs">Imagem omitida: dados do cliente</small>
         </div>`
      : `<img src="screenshots/${slug(p.nome)}" alt="Foto do projeto ${p.titulo}"
             onerror="this.style.display='none'">`;

    card.innerHTML = `
      <div class="card__foto">
        ${capa}
        <span class="card__tag">${p.cat}</span>
      </div>
      <div class="card__corpo">
        <h3 class="card__titulo">${p.titulo}</h3>
        <p class="card__desc">${p.desc}</p>
        <div class="card__tags">
          ${p.tags.map(t => `<span class="mini-tag">${t}</span>`).join("")}
        </div>
        <div class="card__acoes">
          <button class="btn" onclick="abrirCodigo('${p.nome}')">Ver Código</button>
          <a class="btn btn--ghost" href="${urlGh}" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  document.getElementById("totalProj").textContent =
    `${lista.length} projeto${lista.length === 1 ? "" : "s"}`;
}

/* ---------- Filtros ---------- */
function renderizarFiltros() {
  const cats = ["Todos", ...new Set(PROJETOS.map(p => p.cat))];
  const cont = document.getElementById("filtros");
  cont.innerHTML = cats.map((c, i) =>
    `<button class="filtro ${i === 0 ? "ativo" : ""}" onclick="filtrar('${c}', this)">${c}</button>`
  ).join("");
}

function filtrar(cat, btn) {
  document.querySelectorAll(".filtro").forEach(b => b.classList.remove("ativo"));
  btn.classList.add("ativo");
  renderizarCards(cat);
}

/* ---------- Visualizador de código ---------- */
const modal = document.getElementById("modal");
let arquivosAtuais = [];
let arquivoAtual = "";

async function abrirCodigo(projeto) {
  document.getElementById("modalTitulo").textContent = projeto;
  document.getElementById("btnGitHub").href =
    `https://github.com/${USER_GITHUB}/${projeto}`;

  const lista = ENTRADAS[projeto] || EXTRAS[projeto] || ["index.html"];
  arquivosAtuais = lista;

  const arvore = document.getElementById("arvore");
  arvore.innerHTML = lista.map((f, i) =>
    `<button class="arquivo ${i === 0 ? "ativo" : ""}" onclick="verArquivo('${f}')">${f}</button>`
  ).join("");

  modal.classList.add("aberto");
  document.body.style.overflow = "hidden";
  await verArquivo(lista[0]);
}

async function verArquivo(caminho) {
  arquivoAtual = caminho;
  document.querySelectorAll(".arquivo").forEach(b => {
    b.classList.toggle("ativo", b.textContent.trim() === caminho);
  });

  const el = document.getElementById("codigo");
  try {
    const resp = await fetch(`${encodeURI(projetoAtual())}/${caminho}`);
    if (!resp.ok) throw new Error("404");
    let texto = await resp.text();

    // Garante o comentário de autoria
    texto = garantirComentario(texto, caminho);

    el.innerHTML = realcar(texto, caminho);
  } catch (e) {
    el.innerHTML = `<span class="comentario">Não foi possível carregar "${caminho}"</span>`;
  }
}

function projetoAtual() {
  return document.getElementById("modalTitulo").textContent;
}

function garantirComentario(texto, caminho) {
  if (texto.includes(AUTOR)) return texto;
  if (caminho.endsWith(".html")) return `<!-- Desenvolvido por ${AUTOR} -->\n${texto}`;
  if (caminho.endsWith(".css")) return `/* Desenvolvido por ${AUTOR} */\n${texto}`;
  if (caminho.endsWith(".js") || caminho.endsWith(".jsx")) return `// Desenvolvido por ${AUTOR}\n${texto}`;
  return texto;
}

function escapar(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function realcar(texto, caminho) {
  let html = escapar(texto);

  // Comentários de autoria em destaque
  const autor = escapar(`Desenvolvido por ${AUTOR}`);
  html = html.split(autor).join(`<span class="comentario">${autor}</span>`);

  if (caminho.endsWith(".html")) {
    html = html.replace(/(&lt;\/?)([a-zA-Z0-9]+)/g, '$1<span class="tag-html">$2</span>');
  } else if (caminho.endsWith(".css")) {
    html = html.replace(/([.#]?[a-zA-Z][\w-]*)\s*\{/g, '<span class="tag-css">$1</span> {');
  } else {
    html = html.replace(/\b(function|const|let|var|if|else|return|for|while|class|new|async|await|import|export)\b/g,
      '<span class="tag-js">$1</span>');
  }
  return html;
}

function fecharModal() {
  modal.classList.remove("aberto");
  document.body.style.overflow = "";
}

document.getElementById("btnFechar").addEventListener("click", fecharModal);
document.getElementById("modalOverlay").addEventListener("click", fecharModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("aberto")) fecharModal();
});

/* ---------- Iniciar ---------- */
renderizarFiltros();
renderizarCards();