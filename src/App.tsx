import { ButtonKey } from './components/ButtonKey/ButtonKey';

const NUMERIC_PAD_NUMBERS_1_TO_3: Array<number> = [1,2,3];
const NUMERIC_PAD_NUMBERS_4_TO_6: Array<number> = [4,5,6];
const NUMERIC_PAD_NUMBERS_7_TO_9: Array<number> = [7,8,9];
const NUMERIC_PAD_NUMBERS_0: number = 0;

function App() {

  const handleButtonClick = (value: number) => {

  }

  return (
    <main>     
      <section className="row">
        {
          NUMERIC_PAD_NUMBERS_1_TO_3.map((element) => 
            <ButtonKey
              key={element}
              number={element}
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
              number={element}
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
              number={element}
              onButtonClick={handleButtonClick}
            />
          )
        }
      </section>
      <section className="row">     
            <ButtonKey
              key={NUMERIC_PAD_NUMBERS_0}
              number={NUMERIC_PAD_NUMBERS_0}
              onButtonClick={handleButtonClick}            
            />
      </section>
    </main>
  );
}

export default App;
