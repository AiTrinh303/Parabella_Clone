import './Team.scss'
import Marcus from '../../assets/PA-Marcus-Ohnemus.png'
import Alexander from '../../assets/PA-Sascha-.png'

const Team = () => {
  return (
    <div className='team'>
      <span>Unser Team</span>
      <h2>Über uns</h2>
      <p>Wir sind ein AI-Startup aus München, das sich darauf spezialisiert hat, mittelständische Unternehmen bei der Umsetzung der CSRD-Berichterstattung zu unterstützen.</p>

        <div className='team__members'>
            <div className='team__member'>
                <img src={Marcus} alt='Marcus Ohnemus' />
                <h3>Marcus Ohnemus</h3>
                <p>CEO & Founder</p>
            </div>
            <div className='team__member'>
                <img src={Alexander} alt='Alexander Pavlovski' />
                <h3>Alexander Pavlovski</h3>
                <p>CTO & Co-Founder</p>
            </div>
            <div className='team__member'>
                <img src='https://via.placeholder.com/150' alt='Team member' />
                <h3>Dominik Erb</h3>
                <p>CPO & Co-Founder</p>
            </div>
        </div>    
    </div>
  )
}

export default Team
