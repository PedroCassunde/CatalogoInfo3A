// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.
import { useState } from "react";

// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`
export default function Home() {
    const [listaProdutos, setProdutos] = useState([
        { id: 1, nome: "Queen Of The Clouds", imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FQueen_of_the_Clouds&psig=AOvVaw0pqAcGKcUQ2JZy_b_TrLVw&ust=1723732782836000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMij3ZPb9IcDFQAAAAAdAAAAABAD", preco: 'R$ 357,90' },
        { id: 2, nome: 'Produto B', preco: 'R$ 20,00' },
        { id: 3, nome: 'Produto C', preco: 'R$ 30,00' }
      ]);

      
const [listaPedidos, setListaPedidos] = useState([]);

const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos,objeto])
}

return (
    <div>
        <h1>Álbuns Musicais</h1>

        {
            listaProdutos.map((produto)=>
            <div key={produto.id}>
                <p>{produto.nome}</p>
                <p>{produto.preco}</p>
                <button onClick={()=> adicionarItemPedidos(produto)}>Selecionar</button>
            </div>
                )
        }
        {
            listaPedidos.map((produto)=>
            <div key={produto.id}>
                <p>{produto.nome}</p>
                <p>{produto.preco}</p>
                </div> )
        }
    </div>
);}