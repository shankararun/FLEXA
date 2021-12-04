import React from 'react'
import MiniNavbar from '../components/CategoryBar/MiniNavbar'
import Navbar from '../components/NavBar/Navbar'
import Cards from '../components/Recommend/Cards'
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Cycles = () => {
  return (
    <div>
      <Navbar />
      <MiniNavbar />
      <container>
        <Row>
        <Col >
            <Cards 
              name="Bicycle"
              desc="Impressive cycle on hot sale"
              imagesrc={"https://images.unsplash.com/photo-1623216216626-f8bfd191552d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGN5Y2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}/>
          </Col>
          <Col >
            <Cards 
              name="Bicycle"
              desc="Impressive cycle on hot sale"
              imagesrc={"https://images.unsplash.com/photo-1623216216626-f8bfd191552d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGN5Y2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}/>
          </Col>
          <Col >
            <Cards 
              name="Bicycle"
              desc="Impressive cycle on hot sale"
              imagesrc={"https://images.unsplash.com/photo-1623216216626-f8bfd191552d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGN5Y2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}/>
          </Col>
          <Col >
            <Cards 
              name="Bicycle"
              desc="Impressive cycle on hot sale"
              imagesrc={"https://images.unsplash.com/photo-1623216216626-f8bfd191552d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGN5Y2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}/>
          </Col>
          </Row>
        </container>
    </div>
  )
}

export default Cycles
