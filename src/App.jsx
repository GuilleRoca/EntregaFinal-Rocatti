import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Contacto from './components/Contacto'
import Home from './components/Home'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Ubicacion from './components/Ubicacion'
import ItemListContainer from './components/ItemListContainer'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import ProductDetail from './components/ProductDetail'
import { lightGreen, lime } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Spinner from './components/Spinner'
import Cart from './components/Cart'
/* import db from '../db/firebase-config'
import { getDocs , collection } from 'firebase/firestore' */
import CreateUser from './components/CreateUser'
import Login from './components/Login'
import  {CartContext} from './contexts/CartContext'

const theme = createTheme({
  palette: {
    primary: lightGreen,
    secondary: lime,
  },
});

function App() {

/*   const [users, setUsers] = useState([])
  const usersRef = collection(db, 'users') */
  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState(true)



/*   const getUsers = async () => {
    const usersCollection = await getDocs(usersRef)
    const users = usersCollection.docs.map(doc => ({
      ...doc.data(), 
      id: doc.id}))
    console.log(users[0].email)
  } */


  const fetchProductos = async () => {
    const {data} = await axios.get('https://api.mercadolibre.com/sites/MLA/search?seller_id=757579587')
    setCategorias(data.available_filters[0].values)
    setLoading(false)
  }

  useEffect(() => {
    fetchProductos()
/*     getUsers() */
  }, [])
    
  if (loading) { return <Spinner/>}

  return (
  <ThemeProvider theme={theme} >
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
        <Route path="/login" element={<Login/>}/>
        <Route path="/registrar" element={<CreateUser/>}/>
      </Routes>
    </div>
  </ThemeProvider>
  )
}

export default App
