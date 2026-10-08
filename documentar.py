# -*- coding: utf-8 -*-
"""
DOCUMENTACAO COMPLETA DO CODIGO - versao 2
Adiciona comentarios detalhados em portugues:
  - Cabecalho de arquivo (o que e, como usar, o que mexer)
  - Documentacao de cada funcao (parametros, retorno, o que faz)
  - Comentarios nos blocos de logica

Seguro: nao insere comentario dentro de <script>, <style>,
template literals, strings multilinha ou blocos de comentario existentes.

Uso: python documentar.py
"""
import os
import re
import sys

AUTOR = "Prof. Marcelo Oliveira"

# =====================================================================
#  DICIONARIO: nome da funcao -> (resumo, o que faz, dica de correcao)
# =====================================================================
FUNC_DOC = {
    # ---------- Loja Online ----------
    "renderizarProdutos": (
        "lista",
        "Desenha os cards de produto na tela.",
        "Passe a lista de produtos que quer mostrar. Sem argumento, mostra todos os produtos do catalogo.",
    ),
    "filtrarProdutos": (
        "",
        "Aplica o texto da busca e os filtros de categoria e preco escolhidos pelo cliente.",
        "Chame depois de mudar a busca ou um filtro. Devolve a lista ja filtrada.",
    ),
    "adicionar": (
        "id, quantidade",
        "Adiciona um produto ao carrinho. Se ja existir, soma a quantidade.",
        "id = numero do produto. quantidade = quantas unidades.",
    ),
    "removerItem": (
        "indice",
        "Remove um item do carrinho pela posicao dele.",
        "indice = numero da posicao na lista do carrinho (comeca em 0).",
    ),
    "mudarQuantidade": (
        "indice, novaQuantidade",
        "Muda a quantidade de um item que ja esta no carrinho.",
        "Se a quantidade chegar a 0, o item e removido.",
    ),
    "atualizarResumo": (
        "",
        "Recalcula e mostra na tela: subtotal, taxas, desconto e valor total da compra.",
        "E chamada sozinha depois de mexer no carrinho. Nao precisa chamar manualmente.",
    ),
    "aplicarCupom": (
        "",
        "Valida o cupom digitado e aplica o desconto no total.",
        "Cupons validos: PROMO10 (10%), QUANTUM15 (15%), LOJA20 (20%), BEMVINDO5 (5%).",
    ),
    "calcularTotais": (
        "",
        "Faz todas as contas do carrinho e devolve os valores.",
        "Considere taxa da plataforma, desconto do pagamento e frete.",
    ),
    "finalizarCompra": (
        "",
        "Conclui o pedido: grava no historico, atualiza o financeiro e esvazia o carrinho.",
        "Chamar so quando o cliente confirmar a compra.",
    ),
    "salvarPedido": (
        "valor, lucro",
        "Grava o pedido finalizado no navegador (localStorage) para o historico.",
        "localStorage guarda os dados no proprio navegador do cliente.",
    ),
    "abrirProduto": (
        "id",
        "Abre a janela com os detalhes, fotos, especificacoes e avaliacoes do produto.",
        "id = numero do produto. Deve existir no catalogo.",
    ),
    "fecharProduto": (
        "",
        "Fecha a janela de detalhes do produto.",
        "Tambem e chamada ao apertar a tecla Esc.",
    ),
    "renderizarAvaliacoes": (
        "filtro",
        "Desenha a lista de avaliacoes, aplicando o filtro de estrelas escolhido.",
        "filtro = quantidade de estrelas minima (0 = mostrar todas).",
    ),
    "gerarAvaliacoes": (
        "produto",
        "Cria avaliacoes de exemplo para o produto, de forma sempre igual.",
        "Sao as avaliacoes que preenchem a lista antes de o cliente comentar.",
    ),
    "enviarAvaliacao": (
        "",
        "Valida e salva a avaliacao real enviada pelo cliente (nota, texto e foto).",
        "Exige nome, nota de 1 a 5 e comentario com 10 caracteres ou mais.",
    ),
    "carregarAvaliacoesReais": (
        "produtoId",
        "Le do navegador as avaliacoes reais ja enviadas para este produto.",
        "Devolve uma lista (pode estar vazia).",
    ),
    "salvarAvaliacaoReal": (
        "produtoId, avaliacao",
        "Guarda no navegador a avaliacao real do cliente, sempre no topo da lista.",
        "Nao deixa duplicar: a nova entra antes das antigas.",
    ),
    "selecionarEstrela": (
        "nota",
        "Marca a nota escolhida pelo cliente (de 1 a 5 estrelas).",
        "nota = numero de estrelas. Atualiza o texto ao lado das estrelas.",
    ),
    "salvarProduto": (
        "",
        "Cadastra um produto novo ou atualiza um existente, incluindo a foto.",
        "Valida nome, marca, preco, categoria e descricao antes de salvar.",
    ),
    "carregarFotoProduto": (
        "evento",
        "Converte a foto enviada pelo cliente em base64 para poder guardar.",
        "Limite de 2MB por imagem. O base64 e um texto que representa a imagem.",
    ),
    "mudarPlataforma": (
        "plataforma",
        "Troca entre Loja Local, Shopee e Mercado Livre, mudando a taxa aplicada.",
        "plataforma = 'local', 'shopee' ou 'mercado-livre'.",
    ),
    "formatarNumero": (
        "num",
        "Formata numeros grandes de forma curta (ex.: 1200 vira 1.2k).",
        "Usado para mostrar 'vendidos' sem esticar o card.",
    ),
    "selecionarPagamento": (
        "elemento",
        "Marca a forma de pagamento escolhida e recalcula o total.",
        "elemento = o botao/cartao da opcao clicado.",
    ),
    "selecionarEntrega": (
        "elemento",
        "Marca a entrega escolhida e recalcula o frete.",
        "elemento = o botao/cartao da opcao clicado.",
    ),
    "carregarFotoAvaliacao": (
        "evento",
        "Converte a foto enviada na avaliacao em base64.",
        "Limite de 1,5MB por imagem.",
    ),
    "removerFotoAvaliacao": (
        "",
        "Apaga a foto que o cliente tinha escolhido na avaliacao.",
        "Chame se quiser cancelar o upload.",
    ),
    "toast": (
        "mensagem, tipo",
        "Mostra uma notificacao temporaria no canto da tela.",
        "tipo = 'sucesso', 'erro' ou 'aviso'. Some sozinha depois de alguns segundos.",
    ),
    "rotacaoBanner": (
        "",
        "Passa para o proximo slide do banner, alternando as bolinhas.",
        "Chamada de tempos em tempos por um setInterval.",
    ),
    "filtrarCategoria": (
        "categoria, botao",
        "Filtra o catalogo por categoria e marca o botao como ativo.",
        "Usada pelos botoes de categoria rapida do topo.",
    ),
    "cadastrarEmail": (
        "",
        "Salva o e-mail do visitante na lista da newsletter.",
        "Depois mostra um aviso para o cliente usar o cupom de boas-vindas.",
    ),
    "rolarCatalogo": (
        "",
        "Rola a pagina ate o catalogo de produtos.",
        "Usada pelo botao do banner.",
    ),
    "rolarCarrinho": (
        "",
        "Rola a pagina ate o carrinho.",
        "Usada pelo icone de carrinho do topo.",
    ),
    "editarProduto": (
        "id",
        "Preenche o formulario com os dados do produto para edita-lo.",
        "id = numero do produto que sera alterado.",
    ),
    "excluirProduto": (
        "id",
        "Apaga um produto cadastrado pela loja.",
        "Pedir confirmacao antes de chamar, para nao apagar sem querer.",
    ),
    "carregarProdutosCadastrados": (
        "",
        "Le do navegador os produtos cadastrados pela propria loja.",
        "Devolve uma lista (pode estar vazia).",
    ),
    "salvarProdutosCadastrados": (
        "lista",
        "Grava no navegador a lista de produtos cadastrados.",
        "Chame depois de adicionar, editar ou excluir um produto.",
    ),
    "garantirComentario": (
        "texto, caminho",
        "Garante que o comentario de autoria apareca no topo do arquivo exibido.",
        "Usada apenas pelo visualizador de codigo.",
    ),
    "realcar": (
        "texto, caminho",
        "Colori o codigo no visualizador (tags, classes e palavras-chave).",
        "Usada apenas pelo visualizador de codigo.",
    ),
    "abrirCodigo": (
        "projeto",
        "Abre a janela de visualizacao do codigo de um projeto.",
        "projeto = nome da pasta do projeto.",
    ),
    "verArquivo": (
        "caminho",
        "Busca o arquivo e mostra o conteudo com cores no visualizador.",
        "caminho = caminho do arquivo dentro da pasta do projeto.",
    ),
    "fecharModal": (
        "",
        "Fecha a janela de visualizacao de codigo.",
        "Tambem fecha com a tecla Esc ou clicando fora.",
    ),
    "filtrar": (
        "categoria, botao",
        "Aplica o filtro de categoria nos cards do portfolio.",
        "Usada pelos botoes de filtro.",
    ),
    "renderizarCards": (
        "filtroAtivo",
        "Desenha os cards dos projetos, ja aplicando o filtro.",
        "Sem argumento, mostra todos.",
    ),
    "renderizarFiltros": (
        "",
        "Cria os botoes de filtro de categoria do portfolio.",
        "Chamada uma vez ao abrir a pagina.",
    ),
    # ---------- Comuns ----------
    "iniciar": (
        "",
        "Prepara a pagina: carrega dados e liga os botoes.",
        "Chamada quando a pagina termina de carregar.",
    ),
    "sincronizar": (
        "",
        "Atualiza todos os dados do site de uma vez.",
        "Chame depois de qualquer mudanca para a tela ficar correta.",
    ),
    "mostrarMensagem": (
        "texto",
        "Mostra um aviso para o usuario.",
        "Use para informar sucesso ou erro.",
    ),
    "salvar": (
        "dados",
        "Guarda os dados no navegador.",
        "localStorage guarda no proprio navegador do cliente.",
    ),
    "carregar": (
        "",
        "Le os dados guardados no navegador.",
        "Devolve null se ainda nao houver nada salvo.",
    ),
    "excluir": (
        "id",
        "Apaga um registro.",
        "Confirme com o usuario antes de apagar.",
    ),
    "criar": (
        "dados",
        "Cria um novo registro.",
        "devolve o id do que foi criado.",
    ),
    "editar": (
        "id, dados",
        "Atualiza um registro que ja existe.",
        "O id precisa existir.",
    ),
    "validar": (
        "dados",
        "Confere se os dados informados estao corretos.",
        "Devolve verdadeiro ou falso.",
    ),
    "toggle": (
        "elemento",
        "Liga ou desliga uma classe de estilo (abrir/fechar, ativar/desativar).",
        "Usada em menus e janelas.",
    ),
}

