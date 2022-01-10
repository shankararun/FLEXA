import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import MiniNavbar from '../components/CategoryBar/MiniNavbar'
import Recommend from '../components/Recommend/Recommend'
import Footer from '../components/Footer/Footer'

//This is the homepage and it consists of the navbar, mininavbar and footer components. 
//It has the route of '/homepage'

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
