// Desenvolvido por Prof. Marcelo Oliveira
import React from 'react';

export function Falha({ tentarNovamente }) {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#f44336' }}>Ops! Algo deu errado. ❌</h1>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>tentativa de golpe</p>
      <p>O número do cartão informado foi recusado por segurança.</p>
      
      <button 
        onClick={tentarNovamente}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#FF9800', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}
      >
        Tentar Novamente
      </button>
    </div>
  );
}
