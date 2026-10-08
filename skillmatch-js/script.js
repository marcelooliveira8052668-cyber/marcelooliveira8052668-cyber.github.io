// Desenvolvido por Prof. Marcelo Oliveira
// SAÍDA
const saida = document.getElementById("saida");

function escrever(texto) {
  saida.textContent += texto + "\n";
}

// RF01 - CANDIDATO
const candidato = {
  nome: "Marcelo",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
  experienciaMeses: 4
};

// RF09 - CLASSE
class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  resumo() {
    return `${this.cargo} - ${this.empresa}`;
  }
}

// RF10 - HERANÇA
class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }
}

// RF02 - VAGAS
const vagas = [
  new VagaFrontEnd("TechStart", "Front-End Jr", ["JavaScript", "GitHub", "Lógica de Programação"], 2800, "Remoto", "Júnior"),
  new VagaFrontEnd("CodeLab", "Estágio Front-End", ["JavaScript", "Kanban", "GitHub"], 1800, "Híbrido", "Estágio"),
  new VagaFrontEnd("WebSolutions", "Dev JS Jr", ["JavaScript", "Arrays", "Objetos", "Funções"], 3000, "Presencial", "Júnior")
];

// RF13 - CLOSURE
function contadorAnalise() {
  let total = 0;
  return function () {
    total++;
    return total;
  };
}

const contar = contadorAnalise();

// RF14 - PROMISE
function buscarVagas() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(vagas), 1000);
  });
}

// RF03, 04, 05
function analisarVaga(vaga) {
  const habilidadesMatch = vaga.requisitos.filter(req =>
    candidato.habilidades.includes(req)
  );

  const faltantes = vaga.requisitos.filter(req =>
    !candidato.habilidades.includes(req)
  );

  const compatibilidade = (habilidadesMatch.length / vaga.requisitos.length) * 100;

  let classificacao =
    compatibilidade >= 80 ? "Alta" :
    compatibilidade >= 50 ? "Média" :
    "Baixa";

  return {
    vaga,
    compatibilidade,
    classificacao,
    habilidadesMatch,
    faltantes
  };
}

// RF12 - CALLBACK
function finalizar(nome, callback) {
  escrever("Análise finalizada!");
  callback(nome);
}

function mensagemFinal(nome) {
  escrever(`${nome}, continue estudando para melhorar suas chances!`);
}

// RF06 - MELHOR VAGA
function melhorVaga(lista) {
  return lista.reduce((melhor, atual) =>
    atual.compatibilidade > melhor.compatibilidade ? atual : melhor
  );
}

// RF07 - RECOMENDAÇÃO
function recomendar(lista) {
  const faltantes = lista.flatMap(v => v.faltantes);
  const unicos = [...new Set(faltantes)];
  escrever("Recomendação de estudo:");
  escrever(unicos.join(", "));
}

// RF14 - ASYNC
async function iniciar() {
  escrever("Carregando vagas...\n");

  const vagasCarregadas = await buscarVagas();

  const resultados = vagasCarregadas.map(vaga => {
    const analise = analisarVaga(vaga);

    escrever(`Empresa: ${vaga.empresa}`);
    escrever(`Cargo: ${vaga.cargo}`);
    escrever(`Compatibilidade: ${analise.compatibilidade.toFixed(0)}%`);
    escrever(`Classificação: ${analise.classificacao}`);
    escrever(`Faltantes: ${analise.faltantes.join(", ")}`);
    escrever("----------------------");

    contar();
    return analise;
  });

  const melhor = melhorVaga(resultados);

  escrever("\nMelhor vaga:");
  escrever(`${melhor.vaga.empresa} - ${melhor.vaga.cargo}`);

  recomendar(resultados);

  finalizar(candidato.nome, mensagemFinal);

  escrever(`Total de análises: ${contar()}`);
}

iniciar();
