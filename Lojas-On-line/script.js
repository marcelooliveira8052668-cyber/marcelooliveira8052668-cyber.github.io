// ============================================================
//  MODELO DE LOJA ONLINE
//  Arquivo: script.js
//  Autor: Prof. Marcelo Oliveira
//
//  COMO ESTE ARQUIVO FUNCIONA:
//  1. As constantes no topo guardam os dados fixos (produtos,
//     precos, opcoes de entrega e pagamento).
//  2. Cada funcao esta documentada logo acima dela, com o que
//     ela faz, quais parametros recebe e o que devolve.
//  3. Os dados ficam salvos no navegador (localStorage), por isso
//     o historico de pedidos e as avaliacoes continuam la depois
//     que a pessoa fecha a pagina.
//
//  PARA ARRUMAR UM BUG:
//  - Mensagem no console? Abra o F12 e veja o que aparece.
//  - Dado nao salvou?  Verifique se usou localStorage.setItem.
//  - Botao sem acao?   Confira se o id do HTML bate com o getElementById.
//  ============================================================
let carrinho = [];
let totalBase = 0;

// Adiciona o produto à lista e atualiza o total base
// Adiciona um produto ao carrinho
/**
 * Adiciona um produto ao carrinho. Se ja existir, soma a quantidade.
 *
 * PARAMETROS:
 *   - nome: veja o codigo abaixo
 *   - preco: veja o codigo abaixo
 *   - categoria: veja o codigo abaixo
 *
 * OBSERVACAO: id = numero do produto. quantidade = quantas unidades.
 */
function adicionar(nome, preco, categoria) {
    carrinho.push({ nome, preco, categoria });
    totalBase += preco;
    atualizarInterfaceCarrinho();
}

// Atualiza a lista visual na tela
function atualizarInterfaceCarrinho() {
    const lista = document.getElementById("listaCarrinho");
    lista.innerHTML = "";

    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
    });

    // Pega um elemento da pagina pelo id.
    document.getElementById("total").innerText = totalBase.toFixed(2);
}

// Faz os cálculos de impostos e descontos
// Conclui o pedido, salva o historico e zera o carrinho
/**
 * Conclui o pedido: grava no historico, atualiza o financeiro e esvazia o carrinho.
 *
 * OBSERVACAO: Chamar so quando o cliente confirmar a compra.
 */
function finalizarCompra() {
    // Condicao: o bloco so roda se for verdadeiro
    if (carrinho.length === 0) {
        // Mostra um aviso simples na tela. Atencao: em site pronto prefira um aviso bonito.
        alert("Adicione itens ao carrinho primeiro!");
        // Sai da funcao aqui, devolvendo o valor informado.
        return;
    }

    let valorComTaxas = 0;
    let totalTaxas = 0;

    // 1. Calcula taxas individuais por categoria
    carrinho.forEach(item => {
        let porcentagemTaxa = 0;
        
        // Condicao: o bloco so roda se for verdadeiro
        if (item.categoria === "ELETRONICO") porcentagemTaxa = 0.15;
        // Condicao: o bloco so roda se for verdadeiro
        if (item.categoria === "VESTUARIO") porcentagemTaxa = 0.05;
        // Condicao: o bloco so roda se for verdadeiro
        if (item.categoria === "ALIMENTO") porcentagemTaxa = 0;

        let taxaItem = item.preco * porcentagemTaxa;
        totalTaxas += taxaItem;
        valorComTaxas += item.preco + taxaItem;
    });

    // 2. Lógica do Cupom (SÓ desconta se marcar SIM e total for < 100000)
    let temCupom = document.getElementById("cupom").value === "sim";
    let desconto = 0;

    // Condicao: o bloco so roda se for verdadeiro
    if (temCupom && valorComTaxas < 100000) {
        desconto = 10;
    }

    let valorFinal = valorComTaxas - desconto;

    // 3. Mostra o bloco de resultado com os valores
    exibirResultado(totalBase, totalTaxas, desconto, valorFinal);
}

// Preenche as informações no HTML
function exibirResultado(base, taxas, desc, final) {
    const divRes = document.getElementById("resultado");
    divRes.style.display = "block";

    // Pega um elemento da pagina pelo id.
    document.getElementById("precoFinal").innerText = `Produtos: R$ ${base.toFixed(2)}`;
    // Pega um elemento da pagina pelo id.
    document.getElementById("taxasFinal").innerText = `Impostos (+): R$ ${taxas.toFixed(2)}`;
    // Pega um elemento da pagina pelo id.
    document.getElementById("descontoFinal").innerText = `Desconto (-): R$ ${desc.toFixed(2)}`;
    // Pega um elemento da pagina pelo id.
    document.getElementById("valorTotalFinal").innerText = `Total a Pagar: R$ ${final.toFixed(2)}`;
}

// Zera o carrinho para uma nova compra
function limparCarrinho() {
    carrinho = [];
    totalBase = 0;
    atualizarInterfaceCarrinho();
    // Pega um elemento da pagina pelo id.
    document.getElementById("resultado").style.display = "none";
    // Mostra um aviso simples na tela. Atencao: em site pronto prefira um aviso bonito.
    alert("Carrinho limpo! Pode escolher novos produtos.");
}
