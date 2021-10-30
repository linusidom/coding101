import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: 'alert',
    initialState:{
        showAlert: false,
        alertMessage: null,
        alertVariant: null
    },
    reducers:{
        showAlert(state, action){
            return{
                ...state,
                showAlert: true,
                alertMessage: action.payload.message,
                alertVariant: action.payload.variant
            }
        },
        closeAlert(state, action){
            return{
                ...state,
                showAlert: false,
                alertMessage: null,
                alertVariant: null
            }
        },
    }
})

export const alertSliceActions = alertSlice.actions

export default alertSlice.reducer