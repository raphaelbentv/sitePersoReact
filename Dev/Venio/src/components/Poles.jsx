import React from 'react'
import PoleCard from './PoleCard'
import './Poles.css'

const Poles = () => {
  const poles = [
    {
      name: 'CREATIO',
      description: 'Éducation premium',
      link: 'https://creatio.paris',
      external: true
    },
    {
      name: 'DECISIO',
      description: 'Communication juridique',
      link: 'https://decisio.paris',
      external: true
    },
    {
      name: 'FORMATIO',
      description: 'Formation Qualiopi',
      link: 'https://formatio.paris',
      external: true
    }
  ]

  return (
    <section className="poles" id="poles">
      <div className="section-header">
        <h2 className="section-title">Nos entités spécialisées</h2>
      </div>
      <div className="poles-grid">
        {poles.map((pole, index) => (
          <PoleCard key={index} {...pole} />
        ))}
      </div>
    </section>
  )
}

export default Poles