# =====================================================================
#  COMENTARIOS DE BLOCO DE LOGICA (JS)
# =====================================================================
BLOCO_JS = [
    (r'^\s*(const|let)\s+PRODUTOS\s*=', "Lista com todos os produtos da loja. Para adicionar um produto novo, copie um bloco e mude os dados."),
    (r'^\s*(const|let)\s+PAGAMENTOS\s*=', "Formas de pagamento. O campo 'desconto' e a porcentagem que o cliente ganha ao escolher aquela opcao."),
    (r'^\s*(const|let)\s+ENTREGAS\s*=', "Opcoes de entrega. 'custo' e o frete em reais e 'prazo' e o que aparece para o cliente."),
    (r'^\s*(const|let)\s+TAXAS\s*=', "Taxa cobrada por cada plataforma. Loja Local cobra menos que Shopee e Mercado Livre."),
    (r'^\s*(const|let)\s+CUPONS\s*=', "Cupons validos. A chave e o codigo e o valor e a porcentagem de desconto."),
    (r'^\s*try\s*\{', "Bloco protegido: se der erro aqui, o catch trata e a pagina nao quebra."),
    (r'^\s*catch\s*\(', "tratamento do erro."),
    (r'^\s*finally\s*\{', "Executa no final, com ou sem erro."),
    (r'^\s*if\s*\(\s*!\s*document\.getElementById', "Seguranca: se o elemento nao existir na pagina, para aqui para nao dar erro."),
    (r'^\s*document\.getElementById\(', "Pega um elemento da pagina pelo id."),
    (r'^\s*document\.querySelector', "Pega um elemento da pagina pelo seletor de CSS."),
    (r'^\s*localStorage\.getItem', "Le um dado guardado no navegador."),
    (r'^\s*localStorage\.setItem', "Guarda um dado no navegador (fica salvo mesmo se fechar a pagina)."),
    (r'^\s*localStorage\.removeItem', "Apaga um dado guardado no navegador."),
    (r'^\s*JSON\.parse', "Transforma o texto guardado de volta em objeto."),
    (r'^\s*JSON\.stringify', "Transforma o objeto em texto para poder guardar."),
    (r'^\s*FileReader', "Le o arquivo de imagem escolhido pelo cliente."),
    (r'^\s*addEventListener', "Liga um evento (clique, mudanca de campo, etc.) em um elemento."),
    (r'^\s*setTimeout', "Roda uma funcao depois de alguns segundos."),
    (r'^\s*setInterval', "Roda uma funcao de tempos em tempos."),
    (r'^\s*\.forEach\(', "Passa por cada item da lista, um por vez."),
    (r'^\s*\.map\(', "Cria uma nova lista aplicando uma regra em cada item."),
    (r'^\s*\.filter\(', "Cria uma nova lista só com os itens que passam no teste."),
    (r'^\s*\.reduce\(', "Junta os itens da lista em um valor so (soma, total, etc.)."),
    (r'^\s*\.push\(', "Adiciona um item ao fim da lista."),
    (r'^\s*\.splice\(', "Remove itens da lista."),
    (r'^\s*\.includes\(', "Verifica se algo existe na lista ou texto."),
    (r'^\s*alert\(', "Mostra um aviso simples na tela. Atencao: em site pronto prefira um aviso bonito."),
    (r'^\s*console\.(log|error|warn)', "Mostra mensagem no console do navegador. Serve para depurar."),
    (r'^\s*fetch\(', "Pega dados de uma API externa."),
    (r'^\s*(if|else if)\s*\(\s*!', "Condicao invertida: o bloco roda quando a condicao for falsa."),
    (r'^\s*else\s*\{', "Caso contrario: o que fazer quando a condicao acima nao vale."),
    (r'^\s*return\b', "Sai da funcao aqui, devolvendo o valor informado."),
    (r'^\s*throw\b', "Forca um erro para aviso de que algo esta errado."),
]

