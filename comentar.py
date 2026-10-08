# -*- coding: utf-8 -*-
"""
Adiciona comentarios explicativos (em portugues) nas linhas do codigo.
Seguro: nao insere comentario dentro de <script>, <style> ou template literals.
Uso: python comentar.py
"""
import os
import re
import sys

AUTOR = "Desenvolvido por Prof. Marcelo Oliveira"

# ---------------------------------------------------------------- HTML
HTML_MAP = [
    (r'<header[^>]*class="topo-moderno"', "Cabecalho fixo no topo: logo, busca e botoes de acao"),
    (r'<section[^>]*class="banner-promo"', "Banner promocional principal com a oferta da semana"),
    (r'<section[^>]*class="categorias-rapidas"', "Categorias rapidas: um clique ja filtra o catalogo"),
    (r'<div[^>]*class="cabecalho-catalogo"', "Cabecalho do catalogo: titulo e filtros de categoria/preco"),
    (r'<section[^>]*id="catalogo-produtos"', "Area onde os produtos sao desenhados pelo JavaScript"),
    (r'<form[^>]*id="formProduto"', "Formulario de cadastro de produtos (envio de foto incluido)"),
    (r'<div[^>]*id="listaProdutosCadastrados"', "Lista dos produtos cadastrados pelo propria loja"),
    (r'<div[^>]*class="carrinho-futurista"', "Bloco do carrinho: itens, cupom, pagamento e entrega"),
    (r'<div[^>]*id="listaCarrinho"', "Lista de itens que estao no carrinho"),
    (r'<input[^>]*id="cupom"', "Campo para digitar o cupom de desconto"),
    (r'<div[^>]*class="resumo-compra"', "Resumo da compra com subtotal, taxas, desconto e total"),
    (r'<div[^>]*class="forma-pagamento"', "Opcoes de pagamento: PIX, cartao, boleto ou dinheiro"),
    (r'<div[^>]*class="entrega-opcao"', "Opcoes de entrega: Shopee, Mercado Livre, Correios ou retirada"),
    (r'<section[^>]*id="pedidos"', "Historico de pedidos finalizados"),
    (r'<section[^>]*id="financeiro"', "Controle financeiro: lucro e gastos"),
    (r'<div[^>]*id="modalProduto"', "Janela (modal) que abre os detalhes de um produto"),
    (r'<div[^>]*id="fotoPrincipal"', "Foto grande do produto dentro do modal"),
    (r'<div[^>]*id="miniaturasFotos"', "Miniaturas para trocar a foto principal"),
    (r'<div[^>]*class="avaliacoes"', "Area das avaliacoes do produto"),
    (r'<form[^>]*id="formAvaliacao"', "Formulario para o cliente deixar avaliacao real"),
    (r'<div[^>]*id="selecaoEstrelas"', "Seletor de estrelas (nota de 1 a 5)"),
    (r'<textarea[^>]*id="comentarioCliente"', "Campo de texto da avaliacao (ate 500 caracteres)"),
    (r'<input[^>]*id="fotoAvaliacao"', "Upload de foto para a avaliacao"),
    (r'<section[^>]*class="selos-confianca"', "Selos de confianca: compra segura, frete e garantia"),
    (r'<section[^>]*class="newsletter"', "Newsletter para captar e-mails e gerar lista de cupons"),
    (r'<footer', "Rodape do site com os creditos"),
    (r'<nav', "Menu de navegacao do site"),
    (r'<form', "Formulario"),
    (r'<table', "Tabela de dados"),
]

# ---------------------------------------------------------------- CSS
CSS_MAP = [
    (r'^\s*\*\s*\{', "Reset basico: zera as margens e define o modelo de caixa"),
    (r'^\s*body\s*\{', "Corpo da pagina: fundo, fonte e espacamento geral"),
    (r'^\s*header\s*\{', "Cabecalho do site"),
    (r'^\s*footer\s*\{', "Rodape do site"),
    (r'^\s*\.topo-moderno\s*\{', "Topo moderno fixo (sticky) com busca sempre visivel"),
    (r'^\s*\.banner-promo\s*\{', "Faixa promocional colorida do inicio do site"),
    (r'^\s*\.categorias-rapidas\s*\{', "Barra horizontal de categorias com rolagem"),
    (r'^\s*\.card\s*\{', "Card de produto: caixa com bordas arredondadas e sombra"),
    (r'^\s*\.card:hover\s*\{', "Efeito ao passar o mouse no card (levanta o elemento)"),
    (r'^\s*\.carrinho-futurista\s*\{', "Estilo do carrinho futurista (vidro e neon)"),
    (r'^\s*\.modal-overlay\s*\{', "Fundo escuro por tras da janela de detalhes"),
    (r'^\s*\.toast\s*\{', "Notificacao temporaria no canto da tela"),
    (r'^\s*\.estrela-cli\s*\{', "Estrela clicavel do seletor de avaliacao"),
    (r'^\s*@media\s*\(', "Ajuste de layout para telas menores (celular)"),
    (r'^\s*\.filtros?\s*\{', "Area dos filtros de busca"),
    (r'^\s*\.produtos\s*\{', "Grade que organize os produtos"),
]

