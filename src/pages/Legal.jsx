import React from 'react'
import VantaBackground from '../components/VantaBackground'
import DotsOverlay from '../components/DotsOverlay'
import './Legal.css'

const Legal = () => {
  return (
    <>
      <VantaBackground />
      <DotsOverlay />
      <div className="legal-page">
        <section className="legal-hero">
          <h1>MENTIONS LÉGALES</h1>
        </section>

        <section className="legal-content">
          <div className="legal-section">
            <h2>Informations légales</h2>
            <p>
              <strong>Raison sociale :</strong> Venio<br />
              <strong>Forme juridique :</strong> [À compléter]<br />
              <strong>Siège social :</strong> [À compléter]<br />
              <strong>SIRET :</strong> [À compléter]<br />
              <strong>Email :</strong> contact@venio.fr
            </p>
          </div>

          <div className="legal-section">
            <h2>Conditions générales de vente</h2>
            <p>
              Les présentes conditions générales de vente régissent les relations entre Venio et ses clients. 
              Toute commande implique l'acceptation sans réserve de ces conditions.
            </p>
            <h3>Prestations</h3>
            <p>
              Venio propose des services de communication, développement et conseil stratégique. 
              Chaque prestation fait l'objet d'un devis détaillé et d'un contrat spécifique.
            </p>
            <h3>Tarifs</h3>
            <p>
              Les tarifs sont indiqués en euros TTC. Ils sont valables pour la durée indiquée sur le devis.
            </p>
            <h3>Paiement</h3>
            <p>
              Les modalités de paiement sont définies dans chaque contrat. Un acompte peut être demandé 
              avant le début des prestations.
            </p>
          </div>

          <div className="legal-section">
            <h2>Confidentialité</h2>
            <p>
              Venio s'engage à respecter la confidentialité des informations communiquées par ses clients. 
              Toutes les données sont traitées conformément au RGPD.
            </p>
            <h3>Données personnelles</h3>
            <p>
              Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre 
              à vos demandes. Elles ne sont pas transmises à des tiers.
            </p>
            <h3>Cookies</h3>
            <p>
              Ce site utilise des cookies techniques nécessaires au fonctionnement du site. 
              Aucun cookie de tracking n'est utilisé.
            </p>
          </div>

          <div className="legal-section">
            <h2>Propriété intellectuelle</h2>
            <p>
              Tous les éléments du site (textes, images, logos) sont la propriété de Venio ou de ses partenaires. 
              Toute reproduction est interdite sans autorisation préalable.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Legal

