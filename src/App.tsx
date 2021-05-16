import { useEffect, useState } from 'react';
import { ButtonKey } from './components/ButtonKey/ButtonKey';
import { Screen } from './components/Screen/Screen';

const NUMERIC_PAD_NUMBERS_1_TO_3: Array<string> = ['1','2','3'];
const NUMERIC_PAD_NUMBERS_4_TO_6: Array<string> = ['4','5','6'];
const NUMERIC_PAD_NUMBERS_7_TO_9: Array<string> = ['7','8','9'];
const NUMERIC_PAD_NUMBER_0: string = '0';
const PASSWORD_LENGTH: number = 4;
const PASSCODE: string = "1978";
const MAX_FAILED_ATTEMPTS: number = 3;

function App() {
  const [password, setPassword] = useState('');
  const [lockInterface, setLockInterface] = useState(false);
  const [errorCounter, setErrorCounter] = useState(0);

  const updatePassword = (newPassword: string) => {
    setPassword(newPassword);
    if(newPassword.length >= PASSWORD_LENGTH) {
      checkPassword(newPassword);
    }
  }
  
  const handleButtonClick = (value: string): void => {
    const newPassword = `${password}${value}`;
    updatePassword(newPassword);
  }

  const checkPassword = (newPassword: string): void => {
    setLockInterface(true);
    let newErrorCounter: number = 0;
    if (newPassword === PASSCODE) {
      setErrorCounter(0);
      setPassword('OK');
      lockKeyboard(newErrorCounter);
    } else {
      newErrorCounter = errorCounter + 1
      setPassword('ERROR');
      setErrorCounter(newErrorCounter);
      lockKeyboard(newErrorCounter);
    }
  }

  const lockKeyboard = (newErrorCounter: number) => {
    console.log(newErrorCounter);
    if (newErrorCounter >= MAX_FAILED_ATTEMPTS ) {
      setTimeout(() => {
        setPassword('');
        setLockInterface(false);
        setErrorCounter(0);
      },30000)
    } else {
      setTimeout(() => {
        setPassword('');
        setLockInterface(false);
      },3000)
    }
  }

  useEffect(() => {
    document.body.addEventListener('keypress', checkKeyPressed);
    return (): void => document.body.removeEventListener('keypress', checkKeyPressed );
    // eslint-disable-next-line
  },[password])

  const checkKeyPressed = (event: any) => {
    if ([NUMERIC_PAD_NUMBER_0, ...NUMERIC_PAD_NUMBERS_1_TO_3, ...NUMERIC_PAD_NUMBERS_4_TO_6, ...NUMERIC_PAD_NUMBERS_7_TO_9].includes(event.key)){
      const newPassword = `${password}${event.key}`;
      updatePassword(newPassword);
    }
  }

  return (
    <main>
      <Screen 
        password={password}
        lockScreen={lockInterface}
      />
      <section className="row">
        {
          NUMERIC_PAD_NUMBERS_1_TO_3.map((element) => 
            <ButtonKey
              key={element}
              value={element}
              onButtonClick={handleButtonClick}
              disabled={lockInterface}
            />
          )
        }
      </section>
      <section className="row">
        {
          NUMERIC_PAD_NUMBERS_4_TO_6.map((element) => 
            <ButtonKey
              key={element}
              value={element}
              onButtonClick={handleButtonClick}
              disabled={lockInterface}
            />
          )
        }
      </section>
      <section className="row">
        {
          NUMERIC_PAD_NUMBERS_7_TO_9.map((element) => 
            <ButtonKey
              key={element}
              value={element}
              onButtonClick={handleButtonClick}
              disabled={lockInterface}
            />
          )
        }
      </section>
      <section className="row">     
            <ButtonKey
              key={NUMERIC_PAD_NUMBER_0}
              value={NUMERIC_PAD_NUMBER_0}
              onButtonClick={handleButtonClick}  
              disabled={lockInterface}          
            />
      </section>
    </main>
  );
}

export default App;
