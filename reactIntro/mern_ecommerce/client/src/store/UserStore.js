import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";

export const userRegisterView = (userObj) => async (dispatch) => {
    let res = await fetch('/user/register',{
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(userObj)
    })

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        return true
    }
}

export const userLoginView = (userObj) => async (dispatch) => {
    let res = await fetch('/user/login',{
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(userObj)
    })

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(userSliceActions.userLogin(data))
        return true
    }
}

export const userVerifyView = () => async (dispatch) => {
    let res = await fetch('/user/verify')

    let data = await res.json()
    // console.log('Verify View',data)

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(userSliceActions.userLogin(data))
        return true
    }
}

export const userLogoutView = () => async (dispatch) => {
    let res = await fetch('/user/logout')

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(userSliceActions.userLogout())
        return true
    }
}


export const userAddProductView = (cartObj) => async (dispatch) => {
    let res = await fetch('/user/addProduct',{
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(cartObj)
    })

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(userSliceActions.userLogin(data))
        dispatch(alertSliceActions.showAlert({message:'Your Profile has been updated with your pruchase', variant:'success'}))
        return true
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: {},
        authorized: false
    },
    reducers: {
        userLogin(state, action){
            return{
                ...state,
                user: action.payload,
                authorized: true
            }
        },
        userLogout(state, action){
            return{
                ...state,
                user: {},
                authorized: false
            }
        },
    }
})


export const userSliceActions = userSlice.actions
export default userSlice.reducer