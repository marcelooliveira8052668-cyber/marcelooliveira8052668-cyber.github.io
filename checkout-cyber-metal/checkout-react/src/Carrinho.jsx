// Desenvolvido por Prof. Marcelo Oliveira
import React from 'react';

export function Carrinho({ carrinho, totalGeral, voltarVitrine, irParaPagamento }) {
  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <h1>Meu Carrinho de Compras</h1>
      
      {carrinho.length === 0 ? (
        <p style={{ textAlign: 'center', margin: '30px 0', color: 'var(--text-dim)' }}>
          Seu carrinho está vazio. Volte à vitrine para escolher produtos!
        </p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço Unitário</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {carrinho.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>R$ {produto.precoUnitario.toFixed(2)}</td>
                <td>{produto.quantidade}</td>
                <td>R$ {(produto.precoUnitario * produto.quantidade).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>Total Geral: R$ {totalGeral.toFixed(2)}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <button 
          onClick={voltarVitrine}
          className="btn-secondary"
        >
          ← Continuar Comprando (Vitrine)
        </button>

        {carrinho.length > 0 && (
          <button 
            onClick={irParaPagamento}
            className="btn-primary"
          >
            Finalizar Compra 💳
          </button>
        )}
      </div>
    </div>
  );
}