# =====================================================================
#  SECOES HTML
# =====================================================================
SECOES_HTML = [
    (r'<header', "INICIO DO SITE", "Cabecalho fixo: logo, busca e botoes. Sempre no topo da tela."),
    (r'<nav\b', "MENU DE NAVEGACAO", "Links para as partes principais do site."),
    (r'<main\b', "CONTEUDO PRINCIPAL", "Tudo que aparece no meio da pagina."),
    (r'<form\b', "FORMULARIO", "Campos de entrada de dados. Envie com 'submit'."),
    (r'<table\b', "TABELA", "Mostra dados em linhas e colunas."),
    (r'<tbody\b', "CORPO DA TABELA", "As linhas de dados ficam aqui."),
    (r'<section\b', "SECAO", "Um bloco de conteudo da pagina."),
    (r'<footer', "RODAPE DO SITE", "Parte de baixo da pagina. Aqui normalmente ficam os creditos e contatos."),
    (r'<button\b', "BOTAO", "Clique aqui para disparar uma acao."),
    (r'<input\b', "CAMPO DE ENTRADA", "Campo para o usuario digitar ou escolher um valor."),
    (r'<select\b', "LISTA DE OPCOES", "Campo com opcoes para escolher."),
    (r'<textarea\b', "AREA DE TEXTO", "Campo para escrever varios linhas."),
    (r'<label\b', "ROTULO", "Nome do campo, para o usuario saber o que preencher."),
    (r'<img\b', "IMAGEM", "Se a imagem nao aparecer, confira o caminho no atributo 'src'."),
    (r'<video\b', "VIDEO", "Video do site."),
    (r'<canvas\b', "AREA DE DESENHO", "Usado por jogos e graficos."),
    (r'<div\b', "BLOCO", "Caixa que agrupa conteudo."),
    (r'<span\b', "TRECHO", "Texto no meio de uma frase."),
    (r'<p\b', "PARAGRAFO", "Bloco de texto."),
    (r'<h[1-6]\b', "TITULO", "Titulo da secao. O numero indica a importancia."),
    (r'<ul\b|<ol\b', "LISTA", "Lista de itens."),
    (r'<li\b', "ITEM DA LISTA", "Um item da lista."),
    (r'<a\b', "LINK", "Link para outra pagina."),
    (r'<aside\b', "BARRA LATERAL", "Conteudo ao lado do principal."),
    (r'<article\b', "ARTIGO/BLOCO", "Bloco de conteudo independente."),
    (r'<script\b', "SCRIPTS", "O JavaScript da pagina fica aqui (ou no fim do body)."),
    (r'<style\b', "ESTILOS", "CSS dentro da propria pagina."),
]

