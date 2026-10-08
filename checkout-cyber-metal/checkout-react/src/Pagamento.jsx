// Desenvolvido por Prof. Marcelo Oliveira
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Criando as regras de validação com o Zod (já blindadas)
const schemaPagamento = z.object({
  titular: z.string().min(3, "Digite o nome completo do titular."),
  cartao: z.string()
    .transform((val) => val.replace(/[\s-]/g, "")) // Tira espaços e hífens
    .pipe(z.string().length(16, "O cartão deve ter exatamente 16 dígitos.")),
  validade: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use o formato MM/AA com mês entre 01 e 12."),
  cvv: z.string().length(3, "O CVV deve ter exatamente 3 dígitos.")
});

export function Pagamento({ totalCompra, aoFinalizar }) {
  const [carregando, setCarregando] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schemaPagamento)
  });

  const onSubmit = (dados) => {
    setCarregando(true); // Desliga o botão e mostra "Processando compra..."

    // Simulando uma operação assíncrona (espera 2 segundos)
    setTimeout(() => {
      // Regra de fraude: verifica se todos os 16 dígitos do cartão são iguais (ex: 1111111111111111)
      const numeroCartao = dados.cartao;
      const todosIguais = numeroCartao.split('').every((digito) => digito === numeroCartao[0]);

      setCarregando(false);
      
      // Manda o resultado para o componente principal decidir para onde ir (sucesso ou falha)
      aoFinalizar(todosIguais ? 'falha' : 'sucesso');
    }, 2000);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Tela de Pagamento</h1>
      <h3>Total a pagar: R$ {totalCompra.toFixed(2)}</h3>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>Nome do Titular:</label><br />
          <input type="text" {...register("titular")} style={{ width: '100%', padding: '8px' }} />
          {errors.titular && <span style={{ color: 'red', fontSize: '12px' }}>{errors.titular.message}</span>}
        </div>

        <div>
          <label>Número do Cartão (16 dígitos):</label><br />
          <input 
            type="text" 
            placeholder="0000 0000 0000 0000" 
            maxLength="19" // 16 números + 3 espaços
            {...register("cartao")} 
            onInput={(e) => {
              let valor = e.target.value.replace(/\D/g, "").slice(0, 16);
              valor = valor.replace(/(\d{4})(?=\d)/g, "$1 ");
              e.target.value = valor;
            }}
            style={{ width: '100%', padding: '8px' }} 
          />
          {errors.cartao && <span style={{ color: 'red', fontSize: '12px' }}>{errors.cartao.message}</span>}
        </div>

        <div>
          <label>Validade (MM/AA):</label><br />
          <input 
            type="text" 
            placeholder="MM/AA" 
            maxLength="5" 
            {...register("validade")} 
            onInput={(e) => {
              let valor = e.target.value.replace(/\D/g, "").slice(0, 4);
              if (valor.length > 2) {
                valor = valor.substring(0, 2) + "/" + valor.substring(2, 4);
              }
              e.target.value = valor;
            }}
            style={{ width: '100%', padding: '8px' }} 
          />
          {errors.validade && <span style={{ color: 'red', fontSize: '12px' }}>{errors.validade.message}</span>}
        </div>

        <div>
          <label>CVV (3 dígitos):</label><br />
          <input 
            type="text" 
            placeholder="123"
            maxLength="3" 
            {...register("cvv")}
            style={{ width: '100%', padding: '8px' }} 
          />
          {errors.cvv && <span style={{ color: 'red', fontSize: '12px' }}>{errors.cvv.message}</span>}
        </div>

        <button 
          type="submit" 
          disabled={carregando}
          style={{ padding: '12px', backgroundColor: carregando ? '#ccc' : '#2196F3', color: 'white', border: 'none', cursor: carregando ? 'not-allowed' : 'pointer', fontSize: '16px', borderRadius: '5px' }}
        >
          {carregando ? "Processando compra..." : "Pagar Agora"}
        </button>
      </form>
    </div>
  );
}
