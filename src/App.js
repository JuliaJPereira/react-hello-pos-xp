import { Header } from './components/Header';
import { Main } from './components/Main';

export default function App() {
  console.log('Teste no console do navegador');

  return (
    <div>
      <Header size="large">Componete Header - Projeto react-hello</Header>
      <Main>
        <p>
          {/* usamos chaves para inserir variáveis no JSX */}
          Seu nome é Julia, seu nome possui 5 letras e sua idade é 26 anos.
        </p>
      </Main>
    </div>
  );
}
