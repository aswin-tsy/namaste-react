import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
        products:{
            cartItems:[],
            quantiy:[],
        },
       
    },
    reducers:{
        addItem: (state,actions)=>{
            state.items.push(actions.payload);
            
        },
        // removeItem: (state,actions)=>{
        //     state.items.pop
        // },
        clearItem: (state)=>{
            state.items.length=0;
        },
    }
});

export const {addItem,  clearItem} = cartSlice.actions;

export default cartSlice.reducer;

