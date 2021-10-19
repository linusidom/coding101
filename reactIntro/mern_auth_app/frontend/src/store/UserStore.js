import {createSlice} from '@reduxjs/toolkit'
import { alertSliceActions } from './AlertStore'


export const userLoginView = (userObj) => async (dispatch) => {
    let res = await fetch('/users/login',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userObj)
    })

    let data = await res.json()

    // console.log(data)

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(userSlice.actions.loginUser(data))
    }
}


export const userRegisterView = (userObj) => async (dispatch) => {
    let res = await fetch('/users/register',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userObj)
    })

    let data = await res.json()

    console.log(data)

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(userSlice.actions.loginUser(data))
    }
}


export const userVerifyView = (token) => async (dispatch) => {
    let res = await fetch('/users/verify',{
        headers:{
            'Content-type':'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        
        dispatch(userSlice.actions.authorizedUser())
    }
} 

const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: {},
        authorized: null,
        registered: null
    },
    reducers: {
        loginUser(state, action){
            console.log('Login User',action.payload)
            localStorage.setItem('user', action.payload.token)
            return{
                ...state,
                user: action.payload,
                authorized: true,
            }
        },
        authorizedUser(state, action){
            return{
                ...state,
                authorized: true,
            }
        },
        registerUser(state, action){
            return{
                ...state,
                registered: true,
                authorized: false
            }
        },
        logoutUser(state, action){
            localStorage.removeItem('user')
            return{
                ...state,
                user: {},
                registered: false,
                authorized: false
            }
        }
    }
})

export const userSliceActions = userSlice.actions

export default userSlice.reducer