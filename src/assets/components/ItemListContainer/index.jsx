import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import ProductItem from "../ProductItem"

const ItemListContainer = ({products}) => {
  return (
    <Container className="containerList" >
      <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={4} columns={10}>
        {products.map((product) => (
          <Grid key={product.id}  item xs={5} md={2}>
            <ProductItem product={product} />
          </Grid>
       ))}
      </Grid> 
    </Container>
  )
}

export default ItemListContainer