# =====================================================================
#  BLOCOS CSS
# =====================================================================
BLOCO_CSS = [
    (r'^\s*@media\s*\(', "AJUSTE PARA TELAS PEQUENAS", "As regras dentro valem so quando a tela e menor. Responsividade."),
    (r'^\s*\*\s*\{', "RESET", "Zera as margens e define o modelo de caixa de todos os elementos."),
    (r'^\s*body\s*\{', "CORPO DA PAGINA", "Define fundo, fonte e espacamento geral do site."),
    (r'^\s*html\s*\{', "CONFIGURACAO DO HTML", "Normalmente usado para rolagem suave e cor de fundo fixa."),
    (r'^\s*:root\s*\{', "VARIAVEIS", "Cores e valores usados em varias partes do site. Mude aqui para trocar a identidade visual inteira."),
    (r'^\s*[.#][\w-]+[^,{]*\{', "ESTILO DO SELETOR", "Aplica as propriedades abaixo para os elementos que casam com este seletor."),
    (r'^\s*@keyframes\s+', "ANIMACAO", "Define os passos da animacao. Use com 'animation: nome ...'."),
]


def rotulo_explicito(dicionario, nome):
    """Pega (parametros, resumo, dica) de uma funcao."""
    return dicionario.get(nome)


def escapa_regex(txt):
    return re.escape(txt)


