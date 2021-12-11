import {createSlice} from '@reduxjs/toolkit'
import { alertSliceActions } from './AlertStore'

// Register View
export const userRegisterView = (userObj) => async (dispatch) => {
    let res = await fetch('/user/register', {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(userObj)
    })

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant: 'danger'}))
        return false
    } else {
        console.log(data)
        return true
    }
}

// Login View
export const userLoginView = (userObj) => async (dispatch) => {
    let res = await fetch('/user/login', {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(userObj)
    })

    let data = await res.json()

    console.log(data)

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant: 'danger'}))
        return false
    } else {
        console.log(data)
        dispatch(userSlice.actions.userLogin(data))
        return true
    }
}



export const userVerifyView = () => async (dispatch) => {
    let res = await fetch('/user/verify')

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant: 'danger'}))
        return false
    } else {
        console.log(data)
        dispatch(userSlice.actions.userLogin(data))
        return true
    }

}


export const userLogoutView = () => async (dispatch) => {
    let res = await fetch('/user/logout')

    let data = await res.json()

    console.log(data)
    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant: 'danger'}))
        return false
    } else {
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'success'}))
        dispatch(userSlice.actions.userLogout())
        return true
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        authorized: false
    },
    reducers:{
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
        }
    }
})

export const userSliceActions = userSlice.actions

export default userSlice.reducer