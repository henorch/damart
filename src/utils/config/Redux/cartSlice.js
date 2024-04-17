import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}
export const cartSlice = new createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingProduct = state.items.findIndex(item => item.id === action.payload.id)
            if(existingProduct >= 0){
                state.items[existingProduct].quantity += 1
            }else{
                state.items.push({...action.payload, quantity:1})
            }
        },

        removeItem: (state, action) => {
            const index = state.items.findIndex(item => 
            item.id === action.payload.id)
            if(index){
                state.items.splice(index, 1)
            }
        },

        
    }
})


export const {
    addItem,
    removeItem
} = cartSlice.actions;

export default cartSlice.reducer;