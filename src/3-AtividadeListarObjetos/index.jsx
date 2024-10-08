// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.
import { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Produto A', preco: 'R$ 10,00' },
    { id: 2, nome: 'Produto B', preco: 'R$ 20,00' },
    { id: 3, nome: 'Produto C', preco: 'R$ 30,00' }
  ]);

  return (
    <div>
         <h1>Livros de Programação</h1>

         {
          listaProdutos.map((produto)=>
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
          </div>
          )
         }
    </div>
   
  );
}