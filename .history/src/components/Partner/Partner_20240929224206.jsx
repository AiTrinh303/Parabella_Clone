import './Partner.scss'

const partner = [
    {
        
    }
]

const Partner = () => {
  return (
    <div className='partner'>
      <h2>Partner</h2>
      <div className="partner_imgs">
        {partner.map((item, index) => (
            <img key={index} src={item} alt="partner" />
        ))}

      </div>
    </div>
  )
}

export default Partner
