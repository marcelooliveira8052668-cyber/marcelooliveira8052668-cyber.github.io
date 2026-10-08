// Desenvolvido por Prof. Marcelo Oliveira
// Exportamos a classe para que outros arquivos possam usá-la
export class Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modalidade) {
        this.id = id;
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos; // Array de habilidades necessárias
        this.salario = salario;
        this.modalidade = modalidade;
    }

    // Método que calcula a compatibilidade usando 'this' (referência à própria vaga)
    calcularCompatibilidade(habilidadesUsuario) {
        // filter: método de array para encontrar habilidades que o usuário tem
        const encontrados = this.requisitos.filter(req => habilidadesUsuario.includes(req));
        
        // Cálculo matemático simples
        const percentual = (encontrados.length / this.requisitos.length) * 100;
        
        return {
            percentual: percentual.toFixed(0), // Arredonda para string
            faltantes: this.requisitos.filter(req => !habilidadesUsuario.includes(req)) // O que falta
        };
    }
}
