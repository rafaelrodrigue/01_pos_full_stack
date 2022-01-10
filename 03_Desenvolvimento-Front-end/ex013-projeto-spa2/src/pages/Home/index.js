import Logo from '../../img/logo.svg';

import './styles.css'

const Home = () => {
  return(
    <main className='container-home'>
      <img src={Logo} alt='Logo'/>

      <div>
        <h1>Meu Título</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat quibusdam minus explicabo, sed ipsum corrupti, id illum laudantium placeat quasi accusamus incidunt excepturi enim suscipit! Ad, minima. Explicabo, nostrum tempore!</p>
        <button>Acessar Serviços</button>
      </div>
    </main>
  )
}

export default Home;