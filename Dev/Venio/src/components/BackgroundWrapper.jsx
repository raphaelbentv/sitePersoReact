import React from 'react'
import VantaBackground from './VantaBackground'
import GridOverlay from './GridOverlay'
import './BackgroundWrapper.css'

const BackgroundWrapper = () => {
  return (
    <div className="background-wrapper">
      <VantaBackground />
      <GridOverlay />
    </div>
  )
}

export default BackgroundWrapper

