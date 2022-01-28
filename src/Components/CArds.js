import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

//This page is used to view the products in form of cards in the screen of 'myads.js'
//This page uses icons from material-ui

const CArds = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="175"
          image={props.imagesrc}
          alt="Iphone13"
        />

        {/* <IconButton aria-label="add to favorites">
          <pre>          </pre>
          <FavoriteIcon />
          
          
        </IconButton>   */}

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
  );
};

export default CArds;
