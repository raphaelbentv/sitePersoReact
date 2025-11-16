import { readdirSync, statSync, existsSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const distPath = join(__dirname, '..', 'dist')

console.log('🔍 Vérification du build pour déploiement Ionos...\n')

// Vérifier que le dossier dist existe
if (!existsSync(distPath)) {
  console.error('❌ Le dossier dist/ n\'existe pas !')
  console.log('💡 Exécutez d\'abord : npm run build:ionos\n')
  process.exit(1)
}

// Vérifier les fichiers essentiels
const essentialFiles = [
  'index.html',
  '.htaccess'
]

const essentialDirs = [
  'assets',
  'fonts',
  'realisations'
]

let allGood = true

console.log('📋 Vérification des fichiers essentiels...\n')

// Vérifier les fichiers
essentialFiles.forEach(file => {
  const filePath = join(distPath, file)
  if (existsSync(filePath)) {
    const stats = statSync(filePath)
    console.log(`✅ ${file} (${(stats.size / 1024).toFixed(2)} KB)`)
  } else {
    console.error(`❌ ${file} manquant !`)
    allGood = false
  }
})

console.log('\n📁 Vérification des dossiers essentiels...\n')

// Vérifier les dossiers
essentialDirs.forEach(dir => {
  const dirPath = join(distPath, dir)
  if (existsSync(dirPath)) {
    try {
      const files = readdirSync(dirPath)
      console.log(`✅ ${dir}/ (${files.length} fichier${files.length > 1 ? 's' : ''})`)
    } catch (error) {
      console.error(`❌ ${dir}/ (erreur de lecture)`)
      allGood = false
    }
  } else {
    console.error(`❌ ${dir}/ manquant !`)
    allGood = false
  }
})

// Lister le contenu de assets
console.log('\n📦 Contenu du dossier assets/ :\n')
const assetsPath = join(distPath, 'assets')
if (existsSync(assetsPath)) {
  try {
    const assetsFiles = readdirSync(assetsPath)
    assetsFiles.forEach(file => {
      const filePath = join(assetsPath, file)
      const stats = statSync(filePath)
      const sizeKB = (stats.size / 1024).toFixed(2)
      console.log(`   - ${file} (${sizeKB} KB)`)
    })
  } catch (error) {
    console.error('   ❌ Erreur lors de la lecture')
  }
}

if (allGood) {
  console.log('\n✅ Tout est prêt pour le déploiement !\n')
  console.log('📤 Prochaines étapes :')
  console.log('   1. Ouvrez FileZilla (ou votre client FTP)')
  console.log('   2. Connectez-vous à votre serveur Ionos')
  console.log('   3. Naviguez vers /httpdocs/ (ou /www/)')
  console.log('   4. Activez l\'affichage des fichiers cachés (Affichage → Afficher les fichiers cachés)')
  console.log('   5. Uploader TOUT le contenu du dossier dist/')
  console.log('   6. Vérifiez que le fichier .htaccess est bien uploadé\n')
  console.log('💡 Voir DEPLOY_IONOS.md pour les instructions détaillées\n')
} else {
  console.log('\n❌ Des fichiers essentiels manquent !')
  console.log('💡 Exécutez : npm run build:ionos\n')
  process.exit(1)
}

