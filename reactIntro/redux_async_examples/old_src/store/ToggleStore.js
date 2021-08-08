import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name:'toggle',
    initialState:{
        showCart: true,
        notification: null,
        showNotification: true,
    },
    reducers:{
        toggleCart(state,action){
            state.showCart = !state.showCart
        },
        notificaionStatus(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        },
        closeNotification(state, action){
            state.showNotification = false
        }


    }
})

export const toggleSliceActions = toggleSlice.actions
export default toggleSlice.reducer