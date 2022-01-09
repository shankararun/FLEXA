import React from 'react'
import { Button} from 'react-bootstrap'
import '../SubCat1/PropCat.css'
import BlenderIcon from '@mui/icons-material/Blender';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BoltIcon from '@mui/icons-material/Bolt';
import  Link  from '@mui/material/Link';
export default function FunCat() {
    return (
        <div className='cat1'><h1 className='rat1'>Select Your SubCategory</h1>
            <div className='one1'  ><pre>{<BoltIcon style={{fill: "#C13584"}}/>}  <Link href="/product"><Button class='btnn1' >Generator  </Button></Link></pre></div>
             <div className='two1' ><pre>{<CelebrationIcon style={{fill: "#F9C5D5"}}/>} <Link href="/product"> <Button class='btnn1'> Party Hall </Button></Link></pre></div>

                    
            <div className='three1' ><pre>{<BlenderIcon style={{fill: "#FFE400"}}/>} <Link href="/product"> <Button class='btnn1' >Cooking Items </Button></Link></pre></div>
            
        </div>
    )
}
