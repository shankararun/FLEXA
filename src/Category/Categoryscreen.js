import React from "react";
import Navbar from "../Components/Navbar";
import Category from "./category";
import Footer from "../component/Footer/Footer";
// This page consist of header , Category.js and footer
// consists of the route '/category'

const Categoryscreen = () => {
    return (
        <><div><Navbar /></div>
        <div><Category /></div>
        {/* Footer component is imported from the Footer.js present in "src/Component/Footer/Footer.js" */}
        <div><Footer /></div></>
    )
}

export default Categoryscreen;
