import React from 'react'
import MiniNavbar from '../component/CategoryBar/MiniNavbar'
import Navbar from '../component/NavBar/Navbar'
import Cards from '../component/Recommend/Cards'
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Phones = () => {
  return (
    <div>
      <Navbar />
      <MiniNavbar />
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
              name="iphone6"
              desc="Impressive iphone6 on hot sale"
              imagesrc={"https://images.pexels.com/photos/7616999/pexels-photo-7616999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          </Col>
          <Col >
            <Cards 
              name="iphone6"
              desc="Impressive iphone6 on hot sale"
              imagesrc={"https://images.pexels.com/photos/7616999/pexels-photo-7616999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          </Col>
          <Col >
            <Cards 
              name="iphone6"
              desc="Impressive iphone6 on hot sale"
              imagesrc={"https://images.pexels.com/photos/7616999/pexels-photo-7616999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          </Col>
        </Row>
      </container>
    </div>
  )
}

export default Phones
