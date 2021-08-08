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
            if(state.cartItems.find((item) => item.id === action.payload.id)){
                const cartObj = state.cartItems.find((item) => item.id === action.payload.id)
                state.cartItems = state.cartItems.map((item) => item.id === cartObj.id ? {...item, quantity:item.quantity + 1, total:cartObj.total + item.price} : {...item})
                state.cartQuantity = state.cartQuantity + 1
                state.cartTotal = state.cartTotal + cartObj.price
            }
            else {
                state.cartItems = state.cartItems.concat(action.payload)
                state.cartQuantity = state.cartQuantity + action.payload.quantity
                state.cartTotal = state.cartTotal + action.payload.total
            }
        },
        removeFromCart(state, action){
            if(action.payload.quantity === 1){
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
                state.cartQuantity = state.cartQuantity - 1
                state.cartTotal = state.cartTotal - action.payload.price
            }
            else{
                const cartObj = state.cartItems.find((item) => item.id === action.payload.id)
                state.cartItems = state.cartItems.map((item) => item.id === cartObj.id ? {...item, quantity:item.quantity - 1, total:item.total - cartObj.price} : {...item})
                state.cartQuantity = state.cartQuantity - 1
                state.cartTotal = state.cartTotal - action.payload.price
            }
        }
    }
})


export const cartSliceActions = cartSlice.actions

export default cartSlice.reducer