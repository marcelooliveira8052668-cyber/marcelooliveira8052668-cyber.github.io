# SkillMatch - Encontre sua Vaga Ideal

O **SkillMatch** é uma aplicação web focada em auxiliar desenvolvedores Front-End a identificar oportunidades de trabalho baseadas na compatibilidade técnica entre suas habilidades atuais e os requisitos exigidos pelas empresas.

## 🚀 Problema que resolve
Muitos desenvolvedores gastam tempo aplicando para vagas onde não possuem os requisitos mínimos. O SkillMatch automatiza essa análise, fornecendo um percentual de compatibilidade e recomendações de estudo.

## 🛠 Tecnologias Utilizadas
- **HTML5 (Semântico):** Estrutura da página com landmarks e acessibilidade.
- **CSS3 (Flexbox/Mobile-First):** Responsividade completa para dispositivos móveis e desktop.
- **JavaScript (ES Modules):** Arquitetura modular (motor, ui, dados) para organização do código.
- **POO:** Utilização de classes e herança para processamento de dados.
- **Fetch API:** Consumo dinâmico de dados (`vagas.json`).
- **LocalStorage:** Persistência dos dados do candidato entre sessões.

## ⚙️ Como executar o projeto
1. Clone este repositório: `git clone <url-do-seu-repo>`
2. Abra a pasta no **VS Code**.
3. Utilize a extensão **Live Server** para abrir o arquivo `index.html`.
4. *Nota: É obrigatório usar um servidor local para que os módulos ES e o Fetch funcionem corretamente.*

## 📂 Estrutura do Projeto
```text
skillmatch-web/
├── assets/
│   ├── dados/      # Catálogo de vagas (vagas.json)
│   ├── img/        # Logo e assets visuais
│   ├── scripts/    # Módulos JS (main, motor, ui, dados)
│   └── styles/     # Folhas de estilo CSS
└── index.html      # Estrutura principal