import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import MiniNavbar from '../components/CategoryBar/MiniNavbar'
import Recommend from '../components/Recommend/Recommend'


const Homepage = () => {
  return (
    <div>
      <Navbar />
      <MiniNavbar />
      <Recommend />
    </div>
  )
}

export default Homepage
