import React from 'react'
import client_databiz from '../images/client_databiz.svg';
import client_audiophile from '../images/client_audiophile.svg';
import client_meet from '../images/client_meet.svg';
import client_maker from '../images/client_maker.svg';
import image_hero_desktop from '../images/image_hero_desktop.png'

const Hero = () => {
  return (
  <main className='hero'>
    <div className="hero-text">
        <h1>Make remote work</h1>
        <p> Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.</p>
          <button className='learn-more'>Learn more</button>

          <div className="clients">
                <img src={client_databiz}  />
                <img src={client_audiophile}  />
                <img src={client_meet}  />
                <img src={client_maker}  />
          </div>
    </div>

    <div className="hero-image">
    <img src={image_hero_desktop}  />
    </div>
  </main>
  )
}

export default Hero
