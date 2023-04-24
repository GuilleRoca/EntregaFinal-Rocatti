import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Link, Typography } from '@mui/material';
import { useEffect, useState , useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {CartContext} from '../../contexts/CartContext'
import swal from 'sweetalert';
import db from '../../../db/firebase-config'
import { getDocs , collection, addDoc } from 'firebase/firestore'



export default function CartList() {
    const user = JSON.parse(localStorage.getItem("user"))
    const labelButtom = user ? "Finalizar compra" : <Typography > <Link variant="outlined" href="/login">Iniciar sesión</Link></Typography>
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")))
    const ordersRef = collection(db, 'orders')
    const [orders, setOrders] = useState([])
    const addCarrito = useContext(CartContext).addCarrito

    const getOrder = async () => {
      const ordersCollection = await getDocs(ordersRef)
      setOrders(ordersCollection.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      })))
    }


    const addOrder = async () => {
        const ordersRef = collection(db, 'orders')
        const order = {
            user: user.email,
            items: carrito,
            date: new Date()
        }
        await addDoc(ordersRef, order )
    }

    const deleteItem = (title) => {
        const newCarrito = carrito.filter((item) => item.title !== title)
        setCarrito(newCarrito)
        localStorage.setItem("carrito", JSON.stringify(newCarrito))
        addCarrito()
    }

    const finalizarCompra = async () => {
      if(user && carrito.length > 0){
        swal ("Compra realizada", `Gracias por su compra. Orden n°: ${orders.length}. `, "success")
        localStorage.setItem("carrito", JSON.stringify([]))
        addCarrito()
        addOrder()
        setCarrito([])
      }else{
        swal ("Compra no realizada", "Debe seleccionar algún artículo para realizar la compra", "error")
      }
  }

    useEffect(() => {
        setCarrito(JSON.parse(localStorage.getItem("carrito")))
        getOrder()
    }, [])


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Artículos</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carrito.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">${row.price}</TableCell>
              <TableCell align="right">{row.inputCant}</TableCell>
              <TableCell align="right">${row.price*row.inputCant}</TableCell> 
              <Button variant="contained" color="error" startIcon={<DeleteIcon/> } onClick={() => {deleteItem(row.title)}}
               ></Button>   
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="button" display="block" gutterBottom>
        TOTAL A PAGAR: ${carrito.reduce((acc, item) => acc + item.price*item.inputCant, 0)}
      </Typography>  
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <Button variant="contained" color="success" onClick={finalizarCompra}> {labelButtom} </Button>
      </Box>
    </TableContainer>
  );
}