
import './styles.css';

const Service = ({name = "Serviço sem nome"}) =>{
  return(
    <div className='container-service'>
      <h2>{name}</h2>
      <p> Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p><br/>
      <a>Leia mais</a>
    </div>
  )
}

export default Service;