import Logo from '../../img/img-home.svg';

import './styles.css'

const Home = () => {
  return(
    <main className='container-home'>
      <img src={Logo} alt='img-home'/>
      
      <section className='principal'>
        <h1>ORIENTANDO RESOLUÇÕES BEM-SUCEDIDAS DE FORMA RÁPIDA E INTELIGENTE</h1>
        <p>Comprometidos com o serviço inigualável e a satisfação do cliente</p>
        <button>Acessar Serviços</button>
      </section>
      {/*<section className='secundaria'>
        <div>
          <h2>Legislação Civil</h2><br/>
          <p> Lorem ipsum is simply dummy text of the printing and typesetting industry.</p><br/>
          <a>Leia mais</a>
        </div>
        <div>
        <h2>Defesa criminal</h2><br/>
          <p> Lorem ipsum is simply dummy text of the printing and typesetting industry.</p><br/>
          <a>Leia mais</a>
        </div>
        <div>
        <h2>Legislação trabalhista</h2><br/>
          <p> Lorem ipsum is simply dummy text of the printing and typesetting industry</p><br/>
          <a>Leia mais</a>
        </div>
  </section>*/}
    </main>
  )
}

export default Home;