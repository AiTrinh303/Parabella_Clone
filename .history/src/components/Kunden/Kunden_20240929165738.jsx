import './Kunden.scss'


const Card = ({ img, name, text }) => {
    return (
        <div className='card'>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
        )
}

const Kunden = () => {
  return (
    <div className='kunden'>
      <h2>Was unsere Kunden sagen</h2>
      div.kunden  
    </div>
  )
}

export default Kunden
