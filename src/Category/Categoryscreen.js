import React from "react";
import Navbar from "../Components/Navbar";
import Category from "./category";
import Footer from "../component/Footer/Footer";
// This page consist of header , Category.js and footer
// consists of the route '/category'

const Categoryscreen = () => {
    return (
        <><div><Navbar /></div><div><Category /></div><div><Footer /></div></>
    )
}

export default Categoryscreen;
