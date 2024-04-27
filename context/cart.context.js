import { createContext, useContext, useState } from "react";

export const CartContext = createContext({})

export const CartProvider = ({children}) => {
    const [cartItem, setCartItem] = useState({});
    const products = []

    const calculateTotalPrice = (products) => {
        let totalPrice = 0;
        products.forEach(product => {
            totalPrice += parseFloat(product.price);
        })
        return totalPrice
    }

    
    return <CartContext.Provider value={{
        cartItem,
        setCartItem,
        products,
        calculateTotalPrice
    }}>{children}</CartContext.Provider>

    
}


export const useCartContext= () => useContext(CartContext)