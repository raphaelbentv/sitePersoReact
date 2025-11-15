# Venio - Site Web

Site web de Venio développé avec React, Vite et React Router.

## 🚀 Installation

```bash
# Installer les dépendances
npm install
```

## 💻 Développement

```bash
# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5501`

Le serveur est configuré pour être accessible depuis d'autres appareils sur le réseau local (`host: '0.0.0.0'`).

## 🏗️ Build

```bash
# Créer une version de production
npm run build

# Prévisualiser la version de production
npm run preview
```

## 📁 Structure du projet

```
venio/
├── src/
│   ├── components/              # Composants React réutilisables
│   │   ├── Navbar.jsx          # Navigation principale
│   │   ├── Footer.jsx          # Pied de page
│   │   ├── Hero.jsx            # Section hero
│   │   ├── Poles.jsx           # Section des pôles
│   │   ├── PoleCard.jsx        # Carte de pôle
│   │   ├── Expertises.jsx      # Section expertises
│   │   ├── ExpertiseCard.jsx   # Carte d'expertise
│   │   ├── CTA.jsx             # Section call-to-action
│   │   ├── CTAFinal.jsx        # Section call-to-action finale
│   │   ├── Citation.jsx        # Composant de citation
│   │   ├── Manifeste.jsx      # Section manifeste
│   │   ├── ServicesCore.jsx   # Services principaux
│   │   ├── AnimatedBackground.jsx    # Arrière-plan animé
│   │   ├── BackgroundWrapper.jsx     # Wrapper pour arrière-plan
│   │   ├── VantaBackground.jsx       # Arrière-plan Vanta.js
│   │   ├── DotsOverlay.jsx           # Overlay de points
│   │   ├── GridOverlay.jsx           # Overlay de grille
│   │   ├── GrainMicrodots.jsx        # Effet grain/micro-points
│   │   └── MathCaptcha.jsx           # Captcha mathématique
│   ├── pages/                  # Pages de l'application
│   │   ├── Home.jsx            # Page d'accueil
│   │   ├── ServicesCommunication.jsx    # Page services communication
│   │   ├── ServicesDeveloppement.jsx    # Page services développement
│   │   ├── ServicesConseil.jsx         # Page services conseil
│   │   ├── PolesPage.jsx       # Page des pôles
│   │   ├── Realisations.jsx    # Page réalisations
│   │   ├── APropos.jsx         # Page à propos
│   │   ├── Contact.jsx         # Page contact
│   │   └── Legal.jsx           # Page mentions légales
│   ├── App.jsx                 # Composant principal avec routing
│   ├── main.jsx                # Point d'entrée de l'application
│   ├── index.css               # Variables CSS globales
│   ├── App.css                 # Styles de l'application
│   └── fonts.css               # Définitions des polices
├── public/
│   └── fonts/                  # Polices Cabinet Grotesk (woff/woff2)
├── index.html                  # Template HTML
├── package.json                # Dépendances
├── vite.config.js              # Configuration Vite
└── README.md                   # Documentation
```

## 🛣️ Routes

Le site utilise React Router pour la navigation :

- `/` - Page d'accueil
- `/services/communication` - Services communication
- `/services/developpement` - Services développement
- `/services/conseil` - Services conseil
- `/poles` - Page des pôles
- `/realisations` - Réalisations
- `/a-propos` - À propos
- `/contact` - Contact
- `/legal` - Mentions légales

## 🎨 Design

Le design utilise :
- Palette sombre avec accents violets/purple
- Style neumorphism soft
- Cartes arrondies avec effets hover
- Typographie **Cabinet Grotesk** (polices personnalisées)
- Glassmorphism sur la navigation
- Animations subtiles
- Arrière-plans animés (Vanta.js, animations CSS)
- Overlays décoratifs (points, grille, grain)

## 📝 Notes

- Les variables CSS sont définies dans `src/index.css`
- Chaque composant a son propre fichier CSS
- Le design est responsive (mobile-first)
- Les polices Cabinet Grotesk sont chargées depuis `/public/fonts/`
- Le serveur de développement est configuré sur le port **5501**

