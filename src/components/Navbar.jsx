import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [polesOpen, setPolesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobilePolesOpen, setMobilePolesOpen] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobilePolesOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>VENIO</Link>
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
        
        <button 
          className={`burger-menu ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/services/communication" className="mobile-nav-link" onClick={closeMobileMenu}>
            Services
          </Link>
          
          <div className="mobile-nav-item">
            <button 
              className="mobile-nav-link mobile-nav-link-button"
              onClick={() => setMobilePolesOpen(!mobilePolesOpen)}
            >
              Pôles
              <span className={`mobile-dropdown-arrow ${mobilePolesOpen ? 'open' : ''}`}>▼</span>
            </button>
            {mobilePolesOpen && (
              <div className="mobile-dropdown-menu">
                <a href="https://creatio.paris" target="_blank" rel="noopener noreferrer" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  <span className="pole-name">CREATIO</span>
                  <span className="pole-description">Supports de cours</span>
                </a>
                <a href="https://decisio.paris" target="_blank" rel="noopener noreferrer" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  <span className="pole-name">DECISIO</span>
                  <span className="pole-description">Communication juridique</span>
                </a>
                <a href="https://formatio.paris" target="_blank" rel="noopener noreferrer" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  <span className="pole-name">FORMATIO</span>
                  <span className="pole-description">Formations professionnelles</span>
                </a>
              </div>
            )}
          </div>
          
          <Link to="/realisations" className="mobile-nav-link" onClick={closeMobileMenu}>
            Réalisations
          </Link>
          <Link to="/a-propos" className="mobile-nav-link" onClick={closeMobileMenu}>
            À propos
          </Link>
          <Link to="/contact" className="mobile-nav-link mobile-nav-cta" onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
