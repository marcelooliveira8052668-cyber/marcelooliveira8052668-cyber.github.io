// Desenvolvido por Prof. Marcelo Oliveira
import React, { useState } from 'react';
import './App.css';
import { Vitrine } from './Vitrine.jsx';
import { Carrinho } from './Carrinho.jsx';
import { Pagamento } from './Pagamento.jsx';
import { Sucesso } from './Sucesso.jsx';
import { Falha } from './Falha.jsx';
import { useCarrinho } from './useCarrinho.js';

export function App() {
  const [telaAtual, setTelaAtual] = useState('vitrine'); // Começa na vitrine agora!
  const { carrinho, adicionarProduto, totalGeral } = useCarrinho();

  return (
    <div className="container">
      {telaAtual === 'vitrine' && (
        <Vitrine 
          aoAdicionarAoCarrinho={(produto) => adicionarProduto(produto)}
          irParaCarrinho={() => setTelaAtual('carrinho')} 
        />
      )}

      {telaAtual === 'carrinho' && (
        <Carrinho 
          carrinho={carrinho}
          totalGeral={totalGeral}
          voltarVitrine={() => setTelaAtual('vitrine')}
          irParaPagamento={() => setTelaAtual('pagamento')} 
        />
      )}

      {telaAtual === 'pagamento' && (
        <Pagamento 
          totalCompra={totalGeral} 
          aoFinalizar={(resultado) => setTelaAtual(resultado)} 
        />
      )}

      {telaAtual === 'sucesso' && (
        <Sucesso voltarAoCarrinho={() => setTelaAtual('vitrine')} />
      )}

      {telaAtual === 'falha' && (
        <Falha tentarNovamente={() => setTelaAtual('pagamento')} />
      )}
    </div>
  );
}

export default App;
