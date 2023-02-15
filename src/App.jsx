import { useState } from 'react';
import Button from './components/Button';
import espochLogo from './images/logoico.png';
import './styles/Button.css'

function App() {
  return (
    <div className='App'>
      <div className='espoch-logo'>
        <img className='espochLogo' src={espochLogo} alt='Logo ESPOCH' />
      </div>
      <div className='cont-calculator'>
        <div className='fila'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='fila'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='fila'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='fila'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='fila'>
          <Button>CLEAR</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
