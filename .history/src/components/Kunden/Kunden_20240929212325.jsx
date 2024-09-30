import './Kunden.scss'
import {kunden} from '../../data/kunden'
import backBtn from '../../assets/back-icon.png'
import nextBtn from '../../assets/next-icon.png'


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
      <img src={backBtn} alt="back-icon" className='back-btn'/>

      <div className='kunden-content'>
        <h2>Was unsere Kunden sagen</h2>
        <div className="content">
          {kunden.map((kunde) => (
            <Card key={kunde.id} {...kunde} />
          ))}
        </div> 
      </div>
      
      <img src={nextBtn} alt="next-icon" className='next-btn'/>
    </div>
  )
}

export default Kunden