# ---------------------------------------------------------------- JS
JS_MAP = [
    (r'^\s*(const|let|var)\s+PRODUTOS\s*=', "Banco de dados dos 50 produtos da loja"),
    (r'^\s*(const|let|var)\s+PAGAMENTOS\s*=', "Formas de pagamento e o desconto de cada uma"),
    (r'^\s*(const|let|var)\s+ENTREGAS\s*=', "Opcoes de entrega, prazo e preco"),
    (r'^\s*(const|let|var)\s+TAXAS\s*=', 'Taxas por plataforma (loja local, Shopee e Mercado Livre)'),
    (r'^\s*(const|let|var)\s+CUPONS\s*=', "Cupons de desconto validos"),
    (r'^\s*function\s+renderizarProdutos\s*\(', "Desenha os cards de produto na tela"),
    (r'^\s*function\s+filtrarProdutos\s*\(', "Aplica a busca e os filtros escolhidos pelo cliente"),
    (r'^\s*function\s+adicionar\s*\(', "Adiciona um produto ao carrinho"),
    (r'^\s*function\s+removerItem\s*\(', "Remove um item do carrinho"),
    (r'^\s*function\s+atualizarResumo\s*\(', "Recalcula subtotal, taxas, desconto e total"),
    (r'^\s*function\s+aplicarCupom\s*\(', "Valida e aplica o cupom digitado"),
    (r'^\s*function\s+finalizarCompra\s*\(', "Conclui o pedido, salva o historico e zera o carrinho"),
    (r'^\s*function\s+salvarPedido\s*\(', "Grava o pedido no navegador (localStorage)"),
    (r'^\s*function\s+abrirProduto\s*\(', "Abre a janela de detalhes do produto"),
    (r'^\s*function\s+fecharProduto\s*\(', "Fecha a janela de detalhes"),
    (r'^\s*function\s+renderizarAvaliacoes\s*\(', "Desenha a lista de avaliacoes do produto"),
    (r'^\s*function\s+gerarAvaliacoes\s*\(', "Cria as avaliacoes de exemplo do produto"),
    (r'^\s*function\s+enviarAvaliacao\s*\(', "Salva a avaliacao real enviada pelo cliente"),
    (r'^\s*function\s+carregarAvaliacoesReais\s*\(', "Le as avaliacoes reais guardadas no navegador"),
    (r'^\s*function\s+salvarAvaliacaoReal\s*\(', "Guarda a avaliacao real no navegador"),
    (r'^\s*function\s+selecionarEstrela\s*\(', "Marca a nota escolhida pelo cliente"),
    (r'^\s*function\s+salvarProduto\s*\(', "Cadastra ou atualiza um produto (com upload de foto)"),
    (r'^\s*function\s+toast\s*\(', "Mostra uma notificacao temporaria na tela"),
    (r'^\s*function\s+carregarFotoProduto\s*\(', "Converte a foto enviada em base64 para salvar"),
    (r'^\s*function\s+calcularTotais\s*\(', "Faz a conta dos valores do carrinho"),
    (r'^\s*function\s+mudarPlataforma\s*\(', 'Troca entre Loja Local, Shopee e Mercado Livre'),
    (r'^\s*function\s+formatarNumero\s*\(', "Formata numeros grandes (ex.: 1.2 mil)"),
    (r'^\s*window\.addEventListener\s*\(', "Evento global do navegador"),
    (r'^\s*document\.addEventListener\s*\(', "Evento global do documento"),
    (r'^\s*setInterval\s*\(', "Executa uma funcao de tempos em tempos"),
    (r'^\s*localStorage\.(get|set)Item\s*\(', "Le ou grava dados no navegador"),
    (r'^\s*if\s*\(', "Condicao: o bloco so roda se for verdadeiro"),
    (r'^\s*(try|catch)\s*[\{:]', "Tratamento de erro: evita que o site quebre"),
    (r'^\s*(for|while)\s*\(', "Laco de repeticao: repete o bloco enquanto a condicao valer"),
]


def mais_proximo(mapa, linha):
    """Devolve a explicacao se a linha casar com algum padrao."""
    for padrao, texto in mapa:
        if re.search(padrao, linha):
            return texto
    return None


