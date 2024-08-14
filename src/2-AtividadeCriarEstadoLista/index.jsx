// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";

export default function Home() {

    const [listaProdutos, setProdutos] = useState([
        { id: 1, nome: 'Produto A', preco: 'R$ 10,00'},
        { id: 2, nome: 'Produto B', preco: 'R$ 20,00'},
        { id: 3, nome: 'Produto C', preco: 'R$ 30,00'},
    ]);

    return (
        <div>
            <h1>Álbuns Musicais</h1>
        </div>
    );
}