# --------------------------------------------------------------------
# CABECALHO DE ARQUIVO
# --------------------------------------------------------------------
def cabecalho_html(titulo, nome_arquivo):
    return (
        "<!-- ============================================================\n"
        f"     {titulo}\n"
        f"     Arquivo: {nome_arquivo}\n"
        f"     Autor: {AUTOR}\n"
        "\n"
        "     COMO ESTE ARQUIVO FUNCIONA:\n"
        "     1. O HTML monta a estrutura (o que aparece na tela).\n"
        "     2. Cada secao esta comentada abaixo com o que ela faz.\n"
        "     3. Os ids e classes sao usados pelo CSS (aparencia) e pelo\n"
        "        JavaScript (comportamento) - se renomear, atualize la tambem.\n"
        "\n"
        "     PARA CORRIGIR UM PROBLEMA NESTA PAGINA:\n"
        "     - Texto trocado?   Procura por id=\"...\" e altere aqui.\n"
        "     - Cor errada?      O estilo esta em style.css ou na pasta css/.\n"
        "     - Botao sem acao?  O onclick aponta para uma funcao do JS.\n"
        "     ============================================================ -->\n"
    )


def cabecalho_css(titulo, nome_arquivo):
    return (
        "/* ============================================================\n"
        f"   {titulo}\n"
        f"   Arquivo: {nome_arquivo}\n"
        f"   Autor: {AUTOR}\n"
        "\n"
        "   PARA ENTENDER O VISUAL:\n"
        "   - Cada bloco abaixo tem um comentario dizendo o que ele controla.\n"
        "   - As cores ficam nas variaveis do topo (:root). Troque la para\n"
        "     mudar a identidade visual do site inteiro de uma vez.\n"
        "   - @media no fim do arquivo cuida das telas menores (celular).\n"
        "\n"
        "   PARA MUDAR ALGUM COISA:\n"
        "   - Tamanho de letra  -> procure 'font-size'\n"
        "   - Espacamento      -> procure 'padding' ou 'margin'\n"
        "   - Cor de fundo     -> procure 'background'\n"
        "   - Borda arredondada-> procure 'border-radius'\n"
        "   ============================================================ */\n"
    )


