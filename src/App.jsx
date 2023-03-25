import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contacto from './assets/components/Contacto'
import Home from './assets/components/Home'
import ProductList from './assets/components/ProductList'
import Products from './assets/components/Products'
import ResponsiveAppBar from './assets/components/ResponsiveAppBar'
import Ubicacion from './assets/components/Ubicacion'

function App() {
  const [productos, setProductos] = useState([])

const fetchProductos = async () => {
  const {data} = await axios.get('https://api.mercadolibre.com/sites/MLA/search?seller_id=757579587')
  setProductos(data.results)
}

  useEffect(() => {
    fetchProductos()
  }, [])

  console.log(productos)

  return (
    <div>
      <ResponsiveAppBar/> 
      <ProductList products={productos} />      
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/Ubicacion" element={<Ubicacion/>}/>
      </Routes>
    </div>
  )
}

export default App
