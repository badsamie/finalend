import React from 'react'
import gif from './images/gif-of-planet.gif'

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-transparent">
        <p className="ml-4 text-5xl font-bold text-violet-500 uppercase tracking-widest">Poly</p>
        <img src={gif} alt="planet-gif" />
      <p className="ml-4 text-5xl font-bold text-violet-500 uppercase tracking-widest">glot</p>
    </div>
    
  )
}

export default LoadingPage