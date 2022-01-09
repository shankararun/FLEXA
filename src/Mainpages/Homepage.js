import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import MiniNavbar from '../components/CategoryBar/MiniNavbar'
import Recommend from '../components/Recommend/Recommend'
import Footer from '../components/Footer/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <MiniNavbar />
      <Recommend />
      <Footer />
    </div>
  )
}

export default Homepage;