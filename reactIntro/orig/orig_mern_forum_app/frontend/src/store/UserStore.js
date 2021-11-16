import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";

export const userRegisterView = (userObj) => async (dispatch) => {

    let res = await fetch('/users/register',{
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(userObj)
    })

    let data = await res.json()
    console.log(data)
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(alertSliceActions.showAlert({message:'User Created Successfully', variant:'success'}))
        return true
    }
}

export const userLoginView = (userObj) => async (dispatch) => {

    let res = await fetch('/users/login',{
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(userObj)
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
        return false
    } else {
        localStorage.setItem('token', data.token)
        dispatch(userSlice.actions.loginUser(data.user))
        return true
    }
}


export const userVerifyView = (token) => async (dispatch) => {

    let res = await fetch('/users/verify',{
        headers:{
            'Content-type':'application/json',
            'Authorization': `Token ${token}`
        }
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(userSlice.actions.loginUser(data))
        return true
    }
}


export const userPasswordChangeView = (token, passwordObj) => async (dispatch) => {

    let res = await fetch('/users/passwordChange',{
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(passwordObj)
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(alertSliceActions.showAlert({message:'Password Updated Successfully', variant:'success'}))
        return true
    }
}


export const userPasswordResetReqestView = (emailObj) => async (dispatch) => {

    let res = await fetch('/users/verify',{
        method: 'POST',
        headers:{
            'Content-type':'application/json',
        },
        body: JSON.stringify(emailObj)
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        console.log('Insert Email JS HERE')
        dispatch(alertSliceActions.showAlert({message:'Password Reset Instructions Sent Successfully', variant:'success'}))
        return true
    }
}

export const userPasswordResetFormView = (passwordObj) => async (dispatch) => {

    let res = await fetch('/users/verify',{
        method: 'POST',
        headers:{
            'Content-type':'application/json',
        },
        body: JSON.stringify(passwordObj)
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(alertSliceActions.showAlert({message:'Password Updated Successfully', variant:'success'}))
        return true
    }
}

export const userMemberView = (token) => async (dispatch) => {
    let res = await fetch('/users/members',{
        headers:{
            'Content-type':'application/json',
            'Authorization': `Token ${token}`
        }
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(userSlice.actions.loadMembers(data))
        return true
    }
}

export const userFollowView = (token, followObj) => async (dispatch) => {
    let res = await fetch('/users/follow',{
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(followObj)
    })

    let data = await res.json()
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(userSlice.actions.loginUser(data))
        return true
    }
}

export const userUnFollowView = (token, followObj) => async (dispatch) => {
    let res = await fetch('/users/unfollow',{
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(followObj)
    })

    let data = await res.json()
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(userSlice.actions.loginUser(data))
        return true
    }
}

const userSlice = createSlice({
    name:'user',
    initialState:{
        members: [],
        user: {},
        authorized: false
    },
    reducers:{
        loginUser(state, action){
            return{
                ...state,
                user: action.payload,
                authorized: true
            }
        },
        logoutUser(state, action){
            localStorage.removeItem('token')
            return{
                ...state,
                user: null,
                authorized: false
            }
        },
        loadMembers(state, action){
            return{
                ...state,
                members: action.payload
            }
        }
    }
})

export const userSliceActions = userSlice.actions

export default userSlice.reducer