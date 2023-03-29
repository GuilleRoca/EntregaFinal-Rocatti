import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductItem from "../ProductItem"


const ItemListContainerCategory = ({}) => {
    const [producto, setProducto] = useState([])
    const [categorias, setCategorias] = useState([])
    const {cat} = useParams()
    

    const fetchCategorias = async () => {
      const {data} = await axios.get('https://api.mercadolibre.com/sites/MLA/search?seller_id=757579587')
      setCategorias(data.available_filters[0].values)
    }       

    const category = categorias.map((cat) => {
        return cat.name
      })

    console.log(category)
    console.log(cat)



    const getProducto = async () => {
      const {data} = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?seller_id=757579587&category=${cat}`)
      setProducto(data.results)
    }
    useEffect(() => {
        getProducto()
        fetchCategorias()
    }, [producto])
return (
    <Container className="containerList" >
      <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={4} columns={10}>
        {producto.map((product) => (
          <Grid key={product.id}  item xs={5} md={2}>
            <ProductItem product={product} />
          </Grid>
       ))}
      </Grid> 
    </Container>
  )
}

export default ItemListContainerCategory