import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/Navbar'

import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Cards from '../Recommend/Cards';

const Myads = () => {
    return (
        <>
            <Navbar />
        
            <div><br/>
      <div><h1><pre>My Ads</pre></h1></div><br/>
      <container>
        <Row>
          <Col >
            <Cards
              name="iphone6"
              desc="Impressive iphone6 on hot sale"
              imagesrc={"https://images.pexels.com/photos/7616999/pexels-photo-7616999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          </Col>
          <Col >
            <Cards 
              name="Bicycle"
              desc="Impressive cycle on hot sale"
              imagesrc={"https://images.unsplash.com/photo-1623216216626-f8bfd191552d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGN5Y2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}/>
          </Col>
          <Col >
            <Cards 
              name="Laptop"
              desc="Impressive Laptop on hot sale"
              imagesrc={"https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}/>
          </Col>
          <Col >
            <Cards 
              name="Romet Bicycle"
              desc="Impressive Bicycle on hot sale"
              imagesrc={"https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}/>
          </Col><br/><br/>

        </Row>
      </container>
   
    </div> 




            <Footer />
        </>
    )
}

export default Myads;
