import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

export default function ProductDetail({}) {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    const getProducto = async () => {
        const response = await fetch(`https://api.mercadolibre.com/items?ids=${id}`)
        const data = await response.json()
        setProducto(data[0].body)
    }

    useEffect(() => {
        getProducto()
    }, [])

    console.log(producto)


    const {title, thumbnail_id, price, available_quantity} = producto

  return (

    <Card sx={{ maxWidth: 400 }} >
      <CardActionArea>
        <CardMedia 
          height="100%"
          component="img"
          image={"https://http2.mlstatic.com/D_NQ_NP_"+ thumbnail_id +"-O.webp"} 
          alt={title}
          />

        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {available_quantity + " disponibles"}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {"$" + price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          AGREGAR AL CARRITO
        </Button>
      </CardActions>
    </Card>
  );
}