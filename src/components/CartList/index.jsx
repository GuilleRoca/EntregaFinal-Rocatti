import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


export default function BasicTable() {


    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")))


    const deleteItem = (title) => {
        const newCarrito = carrito.filter((item) => item.title !== title)
        setCarrito(newCarrito)
        localStorage.setItem("carrito", JSON.stringify(newCarrito))
    }

    useEffect(() => {
        setCarrito(JSON.parse(localStorage.getItem("carrito")))
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
              <TableCell align="right">${row.inputCant}</TableCell>
              <TableCell align="right">${row.price*row.inputCant}</TableCell> 
              <Button variant="contained" color="error" startIcon={<DeleteIcon/> } onClick={() => {deleteItem(row.title)}}
               ></Button>   
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}