// Desenvolvido por Prof. Marcelo Oliveira
import { useState } from 'react';

export function useCarrinho() {
  // 1. O carrinho começa VAZIO de verdade ([])
  const [carrinho, setCarrinho] = useState([]);

  // 2. Função para adicionar um produto escolhido pelo usuário
  const adicionarProduto = (produtoParaAdicionar) => {
    setCarrinho((carrinhoAtual) => {
      // Verifica se o produto já está no carrinho
      const itemExistente = carrinhoAtual.find(item => item.id === produtoParaAdicionar.id);

      if (itemExistente) {
        // Se já existe, apenas aumenta a quantidade em +1
        return carrinhoAtual.map(item =>
          item.id === produtoParaAdicionar.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        // Se não existe, adiciona ele com quantidade 1
        return [...carrinhoAtual, { ...produtoParaAdicionar, quantidade: 1 }];
      }
    });
  };

  // 3. Cálculo dinâmico do valor total da compra
  const totalGeral = carrinho.reduce((total, item) => {
    return total + (item.precoUnitario * item.quantidade);
  }, 0);

  return {
    carrinho,
    adicionarProduto,
    totalGeral
  };
}
