import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')

  const handleButtonClick = (buttonValue) => {
    setValue((prevValue) => prevValue + buttonValue);
  };

  const handleACButtonClick =() =>{
    setValue('');
  };
  const handleDEButtonClick =() =>{
    setValue((prevValue) => prevValue.slice(0, -1));
  };
  const handleDotButtonClick = () => {
    setValue((prevValue) => prevValue + '.');
  };

  const handleOperationButtonClick = (operation) => {
    setValue((prevValue) => prevValue + operation);
  };

  const handleEqualButtonClick = () => {
    setValue(eval(value));
  };

  return (
    <div className='container'>
      <div className='calcultor'>
        <form action="">
          <div className='display'>
            <input type="text" value={value}/>
          </div>
          <div>
            <input type="button" value="AC" onClick={handleACButtonClick}/>
            <input type="button" value="DE" onClick={handleDEButtonClick} />
            <input type="button" value="." onClick={handleDotButtonClick} />
            <input type="button" value="/" onClick={() =>handleOperationButtonClick('/')} />
          </div>
          <div>
          <input type="button" value="7" onClick={() =>handleButtonClick('7')}  />
          <input type="button" value="8" onClick={() =>handleButtonClick('8')} />
          <input type="button" value="9"onClick={() =>handleButtonClick('9')}  />
          <input type="button" value="*" onClick={() =>handleOperationButtonClick('*')} />


          </div>
          <div>
          <input type="button" value="4" onClick={() =>handleButtonClick('4')} />
          <input type="button" value="5" onClick={() =>handleButtonClick('5')} />
          <input type="button" value="6" onClick={() =>handleButtonClick('6')} />
          <input type="button" value="+" onClick={() =>handleButtonClick('+')} />
          </div>
          <div>
          <input type="button" value="1" onClick={() =>handleButtonClick('1')} />
          <input type="button" value="2" onClick={() =>handleButtonClick('2')} />
          <input type="button" value="3" onClick={() =>handleButtonClick('3')} />
          <input type="button" value="-" onClick={() =>handleOperationButtonClick('-')} />
          </div>
          <div>
          <input type="button" value="00"onClick={() =>handleButtonClick('00')}  />
          <input type="button" value="0"onClick={() =>handleButtonClick('0')}  />
          <input type="button" value="="  className='equal' onClick={handleEqualButtonClick}/>
          </div>
        </form>

      </div>

    </div>
  )
}

export default App
