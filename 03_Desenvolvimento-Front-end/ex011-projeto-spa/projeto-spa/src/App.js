import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Service from './pages/Services';
import Contato from './pages/Contato';

const Routes = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Home}/>
        <Route path="/Service" component={Service}/>
        <Route path="/contato" component={Contato}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routes