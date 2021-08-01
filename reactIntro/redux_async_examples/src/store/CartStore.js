import { createSlice } from "@reduxjs/toolkit";
  

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartItems:[],
        cartQuantity:0,
        cartTotal: 0,
    },
    reducers:{
        getCart(state, action) {
            state.cartItems = state.cartItems
        },
        addToCart(state, action){
            console.log(action.payload)
            if(state.cartItems.find((item) => item.id === action.payload.item.id)){
                state.cartQuantity = state.cartQuantity + action.payload.item.quantity
                state.cartTotal = state.cartTotal + action.payload.item.total
            }
            else {
                state.cartItems = state.cartItems.concat(action.payload.items)
                state.cartQuantity = state.cartQuantity + action.payload.item.quantity
                state.cartTotal = state.cartTotal + action.payload.item.total
            }
        },
        removeFromCart(state, action){
            if(action.payload.item.quantity === 1){
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.item.id)
                state.cartQuantity = state.cartQuantity - 1
                state.cartTotal = state.cartTotal - action.payload.item.price
            }
            else{
                state.cartQuantity = state.cartQuantity - 1
                state.cartTotal = state.cartTotal - action.payload.item.price
            }
        }
    }
})


export const cartSliceActions = cartSlice.actions

export default cartSlice.reducer