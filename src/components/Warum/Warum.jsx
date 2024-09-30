import './Warum.scss'
import {warum} from '../../data/warum'


const Card = ({img, title, desc}) => {
  return (
    <div className='card'>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

const Warum = () => {
  return (
    <div className='warum'>
      <p>Warum Parabella Analytics?</p>
      <h2>Was Sie erwartet, wenn Sie keinen Nachhaltigkeitsbericht abgeben:</h2>
      <div className="block">
        {warum.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Warum
