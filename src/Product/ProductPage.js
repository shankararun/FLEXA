import React from 'react';
import Navbar from "../Components/Navbar";
import Product from "./Product"
import Footer from "../Components/Footer";

//consists of header, Product.js and footer
//consists of route'/product'

const ProductPage = () => {
    return (
        <><div><Navbar /></div><div><Product /></div><br/><br/><div><Footer /></div></>
        
    )
}

export default ProductPage

