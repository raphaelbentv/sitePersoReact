import React from 'react'
import './PoleCard.css'

const PoleCard = ({ name, description, link, external }) => {
  let domain = ''
  try {
    if (link) {
      domain = new URL(link).hostname
    }
  } catch (e) {
    domain = link || ''
  }
  
  return (
    <a 
      href={link} 
      className="pole-card"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <h3 className="pole-name">{name}</h3>
      <p className="pole-description">{description}</p>
      <span className="pole-link">→ {domain}</span>
    </a>
  )
}

export default PoleCard

