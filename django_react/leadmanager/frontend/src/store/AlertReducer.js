import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name:'alert',
    initialState:{
        message:'',
        variant:'success',
        showAlert:false
    },
    reducers:{
        emailTaken(state,action){
            state.message = action.payload
            state.variant = 'danger'
            state.showAlert = true
        },
        closeAlert(state, action){
            state.showAlert = false
        },
        created(state,action){
            state.message = action.payload
            state.variant = 'success'
            state.showAlert = true
        },
        deleted(state, action){
            state.message = action.payload
            state.variant = 'warning'
            state.showAlert = true
        },
        notLoggedIn(state, action){
            state.message = action.payload
            state.variant = 'danger'
            state.showAlert = true
        }
    }
})

export const alertSliceActions = alertSlice.actions

export default alertSlice.reducer