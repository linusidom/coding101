import {createSlice} from '@reduxjs/toolkit'
import { alertSliceActions } from './AlertStore'
import emailjs from 'emailjs-com'

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


export const userPasswordResetRequestView = (emailObj) => async (dispatch) => {
    let res = await fetch('/users/passwordResetRequest',{
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(emailObj)
    })

    let data = await res.json()

    console.log(data)

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        emailjs.send("service_za3px3t","template_385i2od",{
        url: `http://localhost:3000/passwordResetForm/${data.token}`,
        send_to: emailObj.email,
        }, 'user_evZ7V0ID2AxkQXiuBPFaH')
        dispatch(alertSliceActions.showAlert({message:'Message sent Succesfully.  Please check you inbox for further instructions', variant:'success'}))
    }
}

export const userPasswordResetFormView = (passwordObj) => async (dispatch) => {
    let res = await fetch('/users/passwordResetForm',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(passwordObj)
    })

    let data = await res.json()

    console.log(data)

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(alertSliceActions.showAlert({message:'Password updated Successfully.  Please go ahead and login again', variant:'success'}))
        return true
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