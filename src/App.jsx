import React from 'react';
import CartaoVisita from './CartaoVisita';

function App() {
  console.log('App renderizado'); 

  return (
    <div className="App">
      <h1>Minha Aplicação React</h1>
      <CartaoVisita
        nome="Rayanne Oliveira"
        cargo="Estagiária em Gestão de Dados"
        email="rayanne.oliveira.santos61@aluno.ifce.edu.br"
        telefone="(83)9.81868909"
      />
    </div>
  );
}

export default App;
