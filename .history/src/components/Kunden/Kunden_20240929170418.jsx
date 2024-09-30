import './Kunden.scss'
import {kunden} from '../../data/kunden'


const Card = ({ img, name, address, text }) => {
    return (
        <div className='card'>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{address}</p>
            <p>{text}</p>
        </div>
        )
}

const Kunden = () => {
  return (
    <div className='kunden'>
      <h2>Was unsere Kunden sagen</h2>
      <div className="content">
        {kunden.map((kunde) => (
          <Card key={kunde.id} {...kunde} />
        ))}
      </div> 
    </div>
  )
}

export default Kunden
