import './Partner.scss'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import logo6 from '../../assets/logo6.png'
import logo7 from '../../assets/logo7.png'

const partner = [logo1, logo2, logo3, logo4, logo5, logo6, logo7]

const Partner = () => {
  return (
    <div className='partner'>
      <h2>Partner</h2>
      <div  data-aos="zoom-in" className="partner_imgs">
        {partner.map((item, index) => (
            <img key={index} src={item} alt="partner" />
        ))}
      </div>
    </div>
  )
}

export default Partner
