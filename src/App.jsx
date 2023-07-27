// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from './components/card.jsx'
import './App.css'
import image1 from '../images/icon-luxury.svg'
import image2 from '../images/icon-suvs.svg'
import image3 from '../images/icon-sedans.svg'


const App = () => {
  return (
    <div className="card-container">
      <Card
        title="SEDANS"
        content="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
              or on your next road trip"
        image={image1}
      />
      <Card
        title="SUVS"
        content="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
              and off-road adventures."
        image={image2}
      />
      <Card
        title="LUXURY"
        content="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
                rental and arrive in style."
        image={image3}
      />

    </div>
  )
}

export default App
