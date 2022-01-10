import './styles.css';

const Contato = () => {
  return(
    <main className="container-contato">
      <section className='texto'>
        <h1>EXCELÊNCIA EM DIREITO</h1>
        <p>Tenha nosso apaoio jurídico e esteja protegido. Seus direitos assegurados de forma estratégica, ágil e firme.</p>
      </section>
      <section className='cadastro'>
        <h2>Converse com um advogado</h2>
        <p>Preencha os campos abaixo com uma breve explicação do seu problema:</p>
        <form>
          <input placeholder="Nome Completo"/> 
          <br/>
          <input placeholder="E-mail"/>
          <br/>
          <input placeholder="Telefone"/>
          <br/>
          <input type="submit"/>
        </form>
      </section>
    </main>
  )
}

export default Contato;