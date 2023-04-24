import { createContext, useState } from "react";

export const CartContext = createContext()

const ThemeProvider = ({children}) => {
    JSON.parse(localStorage.getItem("carrito")) === null ? localStorage.setItem("carrito", JSON.stringify([])) : null
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")).length)
    const addCarrito = () => {
    setCarrito(JSON.parse(localStorage.getItem("carrito")).length)
}
    return (
        <CartContext.Provider value={{carrito , addCarrito}}>
            {children}
        </CartContext.Provider>
    ) 
}

export default ThemeProvider