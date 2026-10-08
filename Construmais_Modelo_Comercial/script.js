// Desenvolvido por Prof. Marcelo Oliveira
const products = [
  {
    id: 1,
    name: "Cimento CP II 50kg",
    cat: "cimento",
    price: 34.9,
    stock: 42,
    img: "cimento.jpg",
  },
  {
    id: 2,
    name: "Argamassa AC-II 20kg",
    cat: "cimento",
    price: 18.9,
    stock: 35,
    img: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Kit Furadeira 650W",
    cat: "ferramentas",
    price: 249.9,
    stock: 8,
    img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Jogo de Chaves 46 peças",
    cat: "ferramentas",
    price: 129.9,
    stock: 14,
    img: "jogo-de-chaves.jpg",
  },
  {
    id: 5,
    name: "Torneira para Cozinha",
    cat: "hidraulica",
    price: 89.9,
    stock: 12,
    img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Kit Tubo PVC 25mm",
    cat: "hidraulica",
    price: 42.5,
    stock: 25,
    img: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Lâmpada LED 12W",
    cat: "eletrica",
    price: 9.9,
    stock: 60,
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Tinta Acrílica 18L",
    cat: "tintas",
    price: 229.9,
    stock: 9,
    img: "tinta-acrlica.jpg",
  },
];
let cart = JSON.parse(localStorage.getItem("cm_cart") || "[]"),
  currentFilter = "all";
