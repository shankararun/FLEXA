import React from 'react'
import { Button} from 'react-bootstrap'
import '../SubCat1/PropCat.css'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GrassIcon from '@mui/icons-material/Grass';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Link from '@mui/material/Link'

export default function SpoCat() {
    return (
        <div className='cat1'><h1 className='rat1'>Select Your SubCategory</h1>
             <div className='one1'  ><pre>{<FitnessCenterIcon style={{fill: "#C13584"}}/>} <Link href="/product"> <Button class='btnn1' > Gym & Fitness </Button></Link></pre></div>
             <div className='two1' ><pre>{<SportsBasketballIcon style={{fill: "#F9C5D5"}}/>}  <Link href="/product"><Button class='btnn1'> Indoor Court </Button></Link></pre></div>

                    
                    <div className='three1' ><pre>{<GrassIcon style={{fill: "#FFE400"}}/>} <Link href="/product"> <Button class='btnn1' > Outdoor Court</Button></Link></pre></div>
                    
            
        </div>
    )
}