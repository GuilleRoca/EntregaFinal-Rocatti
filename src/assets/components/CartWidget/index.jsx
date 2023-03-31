import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
      <div  className="cantCarrito">
        <ShoppingCartIcon className="carrito"  />
        <div className="numCarrito">5</div>
      </div>
    )
  }
  
  export default CartWidget