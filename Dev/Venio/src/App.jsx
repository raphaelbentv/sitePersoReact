import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesCommunication from './pages/ServicesCommunication'
import ServicesDeveloppement from './pages/ServicesDeveloppement'
import ServicesConseil from './pages/ServicesConseil'
import PolesPage from './pages/PolesPage'
import Realisations from './pages/Realisations'
import APropos from './pages/APropos'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/communication" element={<ServicesCommunication />} />
        <Route path="/services/developpement" element={<ServicesDeveloppement />} />
        <Route path="/services/conseil" element={<ServicesConseil />} />
        <Route path="/poles" element={<PolesPage />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
