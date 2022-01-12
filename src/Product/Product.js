import React, { Component } from 'react'
import './Product.css'
import { Button , Form } from 'react-bootstrap'
//This page consists of product renting view
//Left side of the page consists of photo holder of the product
//Right side of the page consists of  form for grtting info about the product and the conditions and duration of renting the product

export class Product extends Component {
    state={
        profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
      imageHandler = (e) =>{
        const reader = new FileReader();
        reader.onload = () => {
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      }
    render() {
        const {profileImg} = this.state
        return (
            <div className="pages2">
        <div className='container2'>
          <h1 className='heading2'>Add Image</h1>
          <div className='img-holder2'>
            <img src={profileImg} alt='' id='img' className='img2'/> 
          </div>
          <input type="file" name="image-upload" id='input' accept='image/*' onChange={this.imageHandler}/>
          <div className='label2'>
            <label htmlFor='input' className='image-upload2'>
              <i className='material-icons'>add_photo_alternate</i>
              Select a Photo
            </label>
      
          </div>
  
        </div>
        <div>
        <Form className='label'>
                            <Form.Group controlId="ItemName">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="Enter Name"
                                   ></Form.Control>
                            </Form.Group><br/>
                            <Form.Group controlId="Rent">
                                <Form.Label>Rent/</Form.Label>
                                  <select name = "dropdown">
                                    <option value = "Hour" selected>Hour</option>
                                    <option value = "Day">Day</option>
                                    <option value = "Month">Month</option>
                                    <option value = "Year">Year</option>
                                  </select>
                                    <Form.Control
                                    type="number"
                                    placeholder="Enter Amount"
                                     ></Form.Control>
                             </Form.Group><br/>
                             <Form.Group controlId="Deposit">
                                 <Form.Label>Refundable Deposit</Form.Label>
                                     <Form.Control
                                         type="number"
                                        placeholder="Enter Refundable Deposit"
                                        
                                        ></Form.Control>
                                </Form.Group><br/>
                                <Form.Group controlId="Conditions">
                                    <Form.Label>Product Conditions and Terms & Conditions</Form.Label>
                                        <Form.Control
                                        type="text"
                                        placeholder="Enter Conditions  "
                                        
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
                                   
                                <Button type="submit" varient="primary" className='btn3'>ADD</Button>   
                        </Form>
        </div>
        
      </div>
        )
    }
}

export default Product
