// Desenvolvido por Prof. Marcelo Oliveira
// Função assíncrona para buscar as vagas (fetch)
export async function carregarVagas() {
    try {
        // CORREÇÃO: Agora o caminho é direto, pois o arquivo está na raiz
        const resposta = await fetch("vagas.json");
        
        // Verifica se a resposta foi bem sucedida
        if (!resposta.ok) throw new Error("Falha ao buscar vagas");
        return await resposta.json(); // Transforma em objeto JS
    } catch (erro) {
        console.error("Erro no fetch:", erro);
        return []; // Retorna array vazio em caso de erro
    }
}

// Persistência com LocalStorage (continua igual)
export function salvarPerfil(dados) {
    localStorage.setItem("perfil", JSON.stringify(dados));
}

export function lerPerfil() {
    const dados = localStorage.getItem("perfil");
    return dados ? JSON.parse(dados) : null; // Tratamento de null na primeira visita
}

