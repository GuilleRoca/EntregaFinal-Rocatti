import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProductItem({product}) {
    const {id,title, thumbnail_id, price} = product
  return (
    <Card sx={{ maxWidth: 200 }} className="cardProduct" >
      <Link to={`item/${id}`}>
      <CardActionArea>
        <CardMedia 
          className='cardMedia'
          height={140}
          component="img"
          image={"https://http2.mlstatic.com/D_NQ_NP_"+ thumbnail_id +"-O.webp"} 
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {"$" + price}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary">
          AGREGAR AL CARRITO
        </Button>
      </CardActions>
    </Card>
  );
}