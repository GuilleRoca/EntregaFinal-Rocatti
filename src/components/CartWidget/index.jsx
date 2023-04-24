import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import style from './cart.module.css'
import { useContext } from 'react'
import {CartContext} from '../../contexts/CartContext'

const CartWidget = () => {
  const value = useContext(CartContext).carrito

    return (
      <Link to={"../carrito"}>
        <div  className={style.cantCarrito}>
          <Badge badgeContent={value} color="secondary" >
            <ShoppingCartIcon color="#ffffff" />
          </Badge>
        </div>
      </Link>
    )
  }
  
  export default CartWidget