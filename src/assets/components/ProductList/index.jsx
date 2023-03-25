import ProductItem from "../ProductItem"

const ProductList = ({products}) => {
  return (
    <div  className="postList">{products.map((product) => (
        <ProductItem product={product} />) )}
    </div>
  )
}

export default ProductList
