import { useEffect, useState } from 'react';
import { ButtonKey } from './components/ButtonKey/ButtonKey';
import { Screen } from './components/Screen/Screen';
import { 
  NUMERIC_PAD_NUMBERS_1_TO_3, 
  NUMERIC_PAD_NUMBERS_4_TO_6,
  NUMERIC_PAD_NUMBERS_7_TO_9,
  NUMERIC_PAD_NUMBER_0,
  PASSWORD_LENGTH,
  PASSCODE,
  MAX_FAILED_ATTEMPTS,
  SCREEN_MESSAGES
} from './constants';

function Pinpad() {
  const [password, setPassword] = useState<string>('');
  const [lockInterface, setLockInterface] = useState<boolean>(false);
  const [errorCounter, setErrorCounter] = useState<number>(0);

  const handleButtonClick = (value: string): void => {
    const newPassword = `${password}${value}`;
    updatePassword(newPassword);
  }
  
  const updatePassword = (newPassword: string) => {
    setPassword(newPassword);
    if(newPassword.length >= PASSWORD_LENGTH) {
      checkPassword(newPassword);
    }
  }
  
  const checkPassword = (newPassword: string): void => {
    setLockInterface(true);
    let newErrorCounter: number = 0;
    if (newPassword === PASSCODE) {
      setErrorCounter(0);
      setPassword(SCREEN_MESSAGES.ok);
    } else {
      newErrorCounter = errorCounter + 1
      newErrorCounter === MAX_FAILED_ATTEMPTS ? setPassword(SCREEN_MESSAGES.locked) : setPassword(SCREEN_MESSAGES.error);
      setErrorCounter(newErrorCounter);
    }
    lockKeyboard(newErrorCounter);
  }

  const lockKeyboard = (newErrorCounter: number) => {
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
    if(password.length <= PASSWORD_LENGTH){
      document.body.addEventListener('keypress', checkKeyPressed);
      return (): void => document.body.removeEventListener('keypress', checkKeyPressed );      
    }
    // eslint-disable-next-line
  },[password])

  const checkKeyPressed = (event: KeyboardEvent) => {
    if ([NUMERIC_PAD_NUMBER_0, ...NUMERIC_PAD_NUMBERS_1_TO_3, ...NUMERIC_PAD_NUMBERS_4_TO_6, ...NUMERIC_PAD_NUMBERS_7_TO_9].includes(event.key)){
      const newPassword = `${password}${event.key}`;
      updatePassword(newPassword);
    }
  }

  return (
    <main>
      <Screen 
        password={password}
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

export default Pinpad;
