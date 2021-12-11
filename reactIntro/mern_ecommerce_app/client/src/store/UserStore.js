import {createSlice} from '@reduxjs/toolkit'
import { alertSliceActions } from './AlertStore'

export const userRegisterView = (userObj) => async (dispatch) => {
    let res = await fetch('/users/register', {
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
    let res = await fetch('/users/login', {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(userObj)
    })

    let data = await res.json()

    // I hope we get the user object here upon successful login
    console.log(data)
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        localStorage.setItem('token', data.token)
        dispatch(alertSliceActions.showAlert({message:'User Logged In Succesfully', variant:'success'}))
        dispatch(userSlice.actions.userLogin(data.user))
        return true
    }
}



export const userVerifyView = (token) => async (dispatch) => {
    let res = await fetch('/users/verify',{
        headers:{
            'Content-type':'application/json',
            'Authorization':`Token ${token}`
        }
    })

    let data = await res.json()

    console.log(data)
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(userSlice.actions.userLogin(data))
    }
}

 
const userSlice = createSlice({
    name: 'user',
    initialState:{
        user:{},
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
            localStorage.removeItem('token')
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