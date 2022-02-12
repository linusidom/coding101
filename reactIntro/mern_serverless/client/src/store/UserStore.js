import { createSlice } from "@reduxjs/toolkit";


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