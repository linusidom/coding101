import { createSlice } from "@reduxjs/toolkit";
import {alertSliceActions} from './AlertStore'



export const cartListView = () => async (dispatch) => {
    let res = await fetch('/cart/cartList')

    let data = await res.json()

    dispatch(cartSlice.actions.cartList(data))
}


export const cartDeleteView = (cartID) => async (dispatch) => {
    await fetch(`/cart/cartDelete/${cartID}`, {method:'DELETE'})

    dispatch(cartSlice.actions.cartDelete(cartID))
}










export const cartAddView = (token, cart, course) => async (dispatch) => {
    
    let res = await fetch('/cart/addToCart', {
        method: 'PUT',
        headers:{
            'Content-type':'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify({cart, course})
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(cartSlice.actions.updateCart(data))
        return true
    }
}


export const cartRemoveView = (token, cart, course) => async (dispatch) => {
    let res = await fetch('/cart/removeFromCart', {
        method: 'PUT',
        headers:{
            'Content-type':'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify({cart, course})
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(cartSlice.actions.updateCart(data))
        return true
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart:{},
        carts: []
    },
    reducers: {
        updateCart(state, action){
            console.log(action.payload)
            return{
                ...state,
                cart: action.payload
            }
        },
        cartList(state, action){
            return{
                ...state,
                carts: action.payload
            }
        },
        cartDelete(state, action){
            const updatedCarts = state.carts.filter(cart => cart._id !== action.payload)
            return{
                ...state,
                carts: updatedCarts
            }
        }
    }
})

export const cartSliceActions = cartSlice.actions
export default cartSlice.reducer