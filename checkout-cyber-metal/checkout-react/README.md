# 🛒 Cyber-Metal E-Commerce & Checkout System

> Sistema de comércio eletrônico de alta performance desenvolvido em React, focado em experiência de usuário (UX/UI), arquitetura baseada em componentes modulares e segurança antifraude no fluxo de pagamento.

---

##  Sobre o Projeto
Este projeto foi desenvolvido como uma aplicação web moderna de e-commerce, simulando o fluxo completo de uma loja virtual de grande porte (estilo Shopee/Mercado Livre). Ele conta com uma vitrine dinâmica, gerenciamento de carrinho em tempo real, validação robusta de dados de pagamento com **Zod** e **React Hook Form**, além de um design exclusivo inspirado em estética industrial/futurista ("Cyber-Metal").

---

##  Tecnologias Utilizadas
* **React (Vite)** - Biblioteca principal para construção de componentes e alta velocidade de compilação.
* **React Hook Form** - Gerenciamento de formulários otimizado e de alta performance.
* **Zod** - Validação de esquemas e tipagem segura (incluindo regras antifraude personalizadas para cartões de crédito).
* **CSS Customizado (Design System próprio)** - Estilização avançada com variáveis CSS, gradientes metálicos e fontes customizadas (`Rajdhani`).

---

##  Funcionalidades Principais
1. **Vitrine Dinâmica**: Catálogo de produtos com cartões interativos, imagens e botão de adição em tempo real.
2. **Carrinho Inteligente**: Gerenciamento de itens com soma automática de quantidades e cálculo dinâmico do subtotal e total geral (`useCarrinho`).
3. **Checkout Blindado**: Formulário de pagamento com máscaras e validações estritas (número do cartão, validade no formato MM/AA e CVV).
4. **Sistema Antifraude**: Validação algorítmica no Zod que detecta e bloqueia tentativas de uso de cartões com dígitos repetidos (simulando uma "tentativa de golpe").
5. **Feedback Visual de Status**: Telas dedicadas de Sucesso (`Compra Aprovada`) e Falha (com alerta de segurança).

---

##  Como Executar o Projeto Localmente

Certifique-se de ter o **Node.js** instalado em sua máquina.

1. Clone o repositório ou abra a pasta do projeto no seu terminal.
2. Instale as dependências necessárias:
   ```bash
   npm install