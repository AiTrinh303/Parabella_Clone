import './Kunden.scss'
import {kunden} from '../../data/kunden'
import backBtn from '../../assets/back-icon.png'


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
    <>
      <img src={backBtn} alt="back-icon" className='back-btn'/>
      <div className='kunden'>
        <h2>Was unsere Kunden sagen</h2>
        <div className="content">
          {kunden.map((kunde) => (
            <Card key={kunde.id} {...kunde} />
          ))}
        </div> 
      </div>
      <img src={nextBtn} alt="next-icon" className='back-btn'/>
    </>
  )
}

export default Kunden
