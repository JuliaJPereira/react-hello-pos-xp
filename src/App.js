import { Header } from './components/Header';
import { Main } from './components/Main';
// import { Test } from './components/Test';

export default function App() {
  console.log('Teste no console do navegador');

  return (
    // React só pode retornar um elemento, então usamos um fragmento para englobar os dois elementos que queremos retornar.
    <>
      <Header size="large">Componete Header - Projeto react-hello</Header>
      <Main>
        <input className="border" type="text" />
        <p>
          {/* usamos chaves para inserir variáveis no JSX */}
          Seu nome é Julia, seu nome possui 5 letras e sua idade é 26 anos.
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
