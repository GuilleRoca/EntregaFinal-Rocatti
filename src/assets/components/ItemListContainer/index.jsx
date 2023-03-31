import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductItem from "../ProductItem"
import Spinner from "../Spinner"

const ItemListContainer = ({products}) => {

  const [productoCat, setProductoCat] = useState([])
  const {cat} = useParams()


  const getProductoCat = async () => {
    const {data} = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?seller_id=757579587&category=${cat}`)
    setProductoCat(data.results)
  }
  useEffect(() => {
    getProductoCat()
  },[cat])

  
  const productos = cat===null ? products : productoCat

  return (
    <Container className="containerList" >
      <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={4} columns={10}>
        {productos.map((product) => (
          <Grid key={product.id}  item xs={5} md={2}>
            <ProductItem product={product} />
          </Grid>
       ))}
      </Grid> 
    </Container>
  )
}

export default ItemListContainer