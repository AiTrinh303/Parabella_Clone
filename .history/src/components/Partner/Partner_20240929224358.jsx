import './Partner.scss'
import logo1 from '../../assets/logo1.png'

const partner = [
 logo1, logo2, logo3, logo4, logo5, logo6, logo7]

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
