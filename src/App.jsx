import { useState } from 'react';
import { evaluate } from 'mathjs';
import { Screen } from './components/Screen';
import { ClearButton } from './components/ClearButton';
import Button from './components/Button';
import espochLogo from './images/logoico.png';
import './styles/ClearButton.css';
import './styles/Button.css';
import './styles/Screen.css';

let a = [],
  cont = 0,
  b = [];

function App() {
  const [input, setInput] = useState('');

  const isOperator = (valor) => {
    return isNaN(valor) && valor !== '=';
  };

  const agregarInput = (val) => {
    if (cont > 0) {
      if (isOperator(val)) {
        a.pop() === val
          ? alert('Símbolos iguales seguidos')
          : isOperator(b.pop())
          ? alert('Símbolos distintos seguidos')
          : setInput(input + val);
        a.push(val);
      } else {
        setInput(input + val);
        a.push(val);
        cont++;
      }
    } else {
      if (val !== '*' && val !== '/') {
        a.push(val);
        setInput(input + val);
        cont++;
      } else {
        alert('No iniciar con * o /');
      }
    }
    b = [...a];
  };

  const calcular = () => {
    if (input) {
      //null: true
      setInput(evaluate(input));
    } else {
      alert('Ingrese valores');
    }
  };

  return (
    <div className='App'>
      <div className='espoch-logo'>
        <img className='espochLogo' src={espochLogo} alt='Logo ESPOCH' />
      </div>
      <div className='cont-calculator'>
        <Screen input={input} />
        <div className='fila'>
          <Button manageClick={agregarInput}>1</Button>
          <Button manageClick={agregarInput}>2</Button>
          <Button manageClick={agregarInput}>3</Button>
          <Button manageClick={agregarInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manageClick={agregarInput}>4</Button>
          <Button manageClick={agregarInput}>5</Button>
          <Button manageClick={agregarInput}>6</Button>
          <Button manageClick={agregarInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manageClick={agregarInput}>7</Button>
          <Button manageClick={agregarInput}>8</Button>
          <Button manageClick={agregarInput}>9</Button>
          <Button manageClick={agregarInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manageClick={calcular}>=</Button>
          <Button manageClick={agregarInput}>0</Button>
          <Button manageClick={agregarInput}>.</Button>
          <Button manageClick={agregarInput}>/</Button>
        </div>
        <div className='fila'>
          <ClearButton
            manageClick={() => {
              setInput('');
              a = [];
              cont = 0;
            }}
          >
            CLEAR
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
