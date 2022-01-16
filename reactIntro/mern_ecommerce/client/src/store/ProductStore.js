import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";

export const productCreateView = (productObj) => async (dispatch) => {
    let res = await fetch('/product', {
        method: 'POST',
        body: productObj
    })
    
    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(productSliceActions.productCreate(data))
        return true
    }
}



export const productListView = () => async (dispatch) => {
    let res = await fetch('/product')
    
    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(productSliceActions.productList(data))
        return true
    }
}


export const productDetailView = (productID) => async (dispatch) => {
    let res = await fetch(`/product/${productID}`)

    let data = await res.json()

    console.log(data)
    
    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(productSliceActions.productDetail(data))
        return true
    }
}

const productSlice = createSlice({
    name: 'product',
    initialState:{
        products: [],
        product: {}
    },
    reducers: {
        productList(state, action){
            return{
                ...state,
                products: action.payload
            }
        },
        productCreate(state, action){
            return{
                ...state,
                products: [action.payload].concat(state.products)
            }
        },
        productDetail(state, action){
            return{
                ...state,
                product: action.payload
            }
        },
    }
})


export const productSliceActions = productSlice.actions
export default productSlice.reducer