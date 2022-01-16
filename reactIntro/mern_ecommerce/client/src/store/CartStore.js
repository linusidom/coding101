import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";

export const cartGetView = () => async (dispatch) => {
    let res = await fetch('/cart/getCart')

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant: 'danger'}))
        return false
    } else {
        dispatch(cartSliceActions.cartLoad(data))
        return true
    }
}


export const cartAddView = (productObj) => async (dispatch) => {
    let res = await fetch('/cart/addToCart',{
        method: 'POST',
        headers: {
            'Content-type' :'application/json'
        },
        body: JSON.stringify(productObj)
    })

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant: 'danger'}))
        return false
    } else {
        dispatch(cartSliceActions.cartLoad(data))
        return true
    }
}



export const cartRemoveView = (productObj) => async (dispatch) => {
    let res = await fetch('/cart/removeFromCart',{
        method: 'POST',
        headers: {
            'Content-type' :'application/json'
        },
        body: JSON.stringify(productObj)
    })

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant: 'danger'}))
        return false
    } else {
        dispatch(cartSliceActions.cartLoad(data))
        return true
    }
}


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart: {}
    },
    reducers: {
        cartLoad(state, action){
            return{
                ...state,
                cart: action.payload
            }
        }
    }
})


export const cartSliceActions = cartSlice.actions
export default cartSlice.reducer