import { useState } from 'react';
import { Screen } from './components/Screen';
import { ClearButton } from './components/ClearButton';
import Button from './components/Button';
import espochLogo from './images/logoico.png';
import './styles/ClearButton.css'
import './styles/Button.css'
import './styles/Screen.css'

function App() {
  const [input, setInput] = useState('')

  const agregarInput = val =>{
    setInput(input + val)
  }

  return (
    <div className='App'>
      <div className='espoch-logo'>
        <img className='espochLogo' src={espochLogo} alt='Logo ESPOCH' />
      </div>
      <div className='cont-calculator'>
        <Screen input={input}/>
        <div className='fila'>
          <Button manageClick = {agregarInput}>1</Button>
          <Button manageClick = {agregarInput}>2</Button>
          <Button manageClick = {agregarInput}>3</Button>
          <Button manageClick = {agregarInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manageClick = {agregarInput}>4</Button>
          <Button manageClick = {agregarInput}>5</Button>
          <Button manageClick = {agregarInput}>6</Button>
          <Button manageClick = {agregarInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manageClick = {agregarInput}>7</Button>
          <Button manageClick = {agregarInput}>8</Button>
          <Button manageClick = {agregarInput}>9</Button>
          <Button manageClick = {agregarInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manageClick = {agregarInput}>=</Button>
          <Button manageClick = {agregarInput}>0</Button>
          <Button manageClick = {agregarInput}>.</Button>
          <Button manageClick = {agregarInput}>/</Button>
        </div>
        <div className='fila'>
          <ClearButton manageClick = {() => setInput('')}>CLEAR</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
