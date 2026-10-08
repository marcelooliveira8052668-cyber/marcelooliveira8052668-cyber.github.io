// Desenvolvido por Prof. Marcelo Oliveira
export function renderizarCards(vagas, container) {
    container.innerHTML = ""; // Limpa antes de renderizar

    vagas.forEach(vaga => {
        const card = document.createElement("article");
        card.className = "card-vaga";
        
        // Exibe % e lista de faltantes (Requirement RF11)
        card.innerHTML = `
            <h3>${vaga.cargo}</h3>
            <p><strong>Empresa:</strong> ${vaga.empresa}</p>
            <p><strong>Compatibilidade:</strong> ${vaga.compatibilidade}%</p>
            <p><strong>Classificação:</strong> ${vaga.classificacao}</p>
            <small>Faltam: ${vaga.faltantes.join(", ") || "Nenhuma!"}</small>
        `;
        container.appendChild(card);
    });
}

export function mostrarMensagem(container, mensagem) {
    container.innerHTML = `<p role="alert">${mensagem}</p>`;
}
