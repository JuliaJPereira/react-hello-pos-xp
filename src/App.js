import { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { TextInput } from './components/TextInput';
import { DateInput } from './components/DateInput';
import { getAgeFrom } from './helpers/dateHelpers';
// import { Test } from './components/Test';

export default function App() {
  const [name, setName] = useState('Julia');
  const [birthDate, setBirthDate] = useState('1997-04-08');

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  return (
    // React só pode retornar um elemento, então usamos um fragmento para englobar os dois elementos que queremos retornar.
    <>
      <Header size="large">Componete Header - Projeto react-hello</Header>
      <Main>
        <TextInput
          labelDescription="Digite seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
        />
        <DateInput
          labelDescription="Digite sua data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        <p>
          {/* usamos chaves para inserir variáveis no JSX */}
          Seu nome é {name}, seu nome possui {name.length} letras e sua idade é{' '}
          {getAgeFrom(birthDate)} anos.
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
