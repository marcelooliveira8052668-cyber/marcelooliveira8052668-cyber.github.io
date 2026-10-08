// Desenvolvido por Prof. Marcelo Oliveira
// Variável que guarda o valor atual
let contador = 0;

// Atualiza o número mostrado na tela
function atualizarTela() {

    document
        .getElementById("numero")
        .innerHTML = contador;

}

// Soma 1
function somar() {

    contador++;

    atualizarTela();

}

// Subtrai 1
function subtrair() {

    contador--;

    atualizarTela();

}

// Volta para 0
function zerar() {

    contador = 0;

    atualizarTela();

}