def cabecalho_js(titulo, nome_arquivo):
    return (
        "// ============================================================\n"
        f"//  {titulo}\n"
        f"//  Arquivo: {nome_arquivo}\n"
        f"//  Autor: {AUTOR}\n"
        "//\n"
        "//  COMO ESTE ARQUIVO FUNCIONA:\n"
        "//  1. As constantes no topo guardam os dados fixos (produtos,\n"
        "//     precos, opcoes de entrega e pagamento).\n"
        "//  2. Cada funcao esta documentada logo acima dela, com o que\n"
        "//     ela faz, quais parametros recebe e o que devolve.\n"
        "//  3. Os dados ficam salvos no navegador (localStorage), por isso\n"
        "//     o historico de pedidos e as avaliacoes continuam la depois\n"
        "//     que a pessoa fecha a pagina.\n"
        "//\n"
        "//  PARA ARRUMAR UM BUG:\n"
        "//  - Mensagem no console? Abra o F12 e veja o que aparece.\n"
        "//  - Dado nao salvou?  Verifique se usou localStorage.setItem.\n"
        "//  - Botao sem acao?   Confira se o id do HTML bate com o getElementById.\n"
        "//  ============================================================\n"
    )


TITULOS = {
    "Codigo-Loja-Online": "LOJA ONLINE COMPLETA",
    "checkout-cyber-metal": "CHECKOUT EM REACT",
    "hamburgueria": "HAMBURGUERIA ONLINE",
    "Gran-Forno-FINAL": "SITE DE LANCHONETE",
    "Gran-Forno-site": "SITE DE LANCHONETE (VERSAO ANTERIOR)",
    "Lojas-On-line": "MODELO DE LOJA ONLINE",
    "comandas": "SISTEMA DE COMANDAS",
    "NF-Control": "CONTROLE DE NOTAS FISCAIS",
    "LMS-SENAI-Project": "PLATAFORMA LMS SENAI",
    "Plataforma_Corporativa_SENAI": "PLATAFORMA CORPORATIVA SENAI",
    "projeto-01": "PROJETO SENAI 01",
    "devbook": "DEVBOOK - REDE SOCIAL DE ESTUDO",
    "tutor-IA": "TUTOR COM INTELIGENCIA ARTIFICIAL",
    "english-platform": "PLATAFORMA DE INGLES",
    "ingl-s-iniciantes": "INGLES PARA INICIANTES",
    "livro-digital-historia": "LIVRO DIGITAL DE HISTORIA",
    "SkillMatch-web": "SKILLMATCH VERSAO WEB",
    "skillmatch-js": "SKILLMATCH EM JS PURO",
    "gerador-de-sites": "GERADOR DE SITES",
    "gerador-portfolio": "GERADOR DE PORTFOLIO",
    "planejamento-de-viagem": "PLANEJAMENTO DE VIAGEM",
    "viagem-pro": "SITE DE VIAGENS",
    "imobiliaria": "SITE IMOBILIARIO",
    "casamentos": "SITE DE CASAMENTOS",
    "Site-para-Advogado": "SITE PARA ADVOGADO",
    "Salao-de-beleza": "SITE DE SALAO DE BELEZA",
    "barbearia": "SITE DE BARBEARIA",
    "Construmais_Modelo_Comercial": "SITE DA CONSTRUMAIS",
    "Curr-culo-futurista-": "CURRICULO MODERNO",
    "Calculadora-iphone": "CALCULADORA ESTILO IPHONE",
    "pacman": "JOGO PAC-MAN",
    "jogo-velha": "JOGO DA VELHA",
}


def titulo_do(projeto, padrao):
    return TITULOS.get(projeto, padrao)


