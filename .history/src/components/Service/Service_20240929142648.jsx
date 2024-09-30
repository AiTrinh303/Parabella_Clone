import './Service.scss'


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
      <div className="block">
        <Block
          title="Starter"
          desc="Für kleine Unternehmen und Startups"
          features={["Feature 1", "Feature 2", "Feature 3"]}
          btn="Mehr erfahren"
        />
        <Block
          title="Professional"
          desc="Für mittelständische Unternehmen"
          features={["Feature 1", "Feature 2", "Feature 3"]}
          btn="Mehr erfahren"
        />
        <Block
          title="Enterprise"
          desc="Für große Unternehmen und Konzerne"
          features={["Feature 1", "Feature 2", "Feature 3"]}
          btn="Mehr erfahren"
      </div>
    </div>
  )
}

export default Service
