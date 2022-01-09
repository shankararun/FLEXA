import React from 'react'
import { Col, Row , Button , Form } from 'react-bootstrap';
import MainScreen from './MainScreen'
import "./ProfileScreen.css";
import Photo from '../addimage/Photo';
// import { Redirect } from "react-router-dom"


const ProfileScreen = () => {
    // const [isAuth, setIsAuth]= useState(true);
    // if (!isAuth){
    //     return <Redirect to="/Photo"/>
    // }
    return (
        <MainScreen title="EDIT PROFILE">
            <div>
                <Row className='profilecontainer'>
                    <Col md={6} 
                    style = {{
                        
                        
                    }}>
                        <Form className='label'>
                            <Form.Group controlId="Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="Enter Name"
                                   ></Form.Control>
                            </Form.Group><br/>
                            <Form.Group controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                     ></Form.Control>
                             </Form.Group><br/>
                             <Form.Group controlId="password">
                                 <Form.Label>Password</Form.Label>
                                     <Form.Control
                                         type="password"
                                        placeholder="Enter Password"
                                        
                                        ></Form.Control>
                                </Form.Group><br/>
                                <Form.Group controlId="confirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        
                                        ></Form.Control>
                                </Form.Group><br/>
                                <Form.Group controlId="Phone">
                                    <Form.Label style={{justifyContent:'left'}}>Phone</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter Phone Number"
                                        ></Form.Control>
                                </Form.Group><br/>
                                <Form.Group controlId="Address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Address"
                                        ></Form.Control>
                                </Form.Group> <br/>
                                   
                                <Button type="submit" varient="primary" className='btn3'>Update</Button>   
                        </Form>
                    </Col>
                            <Col 
                            style={{
                                display: "flex",
                                alignItems:"right",
                                justifyContent:"flex-start"
                            }}><Photo /></Col>
                    
                </Row>
            </div>
        </MainScreen>
    )
};

export default ProfileScreen;
