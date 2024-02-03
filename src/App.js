import { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
// import { Test } from './components/Test';

export default function App() {
  const [name, setName] = useState('Julia');

  // uma função dentro de outra é chamada de closure no React
  function handleNameChange(event) {
    const newName = event.target.value;
    setName(newName);
  }

  return (
    // React só pode retornar um elemento, então usamos um fragmento para englobar os dois elementos que queremos retornar.
    <>
      <Header size="large">Componete Header - Projeto react-hello</Header>
      <Main>
        <div className="flex flex-col my-4">
          <label className="text-sm mb-1" htmlFor="inputName">
            Digite seu nome:
          </label>
          <input
            autoFocus
            id="inputName"
            className="border p-1"
            type="text"
            onChange={handleNameChange}
          />
        </div>
        <p>
          {/* usamos chaves para inserir variáveis no JSX */}
          Seu nome é {name}, seu nome possui {name.length} letras e sua idade é
          26 anos.
        </p>
      </Main>
    </>
  );
}

// Exemplo de utilização de props

/* 
  <Test
    number={10}
    string="Teste"
    visible
    data={{ a: 1, b: 2 }}
    onClick={() => console.log('click')}
  /> 
*/
