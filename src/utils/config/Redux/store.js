import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";



export default store =  configureStore({
    reducer: {
        cart: cartReducer
    }
})

