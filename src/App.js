import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { TextInput } from './components/TextInput';
import { DateInput } from './components/DateInput';
import { getAgeFrom } from './helpers/dateHelpers';
import { Timer } from './components/Timer';
import { CheckboxInput } from './components/CheckboxInput';
// import { Test } from './components/Test';

export default function App() {
  const [name, setName] = useState('Julia');
  const [birthDate, setBirthDate] = useState('1997-04-08');
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    document.title = name;
  }, [name]);

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer);
  }

  return (
    // React só pode retornar um elemento, então usamos um fragmento para englobar os dois elementos que queremos retornar.
    <>
      <Header size="large">Componete Header - Projeto react-hello</Header>
      <Main>
        {showTimer && (
          <div className="text-right mt-1">
            <Timer />
          </div>
        )}

        <CheckboxInput
          labelDescription="Mostrar cronômetro"
          onCheckboxChange={toggleShowTimer}
        />

        <TextInput
          id="textInput"
          labelDescription="Digite seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />
        <DateInput
          id="dateInput"
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
