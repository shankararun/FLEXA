import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

export const ProductItem = (product) => {

  return (
      <Link to="/productDetails"  style={{ textDecoration: 'none' }}>
      <>
      <Card sx={{ maxWidth: 345 }}>
        {/* passing the props to the cardmedia  */}

        <CardMedia
          component="img"
          height="175"
          image={product.product.get_image}
        />
            
        <CardContent>
        <Typography gutterBottom variant="h4" component="div">
            {product.product.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {product.product.description}
          </Typography>

          <Typography gutterBottom variant="h5" component="div">
            {product.product.price}
          </Typography>
        </CardContent>
      </Card>
    </>
  </Link>
  )
}
