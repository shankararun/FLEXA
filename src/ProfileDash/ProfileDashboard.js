import React from 'react'
import { Button} from 'react-bootstrap'
import  Link  from '@mui/material/Link';
import './ProfileDash.css'


export default function ProfileDashboard() {
    return (
        <div className='catp'><h1 className='ratp'>Your Account</h1>
                    
        <div className='onep'  ><pre> <Link href="/profile"> <Button class='btnp'  > View/Edit Profile </Button></Link></pre></div>
        <div className='twop' ><pre>  <Link href="/category"><Button class='btnp'> Add new ads</Button></Link></pre></div>

        
        <div className='threep' ><pre><Link href="/myads"> <Button class='btnp' > View your ads</Button></Link></pre></div>
        <div className='fourp'  ><pre> <Link href="/"> <Button class='btnp' >  Help & Support</Button></Link></pre></div>
        
        
</div>
    )
}

