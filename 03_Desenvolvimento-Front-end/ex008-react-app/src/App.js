import {useState, useEffect} from 'react';

const App = () => {
  
  const [valor, setValor] = useState(0);
  
  useEffect(() =>{
    alert('ok');
  }, [valor])

  const alteraValor = () =>{
    setValor(valor + 1)
  }

  return(
    <div>
      <p style={{color: 'red'}}>{valor}</p>
      <button onClick={alteraValor}>Pressione</button>
    </div>
  )
}

export default App;