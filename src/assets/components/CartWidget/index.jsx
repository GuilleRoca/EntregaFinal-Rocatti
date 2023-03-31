import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './cart.module.css'

const CartWidget = () => {
    return (
      <div  className={style.cantCarrito}>
        <ShoppingCartIcon className={style.carrito}  />
        <div className={style.numCarrito}>5</div>
      </div>
    )
  }
  
  export default CartWidget