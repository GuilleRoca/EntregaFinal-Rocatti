import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import style from './cart.module.css'

const CartWidget = () => {
    return (
      <Link to={"../carrito"}>
        <div  className={style.cantCarrito}>
          <Badge badgeContent={4} color="secondary" >
            <ShoppingCartIcon color="#ffffff" />
          </Badge>
        </div>
      </Link>
    )
  }
  
  export default CartWidget