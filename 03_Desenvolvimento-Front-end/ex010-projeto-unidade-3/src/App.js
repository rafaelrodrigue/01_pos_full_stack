import { useState } from 'react';
import './styles.css'

function App(){

  const [conta, setConta] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcular = () =>{
    let calculo = Number(conta) * Number(porcentagem) /100;
    setResultado(calculo);
  }

  return(
    <div className='container'>

      <img src="https://cdn.pixabay.com/photo/2020/01/10/17/36/waiter-4755817_1280.png"/>
      
      <div>
        <h1>Calculadora de Gorjeta</h1>

        <h2>Digite o valor da conta</h2>
        <input placeholder='Ex: 50.00' onChange={(txt) => setConta(txt.target.value)}/>

        <h2>Selecione a porcentagem da gorjeta</h2>
        <select onChange={(txt) => setPorcentagem(txt.target.value)}>
          <option>Selecione</option>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
        </select>

        <button onClick={calcular}>Calcular</button>

        {resultado === 0 ? null : <h2>Resultado: {resultado}</h2>}

      </div>
    </div>
  );
}

export default App;