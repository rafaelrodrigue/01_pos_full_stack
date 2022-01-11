import Service from '../../components/Service';

import './styles.css';

const Services = () => {
  return(
    <div className='container-services'>
      <Service name="Legislação Civil"/>
      <Service name="Defesa Criminal"/>
      <Service name="Legislação Trabalhista"/>
    </div>
  )
}

export default Services;