def comentar_html(caminho):
    with open(caminho, encoding="utf-8", errors="ignore") as f:
        linhas = f.readlines()

    novas = []
    dentro_script = False
    dentro_style = False
    adicionados = 0

    for i, linha in enumerate(linhas):
        alvo = linha.strip()

        # nao mexer dentro de script/style
        if not dentro_script and not dentro_style:
            if re.search(r"<script", linha, re.I):
                dentro_script = True
            elif re.search(r"<style", linha, re.I):
                dentro_style = True
            elif "<" in alvo and not alvo.startswith("<!--"):
                explicacao = mais_proximo(HTML_MAP, linha)
                jaTem = (
                    i + 1 < len(linhas)
                    and linhas[i + 1].strip().startswith("<!--")
                )
                if explicacao and not jaTem:
                    recuo = linha[: len(linha) - len(linha.lstrip())]
                    novas.append(f"{recuo}<!-- {explicacao} -->\n")
                    adicionados += 1

        novas.append(linha)

        # fechar bloco
        if dentro_script and re.search(r"</script", linha, re.I):
            dentro_script = False
        elif dentro_style and re.search(r"</style", linha, re.I):
            dentro_style = False

    if adicionados:
        with open(caminho, "w", encoding="utf-8", newline="") as f:
            f.writelines(novas)
    return adicionados


def comentar_css(caminho):
    with open(caminho, encoding="utf-8", errors="ignore") as f:
        linhas = f.readlines()

    novas = []
    adicionados = 0
    dentro_texto = False

    for i, linha in enumerate(linhas):
        explicacao = None if dentro_texto else mais_proximo(CSS_MAP, linha)

        if "content:" in linha:
            dentro_texto = not linha.rstrip().endswith(";")
        elif dentro_texto and ";" in linha:
            dentro_texto = False

        if explicacao:
            recuo = linha[: len(linha) - len(linha.lstrip())]
            novas.append(f"{recuo}/* {explicacao} */\n")
            adicionados += 1

        novas.append(linha)

    if adicionados:
        with open(caminho, "w", encoding="utf-8", newline="") as f:
            f.writelines(novas)
    return adicionados


def comentar_js(caminho):
    with open(caminho, encoding="utf-8", errors="ignore") as f:
        linhas = f.readlines()

    novas = []
    adicionados = 0
    crases_abertos = 0
    dentro_bloco_comentario = False
    dentro_bloco_string = False

    for linha in linhas:
        t = linha.strip()

        # nao mexer dentro de comentarios ja existentes
        if dentro_bloco_comentario:
            novas.append(linha)
            if "*/" in t:
                dentro_bloco_comentario = False
            continue

        if dentro_bloco_string:
            novas.append(linha)
            crases_abertos += linha.count("`") - linha.count("\\`")
            if crases_abertos <= 0:
                dentro_bloco_string = False
                crases_abertos = 0
            continue

        # detecta abertura de comentario de bloco
        abre_comentario = t.startswith("/*") and t.count("*/") == 0
        if t.startswith("/*") and "*/" in t:
            novas.append(linha)
            continue

        explicacao = mais_proximo(JS_MAP, linha) if t and not t.startswith("//") else None

        # Crase aberta = template literal em andamento: nao comentar
        crases_na_linha = linha.count("`")
        abre_template = (crases_abertos == 0 and crases_na_linha % 2 == 1)

        if explicacao and not abre_template:
            recuo = linha[: len(linha) - len(linha.lstrip())]
            novas.append(f"{recuo}// {explicacao}\n")
            adicionados += 1

        novas.append(linha)

        if abre_comentario:
            dentro_bloco_comentario = True
        if abre_template:
            dentro_bloco_string = True

    if adicionados:
        with open(caminho, "w", encoding="utf-8", newline="") as f:
            f.writelines(novas)
    return adicionados


def processar(raiz):
    total = 0
    arquivos = 0
    erros = []

    for pasta, subpastas, nomes in os.walk(raiz):
        if "node_modules" in pasta or ".git" in pasta or "screenshots" in pasta:
            continue
        for nome in nomes:
            caminho = os.path.join(pasta, nome)
            try:
                if nome.endswith(".html"):
                    n = comentar_html(caminho)
                elif nome.endswith(".css"):
                    n = comentar_css(caminho)
                elif nome.endswith((".js", ".jsx")):
                    if nome in ("app.js", "comentar.py"):
                        continue
                    n = comentar_js(caminho)
                else:
                    continue
                if n:
                    arquivos += 1
                    total += n
                    print(f"  {n:3d} comentarios -> {os.path.relpath(caminho, raiz)}")
            except Exception as e:
                erros.append(f"{caminho}: {e}")

    return total, arquivos, erros


if __name__ == "__main__":
    raiz = sys.argv[1] if len(sys.argv) > 1 else "."
    print("Adicionando comentarios explicativos...\n")
    total, arquivos, erros = processar(raiz)
    print(f"\nConcluido: {total} comentarios em {arquivos} arquivos.")
    if erros:
        print(f"\nAvisos: {len(erros)} arquivo(s) com problema")
        for e in erros:
            print(f"  {e}")