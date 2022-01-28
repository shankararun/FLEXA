import React from "react";
import Navbar from "../component/NavBar/Navbar";
import MiniNavbar from "../component/CategoryBar/MiniNavbar";
import Products from "../component/Recommend/Products";
import Footer from "../component/Footer/Footer";

//Homepage contains the navbar, mininavbar, recommend and footer components
//It has the default route of './homepage'

const Homepage = () => {
  return (
    <div>
          {/* Navbar component is imported from the navbar.js present in "src/component/Navbar/Navbar.js" */}
      <Navbar />
          {/* Navbar component is imported from the MiniNavbar.js present in "src/component/CategoryBar/MiniNavbar.js" */}
      <MiniNavbar />
          {/* Navbar component is imported from the Products.js present in "src/component/Recommend/Products.js" */}
      <Products />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
              {/* Footer component is imported from the Footer.js present in "src/component/Footer/Footer.js" */}
      <Footer />
    </div>
  );
};

export default Homepage;