# --------------------------------------------------------------------
# HTML
# --------------------------------------------------------------------
def processar_html(caminho, projeto):
    with open(caminho, encoding="utf-8", errors="ignore") as f:
        texto = f.read()

    if AUTOR in texto[:900]:
        return 0

    linhas = texto.splitlines(keepends=True)
    nome = os.path.basename(caminho)
    titulo = titulo_do(projeto, "PAGINA DO SITE")

    novas = [cabecalho_html(titulo, nome)]
    n = 0
    dentro_script = False
    dentro_style = False

    for i, linha in enumerate(linhas):
        alvo = linha.strip()

        if not dentro_script and not dentro_style:
            if re.search(r"<script", linha, re.I):
                novas.append(f"{linha}\n")
                novas.append("    // O codigo JavaScript comeca aqui. Ele espera a pagina\n")
                novas.append("    // terminar de carregar antes de procurar os elementos.\n")
                n += 1
                dentro_script = True
                continue

            if re.search(r"<style", linha, re.I):
                novas.append(f"{linha}\n")
                novas.append("  /* O CSS da pagina esta escrito aqui dentro. */\n")
                n += 1
                dentro_style = True
                continue

            if "<" in alvo and not alvo.startswith("<!--") and not alvo.startswith("<!"):
                encontrado = None
                for padrao, rotulo, dica in SECOES_HTML:
                    if re.search(padrao, linha, re.I):
                        encontrado = (rotulo, dica)
                        break

                if encontrado:
                    rotulo, dica = encontrado
                    recuo = linha[: len(linha) - len(linha.lstrip())]
                    novas.append(f"{recuo}<!-- ===== {rotulo} =====\n")
                    novas.append(f"{recuo}     {dica} -->\n")
                    n += 1

        novas.append(linha)

        if dentro_script and re.search(r"</script", linha, re.I):
            dentro_script = False
            novas.append("\n")
        elif dentro_style and re.search(r"</style", linha, re.I):
            dentro_style = False

    with open(caminho, "w", encoding="utf-8", newline="") as f:
        f.write("".join(novas))
    return n


# --------------------------------------------------------------------
# CSS
# --------------------------------------------------------------------
def processar_css(caminho, projeto):
    with open(caminho, encoding="utf-8", errors="ignore") as f:
        texto = f.read()

    if AUTOR in texto[:900]:
        return 0

    linhas = texto.splitlines(keepends=True)
    nome = os.path.basename(caminho)
    titulo = titulo_do(projeto, "ESTILOS DO SITE")

    novas = [cabecalho_css(titulo, nome)]
    n = 0

    for linha in linhas:
        explicacao = None
        for padrao, rotulo, dica in BLOCO_CSS:
            if re.search(padrao, linha):
                explicacao = (rotulo, dica)
                break

        if explicacao:
            recuo = linha[: len(linha) - len(linha.lstrip())]
            rotulo, dica = explicacao
            novas.append(f"{recuo}/* --- {rotulo} ---\n")
            novas.append(f"{recuo}   {dica} */\n")
            n += 1

        novas.append(linha)

    with open(caminho, "w", encoding="utf-8", newline="") as f:
        f.write("".join(novas))
    return n


# --------------------------------------------------------------------
# JS / JSX
# --------------------------------------------------------------------
def doc_da_funcao(linha_func, recuo):
    """Monta o bloco de documentacao de uma funcao."""
    m = re.match(r"\s*(?:async\s+)?function\s+([\w$]+)\s*\(([^)]*)\)", linha_func)
    nome = m.group(1) if m else None
    params = (m.group(2) or "").strip() if m else ""

    info = rotulo_explicito(FUNC_DOC, nome)
    if info is None:
        return None, None

    doc_params, resumo, dica = info

    out = [
        f"{recuo}/**\n",
        f"{recuo} * {resumo}\n",
    ]
    if params:
        nomes = [p.strip().split("=")[0].strip() for p in params.split(",") if p.strip()]
        if nomes:
            out.append(f"{recuo} *\n")
            out.append(f"{recuo} * PARAMETROS:\n")
            for pnome in nomes:
                desc = ""
                if "id" == pnome and "produto" in resumo.lower():
                    desc = "numero que identifica o produto"
                elif pnome in ("lista", "produtos"):
                    desc = "lista de itens para trabalhar"
                elif pnome in ("evento", "event"):
                    desc = "evento disparado pelo navegador"
                elif pnome in ("indice", "index", "i"):
                    desc = "posicao do item na lista (comeca em 0)"
                elif pnome in ("quantidade", "qtd"):
                    desc = "quantas unidades"
                out.append(f"{recuo} *   - {pnome}: {desc or 'veja o codigo abaixo'}\n")
    out.append(f"{recuo} *\n")
    if dica:
        out.append(f"{recuo} * OBSERVACAO: {dica}\n")
    out.append(f"{recuo} */\n")
    return nome, "".join(out)


