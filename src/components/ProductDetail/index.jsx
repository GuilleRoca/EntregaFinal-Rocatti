import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Input } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import style from './productDetail.module.css'

export default function ProductDetail({}) {
    const [producto, setProducto] = useState([])
    const [inputCant, setInputCant] = useState([1])
    const {id} = useParams()
    const getProducto = async () => {
        const response = await fetch(`https://api.mercadolibre.com/items?ids=${id}&attributes=id,title,category_id,price,available_quantity,thumbnail_id,pictures.secure_url`)
        const data = await response.json()
        setProducto(data[0].body)
    }

    const addItemsCart = () => {
      let carrito = []
      const productosElegidos = JSON.parse(localStorage.getItem("carrito"))
      carrito = productosElegidos || []
      carrito.push({title, price, inputCant})
      localStorage.setItem('carrito', JSON.stringify(carrito))
      Toastify({
        text: "Articulo agregado al carrito correctamente",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        onClick: function(){} // Callback after click
        }).showToast();
    }


    useEffect(() => {
        getProducto()
      }, [])
      
      
      const {title, thumbnail_id, price, available_quantity } = producto
      
      return (

    <div className={style.container}>

    <Card sx={{ maxWidth: 400 }} >
      <CardActionArea>
        <CardMedia 
          className='cardMedia'
          height={600}
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
        <Button 
          size="small"
          color="primary"  
          variant="outlined"
          onClick={addItemsCart}
        >
          AGREGAR AL CARRITO
        </Button>
        <input 
          type="number" 
          name="cantidad" 
          min="1"
          pattern="^[0-9]+"
          className={style.input} 
          onChange={(e) => setInputCant(e.target.value)}
          value={inputCant}/>
      </CardActions>
    </Card>
  </div>
  );
}