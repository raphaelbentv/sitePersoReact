import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Manifeste from '../components/Manifeste'
import ServicesCore from '../components/ServicesCore'
import Poles from '../components/Poles'
import Citation from '../components/Citation'
import CTAFinal from '../components/CTAFinal'
import VantaBackground from '../components/VantaBackground'
import DotsOverlay from '../components/DotsOverlay'
import './Home.css'

const Home = () => {
  return (
    <>
      <VantaBackground />
      <DotsOverlay />
      <Hero />
      <Manifeste />
      <ServicesCore />
      <Poles />
      <Citation />
      <CTAFinal />
    </>
  )
}

export default Home

