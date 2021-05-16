import { KeyboardEvent, useState } from 'react';
import { ButtonKey } from './components/ButtonKey/ButtonKey';


const NUMERIC_PAD_NUMBERS_1_TO_3: Array<string> = ['1','2','3'];
const NUMERIC_PAD_NUMBERS_4_TO_6: Array<string> = ['4','5','6'];
const NUMERIC_PAD_NUMBERS_7_TO_9: Array<string> = ['7','8','9'];
const NUMERIC_PAD_NUMBER_0: string = '0';
const PASSWORD_LENGTH: number = 4;

function App() {

  const [password, setPassword] = useState('');

  const handleButtonClick = (value: string) => {
    setPassword(password + value);
  }

  const handleKeyPressed = (event: KeyboardEvent) => {
    if ([NUMERIC_PAD_NUMBER_0, ...NUMERIC_PAD_NUMBERS_1_TO_3, ...NUMERIC_PAD_NUMBERS_4_TO_6, ...NUMERIC_PAD_NUMBERS_7_TO_9].includes(event.key)){
      setPassword(password + event.key);
    }
  }

  return (
    <main onKeyPress={handleKeyPressed}>     
      <section className="row">
        {
          NUMERIC_PAD_NUMBERS_1_TO_3.map((element) => 
            <ButtonKey
              key={element}
              value={element}
              onButtonClick={handleButtonClick}
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
            />
          )
        }
      </section>
      <section className="row">     
            <ButtonKey
              key={NUMERIC_PAD_NUMBER_0}
              value={NUMERIC_PAD_NUMBER_0}
              onButtonClick={handleButtonClick}            
            />
      </section>
    </main>
  );
}

export default App;
