import React from 'react'
import { Button} from 'react-bootstrap'
import '../SubCat1/PropCat.css'
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import MopedIcon from '@mui/icons-material/Moped';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import Link from '@mui/material/Link'

export default function BikeCat() {
    return (
        <div className='cat1'><h1 className='rat1'>Select Your SubCategory</h1>
            <div className='one1'  ><pre>{<TwoWheelerIcon style={{fill: "#C13584"}}/>} <Link href="/product"> <Button class='btnn1' >  MotorCycles</Button></Link></pre></div>
             <div className='two1' ><pre>{<MopedIcon style={{fill: "#F9C5D5"}}/>} <Link href="/product"> <Button class='btnn1'>Scooters  </Button></Link></pre></div>

                    
            <div className='three1' ><pre>{<DirectionsBikeIcon style={{fill: "#FFE400"}}/>}  <Link href="/product"><Button class='btnn1' > Bicycles</Button></Link></pre></div>
            
        </div>
    )
}
