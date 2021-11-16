import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";
import emailjs from 'emailjs-com'


export const userRegisterView = (userObj) => async (dispatch) => {
    let res = await fetch('/users/register',{
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(userObj)
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        return true
    }
}

export const userLoginView = (userObj) => async (dispatch) => {
    let res = await fetch('/users/login', {
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(userObj)
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        localStorage.setItem('token', data.token)
        dispatch(userSlice.actions.loginUser(data.user))
        return true
    }
}

export const userVerifyView = (token) => async (dispatch) => {
    let res = await fetch('/users/verify',{
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            'Authorization':`Bearer ${token}`
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

export const userPasswordResetForm = (emailObj) => async (dispatch) => {
    let res = await fetch('/users/passwordResetForm',{
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(emailObj)
    })

    let data = await res.json()


    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        const templateVars = {url:`http://localhost:3000/passwordReset/${data.token}`, send_to:emailObj.email, username:emailObj.email}
        
        
        emailjs.send('service_za3px3t', 'template_385i2od', templateVars, 'user_evZ7V0ID2AxkQXiuBPFaH')
        .then((result) => {
            console.log(result.text);
            dispatch(alertSliceActions.showAlert({message:'Please check your inbox for further instructions', variant:'success'}))
        }, (error) => {
            console.log(error.text);
        });
        return true
    }
}


export const userPasswordReset = (passwordObj) => async (dispatch) => {
    let res = await fetch('/users/passwordReset',{
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
        dispatch(alertSliceActions.showAlert({message:'Password Updated Successfully.  Go Ahead and Login', variant:'success'}))
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState:{
        user:{},
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
        }
    }
})

export const userSliceActions = userSlice.actions

export default userSlice.reducer