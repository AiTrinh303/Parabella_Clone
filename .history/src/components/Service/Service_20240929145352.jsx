import './Service.scss'
import {service} from '../../data/service' 

const Block = ({ title, desc, features, btn }) => {
    return (
        <div className="block">
        <h3>{title}</h3>
        <p>{desc}</p>
        <ul>
            {features.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
        <button>{btn}</button>
        </div>
    )
    }


const Service = () => {
  return (
    <div className="service">
      <span>Service</span>
      <h2>Unsere Software-Landschaft</h2>
      <p>Je nach Unternehmensgröße und Situation empfiehlt es sich das passende Paket zu wählen.</p>
      <div className="blocks">
        {service.map((item) => (
          <Block 
            key={item.id} 
            title={item.title} desc={item.desc} features={item.features} btn={item.btn} />
        ))}
      </div>
    </div>
  )
}

export default Service
