# Venio - Site Web

Site web de Venio développé avec React et Vite.

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

Le site sera accessible sur `http://localhost:5173`

## 🏗️ Build

```bash
# Créer une version de production
npm run build
```

## 📁 Structure du projet

```
venio/
├── src/
│   ├── components/          # Composants React
│   │   ├── Navbar.jsx       # Navigation
│   │   ├── Hero.jsx         # Section hero
│   │   ├── Poles.jsx        # Section des pôles
│   │   ├── PoleCard.jsx     # Carte de pôle
│   │   ├── Expertises.jsx   # Section expertises
│   │   ├── ExpertiseCard.jsx # Carte d'expertise
│   │   ├── CTA.jsx          # Section call-to-action
│   │   └── Footer.jsx       # Pied de page
│   ├── App.jsx              # Composant principal
│   ├── main.jsx             # Point d'entrée
│   ├── index.css            # Variables CSS globales
│   └── App.css              # Styles de l'application
├── index.html               # Template HTML
├── package.json             # Dépendances
├── vite.config.js           # Configuration Vite
└── README.md                # Documentation
```

## 🎨 Design

Le design utilise :
- Palette sombre avec accents violets/purple
- Style neumorphism soft
- Cartes arrondies avec effets hover
- Typographie Inter
- Glassmorphism sur la navigation
- Animations subtiles

## 📝 Notes

- Les variables CSS sont définies dans `src/index.css`
- Chaque composant a son propre fichier CSS
- Le design est responsive (mobile-first)