def processar_js(caminho, projeto):
    with open(caminho, encoding="utf-8", errors="ignore") as f:
        texto = f.read()

    if AUTOR in texto[:1400]:
        return 0

    linhas = texto.splitlines(keepends=True)
    nome = os.path.basename(caminho)
    titulo = titulo_do(projeto, "SCRIPTS DO SITE")

    novas = [cabecalho_js(titulo, nome)]
    n = 0

    dentro_bloco = False
    dentro_template = False

    for linha in linhas:
        t = linha.strip()
        recuo = linha[: len(linha) - len(linha.lstrip())]

        if dentro_bloco:
            novas.append(linha)
            if "*/" in t:
                dentro_bloco = False
            continue

        if dentro_template:
            novas.append(linha)
            if linha.count("`") >= 1:
                dentro_template = False
            continue

        if t.startswith("/*") and "*/" not in t:
            dentro_bloco = True
            novas.append(linha)
            continue

        # documentacao de funcao
        if re.match(r"\s*(async\s+)?function\s+[\w$]+\s*\(", linha):
            fnome, doc = doc_da_funcao(linha, recuo)
            if doc:
                novas.append(doc)
                n += 1
            novas.append(linha)
            # comentario de bloco de logica logo depois da assinatura
            for padrao, texto_c in BLOCO_JS:
                if re.search(padrao, linha):
                    novas.append(f"{recuo}  // {texto_c}\n")
                    n += 1
                    break
            continue

        # comentario de logica
        if t and not t.startswith("//"):
            for padrao, texto_c in BLOCO_JS:
                if re.search(padrao, linha):
                    novas.append(f"{recuo}// {texto_c}\n")
                    n += 1
                    break

        novas.append(linha)

        # template literal aberto nesta linha
        if linha.count("`") % 2 == 1:
            dentro_template = True

    with open(caminho, "w", encoding="utf-8", newline="") as f:
        f.write("".join(novas))
    return n


# --------------------------------------------------------------------
def rodar(raiz):
    total = 0
    arquivos = 0
    problemas = []

    for pasta, subpastas, nomes in os.walk(raiz):
        if "node_modules" in pasta or ".git" in pasta or "screenshots" in pasta:
            continue

        projeto = os.path.basename(pasta)

        for nome in nomes:
            caminho = os.path.join(pasta, nome)
            try:
                if nome.endswith(".html"):
                    n = processar_html(caminho, projeto)
                elif nome.endswith(".css"):
                    n = processar_css(caminho, projeto)
                elif nome.endswith((".js", ".jsx")):
                    if nome in ("app.js", "documentar.py", "comentar.py"):
                        continue
                    n = processar_js(caminho, projeto)
                else:
                    continue

                if n:
                    arquivos += 1
                    total += n
                    rel = os.path.relpath(caminho, raiz)
                    print(f"  {n:4d} -> {rel}")
            except Exception as e:
                problemas.append(f"{caminho}: {e}")

    return total, arquivos, problemas


if __name__ == "__main__":
    alvo = sys.argv[1] if len(sys.argv) > 1 else "."
    print("Documentando o codigo com comentarios detalhados...\n")
    t, a, p = rodar(alvo)
    print(f"\nPronto: {t} comentarios em {a} arquivos.")
    if p:
        print(f"\nAvisos ({len(p)}):")
        for x in p:
            print(f"  {x}")