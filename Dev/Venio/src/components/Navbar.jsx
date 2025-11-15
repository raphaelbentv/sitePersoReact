import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [polesOpen, setPolesOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">VENIO</Link>
        <div className="nav-links">
          <Link to="/services/communication" className="nav-link">Services</Link>
          
          <div 
            className="nav-item dropdown"
            onMouseEnter={() => setPolesOpen(true)}
            onMouseLeave={() => setPolesOpen(false)}
          >
            <span className="nav-link">Pôles</span>
            {polesOpen && (
              <div className="dropdown-menu">
                <a href="https://creatio.paris" target="_blank" rel="noopener noreferrer" className="dropdown-item dropdown-item-pole">
                  <span className="pole-name">CREATIO</span>
                  <span className="pole-description">Supports de cours</span>
                </a>
                <a href="https://decisio.paris" target="_blank" rel="noopener noreferrer" className="dropdown-item dropdown-item-pole">
                  <span className="pole-name">DECISIO</span>
                  <span className="pole-description">Communication juridique</span>
                </a>
                <a href="https://formatio.paris" target="_blank" rel="noopener noreferrer" className="dropdown-item dropdown-item-pole">
                  <span className="pole-name">FORMATIO</span>
                  <span className="pole-description">Formations professionnelles</span>
                </a>
              </div>
            )}
          </div>
          
          <Link to="/realisations" className="nav-link">Réalisations</Link>
          <Link to="/a-propos" className="nav-link">À propos</Link>
          <Link to="/contact" className="nav-link nav-cta">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
