import {Link} from 'react-router-dom';
import React from 'react'
import '../components/MainPagesStyles/ProductDetails.css'
import Navbar from '../components/NavBar/Navbar'
import Footer from '../components/Footer/Footer'

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <div className='detail'>

      <img src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1" alt="Product" />
        <div className="box-detail">
          <div className='row'>
            <h2>Product 1</h2>
            <h5>Product Id: 19292</h5>
          </div>
          <div>
            <span>₹ 1500</span>
            <p><b>Owner:</b> Tony Stark
            </p>
            <p>This phone has the latest features and updates.A15 Bionic chip. iPhone 13 Pro.
              6.1-inch Super Retina XDR display with ProMotion for a faster, more responsive feel. 
              Pro camera system (12MP Telephoto, Ultra Wide, Wide) A15 Bionic chip. iPhone 13 Pro Max.
                6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel.</p>
            <p><b>Contact Number:</b> 484848494 </p>
            <Link to="/cart" className="cart">Rent now</Link>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetails