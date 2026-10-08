BRASA BURGER — MODELO COMERCIAL COM PEDIDOS

Este modelo inclui:
- Cardápio com produtos e bebidas.
- Carrinho com quantidade, exclusão e total.
- Checkout com nome, WhatsApp, entrega/retirada, endereço e forma de pagamento.
- Geração de número de pedido.
- Painel de cozinha para mudar o pedido: recebido > preparando > pronto > saiu > entregue.
- Tela de acompanhamento pelo número do pedido.
- Ao marcar como "Saiu", o sistema prepara uma mensagem de WhatsApp para o cliente.
- Os dados desta demonstração ficam no localStorage do navegador.

IMPORTANTE PARA VENDA REAL
Esta versão é um protótipo funcional no navegador. Para caixa, cozinha e cliente usarem aparelhos diferentes e receberem atualizações em tempo real, conecte o projeto a um backend/banco (por exemplo Firebase/Firestore ou uma API própria). Para receber pagamentos online de verdade, integre um provedor de pagamento com checkout seguro; não coloque dados de cartão no código.

PERSONALIZAÇÃO
Edite config.js para nome, WhatsApp, endereço, links, produtos, bebidas e imagens.

FLUXO
1. Cliente adiciona produtos ao carrinho.
2. Cliente abre o carrinho e vai para pagamento.
3. Cliente confirma o pedido.
4. Pedido aparece na Área Interna (⚙ no canto inferior esquerdo).
5. Cozinha avança o status.
6. Quando chegar em "Saiu", o sistema prepara a mensagem de WhatsApp do cliente.
7. Cliente pode acompanhar pelo número do pedido.
