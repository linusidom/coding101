import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";


export const orderListView = () => async (dispatch) => {
    let res = await fetch('/order/list')

    let data = await res.json()
    // console.log(data)

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(orderSliceActions.orderList(data))
        return true
    }
}


export const orderCreateView = (orderObj) => async (dispatch) => {
    let res = await fetch('/order/create', {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(orderObj)
    })

    let data = await res.json()
    console.log(data)

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(alertSliceActions.showAlert({message:'Order Placed Successfully', variant:'success'}))
        return true
    }
}

const orderSlice = createSlice({
    name: 'order',
    initialState:{
        orders: []
    },
    reducers: {
        orderList(state, action){
            return{
                ...state,
                orders: action.payload
            }
        }
    }
})


export const orderSliceActions = orderSlice.actions
export default orderSlice.reducer