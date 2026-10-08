# Gran Forno — Site

## Arquivos
- index.html → textos, produtos, links e estrutura.
- style.css → aparência e responsividade.
- script.js → menu mobile, ano automático e botões de pedido.
- images/logo.png → logo enviada pelo cliente.

## Onde editar rapidamente
- Produtos: procure `PRODUTO:` no index.html.
- Preços: procure `PREÇO:`.
- Fotos: procure `ÁREA DE FOTO` e `FOTO 01`, `FOTO 02` etc.
- Endereço: procure `ENDEREÇO:`.
- Horário: procure `HORÁRIO:`.
- iFood: procure `IFOOD:` e substitua o link pelo link real do Gran Forno.
- WhatsApp: o número 11 92067-6006 já está configurado.

## Como colocar uma foto de produto
Você pode substituir, por exemplo:

<div class="photo-placeholder">
  <span>COLOQUE A FOTO AQUI</span>
</div>

por:

<img class="product-photo" src="images/pizza.jpg" alt="Pizza da Casa">

Depois, coloque `pizza.jpg` dentro da pasta `images`.

## Como testar
Abra o arquivo `index.html` no navegador.
Para publicar, envie a pasta inteira para a hospedagem do domínio do restaurante.
