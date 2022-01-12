/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const Cards = (props) => {
  return (
    <Link to="/productDetails"  style={{ textDecoration: 'none' }}>
     
    <>
    <Card sx={{ maxWidth: 345 }}>
      {/* passing the props to the cardmedia  */}

      <CardMedia
        component="img"
        height="175"
        image={props.imagesrc}
        alt="Iphone13"
      />
  
        <IconButton aria-label="add to favorites">
          <pre>          </pre>
          <FavoriteIcon />
        </IconButton>   
        <IconButton aria-label="Delete">
          <pre>    </pre>
          <DeleteIcon />
        </IconButton>         
      
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
     
    </Card>

</>
</Link>
  );
}

export default Cards
