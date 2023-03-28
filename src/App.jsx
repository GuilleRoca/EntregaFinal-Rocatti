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
import { ContactlessTwoTone } from '@mui/icons-material'

const theme = createTheme({
  palette: {
    primary: lightGreen,
    secondary: lime,
  },
});

function App() {
  

  const [productos, setProductos] = useState([])
  const [categorias, setCategorias] = useState([])

  const fetchProductos = async () => {
    const {data} = await axios.get('https://api.mercadolibre.com/sites/MLA/search?seller_id=757579587')
    setProductos(data.results)
  }

  const fetchCategorias = async () => {
    const {data} = await axios.get(' https://api.mercadolibre.com/sites/MLA/categories')
    setCategorias(data)
  }
  
    useEffect(() => {
      fetchProductos()
      fetchCategorias()
    }, [])


    console.log(categorias)
/*     console.log(categorias.find(cat => cat.id === 'MLA5725').name) */

  return <ThemeProvider theme={theme} > 
    <div>
      <ResponsiveAppBar  category={categorias} /> 
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/productos" element={<ItemListContainer products={productos} />}/>
        <Route path="/productos/:id" element={<ProductDetail products={productos} />}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/ubicacion" element={<Ubicacion/>}/>
      </Routes>
    </div>
  </ThemeProvider>
}

export default App
