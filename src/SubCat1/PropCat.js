import React from 'react'
import { Button } from 'react-bootstrap'

import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import HouseIcon from '@mui/icons-material/House';
import TerrainIcon from '@mui/icons-material/Terrain';
import ApartmentIcon from '@mui/icons-material/Apartment';
import "./PropCat.css";
import  Link  from '@mui/material/Link';

//This File displays the sub-categories available under the category Property
//This file uses icons from Material-ui

export default function PropCat() {
    return (
        <div className='cat1'><h1 className='rat1'>Select Your SubCategory</h1>
             <div className='one1'  ><pre>{<ApartmentIcon style={{fill: "#C13584"}}/>} <Link href="/product"> <Button class='btnn1' > Apartments </Button></Link></pre></div>
             <div className='two1' ><pre>{<TerrainIcon style={{fill: "#F9C5D5"}}/>} <Link href="/product"> <Button class='btnn1'> Lands & Plots </Button></Link></pre></div>

                    
                    <div className='three1' ><pre>{<ShoppingCartIcon style={{fill: "#FFE400"}}/>} <Link href="/product"> <Button class='btnn1' > Shops & Offices</Button></Link></pre></div>
                    <div className='four1'  ><pre>{<HouseSidingIcon style={{fill: "#519259"}}/>} <Link href="/product"> <Button class='btnn1' >  PG & Guest Houses</Button></Link></pre></div>
                    <div className='five1' ><pre>{<HouseIcon style={{fill: "#F90716"}}/>} <Link href="/product"> <Button class='btnn1' > Houses </Button></Link></pre></div>
                    <div className='six1' ><pre>{<LocalParkingIcon style={{fill: "#2C272E"}}/>} <Link href="/product"> <Button class='btnn1' > Parking </Button></Link></pre></div>
            
        </div>
    )
}
