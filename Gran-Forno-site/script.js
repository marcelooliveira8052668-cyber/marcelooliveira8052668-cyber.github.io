// Desenvolvido por Prof. Marcelo Oliveira
// Seleciona o botão do menu mobile. 
const menuButton = document.getElementById("menuButton");
// Seleciona a navegação principal. 
const nav = document.getElementById("nav");
// Seleciona o elemento que mostrará o ano atual. 
const year = document.getElementById("year");
// Coloca automaticamente o ano atual no rodapé. 
year.textContent = new Date().getFullYear();

// Verifica quando o botão do menu é clicado. 
menuButton.addEventListener("click", () => {
  // Abre ou fecha o menu adicionando/removendo a classe active. 
  nav.classList.toggle("active");
  // Verifica se o menu está aberto. 
  const isOpen = nav.classList.contains("active");
  // Atualiza a informação de acessibilidade do botão. 
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Seleciona todos os links do menu. 
const navLinks = nav.querySelectorAll("a");
// Percorre cada link da navegação. 
navLinks.forEach((link) => {
  // Adiciona um evento de clique em cada link. 
  link.addEventListener("click", () => {
    // Fecha o menu depois que um link interno for escolhido. 
    nav.classList.remove("active");
    // Atualiza o estado de acessibilidade. 
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Seleciona todos os botões "Pedir" do cardápio. 
const orderButtons = document.querySelectorAll(".order-button");
// Percorre todos os botões de pedido. 
orderButtons.forEach((button) => {
  // Adiciona uma ação de clique ao botão. 
  button.addEventListener("click", () => {
    // Lê o nome do produto guardado no atributo data-item. 
    const item = button.dataset.item;
    // Cria a mensagem que será enviada para o WhatsApp. 
    const message = `Olá Gran Forno! Gostaria de pedir: ${item}.`;
    // Codifica a mensagem para funcionar corretamente na URL. 
    const encodedMessage = encodeURIComponent(message);
    // Monta o endereço do WhatsApp usando o número informado. 
    const whatsappUrl = `https://wa.me/5511920676006?text=${encodedMessage}`;
    // Abre o WhatsApp em uma nova aba ou aplicativo. 
    window.open(whatsappUrl, "_blank");
  });
});

