import { createContext, useContext, useState } from "react";



export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [count, setCount] = useState(0);
    const [cartSum, setCartSum] = useState(0)

   
    const addToCart = (product) => {
        setCartItems([...cartItems, product])
        setCount(count + 1)
        setCartSum(cartSum + parseFloat(product.price))
     }

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1)
        setCartItems(newCartItems)
        setCount(count - 1)
        
     }

     const clearCart = (cartItems) => {
        
     }

    return (
        <CartContext.Provider value={{
            count, 
            setCount,
            cartSum,
            cartItems, 
            addToCart, 
            removeFromCart
        }}>{children}</CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}