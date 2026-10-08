// Desenvolvido por Prof. Marcelo Oliveira
import React from 'react';

export function Sucesso({ voltarAoCarrinho }) {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#4CAF50' }}>Compra Aprovada com Sucesso! 🎉</h1>
      <p>Parabéns! O seu pagamento foi processado e aprovado com segurança.</p>
      
      <button 
        onClick={voltarAoCarrinho}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#2196F3', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}
      >
        Voltar ao Carrinho
      </button>
    </div>
  );
}
