import React from 'react'
import Navbar from '../component/NavBar/Navbar'
import MiniNavbar from '../component/CategoryBar/MiniNavbar'
import Recommend from '../component/Recommend/Recommend'
import Footer from '../component/Footer/Footer'

//Homepage contains the navbar, mininavbar, recommend and footer components
//It has the default route of './homepage'


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

export default Homepage
