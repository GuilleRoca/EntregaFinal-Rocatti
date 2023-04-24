import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import  ThemeProvider  from './contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  

    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>,

)
