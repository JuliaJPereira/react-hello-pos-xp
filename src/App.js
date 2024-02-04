import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { TextInput } from './components/TextInput';
import { DateInput } from './components/DateInput';
import { getAgeFrom } from './helpers/dateHelpers';
import { Timer } from './components/Timer';
import { CheckboxInput } from './components/CheckboxInput';
import { OnlineOffline } from './components/OnlineOffline';
// import { Test } from './components/Test';

export default function App() {
  const [name, setName] = useState('Julia');
  const [birthDate, setBirthDate] = useState('1997-04-08');
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toogleOnline() {
      setIsOnline(true);
    }

    function toogleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', toogleOnline);
    window.addEventListener('offline', toogleOffline);
    return () => {
      window.removeEventListener('online', toogleOnline);
      window.removeEventListener('offline', toogleOffline);
    };
  }, []);

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
    <>
      <Header size="large">Componete Header - Projeto react-hello</Header>
      <Main>
        <OnlineOffline isOnline={isOnline} />
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
