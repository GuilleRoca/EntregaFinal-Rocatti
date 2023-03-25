import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </React.Fragment>
)