const money = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
function renderProducts(list = products) {
  document.querySelector("#products").innerHTML = list
    .map(
      (p) =>
        `<article class="product"><img src="${p.img}" alt="${p.name}"><div class="product-body"><small>${p.cat.toUpperCase()}</small><h3>${p.name}</h3><div class="stock">● ${p.stock} unidades disponíveis</div><span class="price">${money(p.price)}</span><button class="btn primary" onclick="addToCart(${p.id})">Adicionar ao carrinho</button></div></article>`,
    )
    .join("");
}
function addToCart(id) {
  const p = products.find((x) => x.id === id),
    item = cart.find((x) => x.id === id);
  if (!p || p.stock <= 0) return toast("Produto sem estoque");
  if (item) {
    if (item.qty >= p.stock) return toast("Quantidade máxima disponível");
    item.qty++;
  } else cart.push({ id, qty: 1 });
  saveCart();
  toast("Produto adicionado ao carrinho");
}
function saveCart() {
  localStorage.setItem("cm_cart", JSON.stringify(cart));
  renderCartCount();
}
function renderCartCount() {
  document.querySelector("#cartCount").textContent = cart.reduce(
    (s, x) => s + x.qty,
    0,
  );
}
function openCart() {
  renderCart();
  document.querySelector("#cartModal").classList.add("show");
}
function closeCart() {
  document.querySelector("#cartModal").classList.remove("show");
}
function renderCart() {
  const box = document.querySelector("#cartItems");
  if (!cart.length) {
    box.innerHTML = '<div class="empty">Seu carrinho está vazio.</div>';
    document.querySelector("#cartTotal").textContent = money(0);
    return;
  }
  let total = 0;
  box.innerHTML = cart
    .map((i) => {
      const p = products.find((x) => x.id === i.id);
      const sub = p.price * i.qty;
      total += sub;
      return `<div class="cart-row"><div><strong>${p.name}</strong><br><small>${money(p.price)} cada</small></div><div class="qty"><button onclick="changeQty(${p.id},-1)">−</button> ${i.qty} <button onclick="changeQty(${p.id},1)">+</button></div><strong>${money(sub)}</strong></div>`;
    })
    .join("");
  document.querySelector("#cartTotal").textContent = money(total);
}
function changeQty(id, d) {
  const item = cart.find((x) => x.id === id),
    p = products.find((x) => x.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty > p.stock) item.qty = p.stock;
  if (item.qty <= 0) cart = cart.filter((x) => x.id !== id);
  saveCart();
  renderCart();
}
function openCheckout() {
  if (!cart.length) return toast("Adicione produtos antes de continuar");
  closeCart();
  renderCheckout();
  document.querySelector("#checkoutModal").classList.add("show");
}
function closeCheckout() {
  document.querySelector("#checkoutModal").classList.remove("show");
}
function renderCheckout() {
  let total = 0;
  document.querySelector("#checkoutSummary").innerHTML = cart
    .map((i) => {
      const p = products.find((x) => x.id === i.id),
        s = p.price * i.qty;
      total += s;
      return `<p>${i.qty}x ${p.name}<br><strong>${money(s)}</strong></p>`;
    })
    .join("");
  document.querySelector("#checkoutTotal").textContent = money(total);
}
function placeOrder() {
  const name = document.querySelector("#customerName").value.trim(),
    phone = document.querySelector("#customerPhone").value.trim(),
    address = document.querySelector("#customerAddress").value.trim();
  if (!name || !phone || !address)
    return toast("Preencha nome, WhatsApp e endereço");
  const order = {
    number: "CM" + Date.now().toString().slice(-6),
    name,
    phone,
    address,
    payment: document.querySelector("#payment").value,
    notes: document.querySelector("#notes").value,
    items: cart,
    status: "Recebido",
    created: new Date().toLocaleString("pt-BR"),
  };
  localStorage.setItem("cm_last_order", JSON.stringify(order));
  cart = [];
  saveCart();
  closeCheckout();
  toast("Pedido " + order.number + " confirmado!");
  setTimeout(() => showOrder(order), 700);
}
function showOrder(order) {
  alert(
    `Pedido ${order.number} recebido!\nStatus: ${order.status}\n\nEm uma versão com Firebase, cliente e equipe poderão acompanhar esse status em tempo real.`,
  );
}
function filterProducts(cat) {
  currentFilter = cat;
  document
    .querySelectorAll(".categories button")
    .forEach((b) => b.classList.remove("active"));
  const list = cat === "all" ? products : products.filter((p) => p.cat === cat);
  renderProducts(list);
}
function sortProducts() {
  let list =
    currentFilter === "all"
      ? [...products]
      : products.filter((p) => p.cat === currentFilter);
  const v = document.querySelector("#sort").value;
  if (v === "low") list.sort((a, b) => a.price - b.price);
  if (v === "high") list.sort((a, b) => b.price - a.price);
  renderProducts(list);
}
function checkCep() {
  const cep = document.querySelector("#cep").value.replace(/\D/g, "");
  const r = document.querySelector("#cepResult");
  if (cep.length !== 8) {
    r.textContent = "Digite um CEP válido com 8 números.";
    return;
  }
  r.textContent =
    "Entrega estimada: R$ 19,90 • prazo de 1 a 3 dias úteis (simulação).";
}
function toast(msg) {
  const t = document.querySelector("#toast");
  t.textContent = msg;
  t.style.display = "block";
  setTimeout(() => (t.style.display = "none"), 2400);
}
function toggleNav() {
  const n = document.querySelector("nav");
  n.style.display = n.style.display === "flex" ? "none" : "flex";
  n.style.position = "absolute";
  n.style.top = "68px";
  n.style.right = "4%";
  n.style.background = "#fff";
  n.style.padding = "20px";
  n.style.flexDirection = "column";
  n.style.boxShadow = "0 10px 30px #0002";
}
function openAdmin() {
  document.querySelector("#adminModal").classList.add("show");
  document.querySelector("#stockTable").innerHTML = products
    .map(
      (p) =>
        `<div class="stock-item"><strong>${p.name}</strong><input type="number" value="${p.stock}" onchange="updateStock(${p.id},this.value)"><span>${money(p.price)}</span></div>`,
    )
    .join("");
}
function closeAdmin() {
  document.querySelector("#adminModal").classList.remove("show");
}
function updateStock(id, v) {
  const p = products.find((x) => x.id === id);
  p.stock = Math.max(0, Number(v));
  toast("Estoque atualizado nesta sessão");
}
renderProducts();
renderCartCount();

