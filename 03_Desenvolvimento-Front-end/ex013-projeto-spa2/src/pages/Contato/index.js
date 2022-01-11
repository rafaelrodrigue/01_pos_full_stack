import Logo1 from '../../img/img-contato.svg';

import './styles.css';

const Contato = () => {
  return(
    <main className="container-contato">
      <img src={Logo1} alt='logo-contato' />
      <section className='cadastro'>
        <h2>Converse com um advogado</h2>
        <p>Preencha os campos abaixo com uma breve explicação do seu problema:</p>
        <form>
          <input placeholder="Nome Completo"/> 
        
          <input placeholder="E-mail"/>
          
          <input placeholder="Telefone"/>
          
        </form>
        <button>Acessar</button>
      </section>
    </main>
  )
}

export default Contato;