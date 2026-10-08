// Desenvolvido por Prof. Marcelo Oliveira
/* =====================================
   MENU MOBILE
===================================== */

const btnMobile =
document.getElementById("btn-mobile");

const menu =
document.getElementById("menu");

btnMobile.addEventListener("click", () => {

    menu.classList.toggle("active");

});


/* =====================================
   FILTRO DE IMÓVEIS
===================================== */

const btnFiltrar =
document.getElementById("filtrar");

btnFiltrar.addEventListener("click", () => {

    const tipo =
    document.getElementById("tipo").value;

    const preco =
    document.getElementById("preco").value;

    const imoveis =
    document.querySelectorAll(".card-imovel");

    imoveis.forEach(imovel => {

        let mostrar = true;

        const precoImovel =
        Number(imovel.dataset.preco);

        if(
            tipo !== "all" &&
            !imovel.classList.contains(tipo)
        ){
            mostrar = false;
        }

        if(preco !== "all"){

            const limite =
            Number(preco);

            if(limite === 500){

                if(precoImovel > 500){
                    mostrar = false;
                }

            }else if(limite === 1000){

                if(
                    precoImovel > 1000 ||
                    precoImovel <= 500
                ){
                    mostrar = false;
                }

            }else if(limite === 2000){

                if(precoImovel < 1000){
                    mostrar = false;
                }

            }

        }

        imovel.style.display =
        mostrar ? "block" : "none";

    });

});


/* =====================================
   MODAL DE DETALHES
===================================== */

const modal =
document.getElementById("modal");

const modalTitulo =
document.getElementById("modal-titulo");

const modalTexto =
document.getElementById("modal-texto");

const fecharModal =
document.getElementById("fechar-modal");

const detalhesBtns =
document.querySelectorAll(".detalhes-btn");

detalhesBtns.forEach(botao => {

    botao.addEventListener("click", () => {

        const card =
        botao.closest(".card-imovel");

        const titulo =
        card.querySelector("h3").textContent;

        modalTitulo.textContent =
        titulo;

        modalTexto.textContent =
        "Este imóvel possui acabamento premium, excelente localização, ambientes amplos e ótima valorização imobiliária. Entre em contato para agendar uma visita.";

        modal.style.display =
        "flex";

        document.body.style.overflow =
        "hidden";

    });

});

fecharModal.addEventListener("click", () => {

    fecharModalFuncao();

});

function fecharModalFuncao(){

    modal.style.display =
    "none";

    document.body.style.overflow =
    "auto";

}


/* =====================================
   FECHAR AO CLICAR FORA
===================================== */

window.addEventListener("click", (e) => {

    if(e.target === modal){

        fecharModalFuncao();

    }

});


/* =====================================
   FECHAR COM ESC
===================================== */

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        fecharModalFuncao();

    }

});


/* =====================================
   LIGHTBOX DA GALERIA
===================================== */

const imagens =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.createElement("div");

lightbox.id =
"lightbox";

document.body.appendChild(lightbox);

imagens.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        const imagem =
        document.createElement("img");

        imagem.src =
        img.src;

        while(lightbox.firstChild){

            lightbox.removeChild(
                lightbox.firstChild
            );

        }

        lightbox.appendChild(imagem);

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


/* =====================================
   ANIMAÇÃO AO ROLAR
===================================== */

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

},
{
    threshold:0.15
}

);

const elementos =
document.querySelectorAll(

".card-imovel, .gallery-grid img, .sobre-content, .formulario"

);

elementos.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* =====================================
   FORMULÁRIO
===================================== */

const formulario =
document.querySelector(".formulario");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Mensagem enviada com sucesso! Em breve um corretor entrará em contato."
    );

    formulario.reset();

});
