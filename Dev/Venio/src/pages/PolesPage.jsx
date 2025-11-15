import React from 'react'
import VantaBackground from '../components/VantaBackground'
import DotsOverlay from '../components/DotsOverlay'
import PoleCard from '../components/PoleCard'
import './PolesPage.css'

const PolesPage = () => {
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
    <>
      <VantaBackground />
      <DotsOverlay />
      <div className="poles-page">
        <section className="poles-hero">
          <h1>NOS PÔLES</h1>
          <p className="poles-subtitle">Trois entités spécialisées, une vision cohérente</p>
        </section>

        <section className="poles-content">
          <div className="poles-intro">
            <p>
              Venio opère à travers trois entités spécialisées, chacune dédiée à un domaine d'excellence. 
              Ces pôles permettent une expertise approfondie tout en maintenant une cohérence stratégique globale.
            </p>
          </div>

          <div className="poles-grid">
            {poles.map((pole, index) => (
              <PoleCard key={index} {...pole} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default PolesPage

