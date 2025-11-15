import React from 'react'
import './ExpertiseCard.css'

const ExpertiseCard = ({ title, description, items }) => {
  return (
    <div className="expertise-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="expertise-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExpertiseCard

