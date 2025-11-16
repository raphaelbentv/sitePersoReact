import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="gradient-orb"></div>
      <div className="hero-content">
        <h1 className="hero-title">VENIO</h1>
        <p className="hero-tagline">
          Stratégie. Développement. Communication.
        </p>
        <p className="hero-description">
          Nous construisons des solutions qui marchent, vraiment.
        </p>
        <Link to="/services" className="hero-cta">Découvrir nos services</Link>
      </div>
    </section>
  )
}

export default Hero

