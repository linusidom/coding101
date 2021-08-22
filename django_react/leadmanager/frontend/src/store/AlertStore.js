import React from 'react'
import { createSlice } from '@reduxjs/toolkit'




const alertSlice = createSlice({
    name:'alert',
    initialState:{
        showAlert: false,
        alertMessage: null,
        alertVariant: null
    },
    reducers:{
        userExists(state, action){
            return{
                ...state,
                showAlert: true,
                alertMessage: action.payload,
                alertVariant: 'danger'
            }
        },
        incorrectLogin(state, action){
            return {
                ...state,
                showAlert: true,
                alertMessage: action.payload,
                alertVariant: 'danger'
            }
        },
        userLoggedOut(state, action){
            return{
                ...state,
                showAlert: true,
                alertMessage: action.payload,
                alertVariant: 'success'
            }
        },
        duplicateLead(state, action){
            return{
                ...state,
                showAlert: true,
                alertMessage: action.payload,
                alertVariant: 'danger'
            }
        },
        leadAdded(state, action){
            return{
                ...state,
                showAlert: true,
                alertMessage: action.payload,
                alertVariant: 'success'
            }
        },
        leadDeleted(state, action){
            return{
                ...state,
                showAlert: true,
                alertMessage: action.payload,
                alertVariant: 'danger'
            }
        },
        clearAlert(state, action){
            return {
                ...state,
                showAlert: false,
                alertMessage: null,
                alertVariant: null
            }
        }
        
    }
})

export const alertSliceActions = alertSlice.actions

export default alertSlice.reducer