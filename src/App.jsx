import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Contacto from './assets/components/Contacto'
import Home from './assets/components/Home'
import ResponsiveAppBar from './assets/components/ResponsiveAppBar'
import Ubicacion from './assets/components/Ubicacion'
import ItemListContainer from './assets/components/ItemListContainer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductDetail from './assets/components/ProductDetail'

function App() {

  const [productos, setProductos] = useState([])

  const fetchProductos = async () => {
    const {data} = await axios.get('https://api.mercadolibre.com/sites/MLA/search?seller_id=757579587')
    setProductos(data.results)
  }
  
    useEffect(() => {
      fetchProductos()
    }, [])


  return (
    <div>
      <ResponsiveAppBar/> 
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/productos" element={<ItemListContainer products={productos} />}/>
        <Route path="/productos/:id" element={<ProductDetail products={productos} />}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/Ubicacion" element={<Ubicacion/>}/>
      </Routes>
    </div>
  )
}

export default App
