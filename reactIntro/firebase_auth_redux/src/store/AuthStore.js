import { createSlice } from "@reduxjs/toolkit";
import auth from "../firebaseConfig";

export const userRegister = (email, password) => (dispatch) => {
    return auth.createUserWithEmailAndPassword(email, password)
}

export const userLogin = (email, password) => (dispatch) => {
    return auth.signInWithEmailAndPassword(email, password)
}

export const userLogout = () => (dispatch) => {
    return auth.signOut()
}

export const userPasswordReset = (email) => (dispatch) => {
    // console.log('forgot password')
    return auth.sendPasswordResetEmail(email)
}

export const userUpdateEmail = (email) => (dispatch) => {
    return auth.currentUser.updateEmail(email)
}

export const userUpdatePassword = (password) => (dispatch) => {
    return auth.currentUser.updatePassword(password)
}

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        currentUser: null,
        isAuthenticated: false,
    },
    reducers:{
        verifyUser(state, action){
            return{
                ...state,
                currentUser: action.payload,
                isAuthenticated: true
            }
        },
        loggedOut(state, action){
            return{
                ...state,
                currentUser: null,
                isAuthenticated: false
            }
        }
        
    }
})

export const authSliceActions = authSlice.actions


export default authSlice.reducer