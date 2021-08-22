import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { alertSliceActions } from './AlertStore'


const urlUserRegister = 'http://127.0.0.1:8000/api/auth/register'
const urlUserLogin = 'http://127.0.0.1:8000/api/auth/login'
const urlUserLogout = 'http://127.0.0.1:8000/api/auth/logout'
const urlUserVerify = 'http://127.0.0.1:8000/api/auth/user'

export const userRegister = (credentials) => async (dispatch) => {
    let response = await fetch(urlUserRegister, {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(credentials)
    })

    let data = await response.json()
    if(data.username){
        dispatch(alertSliceActions.userExists(data.username[0]))
    }
    else{
        dispatch(authSlice.actions.userRegistered(data.user.username))
    }
}



export const userLogin = (credentials) => async (dispatch) => {
    let response = await fetch(urlUserLogin, {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(credentials)
    })

    let data = await response.json()
    if(data.custom_message){
        dispatch(alertSliceActions.incorrectLogin(data.custom_message[0]))
    }
    else{
        localStorage.setItem('token', data.token)
        dispatch(authSlice.actions.userLoggedIn(data))
    }
}



export const userLogout = (token) => async (dispatch) => {
    let response = await fetch(urlUserLogout, {
        method:'POST',
        headers: {
            'Content-type':'application/json',
            'Authorization': `Token ${token}`
        },
    })

    let data = await response.json()
    localStorage.removeItem('token')
    dispatch(alertSliceActions.userLoggedOut(data.message))
    dispatch(authSlice.actions.userLoggedOut())
    
}


export const userVerify = (token) => async (dispatch) => {
    let response = await fetch(urlUserVerify, {
        method: 'GET',
        headers:{
            'Content-type':'application/json',
            'Authorization': `Token ${token}`
        }
    })

    let data = await response.json()
    if(data.id && data.username){
        dispatch(authSlice.actions.userVerified(data))
    }
}


const authSlice = createSlice({
    name:'auth',
    initialState:{
        username:null,
        token:null,
        isRegistered: null,
        isAuthenticated: null
    },
    reducers:{
        userRegistered(state, action){
            return{
                ...state,
                username:action.payload,
                token:null,
                isRegistered: true,
                isAuthenticated: null
            }
        },
        userLoggedIn(state, action){
            return {
                ...state,
                username: action.payload.user.username,
                token: action.payload.token,
                isAuthenticated: true,
                isRegistered: true
            }
        },
        userLoggedOut(state, action){
            return {
                ...state,
                username: null,
                token: null,
                isAuthenticated: false,
                isRegistered: false
            }
        },
        userVerified(state, action){
            return{
                ...state,
                username: action.payload.user,
                token: localStorage.getItem('token'),
                isAuthenticated: true,
                isRegistered: true
            }
        }
    }
})

export const authSliceActions = authSlice.actions

export default authSlice.reducer