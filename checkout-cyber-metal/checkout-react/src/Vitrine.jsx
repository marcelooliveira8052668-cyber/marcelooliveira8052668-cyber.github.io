// Desenvolvido por Prof. Marcelo Oliveira
import React from 'react';
import { produtos } from './produtos.js';

export function Vitrine({ aoAdicionarAoCarrinho, irParaCarrinho }) {
  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1>Cyber Shop - Vitrine</h1>
      <h3>Escolha seus produtos e adicione ao carrinho</h3>

      {/* Grid de produtos estilo Shopee/Mercado Livre */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {produtos.map((produto) => (
          <div key={produto.id} style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-metal)', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <img 
                src={produto.imagem} 
                alt={produto.nome} 
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px', marginBottom: '10px' }} 
              />
              <h4 style={{ color: 'var(--text-main)', fontSize: '16px', marginBottom: '8px' }}>{produto.nome}</h4>
              <p style={{ color: 'var(--accent-steel)', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>
                R$ {produto.precoUnitario.toFixed(2)}
              </p>
            </div>
            
            <button 
              onClick={() => aoAdicionarAoCarrinho(produto)}
              className="btn-primary"
              style={{ fontSize: '14px', padding: '10px' }}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>

      <button 
        onClick={irParaCarrinho}
        className="btn-secondary"
      >
        Ver Meu Carrinho / Finalizar Compra 🛒
      </button>
    </div>
  );
}
