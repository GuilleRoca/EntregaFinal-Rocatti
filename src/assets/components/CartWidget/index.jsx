import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {orange } from '@mui/material/colors';

const CartWidget = () => {
    return (
      <div  className="cantCarrito">
        <ShoppingCartIcon sx={{ color: orange[500] }} />
        <div className="numCarrito">5</div>
      </div>
    )
  }
  
  export default CartWidget