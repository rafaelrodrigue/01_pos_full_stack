import { useState } from 'react';
import './styles.css'

function App(){

  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcular = () =>{
    let calculo = Number(peso) / Number(altura)**2;
    setResultado(calculo.toFixed(2));
  }

  return(
    <div className='container'>

      <div>
        
        <h1>Calculadora de IMC</h1>
        <h2>Digite sua altura</h2>
        <input className='box' placeholder='Ex.: 1.70' onChange={(txt) => setAltura(txt.target.value)}/>
        
        <h2>Digite seu peso</h2>
        <input className='box' placeholder='Ex.: 69.5' onChange={(txt) => setPeso(txt.target.value)}/>
        <br/>
        <button className='button' onClick={calcular}>Calcular</button>

        {resultado === 0 ? null : <h2>Resultado: {resultado}</h2>}

      </div>
      <div>
        <h1>Seu indicador corpóreo é:</h1>
        {resultado <= 18.5 ? <h2>magreza</h2> : resultado <= 24.9 ? <h2>Normal</h2> : <h2>Sobrepeso</h2>}
      </div>
    </div>
  );
}

export default App;