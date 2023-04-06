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
import { lightGreen, lime } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Spinner from './assets/components/Spinner'
import Cart from './assets/components/Cart'

const theme = createTheme({
  palette: {
    primary: lightGreen,
    secondary: lime,
  },
});

function App() {
  
  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState(true)



  const fetchProductos = async () => {
    const {data} = await axios.get('https://api.mercadolibre.com/sites/MLA/search?seller_id=757579587')
    setCategorias(data.available_filters[0].values)
    setLoading(false)
  }

  useEffect(() => {
    fetchProductos()
  }, [])
    
  if (loading) { return <Spinner/>}

  return <ThemeProvider theme={theme} > 
    <div>
      <ResponsiveAppBar categories={categorias} />
      <Routes >
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/productos" element={<ItemListContainer/>}/>
        <Route path="/productos/item/:id" element={<ProductDetail/>}/>
        <Route path="/productos/category/:cat" element={<ItemListContainer/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/ubicacion" element={<Ubicacion/>}/>
        <Route path="/carrito" element={<Cart/>}/>
      </Routes>
    </div>
  </ThemeProvider>
}

export default App
