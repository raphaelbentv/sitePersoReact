import React, { useState } from 'react'
import VantaBackground from '../components/VantaBackground'
import DotsOverlay from '../components/DotsOverlay'
import MathCaptcha from '../components/MathCaptcha'
import './Contact.css'

const Contact = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captchaVerified) {
      alert('Veuillez compléter la vérification mathématique')
      return
    }
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    alert('Formulaire envoyé avec succès !')
  }

  return (
    <>
      <VantaBackground />
      <DotsOverlay />
      <div className="contact-page">
        <section className="contact-hero">
          <h1>CONTACT</h1>
          <p className="contact-subtitle">Parlons de votre projet</p>
        </section>

        <section className="contact-content">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Informations</h2>
              <div className="info-item">
                <h3>Email</h3>
                <a href="mailto:contact@venio.fr">contact@venio.fr</a>
              </div>
              <div className="info-item">
                <h3>Prendre rendez-vous</h3>
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="calendly-link"
                >
                  Réserver un créneau →
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Formulaire de contact</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input type="text" placeholder="Prénom" required />
                  <input type="text" placeholder="Nom" required />
                </div>
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Entreprise" />
                <select className="form-select" required>
                  <option value="">Sujet</option>
                  <option value="communication">Communication & Branding</option>
                  <option value="developpement">Développement</option>
                  <option value="conseil">Conseil Stratégique</option>
                  <option value="autre">Autre</option>
                </select>
                <textarea placeholder="Message" rows="6" required></textarea>
                <MathCaptcha onVerify={setCaptchaVerified} />
                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={!captchaVerified}
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact

