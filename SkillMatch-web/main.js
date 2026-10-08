// Desenvolvido por Prof. Marcelo Oliveira
import { Vaga } from "./motor.js";
import { carregarVagas, salvarPerfil, lerPerfil } from "./dados.js";
import { renderizarCards } from "./ui.js";

const form = document.querySelector("#form-perfil");
const container = document.querySelector("#container-vagas");

// Função principal que orquestra a lógica
async function analisarVagas(event) {
    // Condicao: o bloco so roda se for verdadeiro
    if (event) event.preventDefault(); // Impede o reload da página

    container.innerHTML = "<p>Carregando vagas...</p>"; // Estado de carregando

    const dadosPerfil = {
        nome: document.querySelector("#nome").value,
        habilidades: document.querySelector("#habilidades").value.split(",").map(h => h.trim())
    };

    salvarPerfil(dadosPerfil); // Persistência

    const vagasRaw = await carregarVagas();
    
    // Mapeando dados do JSON para a classe Vaga (POO)
    const vagas = vagasRaw.map(v => new Vaga(v.id, v.empresa, v.cargo, v.requisitos, v.salario, v.modalidade));

    // Calculando compatibilidade
    const vagasProcessadas = vagas.map(v => {
        const { percentual, faltantes } = v.calcularCompatibilidade(dadosPerfil.habilidades);
        return { ...v, compatibilidade: percentual, faltantes };
    });

    renderizarCards(vagasProcessadas, container);
}

// Inicialização
// Evento global do documento
document.addEventListener("DOMContentLoaded", () => {
    const perfilSalvo = lerPerfil();
    // Condicao: o bloco so roda se for verdadeiro
    if (perfilSalvo) {
        document.querySelector("#nome").value = perfilSalvo.nome;
        document.querySelector("#habilidades").value = perfilSalvo.habilidades.join(", ");
    }
    form.addEventListener("submit", analisarVagas);
});

