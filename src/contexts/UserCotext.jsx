import { createContext, useState } from "react";

export const CartContext = createContext()

const ThemeProvider = ({children}) => {
const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")).length)

const addUser = () => {
    setUser(JSON.parse(localStorage.getItem("user")))
}
    return (
        <CartContext.Provider value={{user , addUser}}>
            {children}
        </CartContext.Provider>
    ) 
}

export default ThemeProvider