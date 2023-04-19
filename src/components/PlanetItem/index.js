// Write your code here

import './index.css'

const PlanetItem = props => {
  const {details} = props

  const {description, imageUrl, name} = details
  return (
    <div className="planet-item-container">
      <img src={imageUrl} alt={name} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
