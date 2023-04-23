import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductItem from "../ProductItem"
import Paginado from "../Paginado"
import Spinner from "../Spinner"

const ItemListContainer = () => {

  const [producto, setProducto] = useState([])
  const [pagins, setPagins] = useState([])
  const [loading, setLoading] = useState(true)
  const {cat} = useParams()
  const [count, setCount] = useState(1)


  const URL_API = cat===undefined ? `https://api.mercadolibre.com/sites/MLA/search?seller_id=757579587&offset=${(count-1)*50}` : `https://api.mercadolibre.com/sites/MLA/search?seller_id=757579587&category=${cat}&offset=${(count-1)*50}`

  const getProducto = async () => {
    const {data} = await axios.get(URL_API)
    setProducto(data.results)
    setPagins(data.paging)
    setLoading(false)
  }
  useEffect(() => {
    setCount( count > Math.ceil(pagins.total/pagins.limit) ? 1 : count)
    getProducto()
  },[cat, count])



  if (loading) { return <Spinner />}
  return (
    <Container className="containerList" >
      <Paginado count={count} setCount={setCount} totalPagins={Math.ceil(pagins.total/pagins.limit)} />
      <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={4} columns={10}>
        {producto.map((product) => (
          <Grid key={product.id}  item xs={5} md={2}>
            <ProductItem product={product} />
          </Grid>
       ))}
      </Grid> 
      <Paginado count={count} setCount={setCount} totalPagins={Math.ceil(pagins.total/pagins.limit)} />
    </Container>
  )
}

export default ItemListContainer