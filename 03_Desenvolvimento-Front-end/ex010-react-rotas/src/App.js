import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Home';
import Details from './Details';


function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" component={() => <h1>RAIZ DO PROJETO</h1>}/> 
        <Route path="/home" component={Home}/>
        <Route path="/details" component={Details}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;