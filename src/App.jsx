import { useState } from 'react';
import image from './images/logoico.png'

function App() {
  return (
    <div className='App'>
      <div className='espoch-logo'>
        <img className='espochLogo' src={image} alt='Logo ESPOCH'/>
      </div>
      <h1>HOLA MUNDO</h1>
    </div>
  );
}

export default App;
