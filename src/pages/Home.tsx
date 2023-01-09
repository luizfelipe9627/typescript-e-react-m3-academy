// Além de importar o react para trabalhar com estados precisaremos chamar o useState.
import React, { useState } from "react";

function Home() {
  // Criado uma variável com array contendo a lista, e em seguida a função para alterar a lista.
  // Dentro do parâmetro da função useState estamos setando os valores inicial.
  const [list, setList] = useState(["Lucas", "Gabriel", "Laura", "Larissa"]);

  // Executa a função quando clicado no button de adicionar item.
  const handleAddItem = () => {
    const newItem = "Novo nome";
    // Os "..." estão sendo usados para puxar os valores anteriores da array também. E o newItem vai acrescentar o item na array.
    setList([...list, newItem]);
  }

  // Pega cada propriedade do objeto lista, renderiza e coloca no parâmetro name e transforma cada um em um elemento HTML LI através do map.
  const listToRender = list.map((name) => <li>{name}</li>);

  return <div>
    <ul>{listToRender}</ul>
    <button onClick={handleAddItem}>Adicionar mais um item</button>
  </div>
}

export { Home };
