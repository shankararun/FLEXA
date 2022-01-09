import React  from 'react'
import { Button} from 'react-bootstrap'
import HomeIcon from '@mui/icons-material/Home';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import CakeIcon from '@mui/icons-material/Cake';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import MainScreen from '../Profile/MainScreen';
import ChairIcon from '@mui/icons-material/Chair';
import  Link  from '@mui/material/Link';


import "./category.css";

function Category() { 
    // const [isAuth,setIsAuth] = useState(true);
    // if(!isAuth) {
    //     return <Redirect to="../SubCat1/PropCat" />
    // }
    return (
        <MainScreen>
            <div className='cat'><h1 className='rat'>Select Your Category</h1>
                    
                    <div className='one'  ><pre>{<HomeIcon style={{fill: "#C13584"}}/>} <Link href="/propertySubcategory"> <Button class='btnn'  > Properties </Button></Link></pre></div>
                    <div className='two' ><pre>{<SportsVolleyballIcon style={{fill: "#F9C5D5"}}/>}  <Link href="/sportssubcategory"><Button class='btnn'> Sports </Button></Link></pre></div>

                    
                    <div className='three' ><pre>{<TwoWheelerIcon style={{fill: "#FFE400"}}/>} <Link href="/bikessubcategory"> <Button class='btnn' > Bikes</Button></Link></pre></div>
                    <div className='four'  ><pre>{<CakeIcon style={{fill: "#519259"}}/>} <Link href="/functionssubcategory"> <Button class='btnn' >  Function & Party Hall</Button></Link></pre></div>
                    <div className='five' ><pre>{<MiscellaneousServicesIcon style={{fill: "#F90716"}}/>} <Link href="/product"> <Button class='btnn' > Services </Button></Link></pre></div>
                    <div className='six' ><pre>{<ChairIcon style={{fill: "#2C272E"}}/>} <Link href="/product"> <Button class='btnn' > Furniture </Button></Link></pre></div>
                    
            </div>
        </MainScreen>
        
    )
}

export default Category

