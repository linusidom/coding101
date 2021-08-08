import { createSlice } from "@reduxjs/toolkit";


export const loadUser = () => async (dispatch, getState) => {
    dispatch(authSlice.actions.userLoading())
    
    // Get token from state
    const token = getState().auth.token

    const config = {
        headers:{
            'Content-type':'application/json'
        }
    }

    // if token add to headers config
    if(token){
        config.headers['Authorization'] = `Token ${token}`
    }
    
    await fetch(`/accounts/api/auth/user`, config)
    .then(res => {
        dispatch(authSlice.actions.userLoaded(res.data))
    })
    .catch(err => {
        dispatch(authSlice.actions.authError())
    })
}

export const loginUser = (username, password) => async (dispatch) => {

    const requestParams = {
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({username, password})
    }

    await fetch(`/accounts/api/auth/login`, requestParams)
    .then(res => {
        console.log('Response',res)
        return res.json()
    })
    .then(data => {
        console.log('Data',data)
        localStorage.setItem('token', data.token)
        dispatch(authSlice.actions.userLoaded(data.user))
    })
    .catch(err => {
        console.log('Error',err)
        dispatch(authSlice.actions.authError())
    })
}




const authSlice = createSlice({
    name:'auth',
    initialState:{
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        isLoading: false,
        user: null
    },
    reducers:{
        userLoading(state, action){
            state.isLoading = true
        },
        userLoaded(state, action){
            state.isAuthenticated = true
            state.isLoading = false
            state.user = action.payload
        },
        authError(state, action){
            localStorage.removeItem('token')
            state.token = null,
            state.user = null,
            state.isAuthenticated = false,
            state.isLoading = false
        },
        loginFail(state, action){
            localStorage.removeItem('token')
            state.token = null,
            state.user = null,
            state.isAuthenticated = false,
            state.isLoading = false
        },
        loginSuccess(state, action){
            state.isAuthenticated = true,
            state.isLoading = false
        }
    }
})

export const authSliceActions = authSlice.actions

export default authSlice.reducer