// Desenvolvido por Prof. Marcelo Oliveira
/* =========================================================
   GRAN FORNO - JAVASCRIPT FINAL
   ========================================================= */

const whatsappNumber = "5511920676006";

const products = [
    {
        name: "Bolo de morango",
        description: "Bolo com creme e morangos, apresentado em uma foto real da Gran Forno.",
        ingredients: "Massa de bolo, creme, morangos e cobertura.",
        image: "galeria-01.jpg"
    },
    {
        name: "Vitrine da Gran Forno",
        description: "Uma visão real da variedade de produtos disponíveis no estabelecimento.",
        ingredients: "Produtos variados da padaria e confeitaria.",
        image: "galeria-02.jpg"
    },
    {
        name: "Doces da vitrine",
        description: "Doces e sobremesas registrados em vídeo na Gran Forno.",
        ingredients: "Ingredientes variam conforme o produto.",
        image: "galeria-03.jpg"
    },
    {
        name: "Pães e salgados",
        description: "Produtos assados registrados na vitrine.",
        ingredients: "Ingredientes variam conforme o produto.",
        image: "galeria-04.jpg"
    },
    {
        name: "Produtos da casa",
        description: "Mais uma imagem real dos produtos da Gran Forno.",
        ingredients: "Ingredientes variam conforme o produto.",
        image: "galeria-05.jpg"
    },
    {
        name: "Variedade da vitrine",
        description: "Seleção de produtos registrada no estabelecimento.",
        ingredients: "Ingredientes variam conforme o produto.",
        image: "galeria-06.jpg"
    },
    {
        name: "Vitrine de doces",
        description: "Outra seleção de doces e sobremesas.",
        ingredients: "Ingredientes variam conforme o produto.",
        image: "galeria-07.jpg"
    },
    {
        name: "Salgados e assados",
        description: "Produtos assados e salgados registrados na vitrine.",
        ingredients: "Ingredientes variam conforme o produto.",
        image: "galeria-08.jpg"
    }
];

const gallery = document.getElementById("gallery");

products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "gallery-card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
    `;

    card.addEventListener("click", () => openProduct(product));
    gallery.appendChild(card);
});

const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalIngredients = document.getElementById("modalIngredients");
const modalWhatsapp = document.getElementById("modalWhatsapp");
const modalClose = document.getElementById("modalClose");

function openProduct(product) {
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;
    modalIngredients.textContent = product.ingredients;

    const message = encodeURIComponent(
        `Olá Gran Forno! Gostaria de pedir: ${product.name}.`
    );

    modalWhatsapp.href = `https://wa.me/${whatsappNumber}?text=${message}`;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
}

function closeProduct() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}

modalClose.addEventListener("click", closeProduct);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeProduct();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeProduct();
    }
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

