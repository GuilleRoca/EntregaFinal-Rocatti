import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProductItem({product}) {
    const {title, thumbnail_id, price} = product
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia  
          component="img"
          height="%100"
          image={"https://http2.mlstatic.com/D_NQ_NP_"+ thumbnail_id +"-O.webp"} 
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {"$" + price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}